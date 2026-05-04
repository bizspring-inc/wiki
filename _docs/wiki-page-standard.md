# 📐 BizSpring Wiki 페이지 작성 표준 v1.0

> **작성일**: 2026-05-04 KST (W18)
> **위치**: `_docs/wiki-page-standard.md`
> **대상**: 33페이지 인벤토리 + 향후 신설 페이지 (Service / FAQ / Article / Person / Organization)
> **선행 문서**:
> - 33페이지 통합 인덱스 v1.0 (KHub `34dfdcc3`)
> - Trust 키 v1.0 정식 (KHub `3a3907ab`)
> - TQ3 Schema 자사 v1.0 (KHub `bc409dfd`)
> - V8 빌드 검증 v1.1 (KHub `259db7c0`)

---

## 1. 본 표준이 푸는 문제

W18 GEOcare PoC에서 `<h1>` 2건 중복 렌더링 발견. 원인은 **작성 표준 부재** — build.mjs는 frontmatter `title`을 자동 H1으로 삽입하는데, .md 본문에 H1을 추가하면 중복.

본 표준은 위와 같은 패턴 위반을 사전에 방지하고, 33페이지 + W19+ 발주 본문 작성 시 일관된 결과를 보장한다.

---

## 2. 핵심 원칙 7개 (P1~P7)

| 원칙 | 의미 | 위반 시 |
|---|---|---|
| **P1** frontmatter title이 페이지 제목 | build.mjs가 자동 `<h1>` 삽입 | 빌드된 HTML H1 중복 |
| **P2** 본문 H1 사용 금지 | 본문 첫 헤더는 항상 `## 정의`부터 시작 | H1 중복 → SEO·접근성 페널티 |
| **P3** 위키풍 8섹션 구조 | 정의/개요/배경/본문/측정/관련/외부 출처/메타 | 발주 본문 톤 불일치 |
| **P4** Trust 7묶음 frontmatter 의무 | expertise/experience/authoritativeness/trustworthiness/sameAs/provider/updated_signals | Trust 점수 산출 불가 |
| **P5** Schema.org JSON-LD frontmatter 정형 | schema_type별 정형 양식 | Rich Results 적합성 페널티 |
| **P6** id 키와 breadcrumb.yml 정합 | build.mjs `buildBreadcrumb` 자동 주입 | BreadcrumbList JSON-LD 누락 |
| **P7** V8 검증 통과 후 commit | ERROR 0 / Warning ≤ 2 | 빌드 깨짐 / Trust 점수 0 |

---

## 3. .md 파일 구조 표준

```markdown
---
# (1) 9 공통 키 (frontmatter)
id: {schema-type-prefix}-{slug}              # 예: svc-sol-01-geocare
schema_type: {Service|FAQPage|Article|Person|Organization}
canonical_url: https://wiki.bizspring.co.kr/{path}/
title: "{페이지 제목 — 한 줄}"
description: "{페이지 요약 — 50자 이상}"
last_updated: YYYY-MM-DD
lang: ko
status: {draft|published}
bizpo_ref: {BizPO UUID 또는 null}            # Service 페이지만 의무

# (2) Schema.org 정형 양식 (schema_type별)
schema:
  # Service: serviceType / provider / sameAs / areaServed / category / audience / hasOfferCatalog
  # FAQPage: mainEntity (Q-A 배열)
  # Article: headline / author / datePublished / dateModified / image
  # Person: jobTitle / worksFor / sameAs
  # Organization: legalName / url / logo / sameAs / contactPoint

# (3) Trust 7묶음 (점수 산출 의무)
trust:
  expertise: [...]                           # 전문성 신호 배열
  experience: [...]                          # 경험 신호 배열
  authoritativeness: [...]                   # 권위 신호 배열
  trustworthiness: "..."                     # 검수 일자 + 출처 비율
  sameAs: [...]                              # 외부 신원 백링크
  provider: "비즈스프링"
  updated_signals: "..."
---

## 정의

(한 단락 — 한 줄 정의 + 핵심 키워드 굵게)

## 개요

(2~3 단락 — 배경 + 정체성)

## (선택 — 페이지 종류별)

- Service: 핵심 기능 N대 영역 / 입출력 / 도입 절차 / 한계 / KPI
- FAQ: Q-A 블록 (mainEntity 정합)
- Article: 본문 단락 + 표 + 인용
- Person: 약력 + 책임 + 외부 링크
- Organization: 사업영역 + 연혁 + 파트너

## 측정 / 약속

(정량 데이터 — 표 권장)

## 관련 항목

(다른 Wiki 페이지 백링크 3~5건)

## 외부 출처

(사이트 / 보고서 / 기간통신 인용)

## 메타

- 작성·검수: BizSpring Wiki PO (찰스 / 이철승)
- BizPO 참조: `BizPO-XXX-NN` (UUID)
- 분류: {Schema} / {SOL/PKG/UNIT/REF} / TCR {axis} / Layer {N}
- 갭 표기: {필요 시 누락 출처 명시}
- 최종 갱신: YYYY-MM-DD
```

