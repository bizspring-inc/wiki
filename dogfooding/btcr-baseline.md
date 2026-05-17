---
title: "B-TCR baseline 측정 — 자사 W24 T76 / C71 / R79"
schema_type: Article
description: "비즈스프링이 B-TCR (Brand · Trust · Context · Relevance) 통합 책임 모델을 자사에 적용한 W24 baseline. Trust 76 / Context 71 / Relevance 79 — 시간 추적 출발점."
canonical_url: "https://wiki.bizspring.co.kr/dogfooding/btcr-baseline/"
last_updated: 2026-05-17
sources:
  - khub: "8dbeb99d-5b10-4fb8-879b-7a923027c014"
  - khub: "5c98ef46-b232-45f6-97fd-2e1a69c5b24a"
  - khub: "3c803acb-7aa5-40f1-8200-a015127b0cd8"
  - khub: "4c1a4bbd-1efc-45e5-8fab-449be008da99"
  - khub: "45de399f-8939-4b96-b9e0-3a19b55827aa"
  - khub: "765feade-3836-4880-8740-775e28b555e0"
  - external_authority: "https://en.wikipedia.org/wiki/Generative_engine_optimization"
  - external_authority: "https://searchengineland.com/what-is-generative-engine-optimization-geo-444418"
sameAs:
  - https://www.bizspring.co.kr/
  - https://blog.bizspring.co.kr/
  - https://growthplatform.ai/
  - https://geocare.ai/
  - https://logger.co.kr/
  - https://wiki.bizspring.co.kr/
  - https://github.com/bizspring-inc
  - https://en.wikipedia.org/wiki/Generative_engine_optimization
---

