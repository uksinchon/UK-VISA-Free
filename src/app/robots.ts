import type { MetadataRoute } from "next";

const SITE_URL = "https://ukvisa.kr";
const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

export default function robots(): MetadataRoute.Robots {
  // 미리보기·스테이징 환경 (Netlify 등) — 모든 크롤러 차단
  if (NOINDEX) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  // 운영 환경 — 검색엔진 허용
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/colors", "/api/"],
      },
      {
        // 네이버 검색봇 명시적 허용 (Yeti)
        userAgent: "Yeti",
        allow: "/",
        disallow: ["/colors", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
