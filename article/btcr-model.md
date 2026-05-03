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

# B-TCR 통합 책임 모델 — Brand × Trust × Context × Relevance

> "Brand Citation Moat은 Trust 그릇 + Context 맥락 + Relevance 측정의 입체 구조다."

## 모델 개요

비즈스프링은 자사 도그푸딩 과정에서 GEO 시대의 Brand Citation Moat을 구축하려면 **3축 책임을 분리하면서 통합 운영**해야 한다는 패턴을 발견했습니다.

이를 **B-TCR 통합 책임 모델**이라 명명합니다.

```
B (Brand)
   │
   ├── T (Trust 그릇)        — Wiki / Schema.org / sameAs
   ├── C (Context 맥락 관리)   — 페르소나 / 쿼리풀 / envelope
   └── R (Relevance 측정)     — Citation / iROAS / BML
                              ↓
                    [Distribution Engine]
                    (외부 매체 발송 = 별도 책임)
```

3축은 각각 다른 작업이지만, **Brand Citation Moat 구축이라는 하나의 결과로 합쳐집니다.** 분리된 책임 + 통합된 결과 = B-TCR 모델.

## T (Trust) — 그릇 만들기

T 단의 책임은 **인용받을 수 있는 그릇을 만드는 것**입니다.

### 1. Wiki 컨테이너 (자사 본 Wiki)
- 33페이지 정의 (FAQ + Service + Person + Article + Organization)
- Schema.org JSON-LD 5+2 Type (FAQPage / Service / Person / Article / Organization + WebSite + BreadcrumbList)
- canonical_url 패턴 + page_id 체계 + 라이프사이클

### 2. Trust 7묶음
| 묶음 | 가중치 | 설명 |
|------|------|------|
| 출처 (Source) | 15 | sameAs 매트릭스 + 도메인 매트릭스 |
| 권위 (Authority) | 15 | Person author + sameAs |
| 시간 (Temporal) | 10 | date_published + last_updated |
| 정량 (Quantitative) | 20 | KPI 인용 + Citation 측정 |
| 운영 (Operational) | 15 | 솔루션 가동 + 운영 데이터 |
| 합의 (Consent) | 10 | Person consent + Org legal_review |
| 연결 (Connectivity) | 15 | related_internal + cites_external |
| **합계** | **100** | (60+ = BML-4) |

T 단의 작업이 완료되면 **빈 그릇이지만 Trust 점수 60+ 가능한 상태**가 만들어집니다. 자사 33페이지에 적용해 보면 baseline 38점 → TQ3 적용 +8점 → 콘텐츠 본문 +20~25점 = W5 발행 시점에 60+ 도달.

## C (Context) — 맥락 관리

C 단의 책임은 **그릇에 담긴 콘텐츠를 어떤 맥락에 어떤 매체로 어떤 시점에 발신할지 결정**하는 것입니다.

### 1. 페르소나 + 쿼리 풀
- 자사가 누구를 대상으로 콘텐츠를 만드는가
- 그 페르소나가 어떤 LLM에 어떤 쿼리로 자사를 찾는가
- 쿼리 풀의 변동성 측정 (자사 SoM 9회 측정 분산 20pt)

### 2. 콘텐츠 ↔ 매체 ↔ 빈도 매핑
- 자사 LIFT 분석: B2B 트래픽 화요일 피크, 토요일 저점
- 콘텐츠 유형별 최적 매체 (Article = LinkedIn / 블로그, FAQ = SEO, Service = 직접 광고)
- 발행 빈도 (월 1건 정기 vs 분기 1건 deep)

### 3. envelope 표준
본 방이 BizActioner(Distribution Engine)에 보내는 발송 명세:
```
intent       (정의/비교/추천/문제/대안)
persona      + query_pool
content      (canonical_url + schema_type)
distribution (channel + schedule + cadence_id)
measurement  (citation_track_id)
```

## R (Relevance) — 측정

R 단의 책임은 **인용 → 클릭 → 전환의 전 사이클 측정**입니다.

### 1. SoM 측정 (GEOcare)
- 자사 SoM 26.30% (4월) — LLM 4종 분포 (Gemini 30 / OpenAI 25 / Anthropic 25 / Perplexity 25)
- 쿼리 풀 변경에 따른 변동 추적

### 2. Click 측정 (LIFT referrer)
- 자사 LLM 클릭 22건 (4월) — OpenAI 11 / Gemini 8 / Perplexity 3 / Anthropic 0
- LLM 도메인 referrer 자동 검출

### 3. iROAS 산정
- 광고비 vs LLM 유입 가치 환산
- UTM 매칭률 측정 (자사 5% → 표준화 필요)

