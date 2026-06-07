import type { MetadataRoute } from "next";
import { visaSlugs } from "@/data/visas";

const SITE_URL = "https://ukvisa.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 메인 페이지 + 핵심 라우트 (높은 우선순위)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/visa-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 유료 비자 상세 페이지 (3개 - 동적)
  const visaPages: MetadataRoute.Sitemap = visaSlugs.map((slug) => ({
    url: `${SITE_URL}/visa/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...visaPages];
}