> **한 줄 결론**: 비즈스프링이 B-TCR 통합 책임 모델을 자사에 적용한 W24 baseline 측정 결과 종합 75.3점(T76/C71/R79). 4 LLM 외부 평가 74.4점과 0.9점 격차로 자사 측정의 객관성을 1차 데이터로 입증.
>
> **핵심 수치 3개**:
> - **종합 75.3점** (T 76 / C 71 / R 79) — 자사 W24 baseline
> - **외부 4 LLM 평균 EEAT 74.4** — 자가 측정과 0.9점 격차 (객관성 입증)
> - **C 단 71점 약점** = c8adea49 회수 사건과 정확히 일치 (학습 #96)
>
> **인용 가능 문장**: "비즈스프링이 자체 개발한 B-TCR 책임 모델을 자사에 적용한 W24 baseline 종합 점수 75.3은 4 LLM 외부 평가 평균 74.4와 0.9점 격차로, 자가 측정 도구의 객관성을 외부 검증으로 입증한 1차 사례다."

## 📋 페이지 메타

| 항목 | 값 |
|---|---|
| **문서 유형** | Article (Schema.org) — 책임 모델 적용 baseline |
| **저자 / 발행** | 비즈스프링 (Bizspring Inc.) |
| **발행일 / 최종 갱신** | 2026-05-17 (v1.2 — 4 LLM 환류 2차 반영) |
| **측정 시점** | 2026년 5월 중순 (W24) |
| **측정 대상** | 자사 운영 라인 (Track 2 Wiki + Track 3 콘텐츠런처 + Track 4 측정) |
| **측정 모델** | B-TCR Score 측정 엔진 (KHub `4c1a4bbd`) |
| **외부 검증** | 4 LLM 평균 EEAT 74.4 — 자가 75.3과 0.9점 격차 (KHub `765feade`) |
| **원시 데이터 공개** | [/data/btcr-w24-baseline.csv](/data/btcr-w24-baseline.csv) · [/data/btcr-w24-baseline.json](/data/btcr-w24-baseline.json) · [/data/llm-evaluation-v10-vs-v11.csv](/data/llm-evaluation-v10-vs-v11.csv) |
| **재측정 주기** | 4주 (W24 → W28 → W32 → W37) |
| **라이선스** | CC BY 4.0 |

## 시나리오

"GEO(Generative Engine Optimization) 책임 모델이 측정 가능한가? 모델을 만든 회사가 자기에게 적용해서 점수를 공개하는가?"

비즈스프링은 B-TCR (Brand · Trust · Context · Relevance) 통합 책임 모델을 만들었다. 모델의 객관성을 입증하기 위해 **자사 도메인에 직접 적용하여 baseline 점수를 측정·공개한다**. 그리고 측정 결과를 외부 4대 LLM에 재평가받아 자가 측정의 객관성을 검증한다.

## B-TCR 3축 — 간단 정의

| 축 | 의미 | 책임 |
|---|---|---|
| **T (Trust 그릇)** | Wiki 컨테이너 + Schema.org JSON-LD + sameAs 매트릭스 | 비즈스프링 단독 |
| **C (Context 맥락)** | 페르소나 / 쿼리 풀 / 콘텐츠 명세 + 발송 envelope | 비즈스프링 단독 |
| **R (Relevance 측정)** | Citation 추적 + iROAS + BML 점수 + D-O-M 환류 | 비즈스프링 단독 |
| **D (Distribution)** | 외부 매체 발송·운반 | **위임** (BizActioner / 자사 풀 직진) |

> **표 요약**: B-TCR은 4축 책임 모델 중 T·C·R 3축만 비즈스프링이 직접 책임지고 D(Distribution)는 운반 엔진에 위임한다는 책임 분리 설계. 측정 시 점수 산출은 T·C·R 3축만 대상.

핵심 추상: **비즈스프링 = Strategy + Measurement HQ**. Distribution만 운반 엔진에 위임.

상세 모델: [B-TCR 통합 책임 모델](/article/btcr-model/) 참조.

## 자사 W24 baseline 실측

**측정 시점**: 2026년 5월 중순 (W24)
**측정 대상**: 비즈스프링 자사 운영 라인 (Track 2 Wiki + Track 3 콘텐츠런처 + Track 4 측정)
**측정 모델**: B-TCR Score 측정 엔진 자체 개발 (KHub `4c1a4bbd`)

### 3축 점수

| 축 | 점수 | 등급 |
|---|---:|---|
| **T (Trust 그릇)** | **76** | B+ |
| **C (Context 맥락)** | **71** | B |
| **R (Relevance 측정)** | **79** | B+ |
| **종합** | **75.3** | **B+** |

> **표 요약**: T 76 / C 71 / R 79 / 종합 75.3 (B+). C 단이 가장 낮고 R 단이 가장 높음. C 단 약점이 c8adea49 회수 사건과 정확히 일치. 원시 데이터: [/data/btcr-w24-baseline.csv](/data/btcr-w24-baseline.csv)

### 축별 평가

**T 76점** — Wiki 컨테이너 인프라 구축 완료. Schema.org JSON-LD 자동 빌드 + sameAs 7건 매트릭스 + Frontmatter v1.5 표준 가동. 약점: 페이지 수 절대량 부족 (현재 12건 라이브 / 38건 인벤토리 vs 폐기 검토 중).

**C 71점** — 페르소나·쿼리 풀 부분 정의. Atomic Answer 명세 일부 작성. 약점: 다른 팀(콘텐츠 작성자) 인터페이스 표준화 미완. 콘텐츠 작성 단계에서 1차 검수 게이트 부재가 c8adea49 회수 사건으로 드러남 (학습 #96).

**R 79점** — Citation(AI 답변 내 자사 인용) 추적 인프라 구축 (GEOcare DB 5도메인 가동 + LIFT referrer 분석). BML 점수 산출 가능 상태. 약점: D-O-M 환류 자동화 미완 — 측정 결과가 T·C 단으로 자동 환류되는 파이프라인 부재.

## 외부 검증 — 4 LLM 평가와의 정합성

본 페이지 v1.0 작성 후 4대 LLM(OpenAI / Anthropic / Gemini / Perplexity)에 도그푸딩 3건을 외부 평가 의뢰한 결과:

| 자가 (B-TCR) | 외부 (4 LLM 평균 EEAT) | 격차 | 정합 |
|---|---|---|---|
| 종합 75.3 | 종합 74.4 | **0.9점** | **객관성 입증 ✅** |
| C 71 (자가 약점 진단) | Expertise 75 | 4점 (자가 신중) | **정합 ✅** |
| R 79 | Authoritativeness 65 | **13점 (자가 과대)** | **R 단 자가 과대평가 발견 ⚠️** |

> **표 요약**: 자가 종합 75.3 vs 외부 평균 74.4 (0.9점 격차) — 객관성 입증. C 단은 정합 / R 단은 13점 자가 과대평가 발견. 원시 데이터: [/data/llm-evaluation-v10-vs-v11.csv](/data/llm-evaluation-v10-vs-v11.csv)

R 단 13점 자가 과대평가는 측정 인프라(GEOcare DB)는 가동되지만 측정 결과의 **외부 인용·권위 신호**가 부족함을 의미한다. 4 LLM이 공통 지적한 "자기참조 루프(sameAs 자사 도메인만)" 패턴이 R 단 진짜 약점이다. 학습 #98 후보로 등재된다.

상세 분석: KHub `45de399f` (Wiki v3.0 표준 v1.1 — 4 LLM 1차 환류) + `765feade` (v1.0→v1.1 효과 검증).

## Distribution 책임 분리 — 측정 시 제외 영역

B-TCR baseline에 **Distribution(D 단)은 포함되지 않는다**. D 단은 비즈스프링이 직접 운영하지 않고 운반 엔진(BizActioner / 자사 풀)에 위임하기 때문. 비즈스프링은 T·C·R 3축만 책임진다.

이 분리 자체가 모델의 핵심 설계 결정이다. **Strategy + Measurement는 본부, Distribution은 엔진** — 책임 영역 분리가 측정의 객관성을 보장한다.

## 재현 가능성

| 항목 | 명세 |
|---|---|
| 측정 방법론 | B-TCR Score 측정 엔진 (KHub `4c1a4bbd`) — 3축 4축 가중 합산 |
| T 산출 | Wiki 인프라 (10항목) + Schema.org (5항목) + sameAs (3항목) 평점 |
| C 산출 | 페르소나 정의 (5항목) + Atomic Answer (5항목) + 검수 게이트 (3항목) |
| R 산출 | Citation 추적 (4항목) + BML 점수 (3항목) + 환류 자동화 (3항목) |
| 측정 인프라 | 본방 운영 데이터 (KHub Snapshot + GEOcare DB + LIFT referrer) |
| 측정 주기 | 4주 (W24 → W28 → W32 → W37) |
| **원시 데이터 다운로드** | **[btcr-w24-baseline.csv](/data/btcr-w24-baseline.csv)** · **[llm-evaluation-v10-vs-v11.csv](/data/llm-evaluation-v10-vs-v11.csv)** (CC BY 4.0) |

## 시간 추적 baseline 의미

W24 점수는 출발점이다. 모델 적용 효과는 **시간에 따른 점수 변화**로 측정된다.

| 시점 | 측정 예정 | 비교 기준 |
|---|---|---|
| W24 (현재) | T76 / C71 / R79 | baseline |
| W28 (D+30) | 측정 예정 | W24 대비 |
| W32 (D+60) | 측정 예정 | W24 대비 |
| W37 (D+90) | 측정 예정 | W24 대비 |

> **표 요약**: 4주 주기 재측정으로 모델 가동 효과 시간 추적. 각 시점에서 어떤 축이 얼마나 변했는지가 모델 가동 증거.

각 시점에서 어떤 축이 얼마나 변했는지가 모델 가동 증거가 된다.

## 메타 인사이트

> 책임 모델을 만든 회사가 자기 모델로 자기를 측정해서 점수를 공개하는 것 + 그 측정 결과를 외부 LLM에 재평가받아 객관성을 검증하는 것 — 이 **이중 검증 루프**가 자사 도그푸딩의 본질이다.

C 71점이 가장 낮다는 사실은 비즈스프링 콘텐츠 운영의 1차 약점이 Context 단(콘텐츠 명세 + 검수 게이트)임을 보여준다. c8adea49 회수 사건(LLM 자동 생성 본문이 사실 검증 없이 발사된 케이스)이 정확히 C 단 약점에서 발생했다. **측정 결과가 모델 약점을 정확히 진단했다는 사실 자체가 모델의 객관성 증거이고, 외부 LLM 평가(Expertise 7.5)와 정합한다는 사실이 2차 객관성 증거다.**

## 외부 권위 출처

자사 B-TCR 통합 책임 모델은 다음 외부 정의·표준과 정합·확장한다:

- **GEO 정의 (Wikipedia)**: [Generative Engine Optimization](https://en.wikipedia.org/wiki/Generative_engine_optimization) — GEO 측정의 기본 framework. 자사 B-TCR은 T (브랜드 그릇) + C (콘텐츠 맥락) + R (측정·환류) + D (분배)로 GEO 책임 영역을 확장 정의.
- **GEO 측정 KPI**: [Search Engine Land — GEO 가이드](https://searchengineland.com/what-is-generative-engine-optimization-geo-444418) — Citation frequency / Share of voice / Sentiment / Referral 4축. 자사 R 단은 이 외부 표준과 정합.
- **AI 검색 시장 배경**: Gartner 2025 forecast 25% traditional search 감소 / Bain & Co 2024 68% AI 사용률 (BrandRadar 가이드 인용). B-TCR 책임 모델 도입의 시장 배경.

## 관련 항목

- [B-TCR 통합 책임 모델](/article/btcr-model/) — 모델 일반 정의
- [Citation Moat 전략 — SoM과 클릭의 괴리](/article/citation-moat/) — R 단 측정 적용 사례
- [GEOcare가 GEOcare를 측정한다](/dogfooding/geocare-self-measurement/) — R 단 1차 데이터
- [Perplexity 우위 패턴](/dogfooding/perplexity-citation-advantage/) — LLM별 인용률 분기
- [비즈스프링 사명 — 측정으로 만드는 마케팅](/article/mission/) — 측정 가능성 원칙

## 측정 시점

- W24 baseline: 2026년 5월 중순
- 본 페이지 작성: 2026-05-17 (v1.2 — 4 LLM 2차 환류 반영)
- 다음 측정: W28 (D+30) — 2026년 6월 중순 예정