### 4. BML 측정 (5단계)
- BML-1 (Invisible) ← BML-2 (Discoverable) ← BML-3 (Recognized) ← BML-4 (Authoritative) ← BML-5 (Dominant)
- 자사 baseline = BML-2 → W5 목표 BML-3~4

## Distribution Engine — 분리된 책임

T·C·R 3축이 본 방의 책임이라면, **Distribution(외부 매체로 실제 발송)은 분리된 책임**입니다.

비즈스프링 내부 구조에서 BizActioner 방이 Distribution Engine을 담당합니다:
- 자사 매체 발송 (Track C)
- 외부 인용 매체 발송 (Track D)
- 매체 연동 R&D (Track E)

본 방은 envelope만 만들고 BizActioner가 envelope을 받아 발송만 합니다. **메시지 결정은 본 방, 발송 실행은 BizActioner**.

이 분리가 중요한 이유는:
1. Distribution은 매체 변경에 민감 (메시지 변경 없이 매체만 바뀔 수 있음)
2. 측정 ↔ 메시지 ↔ 발송 책임이 합쳐지면 책임 추적 불가
3. 매체 R&D가 별도 트랙으로 운영돼야 새 매체 추가 시 메시지/측정 변화 없음

## B-TCR 모델의 본질 — 분리 + 통합

3축 분리의 의미:
- T 단 작업이 끝나도 C 단 작업은 별도 (그릇 ≠ 메시지)
- C 단 envelope이 만들어져도 R 단 측정은 별도 (메시지 ≠ 측정)
- Distribution 발송이 끝나도 R 단 측정은 다음 단계 (발송 ≠ 측정)

3축 통합의 의미:
- 한 회사가 모두 운영 (외부 위탁 X)
- 같은 데이터 소스 공유 (BizPO + BizData MCP)
- 같은 본 Wiki 컨테이너에서 출발 (단일 진실원)

## B-TCR vs 기존 GEO 컨설팅

| 영역 | 일반 GEO 컨설팅 | B-TCR 모델 |
|------|------|------|
| Trust | Schema.org 적용 1회 | 7묶음 + 라이프사이클 + 자동 메타 |
| Context | 콘텐츠 작성 외주 | envelope 표준 + 페르소나 + 쿼리 풀 |
| Relevance | SoM 측정 1지표 | SoM + Click + iROAS + BML 4지표 |
| Distribution | 별도 매체 운영팀 | BizActioner Engine 분리 |
| 자사 적용 | 미적용 | **75% 솔루션 자사 사용 + 도그푸딩** |

## 본 모델의 첫 사용자 = 비즈스프링

B-TCR 모델은 자사 도그푸딩에서 발견한 패턴입니다. 첫 사용자는 비즈스프링 자체입니다.

자사 적용 결과가 본 Wiki 시리즈에 정기 발행됩니다:
- A-02: 출발점 (38점, D)
- A-03 (W5 후): 1개월차 결과
- A-06 (W9 후): 2개월차 결과
- A-09 (W13 후): 3개월차 결과

도그푸딩의 본질은 **자사가 첫 사용자가 되는 것**입니다. 본방 PREMIUM_GEO가 만든 Wiki 빌더의 첫 사용자도 비즈스프링이고, 본 방이 정의한 Trust 키 표준의 첫 적용자도 비즈스프링입니다.

이것이 GEO 시대의 정직한 마케팅입니다.

## 마치며

B-TCR 모델은 자사가 22년간 데이터 측정 영역에서 일하면서 GEO 시대에 도착한 결론입니다.

**Brand Citation Moat은 Schema 한 줄로 만들어지지 않습니다.**
**T·C·R 3축이 입체적으로 결합돼야 만들어집니다.**
**그리고 첫 사용자는 자사여야 합니다.**

다음 글에서 이 모델의 측정 결과를 보고하겠습니다.

---

**관련 페이지**
- [비즈스프링 사명](/article/mission/)
- [자사 GEO 도그푸딩 — 출발점](/article/dogfooding-intro/)
- [Citation Moat 전략](/article/citation-moat/)
- [자사 GEO 도그푸딩 결과는?](/faq/dogfooding/)

**측정 출처**
- B-TCR 통합 책임 모델 v1.0 (KHub `8dbeb99d`)
- 자체 진단 v2.1 (KHub `037c302e`)
- 도그푸딩 영업 자료 v1.0 (KHub `4212e705`)
- A-01, A-02, A-04 Article 본문

**측정 기간**: 2026-04-01 ~ 2026-04-30
