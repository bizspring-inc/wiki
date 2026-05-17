---
title: "B-TCR baseline 측정 — 자사 W24 T76 / C71 / R79"
schema_type: Article
description: "비즈스프링이 B-TCR (Brand · Trust · Context · Relevance) 통합 책임 모델을 자사에 적용한 W24 baseline. Trust 76 / Context 71 / Relevance 79 — 시간 추적 출발점."
last_updated: 2026-05-17
sources:
  - khub: "8dbeb99d-5b10-4fb8-879b-7a923027c014"  # B-TCR 통합 책임 모델 v1.0
  - khub: "5c98ef46-b232-45f6-97fd-2e1a69c5b24a"  # 본방 자체 헌법 v1.2
  - khub: "3c803acb-7aa5-40f1-8200-a015127b0cd8"  # 본방 Snapshot v2.20.27 (W24 baseline 인용원)
  - khub: "4c1a4bbd-1efc-45e5-8fab-449be008da99"  # B-TCR Score 측정 엔진
sameAs:
  - https://www.bizspring.co.kr/
  - https://blog.bizspring.co.kr/
  - https://growthplatform.ai/
  - https://geocare.ai/
  - https://logger.co.kr/
  - https://wiki.bizspring.co.kr/
---

# B-TCR baseline 측정 — 자사 W24 T76 / C71 / R79

> 비즈스프링이 B-TCR 통합 책임 모델을 자사에 적용한 첫 측정 결과. Trust 그릇 76 / Context 맥락 71 / Relevance 측정 79. 시간 추적 baseline 출발점.

## 시나리오

"GEO 책임 모델이 측정 가능한가? 모델을 만든 회사가 자기에게 적용해서 점수를 공개하는가?"

비즈스프링은 B-TCR (Brand · Trust · Context · Relevance) 통합 책임 모델을 만들었다. 모델의 객관성을 입증하기 위해 **자사 도메인에 직접 적용하여 baseline 점수를 측정·공개한다**.

## B-TCR 3축 — 간단 정의

| 축 | 의미 | 책임 |
|---|---|---|
| **T (Trust 그릇)** | Wiki 컨테이너 + Schema.org JSON-LD + sameAs 매트릭스 | 비즈스프링 단독 |
| **C (Context 맥락)** | 페르소나 / 쿼리 풀 / 콘텐츠 명세 + 발송 envelope | 비즈스프링 단독 |
| **R (Relevance 측정)** | Citation 추적 + iROAS + BML 점수 + D-O-M 환류 | 비즈스프링 단독 |
| **D (Distribution)** | 외부 매체 발송·운반 | **위임** (BizActioner / 자사 풀 직진) |

핵심 추상: **비즈스프링 = Strategy + Measurement HQ**. Distribution만 운반 엔진에 위임.

상세 모델: [B-TCR 통합 책임 모델](/article/btcr-model/) 참조.

## 자사 W24 baseline 실측

**측정 시점**: 2026년 5월 중순 (W24)
**측정 대상**: 비즈스프링 자사 운영 라인 (Track 2 Wiki + Track 3 콘텐츠런처 + Track 4 측정)
**측정 모델**: B-TCR Score 측정 엔진 자체 개발

### 3축 점수

| 축 | 점수 | 등급 |
|---|---:|---|
| **T (Trust 그릇)** | **76** | B+ |
| **C (Context 맥락)** | **71** | B |
| **R (Relevance 측정)** | **79** | B+ |
| **종합** | **75.3** | **B+** |

### 축별 평가

**T 76점** — Wiki 컨테이너 인프라 구축 완료. Schema.org JSON-LD 자동 빌드 + sameAs 7건 매트릭스 + Frontmatter v1.5 표준 가동. 약점: 페이지 수 절대량 부족 (현재 12건 라이브 / 38건 인벤토리 vs 폐기 검토 중).

**C 71점** — 페르소나·쿼리 풀 부분 정의. Atomic Answer 명세 일부 작성. 약점: 다른 팀(콘텐츠 작성자) 인터페이스 표준화 미완. 콘텐츠 작성 단계에서 1차 검수 게이트 부재가 c8adea49 회수 사건으로 드러남 (학습 #96).

**R 79점** — Citation 추적 인프라 구축 (GEOcare DB 5도메인 가동 + LIFT referrer 분석). BML 점수 산출 가능 상태. 약점: D-O-M 환류 자동화 미완 — 측정 결과가 T·C 단으로 자동 환류되는 파이프라인 부재.

## Distribution 책임 분리 — 측정 시 제외 영역

B-TCR baseline에 **Distribution(D 단)은 포함되지 않는다**. D 단은 비즈스프링이 직접 운영하지 않고 운반 엔진(BizActioner / 자사 풀)에 위임하기 때문. 비즈스프링은 T·C·R 3축만 책임진다.

이 분리 자체가 모델의 핵심 설계 결정이다. **Strategy + Measurement는 본부, Distribution은 엔진** — 책임 영역 분리가 측정의 객관성을 보장한다.

## 시간 추적 baseline 의미

W24 점수는 출발점이다. 모델 적용 효과는 **시간에 따른 점수 변화**로 측정된다.

| 시점 | 측정 예정 | 비교 기준 |
|---|---|---|
| W24 (현재) | T76 / C71 / R79 | baseline |
| W28 (D+30) | 측정 예정 | W24 대비 |
| W32 (D+60) | 측정 예정 | W24 대비 |
| W37 (D+90) | 측정 예정 | W24 대비 |

각 시점에서 어떤 축이 얼마나 변했는지가 모델 가동 증거가 된다.

## 메타 인사이트

> 책임 모델을 만든 회사가 자기 모델로 자기를 측정해서 점수를 공개하는 것 자체가 **모델 측정 가능성에 대한 1차 증거**다.

C 71점이 가장 낮다는 사실은 비즈스프링 콘텐츠 운영의 1차 약점이 Context 단(콘텐츠 명세 + 검수 게이트)임을 보여준다. c8adea49 회수 사건(LLM 자동 생성 본문이 사실 검증 없이 발사된 케이스)이 정확히 C 단 약점에서 발생했다. **측정 결과가 모델 약점을 정확히 진단했다는 사실 자체가 모델의 객관성 증거다.**

## 관련 항목

- [B-TCR 통합 책임 모델](/article/btcr-model/) — 모델 일반 정의
- [Citation Moat 전략 — SoM과 클릭의 괴리](/article/citation-moat/) — R 단 측정 적용 사례
- [GEOcare가 GEOcare를 측정한다](/dogfooding/geocare-self-measurement/) — R 단 1차 데이터
- [비즈스프링 사명 — 측정으로 만드는 마케팅](/article/mission/) — 측정 가능성 원칙
- [자사 GEO 도그푸딩 — 출발점 (2026년 4월 baseline)](/article/dogfooding-intro/) — 도그푸딩 라인 출발

## 외부 출처

- 비즈스프링 본사: https://www.bizspring.co.kr/
- 기술 블로그: https://blog.bizspring.co.kr/
- GEOcare 측정 도구: https://geocare.ai/

## 측정 시점

- W24 baseline: 2026년 5월 중순
- 본 페이지 작성: 2026-05-17
- 다음 측정: W28 (D+30) — 2026년 6월 중순 예정
