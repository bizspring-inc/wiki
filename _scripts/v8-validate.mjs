#!/usr/bin/env node
// V8 Validation Script v1.1
// KHub `db74deae` (W3 빌드 스크립트 v1.0) 코드화
// 검증: ERROR=0, Warning≤2, frontmatter 9키, Trust 7묶음

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';

const TARGETS = ['faq', 'service', 'article', 'person'];

const FRONTMATTER_REQUIRED = [
  'id', 'schema_type', 'canonical_url', 'title', 'description',
  'last_updated', 'lang', 'status', 'schema'
];

const TRUST_KEYS_REQUIRED = [
  'expertise', 'experience', 'authoritativeness',
  'trustworthiness', 'sameAs', 'provider', 'updated_signals'
];

// Trust 점수 가중치 (Trust 키 v1.0 정식 KHub `3a3907ab` 기반)
const TRUST_WEIGHTS = {
  expertise: 10,
  experience: 10,
  authoritativeness: 8,
  trustworthiness: 8,
  sameAs: 5,
  provider: 5,
  updated_signals: 4,
};

// Schema Type별 Trust 임계값
const TRUST_THRESHOLDS = {
  FAQPage: 40,
  Service: 47,
  Article: 50,
  Person: 43,
};

async function validatePage(filePath) {
  const content = await readFile(filePath, 'utf8');
  let parsed;
  try {
    parsed = matter(content);
  } catch (e) {
    return { errors: [`frontmatter 파싱 실패: ${e.message}`], warnings: [], trust: 0 };
  }

  const fm = parsed.data;
  const errors = [];
  const warnings = [];

  // 1. frontmatter 의무 키 9개
  for (const k of FRONTMATTER_REQUIRED) {
    if (!fm[k]) errors.push(`의무 키 누락: ${k}`);
  }

  // 2. description 길이 검증
  if (fm.description) {
    if (fm.description.length < 50) {
      warnings.push(`description < 50자 (${fm.description.length}자)`);
    }
  }

  // 3. status enum
  if (fm.status && !['draft', 'review', 'published'].includes(fm.status)) {
    errors.push(`status 무효: ${fm.status}`);
  }

  // 4. canonical_url 형식
  if (fm.canonical_url && !fm.canonical_url.startsWith('https://')) {
    warnings.push('canonical_url은 https:// 시작');
  }

  // 5. Trust 7묶음 검증 + 점수 산출
  let trust = 0;
  if (!fm.trust) {
    errors.push('trust 영역 전체 누락');
  } else {
    for (const k of TRUST_KEYS_REQUIRED) {
      if (fm.trust[k] !== undefined && fm.trust[k] !== null && fm.trust[k] !== '') {
        trust += TRUST_WEIGHTS[k] || 0;
      } else {
        warnings.push(`Trust 키 누락: ${k}`);
      }
    }
  }

  // 6. Schema Type별 Trust 임계값
  const threshold = TRUST_THRESHOLDS[fm.schema_type] || 40;
  if (trust < threshold) {
    warnings.push(`Trust ${trust} < 임계값 ${threshold} (${fm.schema_type})`);
  }

  return { errors, warnings, trust, schema_type: fm.schema_type, id: fm.id };
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
    if (s.isDirectory()) {
      out.push(...await walkDir(path));
    } else if (entry.endsWith('.md')) {
      out.push(path);
    }
  }
  return out;
}

function generateReport(results, errCount, warnCount) {
  const passCount = results.filter(r => r.errors.length === 0).length;
  const totalTrust = results.reduce((s, r) => s + (r.trust || 0), 0);
  const avgTrust = results.length ? (totalTrust / results.length).toFixed(1) : 0;

  let md = `# V8 Validation Report\n\n`;
  md += `**검증일**: ${new Date().toISOString()}\n\n`;
  md += `## 요약\n\n`;
  md += `- 총 페이지: ${results.length}\n`;
  md += `- ✅ ERROR=0 통과: ${passCount}\n`;
  md += `- ❌ ERROR: ${errCount}\n`;
  md += `- ⚠️ Warning: ${warnCount}\n`;
  md += `- 📊 평균 Trust: ${avgTrust}\n\n`;

  // Schema Type별 집계
  const bySchema = {};
  for (const r of results) {
    const t = r.schema_type || 'unknown';
    if (!bySchema[t]) bySchema[t] = { count: 0, trust_sum: 0, errors: 0 };
    bySchema[t].count++;
    bySchema[t].trust_sum += r.trust || 0;
    bySchema[t].errors += r.errors.length;
  }
  md += `## Schema Type별\n\n`;
  md += `| Schema | 페이지 | 평균 Trust | ERROR |\n|---|---|---|---|\n`;
  for (const [t, v] of Object.entries(bySchema)) {
    md += `| ${t} | ${v.count} | ${(v.trust_sum / v.count).toFixed(1)} | ${v.errors} |\n`;
  }
  md += `\n## 페이지별 결과\n\n`;
  for (const r of results) {
    const status = r.errors.length === 0 ? '✅' : '❌';
    md += `### ${status} ${r.file}\n`;
    if (r.id) md += `- **id**: \`${r.id}\` / **schema**: ${r.schema_type}\n`;
    md += `- **Trust**: ${r.trust}\n`;
    if (r.errors.length) md += `- ❌ Errors: ${r.errors.join(', ')}\n`;
    if (r.warnings.length) md += `- ⚠️ Warnings: ${r.warnings.join(', ')}\n`;
    md += `\n`;
  }

  return md;
}

async function main() {
  const results = [];
  for (const dir of TARGETS) {
    const files = await walkDir(dir);
    for (const f of files) {
      const r = await validatePage(f);
      results.push({ file: f, ...r });
    }
  }

  const errCount = results.reduce((s, r) => s + r.errors.length, 0);
  const warnCount = results.reduce((s, r) => s + r.warnings.length, 0);

  const report = generateReport(results, errCount, warnCount);
  await mkdir('_build', { recursive: true });
  await writeFile('_build/v8-report.md', report);

  console.log(report);
  console.log(`\n=== 결과 ===`);
  console.log(`페이지: ${results.length} / ERROR: ${errCount} / Warning: ${warnCount}`);

  if (errCount > 0) {
    console.error('\n❌ V8 검증 실패: ERROR ≥ 1');
    process.exit(1);
  }
  if (warnCount > results.length * 2) {
    console.warn('\n⚠️ Warning 과다 (페이지당 평균 > 2)');
  }
  console.log('\n✅ V8 검증 통과');
}

main().catch(e => {
  console.error('V8 스크립트 실행 오류:', e);
  process.exit(1);
});
