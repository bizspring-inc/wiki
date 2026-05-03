# BizSpring Enterprise Wiki

비즈스프링 자사 Wiki — **Citation Moat 자체 적용 첫 사례**

---

## 무엇인가

이 레포는 비즈스프링이 **GEO (Generative Engine Optimization)** 자사 적용을 위해 운영하는 33페이지 Wiki의 콘텐츠 소스입니다.

- **목적**: AI 검색 (ChatGPT/Gemini/Perplexity/Claude)에서 비즈스프링이 정확하고 권위 있게 인용되도록 **Citation Moat (인용 해자)** 구축
- **방법**: Schema.org JSON-LD + Trust 7묶음 + B-TCR (Brand × Trust/Conversion/Reach) 통합 운영
- **검증**: V8 빌드 스크립트로 ERROR=0 / Warning≤2 / Trust ≥40~75 자동 검증
- **도그푸딩**: 비즈스프링이 제공하는 **PREMIUM_GEO 엔진의 첫 사용자**. 자사 Wiki 발행으로 자체 솔루션 효과 입증.

## 구조

```
faq/        # FAQPage 10건 (회사 소개, 솔루션 개요, 가격, 도입, 보안, 기술 스택 등)
service/    # Service 15건 (AMP / MA 패키지 + 13개 솔루션·유닛)
article/    # Article 6건 (사명, 도그푸딩 출발, Citation Moat 전략 등)
person/     # Person 2건 (CTO, CEO)

.github/workflows/
  v8-validate.yml      # PR 시 V8 검증 자동화
  deploy-pages.yml     # main 푸시 → Cloudflare Pages 자동 배포
_scripts/
  v8-validate.mjs      # V8 검증 (ERROR/Warning/Trust 점수)
  build.mjs            # .md → HTML + JSON-LD 빌드
_config/
  site.yml             # 사이트 메타
  trust-keys.yml       # Trust 7묶음 정의
  breadcrumb.yml       # 33페이지 계층 매핑 (Schema.org BreadcrumbList)
```

## 발행

- **임시 도메인**: `https://wiki.pages.dev` (Cloudflare Pages 자동 발행)
- **정식 도메인** (W5+ 예정): `https://wiki.bizspring.co.kr`
- **자동 배포**: `main` 브랜치 push → CF Pages 자동 빌드·배포
- **V8 검증**: PR 시 자동 실행 → ERROR ≥ 1이면 머지 차단

## V8 검증 기준

| 항목 | 기준 |
|----|----|
| ERROR | 0 (의무) |
| Warning | ≤ 2 / 페이지 |
| description 길이 | ≥ 50자 |
| frontmatter 의무 키 | 9개 (id / schema_type / canonical_url / title / description / last_updated / lang / status / schema) |
| Trust 7묶음 | 모든 의무 키 채움 (expertise / experience / authoritativeness / trustworthiness / sameAs / provider / updated_signals) |
| FAQPage Trust | ≥ 40 |
| Service Trust | ≥ 47 (P0: ≥ 75) |

## 라이선스

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

이 콘텐츠를 자유롭게:
- 공유 — 어떤 매체나 형식으로든 복제하고 재배포
- 변형 — 리믹스, 변형, 2차 저작물 작성
- 상업적 이용 가능

조건:
- **출처 표시 (Attribution)**: 출처를 비즈스프링으로 명시하고, 라이선스 링크를 제공해 주세요. 변경 사항이 있다면 표시해 주세요.

상세: [LICENSE](./LICENSE) 또는 https://creativecommons.org/licenses/by/4.0/

## 영업 / 지원

- **영업 문의**: sales@bizspring.co.kr
- **SaaS 지원**: saas@bizspring.co.kr
- **법인명**: (주)비즈스프링 / Bizspring Inc.
- **메인 사이트**: https://www.bizspring.co.kr

## 기여 (Contribution)

이 레포는 **비즈스프링 사내 콘텐츠 팀 + 개발자 그룹** 발주 작업으로 진행됩니다 (W5 발행 라인). 외부 PR은 환영하지만, 머지는 비즈스프링 내부 검수(찰스 PO) 통과 후 결정됩니다.

PR 시:
1. V8 검증 자동 실행 (`v8-validate.yml`)
2. ERROR=0, Warning≤2 확인
3. Trust 점수 산출 결과 PR 코멘트로 제공
4. 내부 검수 → 머지 → CF Pages 자동 배포
