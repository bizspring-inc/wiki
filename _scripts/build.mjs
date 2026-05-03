#!/usr/bin/env node
// Static Build Script v1.0
// .md → HTML + Schema.org JSON-LD 주입

import { readdir, readFile, writeFile, mkdir, copyFile, stat } from 'node:fs/promises';
import { join, dirname, basename, relative } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { parse as parseYAML } from 'yaml';

const TARGETS = ['faq', 'service', 'article', 'person'];
const OUTPUT_DIR = '_build';

async function loadConfig() {
  const site = parseYAML(await readFile('_config/site.yml', 'utf8'));
  let breadcrumb = {};
  try {
    breadcrumb = parseYAML(await readFile('_config/breadcrumb.yml', 'utf8'));
  } catch (e) { /* optional */ }
  return { site, breadcrumb };
}

function buildJsonLd(fm, site) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': fm.schema_type,
    'name': fm.title,
    'description': fm.description,
    'url': fm.canonical_url,
    'inLanguage': fm.lang || 'ko',
    'dateModified': fm.last_updated,
  };

  // Provider 정보 자동 주입
  if (fm.trust?.provider || site.provider) {
    ld.provider = {
      '@type': 'Organization',
      'name': site.organization?.name || '비즈스프링',
      'legalName': site.organization?.legalName || '(주)비즈스프링 / Bizspring Inc.',
      'url': site.url,
      'sameAs': site.organization?.sameAs || [],
    };
  }

  // Trust 정보 → Schema.org 매핑 (sameAs)
  if (fm.trust?.sameAs && Array.isArray(fm.trust.sameAs)) {
    ld.sameAs = fm.trust.sameAs;
  }

  // Schema 영역 추가 데이터 병합
  if (fm.schema && typeof fm.schema === 'object') {
    Object.assign(ld, fm.schema);
  }

  return ld;
}

function buildBreadcrumb(fm, breadcrumb, site) {
  const id = fm.id;
  if (!breadcrumb[id]) return null;

  const path = breadcrumb[id];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': path.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': item.url ? `${site.url}${item.url}` : undefined,
    })),
  };
}

function renderHtml(fm, html, jsonLd, breadcrumbLd, site) {
  const lds = [jsonLd];
  if (breadcrumbLd) lds.push(breadcrumbLd);

  return `<!DOCTYPE html>
<html lang="${fm.lang || 'ko'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(fm.title)} | ${escapeHtml(site.title)}</title>
<meta name="description" content="${escapeHtml(fm.description)}">
<link rel="canonical" href="${escapeHtml(fm.canonical_url)}">
<meta property="og:title" content="${escapeHtml(fm.title)}">
<meta property="og:description" content="${escapeHtml(fm.description)}">
<meta property="og:url" content="${escapeHtml(fm.canonical_url)}">
<meta property="og:type" content="${fm.schema_type === 'Article' ? 'article' : 'website'}">
<meta property="og:site_name" content="${escapeHtml(site.title)}">
${lds.map(ld => `<script type="application/ld+json">${JSON.stringify(ld, null, 2)}</script>`).join('\n')}
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; line-height: 1.7; color: #1a1a1a; }
h1 { border-bottom: 2px solid #4a90e2; padding-bottom: .5rem; }
h2 { margin-top: 2rem; }
code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }
pre { background: #f5f5f5; padding: 1rem; overflow-x: auto; border-radius: 6px; }
table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
th { background: #f5f5f5; }
nav.breadcrumb { font-size: 0.9em; color: #666; margin-bottom: 1.5rem; }
nav.breadcrumb a { color: #4a90e2; text-decoration: none; }
footer { margin-top: 4rem; padding-top: 1rem; border-top: 1px solid #eee; font-size: 0.85em; color: #888; }
</style>
</head>
<body>
<main>
<h1>${escapeHtml(fm.title)}</h1>
${html}
</main>
<footer>
<p>출처: <a href="${site.url}">${escapeHtml(site.title)}</a> · 라이선스: <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · 갱신: ${fm.last_updated || ''}</p>
</footer>
</body>
</html>
`;
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function walkDir(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir);
  } catch (e) { return out; }
  for (const entry of entries) {
    const path = join(dir, entry);
    const s = await stat(path);
    if (s.isDirectory()) out.push(...await walkDir(path));
    else if (entry.endsWith('.md')) out.push(path);
  }
  return out;
}

async function buildPage(filePath, config) {
  const content = await readFile(filePath, 'utf8');
  const parsed = matter(content);
  const fm = parsed.data;
  const html = marked.parse(parsed.content);

  const jsonLd = buildJsonLd(fm, config.site);
  const breadcrumbLd = buildBreadcrumb(fm, config.breadcrumb, config.site);

  const fullHtml = renderHtml(fm, html, jsonLd, breadcrumbLd, config.site);

  // 출력 경로: faq/about.md → _build/faq/about/index.html
  const outDir = join(OUTPUT_DIR, dirname(filePath), basename(filePath, '.md'));
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, 'index.html'), fullHtml);
}

async function buildIndex(config) {
  const allFiles = [];
  for (const dir of TARGETS) {
    allFiles.push(...await walkDir(dir));
  }

  const pages = [];
  for (const f of allFiles) {
    const content = await readFile(f, 'utf8');
    const fm = matter(content).data;
    if (fm.status === 'published' || !fm.status) {
      pages.push({ ...fm, path: f.replace(/\.md$/, '/').replace(/^/, '/') });
    }
  }

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>${escapeHtml(config.site.title)}</title>
<meta name="description" content="${escapeHtml(config.site.description)}">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; line-height: 1.7; }
.section { margin-bottom: 2rem; }
.section h2 { border-bottom: 2px solid #4a90e2; padding-bottom: .3rem; }
ul { list-style: none; padding: 0; }
li { padding: .4rem 0; border-bottom: 1px solid #eee; }
a { color: #4a90e2; text-decoration: none; }
a:hover { text-decoration: underline; }
small { color: #888; }
</style>
</head>
<body>
<h1>${escapeHtml(config.site.title)}</h1>
<p>${escapeHtml(config.site.description)}</p>
${TARGETS.map(t => {
    const items = pages.filter(p => p.path && p.path.startsWith('/' + t + '/'));
    if (!items.length) return '';
    const titleMap = { faq: 'FAQ', service: 'Service / Solutions', article: 'Articles', person: 'People' };
    return `<div class="section"><h2>${titleMap[t] || t}</h2><ul>${items.map(p => `<li><a href="${p.path}">${escapeHtml(p.title)}</a><br><small>${escapeHtml(p.description || '')}</small></li>`).join('')}</ul></div>`;
  }).join('')}
<footer>
<p><small>라이선스: <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · ${pages.length} pages published</small></p>
</footer>
</body>
</html>`;

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(join(OUTPUT_DIR, 'index.html'), html);
}

async function main() {
  console.log('🔨 빌드 시작...');
  const config = await loadConfig();
  await mkdir(OUTPUT_DIR, { recursive: true });

  let count = 0;
  for (const dir of TARGETS) {
    const files = await walkDir(dir);
    for (const f of files) {
      await buildPage(f, config);
      count++;
    }
  }

  await buildIndex(config);
  console.log(`✅ 빌드 완료: ${count} 페이지 + index.html`);
}

main().catch(e => {
  console.error('빌드 오류:', e);
  process.exit(1);
});
