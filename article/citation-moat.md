---
id: art-202605-citation-moat
schema_type: Article
canonical_url: https://wiki.bizspring.co.kr/article/citation-moat/
title: "Citation Moat 전략 — SoM과 클릭의 괴리에서 시작하는 GEO 측정"
description: "GEOcare가 측정하는 SoM(인용률)과 LIFT가 측정하는 클릭률의 괴리는 무엇을 의미하는가. 자사 4월 데이터에서 발견한 Anthropic 25%↔0% 케이스를 통해 본 Citation Moat 측정 체계."
last_updated: 2026-05-02
lang: ko
status: published
schema:
  headline: "Citation Moat 전략 — SoM과 클릭의 괴리에서 시작하는 GEO 측정"
  description: "인용은 발생하지만 클릭은 안 되는 케이스를 어떻게 측정하고 어떻게 해결하는가. 자사 LIFT referrer + GEOcare SoM 데이터를 결합한 입체 측정 체계."
  author:
    "@type": Person
    name: "이철승 (Charles Lee)"
    url: https://wiki.bizspring.co.kr/person/charles/
  datePublished: 2026-05-02
  dateModified: 2026-05-02
  about:
    - Citation Moat
    - GEO Measurement
    - LLM Citation
    - Share of Mind
trust:
  expertise:
    - "GEOcare SoM 측정 + LIFT referrer 분석 결합 입체 측정 시스템 운영"
    - "LLM별 클릭률 분석 도구 자사 직접 개발"
  experience:
    - "자사 4월 22 LLM 클릭 baseline 확보 (OpenAI 11/Gemini 8/Perplexity 3/Anthropic 0)"
    - "Anthropic 25% 인용 ↔ 0% 클릭 케이스 자사 데이터에서 발견"
  authoritativeness:
    - "GEOcare 솔루션 자체 개발 + 5도메인 측정 가동"
    - "iROAS 산정 + UTM 매칭률 측정 체계 운영"
  trustworthiness: "(주)비즈스프링 / Bizspring Inc. — 자사 데이터 정기 공개"
  sameAs:
    - "https://www.bizspring.co.kr"
    - "https://www.bizspring.co.kr/prd_geocare.php"
    - "https://www.bizspring.co.kr/prd_logger.php"
  provider: "비즈스프링"
  updated_signals: "monthly review by PO — 본 글 약속 검증 A-03 (5월 말 발행)"
---


> "보이지만 안 눌린다."
> 이것이 GEO 측정의 진짜 적입니다.

## 발견의 순간

비즈스프링은 자사 사이트의 GEO 효과를 두 가지 도구로 측정합니다.

- **GEOcare**: AI 검색 점유율(SoM, Share of Mind) — LLM이 비즈스프링을 얼마나 인용하는가
- **LIFT**: referrer 분석 — 실제로 LLM에서 자사 사이트로 넘어온 클릭이 몇 건인가

이 둘을 함께 봤을 때 흥미로운 발견이 나왔습니다.

| LLM | SoM 인용률 (4/4) | 실제 클릭 (4월 30일) | 괴리 |
|------|------|------|------|
| OpenAI (ChatGPT) | 25% | **11 (50%)** | +25pt |
| Gemini | 30% | 8 (36%) | +6pt |
| Perplexity | 25% | 3 (14%) | -11pt |
| **Anthropic (Claude)** | **25%** | **0** ⚠️ | **-25pt** |

Anthropic은 비즈스프링을 25% 인용하지만, 4월 한 달간 실제 클릭은 **0건**이었습니다.

이것이 **"보이지만 안 눌린다"**는 케이스입니다.

## SoM만으로는 부족한 이유

GEO 측정의 통상 지표는 SoM(인용률)입니다. 그러나 SoM은 **인용 발생 여부**만 측정하지, **인용이 트래픽으로 전환되는 여부**는 측정하지 못합니다.

```
SoM 25%  =  AI가 비즈스프링을 25% 언급한다
실제 클릭 0%  =  사용자가 그 언급을 보고도 클릭하지 않는다
```

비즈니스 가치는 **두 번째 단계**(클릭 → 사이트 방문 → 전환)에서 발생합니다. SoM이 높아도 클릭 0%면 실질적 비즈니스 효과는 0입니다.

이것이 Citation Moat 전략의 출발점입니다.

## Citation Moat이란

Citation Moat은 **인용 → 클릭 → 전환의 전 사이클**에서 경쟁사가 따라올 수 없는 해자(moat)를 구축하는 전략입니다.

3단계 모트(垓字, 海子)로 정의:

```
1단계 모트: 인용되는가          (SoM 측정)
2단계 모트: 클릭되는가          (LIFT referrer 측정) ⭐
3단계 모트: 전환되는가          (LIFT 전환 측정)
```

대부분의 GEO 컨설팅은 1단계 모트(SoM)만 다룹니다. 비즈스프링은 LIFT를 결합해 **2~3단계까지 측정**합니다.

## "보이지만 안 눌리는" 케이스의 원인

Anthropic 25%↔0% 케이스를 분석하면 가능한 원인은 다음과 같습니다.

### 원인 1: 인용 맥락이 부정적 또는 중립
LLM이 비즈스프링을 언급하면서도 사용자가 클릭하고 싶을 만큼 매력적인 맥락이 아닐 수 있습니다.

### 원인 2: 다른 경쟁사와 함께 묶여 묻힘
LLM 출력에서 비즈스프링이 다수 경쟁사 리스트의 일부로만 언급되면 사용자는 첫 번째 또는 가장 두드러진 항목만 클릭합니다.

