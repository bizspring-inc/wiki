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

## 정의

**Citation Moat**(인용 해자)는 AI 검색 시대에서 권위 있는 자사 자산을 통해 LLM 인용을 안정적으로 확보하는 GEO 마케팅 전략이다. SoM(Share of Mind, 인용률)과 실제 클릭률 사이의 괴리를 측정·해소하는 체계로 구성된다.

비즈스프링은 자사 4월 baseline에서 **Anthropic 25% 인용 vs 0건 클릭**이라는 케이스를 발견하여, 이 괴리를 Citation Moat 측정의 출발점으로 삼는다.

## 개요

Citation Moat 측정은 다음 두 지표를 동시에 운영한다.

| 지표 | 측정 도구 | 의미 |
|------|----|----|
| **SoM** (Share of Mind) | GEOcare | LLM이 자사를 얼마나 인용하는가 |
| **클릭** (Click Through) | LIFT (referrer 분석) | LLM에서 자사 사이트로 실제 넘어온 트래픽 |

두 지표 사이의 괴리가 Citation Moat 약점을 드러낸다.

## 발견 사례 — Anthropic 25%↔0% 괴리 (2026-04)

자사 4월 측정 결과 4개 LLM의 SoM과 실제 클릭은 다음과 같이 측정되었다.

<figure style="margin: 32px 0;">
<svg viewBox="0 0 600 280" role="img" aria-labelledby="som-click-title som-click-desc" style="max-width: 100%; width: 100%; height: auto;">
<title id="som-click-title">SoM 인용률과 실제 클릭의 괴리 (2026-04)</title>
<desc id="som-click-desc">4개 LLM의 SoM 인용률은 25~30%로 비슷하지만 실제 클릭률은 0~50%로 분산이 크다. 특히 Anthropic은 25% 인용에도 불구하고 4월 1개월간 클릭이 0건이다.</desc>
<text x="0" y="20" font-family="'Pretendard', sans-serif" font-size="13" font-weight="600" fill="hsl(210 11% 15%)">LLM별 SoM 인용률 vs 실제 클릭 (2026-04)</text>
<text x="0" y="38" font-family="'Pretendard', sans-serif" font-size="11" fill="hsl(208 7% 46%)">왼쪽 막대 = SoM (인용률 %) / 오른쪽 막대 = 클릭 (월간 건수)</text>
<g font-family="'Pretendard', sans-serif" font-size="12" fill="hsl(210 11% 15%)">
<g transform="translate(0,70)">
<text x="0" y="14" font-weight="500">OpenAI</text>
<rect x="80" y="2" width="125" height="18" fill="hsl(203 94% 62%)" rx="3"/>
<text x="210" y="16" font-size="11" fill="hsl(208 7% 46%)">SoM 25%</text>
<rect x="320" y="2" width="220" height="18" fill="hsl(167 70% 47%)" rx="3"/>
<text x="545" y="16" font-size="11" fill="hsl(208 7% 46%)">11건 (50%)</text>
</g>
<g transform="translate(0,100)">
<text x="0" y="14" font-weight="500">Gemini</text>
<rect x="80" y="2" width="150" height="18" fill="hsl(203 94% 62%)" rx="3"/>
<text x="235" y="16" font-size="11" fill="hsl(208 7% 46%)">SoM 30%</text>
<rect x="320" y="2" width="160" height="18" fill="hsl(167 70% 47%)" rx="3"/>
<text x="485" y="16" font-size="11" fill="hsl(208 7% 46%)">8건 (36%)</text>
</g>
<g transform="translate(0,130)">
<text x="0" y="14" font-weight="500">Perplexity</text>
<rect x="80" y="2" width="125" height="18" fill="hsl(203 94% 62%)" rx="3"/>
<text x="210" y="16" font-size="11" fill="hsl(208 7% 46%)">SoM 25%</text>
<rect x="320" y="2" width="60" height="18" fill="hsl(167 70% 47%)" rx="3"/>
<text x="385" y="16" font-size="11" fill="hsl(208 7% 46%)">3건 (14%)</text>
</g>
<g transform="translate(0,160)">
<text x="0" y="14" font-weight="700" fill="hsl(7 100% 60%)">Anthropic</text>
<rect x="80" y="2" width="125" height="18" fill="hsl(203 94% 62%)" rx="3"/>
<text x="210" y="16" font-size="11" fill="hsl(208 7% 46%)">SoM 25%</text>
<rect x="320" y="2" width="3" height="18" fill="hsl(7 100% 60%)" rx="3"/>
<text x="328" y="16" font-size="11" font-weight="700" fill="hsl(7 100% 60%)">0건 ⚠ "보이지만 안 눌린다"</text>
</g>
</g>
<line x1="80" y1="62" x2="80" y2="190" stroke="hsl(210 14% 89%)" stroke-width="1"/>
<line x1="320" y1="62" x2="320" y2="190" stroke="hsl(210 14% 89%)" stroke-width="1"/>
<text x="80" y="215" font-family="'Pretendard', sans-serif" font-size="11" fill="hsl(208 7% 46%)">SoM 0%</text>
<text x="320" y="215" font-family="'Pretendard', sans-serif" font-size="11" fill="hsl(208 7% 46%)">클릭 0건</text>
</svg>
<figcaption style="font-size: 0.8125rem; color: hsl(208 7% 46%); margin-top: 8px;">그림 1. 4개 LLM의 SoM 인용률(파랑)과 실제 클릭(녹색) 비교 (자사 측정, 2026-04)</figcaption>
</figure>

