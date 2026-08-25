import Header from "@/components/Header";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유료 비자 지원 서비스 | 영국학생비자 지원센터",
  description:
    "비파트너 대학 학생비자, 방문교수, GAE 단기취업 등 3종 영국비자 유료 지원 서비스. ₩165,000부터 시작.",
};

const visas = [
  {
    slug: "non-partner",
    title: "비파트너 대학 학생비자",
    en: "Student Visa (Non-Partner)",
    desc: "영국학생비자 지원센터 파트너십이 아닌 대학에서 오퍼를 받으신 분을 위한 학생비자 신청 지원 서비스",
    price: "₩165,000~",
    tag: "BEST",
  },
  {
    slug: "academic",
    title: "방문교수 비자",
    en: "Academic Visitor Visa",
    desc: "영국 대학·연구소를 방문하는 교수·연구원·학자를 위한 단기 방문 비자",
    price: "₩550,000~",
    tag: "NEW",
  },
  {
    slug: "gae",
    title: "단기취업 비자 (GAE)",
    en: "Government Authorised Exchange",
    desc: "정부 인증 교환 프로그램 - 인턴십·리서치·트레이닝",
    price: "₩440,000~",
    tag: "HOT",
  },
];

export default function VisaServicesHub() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1f2c4a] to-primary-700" />
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full border border-white/20 mb-5">
              PREMIUM VISA SUPPORT
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-5">
              그 외 영국비자 <span className="text-accent">유료 지원 서비스</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              파트너 대학 무료 학생비자 외
              <br />
              3종의 영국비자를 전문 매니저가 1:1로 신청을 지원합니다.
              <br />
              가격은 ₩165,000부터 시작합니다.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md shadow-accent/30"
              >
                상담 신청하기 →
              </a>
              <a
                href="/"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                ← 학생비자 무료 지원 보기
              </a>
            </div>
          </div>
        </section>

        {/* Visa Cards */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                비자 종류를 선택하세요
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                각 비자별 상세 안내와 필수 서류, 처리 기간을 확인하실 수 있습니다
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visas.map((v) => (
                <a
                  key={v.slug}
                  href={`/visa/${v.slug}`}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-accent/40 hover:shadow-md transition-all block"
                >
                  {v.tag && (
                    <span
                      className={`absolute top-5 right-5 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${
                        v.tag === "BEST"
                          ? "bg-accent/10 text-accent"
                          : v.tag === "HOT"
                          ? "bg-red-50 text-red-500"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {v.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5 group-hover:text-accent transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase mb-3">
                    {v.en}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 min-h-[60px]">
                    {v.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-accent font-bold">{v.price}</span>
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-accent transition-colors">
                      자세히 보기 →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Back to free */}
            <div className="mt-12 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4 items-start">
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  파트너십 대학에서 합격하셨나요?
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  영국학생비자 지원센터 파트너십 대학 학생은{" "}
                  <a
                    href="/"
                    className="text-accent font-bold underline underline-offset-2"
                  >
                    학생비자 100% 무료 지원
                  </a>
                  을 받으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              유료 비자 지원 상담 신청
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              어떤 비자가 필요한지 모르겠다면, 일단 문의해 주세요.
              <br />
              전문 상담사가 친절하게 안내해 드립니다.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <a
                href="tel:+82-2-393-1030"
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors block"
              >
                <div className="font-bold text-gray-900 text-sm mb-1">전화 상담</div>
                <div className="text-xs text-gray-500">02-393-1030</div>
              </a>
              <a
                href="https://pf.kakao.com/_VNmTxd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors block"
              >
                <div className="font-bold text-gray-900 text-sm mb-1">카카오톡</div>
                <div className="text-xs text-gray-500 break-all">
                  pf.kakao.com/_VNmTxd
                </div>
              </a>
              <a
                href="mailto:info@ukvisa.kr"
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors block"
              >
                <div className="font-bold text-gray-900 text-sm mb-1">이메일</div>
                <div className="text-xs text-gray-500 break-all">
                  info@ukvisa.kr
                </div>
              </a>
            </div>
          </div>
        </section>

        <Disclaimer className="pb-12" />
      </main>
      <Footer />
    </>
  );
}
