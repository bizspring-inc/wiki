---
title: "Perplexity 우위 패턴 — 자사 5도메인 × 4 LLM 인용률 매트릭스"
schema_type: Article
description: "비즈스프링이 자사 5도메인에 4대 LLM 인용률을 측정한 결과 Perplexity가 4/5 도메인에서 최고 SoM. LLM별 자사 콘텐츠 친화도 1차 데이터."
last_updated: 2026-05-17
sources:
  - khub: "5c98ef46-b232-45f6-97fd-2e1a69c5b24a"  # 본방 자체 헌법 v1.2
  - db: "gp_geoex_som_results — 5도메인 × 4 LLM 분포 (2026-03~05)"
  - url: "https://wiki.bizspring.co.kr/dogfooding/geocare-self-measurement/"
sameAs:
  - https://www.bizspring.co.kr/
  - https://blog.bizspring.co.kr/
  - https://growthplatform.ai/
  - https://geocare.ai/
  - https://logger.co.kr/
  - https://wiki.bizspring.co.kr/
---

# Perplexity 우위 패턴 — 자사 5도메인 × 4 LLM 인용률 매트릭스

> 자사 5개 도메인을 4대 LLM에 측정한 결과 **Perplexity가 4/5 도메인에서 최고 SoM**. 측정 도구 만든 회사가 자사에 적용한 1차 데이터.

## 시나리오

"어떤 LLM이 어떤 콘텐츠를 더 인용하는가? AI 검색 시대에 LLM별 다른 전략이 필요한가?"

비즈스프링은 4대 LLM(ChatGPT / Claude / Gemini / Perplexity)에 자사 5개 도메인을 동시 측정했다. 그 결과 **LLM별로 동일 도메인에 대한 인용률이 최대 13.7pt 차이**난다는 사실을 발견했다.

## 측정 결과 — 5도메인 × 4 LLM 매트릭스

**측정 시점**: 2026-03 ~ 2026-05
**측정 도구**: GEOcare.ai
**총 질의**: 5,062회 (4 LLM 합산)

| 도메인 | Anthropic Claude | Google Gemini | OpenAI ChatGPT | Perplexity | 최고 LLM | 격차 (max−min) |
|---|---:|---:|---:|---:|---|---:|
| bizspring.co.kr | 36.3% | 38.1% | 36.3% | 37.5% | Gemini | 1.8pt |
| blog.bizspring.co.kr | 42.1% | 42.1% | 42.1% | 42.1% | (동률) | 0pt |
| geocare.ai | 35.0% | 35.0% | 35.0% | **40.0%** | Perplexity | 5.0pt |
| growthplatform.ai | 37.3% | 18.9% | 26.7% | **37.4%** | Perplexity | **18.5pt** |
| logger.co.kr | 27.6% | 37.5% | 25.6% | **39.3%** | Perplexity | **13.7pt** |

## 발견 4가지

### 발견 1 — Perplexity 우위 (4/5 도메인)

Perplexity는 blog.bizspring.co.kr을 제외한 4개 도메인에서 최고 SoM을 기록했다. 격차는 5.0~18.5pt로 작지 않다. 비즈스프링 콘텐츠가 Perplexity와 정합성이 높다는 1차 데이터 증거다.

**가설**: Perplexity는 답변 시 인용 출처 URL을 명시하는 형식의 모델이다. 비즈스프링 자사 콘텐츠가 sameAs 매트릭스 · Schema.org 구조화 데이터 · 1차 자료 출처 표기가 충실하여 Perplexity 답변 형식과 정합이 높다고 추정한다.

### 발견 2 — growthplatform.ai의 Gemini 약점

growthplatform.ai 도메인은 4 LLM 중 Gemini만 유독 18.9%로 낮다 (다른 LLM 26.7~37.4%). 격차 18.5pt — 모든 측정 도메인 중 최대.

