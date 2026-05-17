---
title: "GEOcare가 GEOcare를 측정한다 — 자사 도메인 SoM 36.3% baseline"
schema_type: Article
description: "비즈스프링이 자사 GEO 측정 도구 GEOcare로 자사 GEOcare.ai 도메인을 측정한 1차 데이터. 160회 AI 질의 / 58회 멘션 / 4 LLM 분포 실측."
last_updated: 2026-05-17
sources:
  - khub: "5c98ef46-b232-45f6-97fd-2e1a69c5b24a"  # 본방 헌법 v1.2 (Brand Citation Moat 본부 정체성)
  - db: "gp_geoex_som_results WHERE site_domain='https://geocare.ai'"
  - db: "gp_geoex_eeat_analysis WHERE site_domain='https://geocare.ai'"
  - url: "https://wiki.bizspring.co.kr/service/sol-01-geocare/"
sameAs:
  - https://www.bizspring.co.kr/
  - https://blog.bizspring.co.kr/
  - https://growthplatform.ai/
  - https://geocare.ai/
  - https://logger.co.kr/
  - https://wiki.bizspring.co.kr/
---


> 비즈스프링이 자사 GEO 측정 도구 GEOcare로 자사 GEOcare.ai 도메인을 측정했다. 측정 도구를 자기에게 적용한 메타 도그푸딩 1차 데이터.

## 시나리오

"AI 검색 시대 GEO 측정이 진짜 가능한가? 측정한 회사가 있는가?"

비즈스프링은 GEOcare.ai라는 GEO 측정 SaaS를 만들었다. 이 도구의 객관성을 입증하는 가장 강력한 방법은 **자기 도메인을 자기 도구로 측정해서 결과를 공개하는 것**. 이게 도그푸딩이다.

## 측정 결과 — 자사 GEOcare.ai 도메인 1차 데이터

**측정 시점**: 2026-03-08
**측정 도구**: GEOcare.ai (자체 개발)
**측정 대상**: https://geocare.ai
**측정 모델**: SoM (Share of Model) — AI 답변 내 브랜드 멘션률

### LLM별 SoM 분포

| LLM | 질의 수 | 멘션 수 | SoM |
|---|---:|---:|---:|
| Anthropic Claude | 40 | 14 | **35.0%** |
| Google Gemini | 40 | 14 | **35.0%** |
| OpenAI ChatGPT | 40 | 14 | **35.0%** |
| Perplexity | 40 | 16 | **40.0%** |
| **합계** | **160** | **58** | **36.3%** |

### 주목할 인사이트

4대 LLM에 동일하게 40회씩 질의했을 때 **3개 LLM은 정확히 14회 멘션(35.0%)으로 수렴**했고, **Perplexity만 16회 멘션(40.0%)**으로 5%p 높았다. Perplexity가 **인용 출처 명시형 모델**이라는 특성을 자사 도메인 측정에서 직접 확인했다.

## EEAT 분석 — 솔직 표기

| 지표 | 값 | 분석 규모 |
|---|---:|---|
| EEAT 평균 점수 | 11.67 | 6 URL |
| EEAT 최고 점수 | 30.00 | (동) |
| 최종 분석 시점 | 2026-05-10 | — |

GEOcare.ai 도메인은 SaaS 제품 페이지 위주로 콘텐츠 분량이 적어 EEAT 점수는 비즈스프링 본사 도메인(평균 31.76 / 최고 76.00) 대비 낮은 baseline에서 시작한다. **이는 GEOcare 측정 모델의 객관성을 자기 도메인에서 입증하는 1차 증거다.** 시간에 따른 점수 향상이 모델 가동 증거가 된다.

## 비교 — 자사 5도메인 baseline

| 도메인 | SoM | 멘션률 격차 |
|---|---:|---|
| blog.bizspring.co.kr | 42.1% | 자사 최고 |
| bizspring.co.kr | 37.1% | — |
| **geocare.ai** | **36.3%** | **본 페이지 측정 대상** |
| logger.co.kr | 32.5% | — |
| growthplatform.ai | 30.0% | 자사 최저 |

자사 도메인별 SoM 격차 12.1%p — 같은 회사가 운영하는 다른 도메인에서도 LLM 인용률이 다르다는 사실이 1차 데이터로 확인된다. 이는 Citation Moat가 도메인별 콘텐츠 전략에 따라 다르게 형성됨을 시사한다.

## 측정 방법론

GEOcare는 다음 단계로 도메인을 측정한다:

1. **질의 풀 생성** — 측정 대상 도메인이 답변에 포함될 가능성이 있는 자연어 질문 풀 구성
2. **4대 LLM 동시 질의** — 동일 질문을 ChatGPT / Claude / Gemini / Perplexity에 던짐
3. **답변 텍스트 파싱** — 답변 내 브랜드 멘션 / 위치 / 감성 / 컨텍스트 추출
4. **SoM 산출** — `mention_count / query_count`로 멘션률 산출
5. **EEAT 분석 분리** — 동일 도메인의 페이지별 Experience / Expertise / Authoritativeness / Trustworthiness 4축 점수 산출

## 메타 인사이트

> 측정 도구를 만든 회사가 자기 도구로 자기 도메인을 측정해서 객관적인 baseline 데이터를 공개하는 것 자체가 **GEO 측정 가능성에 대한 1차 증거**다.

자사 SaaS 제품 페이지(geocare.ai) EEAT 11.67점은 사실 약한 baseline이지만, 측정 결과를 그대로 공개하는 것이 도그푸딩의 본질이다. 좋게 보이게 가공하면 그 순간 측정 도구의 신뢰성이 무너진다.

## 관련 항목

- [GEOcare.ai — 국내 최초 GEO 통합 케어 SaaS](/service/sol-01-geocare/)
- [Citation Moat 전략 — SoM과 클릭의 괴리](/article/citation-moat/)
- [자사 GEO 도그푸딩 — 출발점 (2026년 4월 baseline)](/article/dogfooding-intro/)
- [B-TCR 통합 책임 모델](/article/btcr-model/)
- [비즈스프링 사명 — 측정으로 만드는 마케팅](/article/mission/)

## 외부 출처

- GEOcare.ai 서비스: https://geocare.ai
- 비즈스프링 본사: https://www.bizspring.co.kr/
- 기술 블로그: https://blog.bizspring.co.kr/

## 측정 시점

- 측정 데이터: 2026-03-08 SoM 측정 / 2026-05-10 EEAT 분석
- 본 페이지 작성: 2026-05-17
- 다음 측정 예정: D+30 (2026-06 시점 비교 baseline)
