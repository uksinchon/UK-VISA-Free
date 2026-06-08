export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1f2c4a] to-primary-700" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-7">
          British Council 공인 에이전트
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
          혼자 지원했지만,
          <br />
          비자는 <span className="text-accent">전문가</span>와 함께 확실하게.
        </h1>

        {/* Subhead */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-3">
          영국 대학 합격, 진심으로 축하드립니다!
          <br className="hidden md:block" />
          비자 신청, 프리세셔널 등록, 출국 준비까지{" "}
          <span className="text-white font-semibold">모든 과정을 무료로</span>{" "}
          도와드립니다.
        </p>
        <p className="text-sm text-accent-light font-semibold mb-2">
          2006년부터 20년 · 40여 개 영국 대학 공식 파트너
        </p>
        <p className="text-sm text-gray-400 mb-10">
          대행 수수료 0원 · 비자부터 출국까지 원스톱
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            지금 무료 비자 지원 시작하기 →
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all"
          >
            서비스 자세히 보기
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            대행 수수료 0원 (100% 무료)
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            영국유학센터 전문가팀 1:1 케어
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            출국 전 오리엔테이션까지 책임
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