| LLM | SoM 인용률 (4/4 측정) | 실제 클릭 (4월 1개월) | 괴리 (클릭% − SoM%) |
|------|------|------|------|
| OpenAI (ChatGPT) | 25% | 11건 (50%) | +25pt |
| Gemini | 30% | 8건 (36%) | +6pt |
| Perplexity | 25% | 3건 (14%) | -11pt |
| **Anthropic (Claude)** | **25%** | **0건** | **-25pt** |

Anthropic은 비즈스프링을 25% 인용하지만, 2026년 4월 한 달간 실제 클릭은 0건이었다. 이는 **"보이지만 안 눌린다"** 케이스로 분류된다.

## SoM 단독 측정의 한계

GEO 측정의 통상 지표는 SoM이다. 그러나 SoM은 **인용 발생 여부**만 측정할 뿐, **인용이 트래픽으로 전환되는지**는 측정하지 못한다.

비즈스프링은 SoM과 클릭을 동시 측정하여 다음 4개 케이스로 분류한다.

| SoM | 클릭 | 케이스 | 처리 방향 |
|----|----|----|----|
| 높음 | 높음 | 정상 운영 (이상적 상태) | 유지 |
| 높음 | **낮음** | **"보이지만 안 눌린다"** (Anthropic 케이스) | Citation Moat 보강 |
| 낮음 | 높음 | 비주류 채널 우위 | SoM 보강 |
| 낮음 | 낮음 | 미성숙 도메인 | 전반 강화 |

## Citation Moat 4축 보강 체계

Citation Moat가 약한 도메인(높은 SoM·낮은 클릭)에 대해 다음 4축을 보강한다.

1. **Trust 그릇** — Schema.org JSON-LD + BreadcrumbList + sameAs 매트릭스
2. **Context 맥락** — 페르소나·쿼리풀에 정합한 콘텐츠 생산
3. **Relevance 측정** — Citation 횟수 + iROAS + BML 정량 추적
4. **Distribution** — 외부 매체 발송 (별도 책임 — 자매방 BizActioner)

이 체계가 [B-TCR 통합 책임 모델](/article/btcr-model/)이며, 비즈스프링 자사 도그푸딩에서 도출되어 일반화된 모델이다.

## 관련 항목

- [자사 GEO 도그푸딩 — 출발점](/article/dogfooding-intro/) — 본 측정의 baseline
- [B-TCR 통합 책임 모델](/article/btcr-model/) — Citation Moat 보강 체계의 일반화
- [비즈스프링 사명](/article/mission/) — 측정으로 만드는 마케팅
- [도그푸딩 — 자사 적용](/faq/dogfooding/)

## 외부 출처

- 비즈스프링 GEOcare 자체 측정 결과 (SoM, 2026-04 기준)
- 비즈스프링 LIFT 자체 측정 결과 (referrer, 2026-04 기준)
- Anthropic / OpenAI / Gemini / Perplexity 4 LLM 인용·클릭 데이터 (자체 분석)
