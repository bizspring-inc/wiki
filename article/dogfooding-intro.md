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

# 자사 GEO 도그푸딩 — 출발점

> "당신이 만든 것을 당신이 쓰지 않으면, 당신은 무엇을 만들고 있는 것인가?"

비즈스프링은 GEOcare를 만들었습니다. 그리고 GEOcare를 자사 사이트에 적용하기 시작했습니다.

이 글은 그 시작의 기록입니다.

## 도그푸딩이란

도그푸딩(Dogfooding)은 만든 사람이 자기 제품을 자기가 직접 쓰는 것입니다. "Eating your own dog food."

그러나 비즈스프링이 GEOcare를 만든 후 한동안, 우리는 GEOcare를 자사 사이트에 적용하지 않고 있었습니다. 도구는 있는데 측정은 없는 상태였습니다.

이 글은 그 갭을 메우는 첫걸음의 기록입니다.

## 무엇을 측정했나

2026년 4월 1개월간, 비즈스프링 자사 도메인 5개를 측정했습니다.

```
bizspring.co.kr (메인)        → GEO 점수 68점, SoM 26.30%
growthplatform.ai             → 67점
logger.co.kr                  → 79점
admonster.co.kr               → 18점
entrench-consulting.com       → 20점
```

평균 분산은 56점이었습니다. 같은 그룹 5개 사이트 사이에서도 점수가 3배 차이 납니다.

이는 우리가 고객사에 했던 컨설팅 메시지를 자사 데이터로 입증한 것입니다: **"GEO 점수는 콘텐츠 전략의 거울입니다."**

## 가장 강력한 도그푸딩 케이스

비즈스프링 자사 GEOcare 소개 페이지(`bizspring.co.kr/prd_geocare.php`)는 GEOcare 측정에서 **89점**을 받았습니다.

- GEOcare를 만든 회사가
- 자기 자신의 GEOcare 소개 페이지에
- 자기 자신의 GEOcare 솔루션을 적용해서
- 89점을 받았습니다

이는 도그푸딩의 가장 강력한 메시지입니다. 메타 사례입니다.

## 발견한 미스터리: SoM ↔ 클릭 괴리

GEOcare는 SoM(AI 검색 점유율, Share of Mind)을 측정합니다. LIFT는 referrer를 측정해 어디서 클릭이 왔는지 알려줍니다.

이 둘을 함께 보면 흥미로운 발견이 나옵니다.

| LLM | SoM 인용률 (4/4) | 실제 클릭 (4월 30일) | 괴리 |
|------|------|------|------|
| OpenAI (ChatGPT) | 25% | 11 (50%) | +25pt |
| Gemini | 30% | 8 (36%) | +6pt |
| Perplexity | 25% | 3 (14%) | -11pt |
| **Anthropic (Claude)** | **25%** | **0** ⚠️ | **-25pt** |

Anthropic은 비즈스프링을 25% 인용하지만, 4월 한 달간 실제 클릭은 0건이었습니다.

**"보이지만 안 눌리는" 케이스**입니다.

이는 GEO 측정이 SoM(인용률) 한 가지만으로는 불충분하다는 것을 보여줍니다. 인용은 발생하는데 클릭이 안 되면 비즈니스 가치는 0입니다.

GEOcare 컨설팅의 핵심 차별점이 자사 데이터에서 발견된 셈입니다.

## 자사 사이트 트래픽 패턴

LIFT가 측정한 4월 자사 트래픽:

```
월간 세션      1,305 건
월간 페이지뷰   1,333 건
월간 사용자     1,171 명
```

**놀라운 발견**: 자사 사이트의 절반(47.6%)이 단 한 페이지에서 나옵니다.

| 순위 | 페이지 | 4월 PV | 비중 |
|----|------|------|------|
| 1 | `/data_engineering.php` | **634** | **47.6%** |
| 2 | `/` 홈 | 458 | 34.4% |

