# 영국학생비자센터 (UK Visa Free Support)

영국 학생비자 무료 대행 서비스 사이트 — **ukvisa.kr**
영국유학센터 신촌지사 운영 · British Council 공인 에이전트

## 🛠️ 기술 스택

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Formspree** (폼 백엔드)
- **GitHub Pages** (호스팅)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 메인 — 학생비자 무료 대행
│   ├── visa-services/        # 유료 비자 허브 (3종)
│   ├── visa/[slug]/          # 비자별 상세 페이지 (동적)
│   ├── privacy/              # 개인정보 처리방침
│   ├── sitemap.ts            # 자동 sitemap.xml 생성
│   ├── robots.ts             # 자동 robots.txt 생성
│   └── layout.tsx            # 메타·SEO·GA4·JSON-LD
├── components/               # UI 컴포넌트
└── data/
    └── visas.ts              # 비자별 데이터 (수정 시 모든 페이지에 반영)
```

## 🚀 개발 / 배포

### 로컬 개발
```bash
npm install
npm run dev          # http://localhost:3000
```

### 정적 빌드
```bash
npm run build        # out/ 폴더에 정적 사이트 생성
```

### 배포
`main` 브랜치에 push 하면 GitHub Actions가 자동으로 빌드해서 GitHub Pages에 배포합니다.

```bash
git push origin main
```

## 🔧 환경변수 (GitHub Secrets에 등록)

| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 측정 ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | 구글 서치콘솔 사이트 소유권 인증 |
| `NEXT_PUBLIC_NAVER_VERIFICATION` | 네이버 웹마스터도구 사이트 소유권 인증 |

GitHub 리포 → **Settings → Secrets and variables → Actions → New repository secret** 에서 등록.

## 📨 폼 백엔드 (Formspree)

폼 제출은 Formspree로 전달됩니다:
- Endpoint: `https://formspree.io/f/xqaqagrk`
- 대상 메일: Formspree 대시보드에서 설정

## 📌 페이지 데이터 수정

비자 정보 (가격·서비스·서류 등) 수정은 `src/data/visas.ts` 한 곳에서만 진행하면 모든 페이지에 자동 반영됩니다.