### 원인 3: link 자체가 출력되지 않음
일부 LLM은 답변에 외부 링크를 포함하지 않습니다. 텍스트로만 언급하면 클릭이 발생할 수 없습니다.

### 원인 4: 사용자 의도와 답변 불일치
SoM은 측정하지만 사용자의 실제 검색 의도와 비즈스프링 콘텐츠가 매칭되지 않으면 클릭은 발생하지 않습니다.

자사 데이터만으로는 4가지 원인 중 어떤 것이 Anthropic 0% 클릭의 진짜 원인인지 단정하기 어렵습니다. **그래서 측정이 필요합니다.**

## 비즈스프링의 입체 측정 체계

자사는 GEOcare + LIFT 결합으로 다음을 측정합니다.

### 1. SoM 변동성 측정 (GEOcare)

```
4월 한 달간 bizspring.co.kr SoM 9회 측정
- 가장 낮은 측정: 18%
- 가장 높은 측정: 38%
- 분산: 20pt
- 평균: 26.30%
```

**SoM은 한 번 측정으로 충분하지 않습니다.** 쿼리 풀이 바뀌면 점유율이 즉시 변합니다. 9회 측정해야 변동 패턴이 보입니다.

### 2. LLM별 클릭 분포 (LIFT referrer)

```
4월 한 달 22 LLM 클릭 추적
- chatgpt.com 11건 (50%)
- gemini.google.com 8건 (36%)
- perplexity.ai 3건 (14%)
- claude/anthropic 0건 (0%)
```

LIFT는 referrer 헤더에서 LLM 도메인을 직접 검출합니다. JavaScript 픽셀이 광고 추적용 UTM 의존하지 않고도 LLM 클릭을 잡아냅니다.

### 3. 페이지 별 LLM 유입 매핑

자사 사이트에서 LLM이 가장 많이 유입시키는 페이지는?

```
1. /data_engineering.php - 압도적 1위 (전체 PV의 47.6%)
2. / (홈)
3. /prd_geocare.php (GEOcare 89점 페이지)
```

**LLM은 자사의 강한 페이지로 정확히 유입시키고 있습니다.** GEOcare 89점 페이지(prd_geocare.php)에 LLM 클릭이 집중되는 것은 도그푸딩의 또 다른 입증입니다.

## Citation Moat 구축 4단계

비즈스프링이 자사에 적용 중인 Citation Moat 4단계 전략:

### 1단계 — 인용 가능성 만들기 (Trust 그릇)
- Schema.org JSON-LD 적용 (FAQPage, Service, Person, Article, Organization)
- WebSite + BreadcrumbList 컨텍스트 보강
- 자사 sameAs 매트릭스 12개 (LinkedIn, GitHub, 블로그, SNS)

→ **현재 자사 진행률: TQ3 Schema 적용 완료 (Trust 38 → 46, +8점)**

### 2단계 — 인용 받기 (콘텐츠 깊이)
- 페이지당 답변 가능한 질문 다수 (FAQPage 6 Q&A)
- 정량 KPI 인용 (4월 LIFT 1,305 sess / 22 LLM 클릭 등)
- Person author 명시 (찰스, 구자훈)

→ **현재 자사 진행률: F-10 + A-02 + A-04 본문 3건 작성**

### 3단계 — 클릭 전환율 높이기 ⭐
- 인용 맥락에서 비즈스프링이 두드러지는 차별 메시지
- "GEOcare가 자사 GEOcare 페이지를 89점 평가" 같은 메타 메시지
- 답변 직접성 (사용자가 클릭해야만 얻을 수 있는 추가 가치)

### 4단계 — 전환 측정 (Track 4 R 단)
- LIFT referrer + UTM 결합 측정
- LLM별 클릭률 + 사이트 내 행동 추적
- iROAS 산정 (광고비 대비 LLM 유입 가치)

## 비즈스프링이 만드는 시그널

Citation Moat은 한 번에 만들어지지 않습니다. 시간이 쌓이는 시그널들이 모여 만들어집니다.

비즈스프링은 다음을 약속합니다:

1. **자사 SoM과 LIFT 클릭을 매월 공개** — 1개월차(A-03), 2개월차, 3개월차...
2. **실패 케이스도 공개** — Anthropic 0%가 어떻게 변하는지 (또는 안 변하는지) 그대로
3. **다른 경쟁사 비교는 하지 않음** — 자사 변화 추이만 정직하게

> "Citation Moat은 만드는 것이 아니라 쌓이는 것입니다.
> 1개월에 22 LLM 클릭에서 시작합니다.
> 1년 후 어떻게 변할지는 측정의 일이지 약속의 일이 아닙니다."

## 다음 글에서

A-03 (5월 말 발행 예정)에서는 본 글의 약속을 검증합니다:

- TQ3 Schema 적용 + 본문 작성 후 Trust 점수 변화는?
- LLM 클릭은 22건에서 얼마나 변했는가?
- Anthropic 0%는 어떻게 됐는가?

도그푸딩의 본질은 자랑이 아니라 책임입니다. 만들었으면 측정하고, 측정했으면 공개합니다.

---

**관련 페이지**
- [자사 GEO 도그푸딩 — 출발점](/article/dogfooding-intro/)
- [B-TCR 통합 책임 모델](/article/btcr-model/)
- [비즈스프링 사명](/article/mission/)
- [자사 GEO 도그푸딩 결과는?](/faq/dogfooding/)

**측정 출처**
- 자체 진단 v2.1 (KHub `037c302e`)
- 도그푸딩 영업 자료 v1.0 (KHub `4212e705`)
- A-02 dogfooding-intro (KHub `d16da5e5`)

**측정 기간**: 2026-04-01 ~ 2026-04-30