---

## 4. 본 표준 위반 사례 + 정합 패턴

### ❌ 위반 사례 (W18 GEOcare PoC 초안)

```markdown
---
title: "GEOcare.ai — 국내 최초 GEO 통합 케어 SaaS"
...
---

# GEOcare.ai — 국내 최초 GEO 통합 케어 SaaS    ← 본문 H1 — P2 위반

## 정의
...
```

→ 빌드 결과: `<h1>` 2건 (build.mjs 자동 + 본문)

### ✅ 정합 패턴 (기존 5건 + GEOcare PoC 수정)

```markdown
---
title: "GEOcare.ai — 국내 최초 GEO 통합 케어 SaaS"
...
---

## 정의                                           ← 본문 첫 헤더 = H2

(본문)
```

→ 빌드 결과: `<h1>` 1건 (build.mjs 자동 삽입만)

---

## 5. 페이지 종류별 frontmatter 양식

### 5.1 Service (svc-{type}-{slug})

```yaml
schema_type: Service
schema:
  serviceType: "{영역 — 한 줄}"
  name: "{솔루션명}"
  provider:
    "@type": Organization
    name: "(주)비즈스프링"
    url: "https://www.bizspring.co.kr/"
  areaServed: "KR"
  category: "{큰 분류}"
  audience:
    "@type": BusinessAudience
    name: "{타깃 페르소나}"
  hasOfferCatalog:                              # 가격 모델 있을 때
    "@type": OfferCatalog
    name: "{솔루션명} 플랜"
    itemListElement:
      - { "@type": "Offer", name: "Free" }
      - { "@type": "Offer", name: "Starter" }
bizpo_ref: {BizPO UUID — 의무}
```

### 5.2 FAQPage (faq-{slug})

```yaml
schema_type: FAQPage
schema:
  mainEntity:
    - "@type": Question
      name: "{질문}"
      acceptedAnswer:
        "@type": Answer
        text: "{답변}"
bizpo_ref: null
```

### 5.3 Article (art-{YYYYMM}-{slug})

```yaml
schema_type: Article
schema:
  headline: "{제목}"
  author:
    "@type": Organization
    name: "(주)비즈스프링"
  datePublished: YYYY-MM-DD
  dateModified: YYYY-MM-DD
  image: "{대표 이미지 URL — 선택}"
bizpo_ref: null
```

### 5.4 Person (person-{slug})

```yaml
schema_type: Person
schema:
  jobTitle: "{직책}"
  worksFor:
    "@type": Organization
    name: "(주)비즈스프링"
  sameAs:
    - "https://linkedin.com/in/{slug}"
    - "https://github.com/{slug}"
bizpo_ref: null
```

### 5.5 Organization (org-bizspring) — 단일

```yaml
schema_type: Organization
schema:
  legalName: "(주)비즈스프링 / Bizspring Inc."
  url: "https://www.bizspring.co.kr/"
  logo: "{로고 URL}"
  sameAs:
    - "https://geocare.ai/"
    - "https://demo.bmp.ai/"
    - "https://blog.bizspring.co.kr/"
  contactPoint:
    "@type": ContactPoint
    contactType: "sales"
    email: "sales@bizspring.co.kr"
bizpo_ref: null
```

---

## 6. 위키풍 8섹션 구조 (학습 #61)

| # | 섹션 | 의무 | 분량 가이드 |
|---|---|---|---|
| 1 | **정의** | ✅ 의무 | 1단락 (한 줄 정의) |
| 2 | **개요** | ✅ 의무 | 2~3단락 (배경 + 정체) |
| 3 | **본문 핵심** | ✅ 의무 (페이지 종류별 변형) | 표 / 단락 |
| 4 | **배경 / 차별점** | 🟡 권장 | 1~2단락 또는 표 |
| 5 | **측정 / 약속** | ✅ 의무 | 정량 데이터 표 |
| 6 | **관련 항목** | ✅ 의무 | 백링크 3~5건 |
| 7 | **외부 출처** | ✅ 의무 | 사이트 / 보고서 |
| 8 | **메타** | ✅ 의무 | 작성·검수 / BizPO 참조 / 분류 / 갱신 일자 |

