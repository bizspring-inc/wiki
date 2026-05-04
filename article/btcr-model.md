---
id: art-202606-btcr-model
schema_type: Article
canonical_url: https://wiki.bizspring.co.kr/article/btcr-model/
title: "B-TCR 통합 책임 모델 — Brand × Trust × Context × Relevance"
description: "비즈스프링 자사 도그푸딩에서 발견한 패턴을 일반화한 통합 책임 모델. T(Trust 그릇) + C(Context 맥락) + R(Relevance 측정)의 입체 구조와 Distribution 책임 분리."
last_updated: 2026-05-02
lang: ko
status: published
schema:
  headline: "B-TCR 통합 책임 모델 — Brand × Trust × Context × Relevance"
  description: "GEO 시대의 Brand Citation Moat 구축 프레임워크. T·C·R 3축 책임을 분리하면서 자사가 통합 운영하는 모델."
  author:
    "@type": Person
    name: "이철승 (Charles Lee)"
    url: https://wiki.bizspring.co.kr/person/charles/
  datePublished: 2026-05-02
  dateModified: 2026-05-02
  about:
    - B-TCR Model
    - Trust Container
    - Context Management
    - Relevance Measurement
    - Distribution Engine
trust:
  expertise:
    - "B-TCR 통합 책임 모델 v1.0 자체 수립 (KHub 8dbeb99d)"
    - "T·C·R 3축 + Distribution 분리 구조 자사 적용 운영"
  experience:
    - "자사 도그푸딩 4월 baseline에서 모델 패턴 발견"
    - "Track 2(T) + Track 3(C) + Track 4(R) + BizActioner(Distribution) 4축 동시 운영"
  authoritativeness:
    - "비즈스프링 22년 데이터 측정 영역 운영"
    - "자사 75% 솔루션 사용률 도그푸딩 검증"
  trustworthiness: "(주)비즈스프링 / Bizspring Inc. — 자사 첫 사용자 약속"
  sameAs:
    - "https://www.bizspring.co.kr"
    - "https://www.bizspring.co.kr/prd_geocare.php"
    - "https://wiki.bizspring.co.kr/person/charles/"
  provider: "비즈스프링"
  updated_signals: "monthly review by PO — A-03/A-06/A-09 시리즈 자사 적용 결과 정기 발행"
---

## 정의

**B-TCR 통합 책임 모델**(B-TCR Integrated Responsibility Model)은 비즈스프링이 자사 GEO 도그푸딩에서 도출한 Brand Citation Moat 구축의 4축 책임 분리·통합 운영 모델이다. **B**(Brand) = 외부 결과, **T**(Trust 그릇) + **C**(Context 맥락) + **R**(Relevance 측정) = 3축 책임 + Distribution Engine = 별도 책임으로 구성된다.

## 개요

B-TCR 모델은 다음 4개 영역을 분리된 책임으로 운영하면서 하나의 Brand Citation Moat 결과로 통합한다.

