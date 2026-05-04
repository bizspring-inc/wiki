---
id: art-202604-dogfooding-intro
schema_type: Article
canonical_url: https://wiki.bizspring.co.kr/article/dogfooding-intro/
title: "자사 GEO 도그푸딩 — 출발점 (2026년 4월 baseline)"
description: "비즈스프링이 자사 솔루션을 자사 사이트에 적용하기 시작한 이야기. GEO 점수 68점, LLM 클릭 22건, Trust 7묶음 38점(D). 1개월 후 어떻게 변할지 측정하는 시리즈의 출발점."
last_updated: 2026-05-02
lang: ko
status: published
schema:
  headline: "자사 GEO 도그푸딩 — 출발점 (2026년 4월 baseline)"
  description: "비즈스프링이 GEOcare를 자사에 적용하기 시작한 첫 측정. GEOcare가 GEOcare 페이지를 89점으로 평가하는 도그푸딩의 가장 강력한 케이스부터, LLM 인용은 25%인데 클릭은 0%인 미스터리까지."
  author:
    "@type": Person
    name: "이철승 (Charles Lee)"
    url: https://wiki.bizspring.co.kr/person/charles/
  datePublished: 2026-05-02
  dateModified: 2026-05-02
  about:
    - GEO Citation Moat
    - Dogfooding
    - BML Measurement
    - Trust Signals
trust:
  expertise:
    - "GEOcare 솔루션 직접 개발 + 자사 5도메인 측정 가동"
    - "LIFT referrer 분석 시스템 운영 (LLM 도메인 직접 검출)"
  experience:
    - "자사 GEOcare 페이지 89점 평가 — GEOcare가 GEOcare 페이지를 평가하는 메타 케이스"
    - "4월 LIFT 1,305 세션 + 22 LLM 클릭 baseline 확보"
  authoritativeness:
    - "Google Marketing Platform 파트너"
    - "자사 메인 도메인 GEO 점수 68점 (GEOcare 측정)"
  trustworthiness: "(주)비즈스프링 / Bizspring Inc. — 22년 운영 사업자"
  sameAs:
    - "https://www.bizspring.co.kr"
    - "https://www.bizspring.co.kr/prd_geocare.php"
    - "https://wiki.bizspring.co.kr/person/charles/"
  provider: "비즈스프링"
  updated_signals: "monthly review by PO — A-03 시리즈 매월 발행 약속 (5월 말 예정)"
---

## 정의

**자사 GEO 도그푸딩**(BizSpring GEO Dogfooding)은 비즈스프링이 자사가 개발한 GEO 측정 솔루션 GEOcare를 자사 도메인 5개에 적용하여 정기 측정·공개하는 도그푸딩 운영을 말한다. 2026년 4월에 본격 시작되었다.

본 페이지는 도그푸딩 baseline 측정의 출발점 기록이며, 정기 측정 결과는 별도 시리즈(A-03 BML 측정)로 매월 발행된다.

## 개요

자사 GEO 도그푸딩은 다음 3개 단계로 구성된다.

1. **Baseline 측정** — 5개 자사 도메인의 GEOcare 점수·SoM·LLM 클릭 측정 (2026-04 완료)
2. **Trust 7묶음 적용** — 자사 도메인에 Schema.org JSON-LD + sameAs + 자체 신호 추가 (W4~W5 진행 중)
3. **변화 측정** — 1개월 후 동일 측정 → 점수 변화 공개 (A-03 시리즈)

본 페이지는 (1) Baseline 측정의 결과를 다룬다.

## Baseline 측정 결과 (2026-04)

비즈스프링 자사 도메인 5개의 GEOcare 측정 결과는 다음과 같다.

| 도메인 | GEO 점수 | SoM (Share of Mind) | 비고 |
|------|----|----|----|
| `bizspring.co.kr` (메인) | 68 | 26.30% | 메인 사이트 |
| `growthplatform.ai` | 67 | — | 자사 SaaS 본부 |
| `logger.co.kr` | **79** | — | 자사 도메인 최고점 |
| `admonster.co.kr` | 18 | — | 자사 도메인 최저점 |
| `entrench-consulting.com` | 20 | — | — |

5개 도메인 점수의 분산 폭은 **61점**(79 − 18)이다. 동일 그룹 내에서도 약 4배의 점수 차이가 측정되며, 이는 도메인별 Trust 7묶음 적용 수준의 차이를 반영한다.

## 전사 baseline 종합 지표

| 지표 | 값 | 등급 |
|------|----|----|
| GEO 점수 (5개 도메인 평균) | 약 50 | C |
| LLM 클릭 (4월 1개월 합) | 22건 | — |
| Trust 7묶음 점수 | 38 | D |
| 메인 도메인 SoM | 26.30% | — |

이 baseline 위에 자사 Wiki 33페이지(Trust 그릇) + Schema.org 자체 적용 + sameAs 매트릭스를 단계적으로 추가하여 1개월 후 변화를 측정한다.

## 측정 도메인의 의의

5개 자사 도메인은 비즈스프링 운영 자산의 분포를 반영한다.

- `bizspring.co.kr` — 메인 사이트 (전사 정체성)
- `growthplatform.ai` — 자사 SaaS 본부 (제품 라인업)
- `logger.co.kr` — 자사 SaaS 솔루션 (LOGGER, 자사 도메인 최고점 79)
- `admonster.co.kr` — 자사 광고 관리 도메인
- `entrench-consulting.com` — 자사 컨설팅 도메인

자사 도메인 최고점이 SaaS 도메인(logger.co.kr, 79점)에서 측정된 사실은 단일 제품 정체성이 명확한 도메인이 LLM 인용에 유리함을 시사한다.

## 측정 약속

비즈스프링은 도그푸딩 결과를 매월 정기 발행한다. 측정 실패 사례도 함께 공개한다.

- **A-03 시리즈** — BML(Brand Mention Lift) 측정 매월 발행
- **본 Article 시리즈** — 격주 발행 (A-04 Citation Moat, A-05 B-TCR 등)
- **본 Wiki F-10 dogfooding** — 자사 측정 결과 정기 갱신

## 관련 항목

- [비즈스프링 사명](/article/mission/) — 측정으로 만드는 마케팅
- [Citation Moat 전략](/article/citation-moat/) — 본 baseline에서 발견된 SoM↔클릭 괴리
- [B-TCR 통합 책임 모델](/article/btcr-model/) — 본 baseline에서 도출된 통합 모델
- [도그푸딩 — 자사 적용](/faq/dogfooding/)

## 외부 출처

- 비즈스프링 GEOcare 자체 측정 결과 (5개 도메인, 2026-04 기준)
- 비즈스프링 LIFT 자체 측정 결과 (LLM 클릭 referrer, 2026-04 기준)
- Anthropic / OpenAI / Gemini / Perplexity 4 LLM 인용·클릭 데이터 (자체 분석)
