import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ⚙️ 설정값 — 실제 ID로 교체해 주세요
const SITE_URL = "https://ukvisa.kr"; // 운영 도메인 (Netlify 미리보기는 별도)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""; // GA4 측정 ID (G-XXXXXXXXXX)
const NAVER_VERIFICATION = process.env.NEXT_PUBLIC_NAVER_VERIFICATION || ""; // 네이버 웹마스터도구 인증
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ""; // 구글 서치콘솔 인증
const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true"; // 미리보기·스테이징 환경에서 true 설정 (Netlify 등) → 검색엔진 색인 제외

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "영국학생비자센터 | 영국학생비자 무료지원서비스",
    template: "%s | 영국학생비자센터",
  },
  description:
    "영국 대학 합격 후 비자 신청, 프리세셔널 등록, 출국 준비까지 모든 과정을 무료로 도와드립니다. British Council 공인 에이전트, 영국유학센터 신촌지사가 운영합니다. 2006년부터 20년, 40여 개 영국 대학 공식 파트너.",
  keywords: [
    "영국학생비자",
    "영국학생비자센터",
    "영국학생비자 무료대행",
    "파트너 대학 무료지원서비스",
    "영국유학",
    "CAS",
    "프리세셔널",
    "영국 비자",
    "UK Student Visa",
    "영국유학센터 신촌지사",
    "방문교수 비자",
    "Academic Visitor",
    "GAE 비자",
    "Government Authorised Exchange",
    "비파트너 대학 학생비자",
    "안식년 비자",
  ],
  authors: [{ name: "영국학생비자센터 by 영국유학센터 신촌지사" }],
  creator: "영국유학센터 신촌지사",
  publisher: "영국학생비자센터",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "영국학생비자센터 | 영국학생비자 무료지원서비스",
    description:
      "비자 신청부터 출국까지 100% 무료 대행. British Council 공인 에이전트, 2006년부터 20년 · 40여 개 영국 대학 공식 파트너.",
    url: SITE_URL,
    siteName: "영국학생비자센터",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "영국학생비자센터 — 영국학생비자 무료지원서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "영국학생비자센터 | 영국학생비자 무료지원서비스",
    description:
      "비자 신청부터 출국까지 100% 무료 대행. 2006년부터 20년 노하우.",
    images: ["/og-image.png"],
  },
  robots: {
    index: !NOINDEX,
    follow: !NOINDEX,
    googleBot: {
      index: !NOINDEX,
      follow: !NOINDEX,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION || undefined,
    other: NAVER_VERIFICATION
      ? { "naver-site-verification": NAVER_VERIFICATION }
      : undefined,
  },
  category: "education",
};

// JSON-LD 구조화 데이터 — Organization + LocalBusiness + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "영국학생비자센터",
      alternateName: "영국유학센터 신촌지사",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "영국 학생비자 무료 대행 전문, British Council 공인 에이전트. 2006년부터 20년, 40여 개 영국 대학 공식 파트너.",
      foundingDate: "2006",
      sameAs: ["https://pf.kakao.com/_VNmTxd"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-2-393-1030",
        contactType: "customer service",
        email: "info@ukvisa.kr",
        areaServed: "KR",
        availableLanguage: ["Korean", "English"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "영국학생비자센터",
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: "+82-2-393-1030",
      email: "info@ukvisa.kr",
      priceRange: "₩0 (무료) ~ ₩550,000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "신촌로 127, 신촌르메이르타운 3차 307호 (창천동)",
        addressLocality: "서대문구",
        addressRegion: "서울",
        postalCode: "03789",
        addressCountry: "KR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "영국학생비자센터",
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#student-visa-service`,
      name: "영국 학생비자 무료 대행 서비스",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      serviceType: "Visa Application Service",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
        description: "파트너십 대학 학생비자 무료 대행",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}

        {/* Google Analytics 4 — NEXT_PUBLIC_GA_MEASUREMENT_ID 환경변수 설정 시 활성화 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