<figure style="margin: 32px 0; text-align: center;">
<svg viewBox="0 0 520 360" role="img" aria-labelledby="btcr-title btcr-desc" style="max-width: 520px; width: 100%; height: auto;">
<title id="btcr-title">B-TCR 통합 책임 모델 다이어그램</title>
<desc id="btcr-desc">중심에 B(Brand) 노드가 있고, 외곽에 T(Trust 그릇), C(Context 맥락), R(Relevance 측정) 3개 노드가 배치된다. Distribution Engine은 별도 책임으로 분리된다.</desc>
<g font-family="'Pretendard', sans-serif">
<line x1="260" y1="180" x2="130" y2="100" stroke="hsl(203 94% 62%)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="260" y1="180" x2="390" y2="100" stroke="hsl(248 81% 65%)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="260" y1="180" x2="260" y2="280" stroke="hsl(167 70% 47%)" stroke-width="2" stroke-dasharray="4 3"/>
<circle cx="260" cy="180" r="50" fill="hsl(210 11% 15%)" />
<text x="260" y="178" text-anchor="middle" font-size="22" font-weight="700" fill="white" letter-spacing="-0.02em">B</text>
<text x="260" y="200" text-anchor="middle" font-size="11" fill="hsl(220 9% 96%)">Brand</text>
<g transform="translate(60,55)">
<rect x="0" y="0" width="140" height="80" rx="8" fill="hsl(203 100% 98%)" stroke="hsl(203 94% 62%)" stroke-width="2"/>
<text x="70" y="28" text-anchor="middle" font-size="20" font-weight="700" fill="hsl(203 58% 47%)" letter-spacing="-0.02em">T</text>
<text x="70" y="48" text-anchor="middle" font-size="12" font-weight="600" fill="hsl(210 11% 15%)">Trust 그릇</text>
<text x="70" y="65" text-anchor="middle" font-size="10" fill="hsl(208 7% 46%)">Wiki / Schema.org / sameAs</text>
</g>
<g transform="translate(320,55)">
<rect x="0" y="0" width="140" height="80" rx="8" fill="hsl(249 86% 96%)" stroke="hsl(248 81% 65%)" stroke-width="2"/>
<text x="70" y="28" text-anchor="middle" font-size="20" font-weight="700" fill="hsl(249 41% 49%)" letter-spacing="-0.02em">C</text>
<text x="70" y="48" text-anchor="middle" font-size="12" font-weight="600" fill="hsl(210 11% 15%)">Context 맥락</text>
<text x="70" y="65" text-anchor="middle" font-size="10" fill="hsl(208 7% 46%)">페르소나 / 쿼리풀 / envelope</text>
</g>
<g transform="translate(190,235)">
<rect x="0" y="0" width="140" height="80" rx="8" fill="hsl(160 65% 95%)" stroke="hsl(167 70% 47%)" stroke-width="2"/>
<text x="70" y="28" text-anchor="middle" font-size="20" font-weight="700" fill="hsl(163 72% 35%)" letter-spacing="-0.02em">R</text>
<text x="70" y="48" text-anchor="middle" font-size="12" font-weight="600" fill="hsl(210 11% 15%)">Relevance 측정</text>
<text x="70" y="65" text-anchor="middle" font-size="10" fill="hsl(208 7% 46%)">Citation / iROAS / BML</text>
</g>
<line x1="260" y1="320" x2="260" y2="340" stroke="hsl(208 7% 46%)" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="170" y="335" width="180" height="22" rx="4" fill="hsl(220 9% 96%)" stroke="hsl(210 9% 77%)" stroke-width="1" stroke-dasharray="2 2"/>
<text x="260" y="350" text-anchor="middle" font-size="11" font-weight="500" fill="hsl(208 7% 46%)">Distribution Engine (별도 책임)</text>
</g>
</svg>
<figcaption style="font-size: 0.8125rem; color: hsl(208 7% 46%); margin-top: 8px;">그림 1. B-TCR 통합 책임 모델 — B(Brand) 중심 + T·C·R 3축 + Distribution 분리</figcaption>
</figure>

3축은 각각 다른 작업이지만, Brand Citation Moat 구축이라는 단일 결과로 합쳐진다. 분리된 책임 + 통합된 결과가 B-TCR 모델의 핵심이다.

## T (Trust) — 그릇 만들기

Trust 책임은 LLM이 인용 가능한 권위 자산을 구축하는 것이다.

| 요소 | 자산 |
|------|----|
| Wiki 컨테이너 | 자사 Wiki 33페이지 (FAQ + Service + Person + Article + Organization) |
| Schema.org JSON-LD | 5+2 Type (FAQPage / Service / Person / Article / Organization + WebSite + BreadcrumbList) |
| sameAs 매트릭스 | 자사 도메인 4개 + 외부 출처 링크 |
| Trust 키 v1.0 | 7묶음 (E-E-A-T + sameAs + provider + updated_signals) |