---

## 7. id 키와 breadcrumb.yml 정합 (P6)

### 7.1 id 명명 규칙

| Schema | Prefix | 예시 |
|---|---|---|
| FAQPage | `faq-` | `faq-dogfooding` |
| Service (SOL) | `svc-sol-NN-` | `svc-sol-01-geocare` |
| Service (PKG) | `svc-pkg-` | `svc-pkg-amp` |
| Service (UNIT) | `svc-unit-` | `svc-unit-air` |
| Article | `art-YYYYMM-` | `art-202604-mission` |
| Person | `person-` | `person-koo-jahoon` |
| Organization | `org-` | `org-bizspring` |

### 7.2 breadcrumb.yml 매핑 의무

```yaml
{id}:
  - { name: "홈", url: "/" }
  - { name: "{카테고리}", url: "/{cat}/" }
  - { name: "{서브카테고리}", url: "/{cat}/?cat={sub}" }   # 선택
  - { name: "{페이지 제목}" }                                  # 마지막은 url 없음
```

→ id 키 정합 시 build.mjs `buildBreadcrumb`이 BreadcrumbList JSON-LD 자동 주입.

---

## 8. V8 검증 통과 절차 (P7)

```bash
# 1. .md 작성 후
npm run validate              # V8 검증
# → ERROR 0 / Warning ≤ 2 / Trust ≥ 40 확인

# 2. 빌드 검증
npm run build
# → 빌드 페이지 수 확인 + JSON-LD 주입 확인

# 3. H1 중복 검증 (수동 — V8 v1.2 신설 제안)
grep -c "<h1>" _build/{path}/index.html
# → 결과 = 1 이어야 함

# 4. commit + push
git add .
git commit -m "feat({type}): {페이지명} ({id}) — {요약}"
git push
```

---

## 9. 자주 발생하는 실수 + 수정 가이드

| 실수 | 원인 | 수정 |
|---|---|---|
| `<h1>` 2건 중복 | 본문에 `# 제목` 추가 | 본문 H1 제거, frontmatter title 위임 |
| BreadcrumbList JSON-LD 미주입 | id ↔ breadcrumb.yml 불일치 | id 키 또는 breadcrumb.yml 정합 갱신 |
| Trust 점수 0 | trust 7묶음 빠짐 | frontmatter trust 섹션 정형화 |
| Service Schema 누락 | schema 섹션 빠짐 | TQ3 Schema 자사 v1.0 (KHub `bc409dfd`) 참조 |
| canonical_url 임시 도메인 | `*.pages.dev` 사용 | 정식 도메인 `https://wiki.bizspring.co.kr/` 사용 (W4 Day 3 §4 결정) |
| 한글 카테고리 라벨 불일치 | `Service / Article` 영문 사용 | `서비스 / 아티클` (W4 Day 2 Patch C 정합) |
| §"인덱스" placeholder 미해소 | id가 build.mjs 카테고리 불일치 | TARGETS = ['faq', 'service', 'article', 'person'] 정합 |
| H1 중복 자동 검출 | V8에 룰 없음 | V8 v1.2 V11 룰 신설 제안 (별도 미니 트랙) |

---

## 10. 향후 갱신 시점

| 시점 | 갱신 사유 |
|---|---|
| W19 enrichment 사이클 시작 | 발주 24건 본문 작성 시 표준 적용 검증 |
| 콘텐츠런처 v3.4 발표 | Wiki 책임 v2.1 재정의 시 본 표준 보강 |
| V8 v1.2 V11 룰 신설 시 | H1 중복 자동 검출 룰 추가 → §8 절차 자동화 |
| 신규 Schema 타입 추가 (예: HowTo / Product) | §5에 양식 추가 |

---

## 11. 변경 이력

| 버전 | 일자 | 변경 |
|---|---|---|
| **v1.0** | **2026-05-04 (W18)** | **초안 — GEOcare PoC H1 중복 사례 발견 후 표준 명문화. 7 핵심 원칙 + 5종 schema_type 양식 + 위키풍 8섹션 + V8 절차 + 자주 실수 정리.** |