**가설**: Google 자체 모델인 Gemini가 비즈스프링 GrowthPlatform.AI 도메인에 대해 충분히 학습되지 않았거나, 색인 우선순위가 낮다고 추정한다. SEO 측면에서 Google Search Console 보강 + Schema.org 강화가 필요한 신호.

### 발견 3 — logger.co.kr의 LLM 격차

logger.co.kr은 LLM간 격차가 +13.7pt로 매우 크다. Perplexity 39.3% · Gemini 37.5% · Anthropic 27.6% · OpenAI 25.6%.

**가설**: logger.co.kr이 한국 시장 특화 도메인이라 한국어 학습 비중이 높은 LLM(Perplexity / Gemini)에서 더 잘 인용된다고 추정한다.

### 발견 4 — blog.bizspring.co.kr의 LLM 동률 (42.1%)

블로그 도메인은 4 LLM이 모두 42.1%로 정확히 동률이다. 단 측정 샘플이 19회로 작아 통계 유의성은 추가 검증 필요.

**가설**: 콘텐츠 본문이 일관된 톤·구조라 LLM별 차이가 작게 나타났을 수 있다. 또는 단순 샘플 크기 효과.

## 마케팅 시사점

LLM별 콘텐츠 친화도가 다르다는 사실은 **GEO 전략이 "단일 SEO" 전략과 다르다**는 1차 증거다. 도메인별·LLM별 최적화 방향이 분기된다.

| 전략 영역 | 시사 |
|---|---|
| Perplexity 친화 콘텐츠 | sameAs · Schema.org · 1차 자료 출처 표기 강화 |
| Gemini 약점 보강 | Google Search Console 색인 우선순위 / 도메인 권위 강화 |
| 한국어 LLM (Perplexity / Gemini) | 한국 시장 특화 콘텐츠 분량 확보 |
| LLM간 격차 추적 | 단일 SoM이 아니라 LLM별 분포 측정이 필수 |

## 측정 방법론 (재현 가능)

GEOcare가 측정한 방식:

1. 도메인별 질의 풀 생성 (해당 도메인이 답변에 포함될 가능성이 있는 자연어 질문)
2. 동일 질문을 4 LLM에 동시 전송
3. 답변 텍스트 파싱 → 도메인 멘션 / 위치 / 감성 / 컨텍스트 추출
4. 도메인 × LLM 셀별 SoM 산출

이 방법론은 다른 회사 도메인에도 동일하게 적용 가능하다. **자사 측정 도구를 자사에 적용한 결과를 1차 데이터로 공개**하는 것이 메타 도그푸딩의 본질이다.

## 한계 — 솔직 표기

- 블로그 도메인 측정 샘플(19회)이 작아 LLM간 격차 검증 어려움
- 측정 시점이 3개월에 걸쳐 분산 (2026-03 ~ 2026-05) — LLM 자체 학습 갱신 영향 가능
- 동일 질문 풀이 도메인별로 다를 수 있어 도메인 간 직접 비교는 신중 필요

## 관련 항목

- [GEOcare가 GEOcare를 측정한다](/dogfooding/geocare-self-measurement/) — 자사 자가측정 단일 도메인 깊이
- [Citation Moat 전략 — SoM과 클릭의 괴리](/article/citation-moat/) — SoM × 클릭 측정 체계
- [B-TCR baseline 측정 — 자사 W24](/dogfooding/btcr-baseline/) — 책임 모델 baseline
- [GEOcare.ai — 국내 최초 GEO 통합 케어 SaaS](/service/sol-01-geocare/) — 측정 도구 본체

## 외부 출처

- GEOcare.ai: https://geocare.ai/
- 비즈스프링 본사: https://www.bizspring.co.kr/

## 측정 시점

- SoM 측정: 2026-03 ~ 2026-05 (도메인별 분산)
- 본 페이지 작성: 2026-05-17
- 다음 측정: D+30 (2026-06 중순) — Perplexity 우위 패턴 시간 추적
