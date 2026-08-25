import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import VisaContactForm from "@/components/VisaContactForm";
import { visas, visaSlugs } from "@/data/visas";

export function generateStaticParams() {
  return visaSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const visa = visas[params.slug];
  if (!visa) return { title: "Not Found" };
  return {
    title: visa.title,
    description: `${visa.tagline} · 서비스 이용료 ${visa.price} · 영국학생비자 지원센터 by 영국유학센터 신촌지사`,
    alternates: {
      canonical: `/visa/${visa.slug}`,
    },
    openGraph: {
      title: `${visa.title} | 영국학생비자 지원센터`,
      description: visa.tagline,
      url: `/visa/${visa.slug}`,
      type: "article",
    },
  };
}

const SITE_URL = "https://ukvisa.kr";

export default function VisaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const visa = visas[params.slug];
  if (!visa) notFound();

  // 비자 상세 페이지용 JSON-LD (Service + BreadcrumbList)
  const visaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: visa.title,
        description: visa.tagline,
        provider: { "@id": `${SITE_URL}#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Visa Application Service",
        offers: {
          "@type": "Offer",
          price: visa.price.replace(/[^0-9]/g, ""),
          priceCurrency: "KRW",
          url: `${SITE_URL}/visa/${visa.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "유료 비자 지원",
            item: `${SITE_URL}/visa-services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: visa.title,
            item: `${SITE_URL}/visa/${visa.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(visaJsonLd) }}
      />
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1f2c4a] to-primary-700" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-xs md:text-sm text-accent-light font-semibold tracking-widest mb-2">
              {visa.category}
            </div>
            <div className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-widest mb-1">
              {visa.enTitle}
            </div>
            <div className="text-xs md:text-sm text-gray-400 tracking-widest mb-6">
              {visa.enSubtitle}
            </div>

            {visa.tag && (
              <span
                className={`inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-3 ${
                  visa.tag === "BEST"
                    ? "bg-accent/20 text-accent"
                    : visa.tag === "HOT"
                    ? "bg-red-500/20 text-red-300"
                    : "bg-green-500/20 text-green-300"
                }`}
              >
                {visa.tag}
              </span>
            )}

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {visa.title}
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              {visa.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="bg-accent text-white font-bold text-base md:text-lg px-5 py-2.5 rounded-lg">
                서비스 이용료 {visa.price}
              </span>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                상담 신청하기 ↓
              </a>
            </div>
          </div>
        </section>

        {/* Overview - 4 핵심 항목 */}
        <section className="py-14 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
                Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                비자 핵심 정보
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {visa.overview.map((item) => (
                <div
                  key={item.num}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-accent/30 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-xl font-extrabold text-accent flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight */}
        <section className="py-12 md:py-14 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl shadow-sm border border-accent/20 p-8 md:p-10 text-center">
              <div className="text-xs font-bold tracking-wider text-accent uppercase mb-3">
                Highlight
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {visa.highlight.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {visa.highlight.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Check Point - 특별 강조 (선택적) */}
        {visa.checkPoint && (
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full">
                  ✓ Check Point
                </span>
              </div>

              {/* Warning Box */}
              <div className="bg-red-50/70 border border-red-200 rounded-2xl p-6 md:p-7 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-red-600 uppercase mb-1.5">
                      유의사항
                    </div>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed font-semibold">
                      {visa.checkPoint.warning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Box - 선택적 */}
              {visa.checkPoint.experience && (
                <div className="bg-gradient-to-br from-primary-700 to-primary rounded-2xl p-7 md:p-9 text-white">
                  <div className="text-xs font-bold tracking-wider text-accent uppercase mb-3">
                    영국학생비자 지원센터 발급 지원 실적
                  </div>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-5">
                    {visa.checkPoint.experience}
                  </p>

                  {visa.checkPoint.institutions && visa.checkPoint.institutions.length > 0 && (
                    <>
                      <div className="text-[11px] font-bold tracking-wider text-accent/80 uppercase mb-3 pt-4 border-t border-white/10">
                        주요 발급 기관
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {visa.checkPoint.institutions.map((inst, i) => (
                          <span
                            key={i}
                            className="inline-block bg-white/10 border border-white/15 text-xs md:text-sm text-gray-100 px-3 py-1.5 rounded-lg"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="mt-6 pt-5 border-t border-white/10 text-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                    >
                      내 케이스도 상담받기 →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 흔한 거절 사유 TOP — 선택적 */}
        {visa.rejectionReasons && visa.rejectionReasons.cases.length > 0 && (
          <section className="py-14 md:py-16 bg-gradient-to-b from-red-50/30 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10">
                <span className="inline-block bg-red-100 text-red-700 font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
                  Common Rejection Reasons
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  흔한 거절 사유 TOP {visa.rejectionReasons.cases.length}
                </h2>
                {visa.rejectionReasons.intro && (
                  <p className="text-sm md:text-base text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
                    {visa.rejectionReasons.intro}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {visa.rejectionReasons.cases.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="grid md:grid-cols-12">
                      {/* Number + title */}
                      <div className="md:col-span-4 bg-gray-50 p-5 md:p-6 border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="text-2xl font-extrabold text-red-300 mb-2">
                          #{String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                          {c.title}
                        </h3>
                      </div>
                      {/* Cause + Tip */}
                      <div className="md:col-span-8 p-5 md:p-6 space-y-3">
                        <div>
                          <div className="text-[10px] font-bold tracking-wider text-red-600 uppercase mb-1">
                            거절 사유
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {c.cause}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="text-[10px] font-bold tracking-wider text-accent uppercase mb-1">
                            ✓ 사전 대응
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {c.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  거절 위험 점검받기 →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 신청 시기 권장 일정 — 선택적 */}
        {visa.timing && visa.timing.schedule.length > 0 && (
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10">
                <span className="inline-block bg-accent/10 text-accent font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
                  Timing Guide
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  신청 시기 권장 일정
                </h2>
                <p className="text-sm md:text-base text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
                  {visa.timing.recommended}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {visa.timing.schedule.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 md:gap-6 border-b border-gray-100 last:border-b-0 px-5 py-4 hover:bg-orange-50/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-20 md:w-24 text-sm md:text-base font-extrabold text-accent">
                      {s.weeks}
                    </div>
                    <div className="flex-1 text-sm md:text-base text-gray-700 leading-relaxed">
                      {s.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Info table */}
        {visa.infoTable && visa.infoTable.length > 0 && (
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8">
                <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
                  At a Glance
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                  비자 정보 한눈에 보기
                </h2>
              </div>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {visa.infoTable.map((row) => (
                      <tr key={row.label} className="bg-white">
                        <th className="text-left bg-gray-50 px-4 py-3.5 font-bold text-gray-700 w-32 md:w-44 align-top">
                          {row.label}
                        </th>
                        <td className="px-4 py-3.5 text-gray-600 leading-relaxed whitespace-pre-line">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 공식 서류 */}
        <section className="py-14 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
                Documents
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                필수 제출 서류
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                아래 서류 중 일부는 영문 번역·공증이 필요합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <ul className="grid sm:grid-cols-2 gap-3">
                {visa.documents.map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 비자 신청비 */}
        <section className="py-14 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
                Fees
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                비자 신청비 & 기타 비용
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                * 영국 정부 정책에 따라 금액이 변동될 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  <tr>
                    <th className="text-left px-5 py-3.5">항목</th>
                    <th className="text-left px-5 py-3.5">금액</th>
                    <th className="text-left px-5 py-3.5 hidden md:table-cell">
                      비고
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {visa.fees.map((fee, i) => (
                    <tr key={i} className="bg-white">
                      <td className="px-5 py-4 font-semibold text-gray-700">
                        {fee.label}
                      </td>
                      <td className="px-5 py-4 text-accent font-bold">
                        {fee.amount}
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-xs hidden md:table-cell">
                        {fee.note || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 가족 동반 */}
        <section className="py-14 md:py-16 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl border border-blue-100 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    visa.family.allowed
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {visa.family.allowed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  가족 동반{" "}
                  <span
                    className={visa.family.allowed ? "text-green-600" : "text-gray-500"}
                  >
                    {visa.family.allowed ? "가능" : "별도 신청 필요"}
                  </span>
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {visa.family.desc}
              </p>

              {visa.family.pricePerPerson && (
                <div className="mt-5 pt-5 border-t border-blue-100 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm md:text-base px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    가족 동반 지원 1인당 {visa.family.pricePerPerson}
                  </span>
                  <span className="text-xs text-gray-500">
                    동반자 1인당 별도 신청 · 서비스 이용료 추가 적용
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 신청 절차 */}
        <section className="py-14 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
                Process
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                비자 신청 지원 절차
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visa.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-gray-50 rounded-2xl p-5 hover:bg-white hover:border-accent/30 hover:shadow-md border border-gray-100 transition-all"
                >
                  <div className="text-2xl font-extrabold text-accent/30 mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 유의사항 */}
        <section className="py-12 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 md:p-7">
              <div className="text-xs font-bold tracking-wider text-amber-700 uppercase mb-3">
                Notes
              </div>
              <h3 className="font-bold text-gray-900 mb-3">유의사항</h3>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {visa.notes.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-600 flex-shrink-0">·</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SUCCESS 강조 */}
        <section className="py-14 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-accent mb-4 tracking-widest">
              <span>S</span>
              <span>U</span>
              <span>C</span>
              <span>C</span>
              <span>E</span>
              <span>S</span>
              <span>S</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              20년 노하우, 99% 이상의 합격률
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              영국학생비자 지원센터는 2006년부터 1,000명+ 학생의 비자를 성공적으로
              발급받으실 수 있도록 도와왔습니다. {visa.title}도 안전하게 돕겠습니다.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <VisaContactForm visa={{ title: visa.title, slug: visa.slug, price: visa.price }} />

        <Disclaimer className="pb-12" />
      </main>
      <Footer />
    </>
  );
}
