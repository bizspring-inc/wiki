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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>
:root {
  /* design-dna-studio tokens (HSL, inline) */
  --sky: 203 94% 62%; --sky-hover: 203 71% 56%; --sky-light: 203 91% 96%; --sky-light-xl: 203 100% 98%; --sky-dark: 203 58% 47%;
  --purple: 248 81% 65%; --purple-light: 249 86% 96%;
  --teal: 167 70% 47%; --teal-light: 160 65% 95%;
  --blue: 218 84% 60%; --blue-hover: 212 86% 49%;
  --gray-50: 220 27% 99%; --gray-100: 210 17% 98%; --gray-150: 220 9% 96%; --gray-200: 210 14% 93%; --gray-300: 210 14% 89%; --gray-400: 210 9% 77%; --gray-500: 210 11% 71%; --gray-600: 208 7% 46%; --gray-700: 210 9% 31%; --gray-800: 210 10% 23%; --gray-900: 210 11% 15%;
  --primary: var(--sky); --foreground: var(--gray-900); --muted-foreground: var(--gray-600);
  --surface-body: var(--gray-150); --surface-gray: var(--gray-100); --surface-gray-light: var(--gray-50); --surface-sky-bg: var(--sky-light-xl);
  --border: var(--gray-300); --border-light: var(--gray-200); --font-link: var(--blue); --font-link-hover: var(--blue-hover);
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
}
* { box-sizing: border-box; }
html, body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif; letter-spacing: -0.02em; }
body { background: hsl(var(--surface-body)); color: hsl(var(--foreground)); margin: 0; padding: 0; line-height: 1.75; font-size: 16px; -webkit-font-smoothing: antialiased; }
main { max-width: 760px; margin: 32px auto; padding: 40px 48px; background: #fff; border-radius: var(--radius-lg); box-shadow: 0 1px 4px 0 rgba(0,0,0,0.04); }
@media (max-width: 768px) { main { margin: 0; padding: 24px 20px; border-radius: 0; box-shadow: none; } }
h1 { font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; line-height: 1.35; margin: 0 0 24px; padding-bottom: 16px; border-bottom: 2px solid hsl(var(--primary)); color: hsl(var(--foreground)); }
h2 { font-size: 1.375rem; font-weight: 700; letter-spacing: -0.025em; line-height: 1.4; margin: 48px 0 16px; padding-left: 14px; border-left: 4px solid hsl(var(--primary)); color: hsl(var(--foreground)); }
h3 { font-size: 1.125rem; font-weight: 600; letter-spacing: -0.02em; margin: 32px 0 12px; color: hsl(var(--foreground)); }
h4, h5, h6 { font-size: 1rem; font-weight: 600; margin: 24px 0 8px; color: hsl(var(--gray-700)); }
p { margin: 16px 0; }
a { color: hsl(var(--font-link)); text-decoration: none; border-bottom: 1px solid hsl(var(--font-link) / 0.3); transition: color 0.15s, border-color 0.15s; }
a:hover { color: hsl(var(--font-link-hover)); border-bottom-color: hsl(var(--font-link-hover)); }
ul, ol { margin: 16px 0; padding-left: 24px; }
li { margin: 6px 0; }
li > ul, li > ol { margin: 6px 0; }
strong { font-weight: 700; color: hsl(var(--foreground)); }
em { font-style: italic; }
hr { border: none; border-top: 1px solid hsl(var(--border-light)); margin: 40px 0; }
code { font-family: 'JetBrains Mono', SFMono-Regular, Consolas, 'Pretendard', monospace; background: hsl(var(--surface-gray)); color: hsl(var(--gray-800)); padding: 2px 6px; border-radius: var(--radius-sm); font-size: 0.875em; border: 1px solid hsl(var(--border-light)); }
pre { background: hsl(var(--gray-900)); color: hsl(var(--gray-100)); padding: 20px 24px; border-radius: var(--radius-md); overflow-x: auto; margin: 24px 0; line-height: 1.6; font-size: 0.875rem; }
pre code { background: transparent; color: inherit; padding: 0; border: none; font-size: inherit; }
blockquote { margin: 24px 0; padding: 16px 24px; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--surface-sky-bg)); border-radius: 0 var(--radius-md) var(--radius-md) 0; color: hsl(var(--gray-700)); }
blockquote p:first-child { margin-top: 0; } blockquote p:last-child { margin-bottom: 0; }
table { border-collapse: separate; border-spacing: 0; width: 100%; margin: 24px 0; border: 1px solid hsl(var(--border)); border-radius: var(--radius-md); overflow: hidden; font-size: 0.9375rem; }
th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid hsl(var(--border-light)); }
th { background: hsl(var(--surface-gray)); font-weight: 600; color: hsl(var(--gray-800)); letter-spacing: -0.015em; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: hsl(var(--surface-gray-light)); }
img { max-width: 100%; height: auto; border-radius: var(--radius-md); margin: 16px 0; }
nav.breadcrumb { font-size: 0.875rem; color: hsl(var(--muted-foreground)); margin-bottom: 24px; padding: 8px 0; }
nav.breadcrumb a { color: hsl(var(--muted-foreground)); border-bottom: none; }
nav.breadcrumb a:hover { color: hsl(var(--primary)); }
footer { max-width: 760px; margin: 24px auto 40px; padding: 24px 48px; font-size: 0.8125rem; color: hsl(var(--muted-foreground)); text-align: center; }
footer a { color: hsl(var(--muted-foreground)); border-bottom-color: hsl(var(--muted-foreground) / 0.3); }
@media (max-width: 768px) { footer { padding: 24px 20px; } }
.site-header { background: rgba(255,255,255,0.92); border-bottom: 1px solid hsl(var(--border-light)); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.site-header-inner { max-width: 1080px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.site-logo { font-size: 1.0625rem; font-weight: 700; color: hsl(var(--foreground)); text-decoration: none; border-bottom: none; letter-spacing: -0.025em; }
.site-logo:hover { color: hsl(var(--primary)); border-bottom: none; }
.site-nav { display: flex; gap: 4px; align-items: center; }
.site-nav a { font-size: 0.9375rem; font-weight: 500; color: hsl(var(--gray-700)); text-decoration: none; padding: 8px 14px; border-radius: var(--radius-sm); border-bottom: none; transition: background 0.15s, color 0.15s; }
.site-nav a:hover { background: hsl(var(--surface-gray-light)); color: hsl(var(--primary)); border-bottom: none; }
@media (max-width: 640px) { .site-header-inner { padding: 12px 16px; gap: 12px; } .site-logo { font-size: 0.9375rem; } .site-nav { gap: 0; } .site-nav a { padding: 6px 8px; font-size: 0.8125rem; } }
</style>
</head>
<body>
<header class="site-header"><div class="site-header-inner"><a class="site-logo" href="/">BizSpring Wiki</a><nav class="site-nav"><a href="/#faq">FAQ</a><a href="/#service">서비스</a><a href="/#article">아티클</a><a href="/#person">인물</a></nav></div></header>
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>
:root {
  --sky: 203 94% 62%; --sky-light-xl: 203 100% 98%;
  --blue: 218 84% 60%; --blue-hover: 212 86% 49%;
  --gray-50: 220 27% 99%; --gray-100: 210 17% 98%; --gray-150: 220 9% 96%; --gray-200: 210 14% 93%; --gray-300: 210 14% 89%; --gray-600: 208 7% 46%; --gray-700: 210 9% 31%; --gray-800: 210 10% 23%; --gray-900: 210 11% 15%;
  --primary: var(--sky); --foreground: var(--gray-900); --muted-foreground: var(--gray-600);
  --surface-body: var(--gray-150); --surface-gray-light: var(--gray-50); --border-light: var(--gray-200);
  --font-link: var(--blue); --font-link-hover: var(--blue-hover);
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
}
* { box-sizing: border-box; }
html, body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif; letter-spacing: -0.02em; }
body { background: hsl(var(--surface-body)); color: hsl(var(--foreground)); margin: 0; padding: 0; line-height: 1.7; font-size: 16px; -webkit-font-smoothing: antialiased; }
main { max-width: 880px; margin: 32px auto; padding: 40px 48px; background: #fff; border-radius: var(--radius-lg); box-shadow: 0 1px 4px 0 rgba(0,0,0,0.04); }
@media (max-width: 768px) { main { margin: 0; padding: 24px 20px; border-radius: 0; box-shadow: none; } }
h1 { font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; line-height: 1.35; margin: 0 0 32px; padding-bottom: 16px; border-bottom: 2px solid hsl(var(--primary)); }
.section { margin-bottom: 40px; }
.section h2 { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 16px; padding-left: 14px; border-left: 4px solid hsl(var(--primary)); color: hsl(var(--foreground)); }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 14px 16px; border-bottom: 1px solid hsl(var(--border-light)); transition: background 0.15s; border-radius: var(--radius-sm); }
li:hover { background: hsl(var(--surface-gray-light)); }
li:last-child { border-bottom: none; }
a { color: hsl(var(--font-link)); text-decoration: none; font-weight: 500; }
a:hover { color: hsl(var(--font-link-hover)); text-decoration: underline; text-underline-offset: 3px; }
small { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; margin-left: 8px; }
.section-empty { opacity: 0.7; }
.placeholder { padding: 14px 16px; color: hsl(var(--muted-foreground)); font-size: 0.9375rem; background: hsl(var(--surface-gray-light)); border-radius: var(--radius-sm); margin: 0; }
footer { max-width: 880px; margin: 24px auto 40px; padding: 24px 48px; font-size: 0.8125rem; color: hsl(var(--muted-foreground)); text-align: center; }
footer a { color: hsl(var(--muted-foreground)); }
@media (max-width: 768px) { footer { padding: 24px 20px; } }
.site-header { background: rgba(255,255,255,0.92); border-bottom: 1px solid hsl(var(--border-light)); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.site-header-inner { max-width: 1080px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.site-logo { font-size: 1.0625rem; font-weight: 700; color: hsl(var(--foreground)); text-decoration: none; letter-spacing: -0.025em; }
.site-logo:hover { color: hsl(var(--primary)); }
.site-nav { display: flex; gap: 4px; align-items: center; }
.site-nav a { font-size: 0.9375rem; font-weight: 500; color: hsl(var(--gray-700)); text-decoration: none; padding: 8px 14px; border-radius: var(--radius-sm); transition: background 0.15s, color 0.15s; }
.site-nav a:hover { background: hsl(var(--surface-gray-light)); color: hsl(var(--primary)); text-decoration: none; }
@media (max-width: 640px) { .site-header-inner { padding: 12px 16px; gap: 12px; } .site-logo { font-size: 0.9375rem; } .site-nav { gap: 0; } .site-nav a { padding: 6px 8px; font-size: 0.8125rem; } }
</style>
</head>
<body>
<header class="site-header"><div class="site-header-inner"><a class="site-logo" href="/">BizSpring Wiki</a><nav class="site-nav"><a href="/#faq">FAQ</a><a href="/#service">서비스</a><a href="/#article">아티클</a><a href="/#person">인물</a></nav></div></header>
<main>
<h1>${escapeHtml(config.site.title)}</h1>
<p>${escapeHtml(config.site.description)}</p>
${TARGETS.map(t => {
    const items = pages.filter(p => p.path && p.path.startsWith('/' + t + '/'));
    const titleMap = { faq: 'FAQ', service: '서비스', article: '아티클', person: '인물' };
    if (!items.length) {
      return `<div class="section section-empty" id="${t}"><h2>${titleMap[t] || t}</h2><p class="placeholder">준비 중입니다 — W5 정식 발행 예정</p></div>`;
    }
    return `<div class="section" id="${t}"><h2>${titleMap[t] || t}</h2><ul>${items.map(p => `<li><a href="${p.path}">${escapeHtml(p.title)}</a><br><small>${escapeHtml(p.description || '')}</small></li>`).join('')}</ul></div>`;
  }).join('')}
</main>
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
