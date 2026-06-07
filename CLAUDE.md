# CLAUDE.md — 영국학생비자센터 프로젝트 컨텍스트

> 이 파일은 Claude Code 세션 시작 시 자동으로 읽혀 프로젝트 전반의 컨텍스트를 제공합니다.
> 어느 PC에서 작업하더라도 이 파일이 있으면 이전 작업 맥락을 이어갈 수 있습니다.

## 📌 프로젝트 개요

**영국학생비자센터** (https://ukvisa.kr) — 영국유학센터 신촌지사 운영.
영국 학생비자 무료 대행 + 3종 유료 비자 대행을 안내하는 정적 사이트입니다.

- **기술 스택**: Next.js 14 (App Router) · TypeScript · Tailwind CSS · 정적 export (`output: "export"`)
- **호스팅**: GitHub Pages (main 브랜치 push 시 GitHub Actions가 자동 빌드·배포)
- **리포**: https://github.com/uksinchon/UK-VISA-Free
- **폼 백엔드**: Formspree (`https://formspree.io/f/xqaqagrk`)
- **검색엔진 인증**: Google Search Console + Naver 웹마스터도구

## 🗂️ 가장 자주 수정하는 파일 (우선순위)

| 파일 | 목적 | 수정 빈도 |
|------|------|---------|
| `src/data/visas.ts` | 비자별 정보 (가격·서류·절차·가족 동반 등) — 모든 비자 상세 페이지의 source of truth | ⭐⭐⭐ |
| `src/components/FreeApplicationForm.tsx` | 메인 페이지 무료 신청 폼 | ⭐⭐ |
| `src/components/VisaContactForm.tsx` | 비자 상세 페이지 폼 | ⭐⭐ |
| `src/app/layout.tsx` | 메타·SEO·GA4·JSON-LD 구조화 데이터 | ⭐⭐ |
| `src/components/FAQ.tsx` | 메인 FAQ | ⭐ |
| `src/components/PartnerUniversities.tsx` | 파트너 대학 64개 리스트 | ⭐ |

→ **"비자 정보 바꿔줘"라는 요청은 거의 항상 `src/data/visas.ts` 1개 파일만 수정하면 끝납니다.**

## 🏗️ 페이지 구조

```
/                          메인 — 학생비자 무료 대행 (11개 섹션)
/visa-services             유료 비자 허브 (3개 카드)
/visa/non-partner          비파트너 대학 학생비자 (₩165,000~)
/visa/academic             방문교수 비자 Academic Visitor (₩550,000~)
/visa/gae                  GAE 단기취업 비자 (₩440,000~)
/privacy                   개인정보 처리방침
/sitemap.xml /robots.txt   자동 생성
```

## 🎨 디자인 톤

- **컬러**: Navy `#1a2236` (Primary) + Orange `#FF6B35` (Accent)
- **글꼴**: Pretendard + Noto Sans KR
- **톤**: 전문성·정확성 강조. 거절 리스크를 짚되 "안전하게 대행" 포지셔닝
- **이모지**: 본문에서는 거의 사용하지 않음 (SVG 아이콘 위주)
- **카피**: "도와드립니다", "안전하게 모십니다" 등 격식체

## 🔐 환경변수 (GitHub Secrets로 관리)

| 변수명 | 목적 |
|--------|------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 측정 ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | 구글 서치콘솔 사이트 인증 |
| `NEXT_PUBLIC_NAVER_VERIFICATION` | 네이버 웹마스터 사이트 인증 |
| `NEXT_PUBLIC_NOINDEX` | `true` 설정 시 robots noindex 적용 (스테이징·미리보기 환경용) |

`.env.example` 참고. 운영(main 배포)에는 NOINDEX를 설정하지 않습니다.

## 🌿 브랜치 정책

- **main** — 운영 (push 시 자동 배포)
- **archive-static-html** — 기존 정적 HTML 사이트 백업 (절대 삭제 금지, 비상 복구용)
- **기타** — 기능별 브랜치 자유롭게 사용 후 PR 또는 merge

## 🔄 새 PC에서 작업 이어가기 (3분)

```bash
# 1. 리포 클론
git clone https://github.com/uksinchon/UK-VISA-Free.git
cd UK-VISA-Free

# 2. 의존성 설치 (Node.js 18+ 필요)
npm install

# 3. 로컬 개발 서버
npm run dev      # http://localhost:3000

# 4. 정적 빌드 (배포 결과물 미리 확인용)
npm run build    # out/ 폴더에 생성됨

# 5. 변경 후 배포 = main에 push
git add -A
git commit -m "수정 내용"
git push origin main
# → GitHub Actions가 2~3분 후 ukvisa.kr에 자동 반영
```

## 🛟 비상 복구 (운영 사이트가 깨졌을 때)

```bash
# 백업 브랜치로 main을 즉시 되돌리기
git push origin archive-static-html:main --force
```

또는 GitHub UI에서 최근 머지된 PR의 "Revert" 버튼 클릭.

## 📨 폼 데이터 흐름

```
사용자 폼 제출
   ↓
fetch POST → https://formspree.io/f/xqaqagrk
   ↓
Formspree → 등록된 수신 메일 (대시보드에서 설정)
```

폼 필드는 한글 name 속성으로 정의되어 메일이 깔끔하게 도착합니다.

## 🚨 자주 발생하는 이슈

| 증상 | 원인 | 해결 |
|------|------|------|
| Push 후 사이트 반영 안 됨 | Actions 빌드 실패 | Actions 탭에서 로그 확인 |
| PR 만들 때 "There isn't anything to compare" | 두 브랜치 히스토리 불일치 | `--allow-unrelated-histories` 또는 force push |
| `npx next build` 중 모듈 에러 | `.next/` 캐시 손상 | `rm -rf .next && npm run build` |
| dev 서버에서 변경 반영 안 됨 | HMR 캐시 | `Ctrl+Shift+R` 또는 dev 서버 재시작 |

## 💡 Claude에게 자주 시키는 작업

- "비자 가격 / 정보 / 절차 수정해줘" → `src/data/visas.ts` 편집
- "새 비자 추가해줘" → `src/data/visas.ts`에 새 키 추가 (자동으로 `/visa/[slug]` 라우트 생성)
- "FAQ 추가해줘" → `src/components/FAQ.tsx` 배열 추가
- "푸터/연락처 수정" → `src/components/Footer.tsx`
- "SEO 키워드 추가" → `src/app/layout.tsx` keywords 배열
- "배포해줘" → `npm run build && git add -A && git commit -m "..." && git push origin main`

## 📋 핵심 비즈니스 정보 (변경 시 반드시 확인)

- **회사**: 영국학생비자센터 Serviced by 영국유학센터 신촌지사
- **연혁**: 2006년부터 20년 · 40여 개 영국 대학 공식 파트너
- **자격**: British Council 공인 에이전트
- **연락처**:
  - 전화: +82 2 393 1030
  - 이메일: info@ukvisa.kr
  - 카카오톡 채널: https://pf.kakao.com/_VNmTxd
  - 주소: 서울특별시 서대문구 신촌로 127, 신촌르메이르타운 3차 307호 (창천동)

## 🎯 이 사이트의 비즈니스 목적

**파트너십 대학 학생비자 무료 대행 → 유학 패키지 전환**이 주 매출 동선입니다.
유료 비자 대행(비파트너/방문교수/GAE)은 보조 매출이지만 SEO 트래픽 확장에 기여합니다.

페이지의 모든 카피·CTA는 "직원 대행 의뢰"로 이어지도록 설계되어 있습니다.
디테일 정보를 다 전달하는 것보다 "전문가 도움이 필요하다"는 인식을 만드는 것이 우선순위입니다.
