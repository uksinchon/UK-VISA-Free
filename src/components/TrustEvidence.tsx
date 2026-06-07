const stats = [
  { num: "20", suffix: "년+", label: "축적된 노하우", desc: "2006년부터 영국유학·비자 전문" },
  { num: "40", suffix: "+", label: "공식 파트너 대학", desc: "직접 채널로 신속한 처리" },
  { num: "1,000", suffix: "+", label: "학생비자 발급", desc: "누적 케이스 처리 실적" },
  { num: "99", suffix: "%+", label: "비자 합격률", desc: "업계 최상위 수준" },
];

const timeline = [
  { year: "2006", event: "영국유학센터 설립" },
  { year: "2008", event: "주한영국문화원 영국전문유학원 자격시험 1위" },
  { year: "2010", event: "영국유학센터 신촌지사 설립" },
  { year: "2011", event: "주한영국문화원 영국전문유학원 자격시험 1위 (신촌지사)" },
  { year: "2012", event: "영국 주요 대학 공식 파트너십 확장" },
  { year: "2025", event: "누적 학생비자 발급 1,000건 돌파" },
  { year: "2026", event: "공식 파트너 40여 개 대학 운영 중" },
];

const featuredPartners = [
  "University of Bristol",
  "University of Leeds",
  "University of Exeter",
  "Queen Mary, University of London",
  "SOAS, University of London",
  "University of York",
  "Goldsmiths, University of London",
  "Newcastle University",
  "University of Sheffield",
];

const testimonials = [
  {
    course: "Leeds 파운데이션",
    name: "안○○ 학생",
    quote:
      "CAS 발급부터 비자 결과까지 모든 절차를 매니저님이 직접 챙겨주셔서 정말 든든했어요. 무료라는 게 믿기지 않을 정도였습니다.",
  },
  {
    course: "Bristol 학부",
    name: "김○○ 학생",
    quote:
      "재정증명 28일 룰을 모르고 있었는데, 매니저님이 미리 알려주셔서 거절 없이 한 번에 발급받았어요.",
  },
  {
    course: "Goldsmiths, 런던대 학사",
    name: "박○○ 학생",
    quote:
      "미국비자에서 거절 받고 너무 상심했었는데 영국으로 다시 지원해서 기대이상의 대학원에서 오퍼를 받고 비자도 안전하게 받을 수 있었습니다.",
  },
];

export default function TrustEvidence() {
  return (
    <section id="trust" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Trust Evidence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            왜 1,000명+ 학생이 저희를 선택했을까요?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 md:p-7 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-accent leading-none">
                {s.num}
                <span className="text-xl md:text-2xl">{s.suffix}</span>
              </div>
              <div className="mt-3 text-sm md:text-base font-bold text-gray-900">
                {s.label}
              </div>
              <p className="text-[11px] md:text-xs text-gray-400 mt-1 leading-tight">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 mb-14">
          <h3 className="text-center font-bold text-gray-900 text-lg md:text-xl mb-2">
            20년 연혁
          </h3>
          <p className="text-center text-xs text-gray-400 mb-8">
            영국유학센터 신촌지사의 주요 마일스톤
          </p>
          <div className="relative">
            {/* Vertical line on mobile / horizontal on desktop */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gray-200" />

            <div className="grid grid-cols-2 md:grid-cols-7 gap-5 md:gap-2">
              {timeline.map((t, i) => (
                <div key={i} className="relative">
                  <div className="hidden md:flex w-3 h-3 rounded-full bg-accent border-4 border-white shadow ring-1 ring-accent/30 mx-auto relative -mt-1 mb-3" />
                  <div className="md:text-center">
                    <div className="text-base md:text-lg font-extrabold text-accent">
                      {t.year}
                    </div>
                    <p className="text-xs md:text-[11px] text-gray-600 leading-snug mt-1">
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Partner Logos (placeholder grid) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 mb-14">
          <h3 className="text-center font-bold text-gray-900 text-lg md:text-xl mb-2">
            대표 파트너 대학
          </h3>
          <p className="text-center text-xs text-gray-400 mb-8">
            아래는 일부 — 전체 40여 개 대학 공식 파트너십 보유
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {featuredPartners.map((name, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-4 text-center flex items-center justify-center min-h-[60px] hover:bg-white hover:border-accent/30 transition-all"
              >
                <span className="text-xs md:text-sm font-bold text-gray-700 leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="#partners"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              전체 대학 보기 →
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-center font-bold text-gray-900 text-lg md:text-xl mb-2">
            학생 후기
          </h3>
          <p className="text-center text-xs text-gray-400 mb-8">
            실명 동의를 받은 학생 후기를 게재합니다
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl text-accent mb-2">"</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