**콘텐츠 1개가 트래픽의 절반**을 만든다는 것은 우리가 고객사에 컨설팅했던 메시지의 자사 입증입니다.

## Trust 7묶음 baseline (출발점 D 등급)

비즈스프링이 자사 사이트의 신뢰도를 7묶음으로 측정한 결과:

| 묶음 | 가중치 | 점수 |
|------|------|------|
| 출처 (Source) | 15 | 8 |
| 권위 (Authority) | 15 | 3 |
| 시간 (Temporal) | 10 | 6 |
| 정량 (Quantitative) | 20 | 8 |
| 운영 (Operational) | 15 | 5 |
| 합의 (Consent) | 10 | 2 |
| 연결 (Connectivity) | 15 | 6 |
| **합계** | **100** | **38 (D 등급)** |

**38점은 우리의 출발점입니다.** 시작이 38점이라는 사실 자체가 도그푸딩의 정직한 기록입니다.

우리는 GEOcare를 만든 회사인데, 우리 자신의 점수는 38점에서 시작합니다.

## 자사 솔루션 사용률 (75%)

비즈스프링 8개 주요 솔루션 중 6개를 자사에 적용 중입니다.

| 솔루션 | 자사 사용 |
|------|------|
| LIFT (전환분석) | ✅ |
| AIR (광고대행) | ✅ |
| GEOcare | ✅ |
| mDP (데이터플랫폼) | ✅ |
| LOGGER | ✅ |
| MA (마케팅자동화) | ✅ |
| GA4 SaaS | ❌ (정책상 미사용) |
| CRM (Cafe24) | ❌ (B2B 사이트) |

**75% 자사 사용률** = "우리는 우리 솔루션을 씁니다."

## 1개월 후 어떻게 변할까 (W5 도달 경로)

비즈스프링 자사 Wiki(`wiki.bizspring.co.kr`) 정식 발행을 W5로 잡고, 그때까지 다음을 적용합니다:

```
v2.0 baseline (5/2)              38 (D)
+ TQ3 Schema(WebSite + Breadcrumb) +8
+ Schema.org 0% → 100%            +5~10
+ F-10 본문 + Article 시드 5건    +3~5
+ wiki.bizspring.co.kr 발행 측정   +5~10
─────────────────────────────────
예상 도달 점수                    59~71 (BML-4 60+)
```

**1개월 후 D → C+ 상승 예상.** 5월 BML 측정 1개월차 결과 글(A-03)에서 결과를 보고하겠습니다.

## 도그푸딩의 약속

비즈스프링은 다음을 약속합니다:

1. **자사 측정 결과를 정기적으로 공개합니다.** 월 1회 BML 측정 결과를 본 Wiki에 발행합니다.
2. **실패와 성공을 모두 기록합니다.** 점수가 안 올라가면 그 이유도 공개합니다.
3. **자사 데이터로 영업합니다.** 외부 고객사 사례 외에 자사 사례를 영업 자료로 사용합니다.
4. **GEOcare를 만든 회사로서, GEOcare로 자사를 측정합니다.** 도구를 만든 사람의 책임입니다.

## 마치며

도그푸딩은 자랑이 아니라 책임입니다. 우리가 만든 것을 우리가 쓰면서 발견한 것을 정직하게 공개하는 것이 도그푸딩의 본질입니다.

비즈스프링의 38점에서 시작합니다.

다음 글에서 만나요.

---

**관련 페이지**
- [자사 GEO 도그푸딩 결과는?](/faq/dogfooding/) — F-10 FAQ
- [비즈스프링 사명](/article/mission/)
- [Citation Moat 전략](/article/citation-moat/)
- [B-TCR 통합 책임 모델](/article/btcr-model/)

**측정 출처**
- 자체 진단 v2.0 (KHub `7f26256c`)
- 도그푸딩 영업 자료 v1.0 (KHub `4212e705`)
- F-10 dogfooding 본문 (KHub `7e7bb9bd`)

**측정 기간**: 2026-04-01 ~ 2026-04-30