비즈스프링 자사 운영: 본 Wiki(현재 페이지 포함)는 T 단의 가동 자산이며, BIZSPRING_HUB 룸이 운영한다.

## C (Context) — 맥락 관리

Context 책임은 LLM이 인용할 만한 정합성 있는 콘텐츠를 생산하는 것이다.

| 요소 | 도구 |
|------|----|
| 페르소나 정의 | 고객 시나리오 분석 |
| 쿼리풀 운영 | LLM 검색 쿼리 시뮬레이션 |
| envelope 규격 | 외부 매체 발송 시 톤·형식 표준 |

비즈스프링 자사 운영: 본방 PREMIUM_GEO 엔진의 Track G content-gen이 C 단을 담당한다.

## R (Relevance) — 측정

Relevance 책임은 인용·클릭·전환의 정량 추적이다.

| 지표 | 정의 | 측정 도구 |
|------|----|----|
| **Citation** | LLM 인용 횟수 + SoM | GEOcare |
| **iROAS** | LLM 인입 트래픽의 광고비 환산 ROI | LIFT + AIR |
| **BML** (Brand Mention Lift) | Trust 7묶음 적용 전·후 인용 변화율 | A-03 시리즈 |

비즈스프링 자사 운영: 본방 PREMIUM_GEO 엔진의 Track B 빌더 + 측정이 R 단을 담당한다.

## Distribution Engine (별도 책임)

Distribution은 B-TCR 3축에서 명시적으로 분리된 책임이다. 자매방 BizActioner가 운반 R&D + 외부 매체 발송 wrapper를 담당한다.

분리 이유: 그릇·맥락·측정과 발송은 서로 다른 운영 주기를 갖는다. 그릇은 분기 단위로 갱신되지만 발송은 일·주 단위로 운영된다. 책임 분리를 통해 각 운영 주기를 독립적으로 최적화할 수 있다.

## 비즈스프링 자사 적용 매트릭스

| 영역 | 책임 방 | 자사 가동 자산 |
|------|----|----|
| **B** Brand 결과 | (외부) | LLM 인용·자사 도메인 5개 |
| **T** Trust 그릇 | BIZSPRING_HUB (본 방) | 자사 Wiki 33페이지, Schema.org JSON-LD, sameAs |
| **C** Context 맥락 | PREMIUM_GEO Track G | content-gen v8.2 |
| **R** Relevance 측정 | PREMIUM_GEO Track B | GEOcare + LIFT + AIR + BML |
| **Distribution** | BizActioner (자매방) | A-01~05 / B-01~08 / D-01~03 / E-01~03 wrapper |

## 모델 도출 배경

B-TCR 모델은 비즈스프링이 자사 GEO 도그푸딩 baseline 측정(2026-04)에서 발견한 4개 패턴을 일반화한 결과이다.

1. SoM↔클릭 괴리 — 인용 발생만으로 충분치 않음 (R 단 필요)
2. 동일 그룹 내 도메인 점수 분산 — 도메인별 그릇 차이 (T 단 필요)
3. 콘텐츠 톤 정합성 — LLM 인용 친화 톤 vs 일반 블로그 톤 (C 단 필요)
4. 외부 매체 운영 주기 분리 — 발송과 그릇 운영 주기 차이 (Distribution 분리)

## 관련 항목

- [Citation Moat 전략](/article/citation-moat/) — B-TCR 모델의 R 단 (측정) 기반
- [자사 GEO 도그푸딩 — 출발점](/article/dogfooding-intro/) — B-TCR 모델 도출의 baseline
- [비즈스프링 사명](/article/mission/) — B-TCR 모델의 사명 정합
- [도그푸딩 — 자사 적용](/faq/dogfooding/)

## 외부 출처

- 비즈스프링 자사 도그푸딩 결과 (2026-04 기준)
- 본방 PREMIUM_GEO Track B/C/G 운영 표준
- 자매방 BizActioner Distribution Engine 표준
- Schema.org `Article`, `Organization`, `Person`, `Service`, `FAQPage`, `BreadcrumbList` 표준
