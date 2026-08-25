const benefits = [
  {
    icon: "📋",
    title: "CAS 컨펌 지원",
    desc: "영국 대학 CAS 발급 신청 및 컨펌까지 전 과정 무료 지원",
  },
  {
    icon: "📝",
    title: "비자 신청서 작성",
    desc: "온라인 비자 신청서를 전문가가 직접 작성·검토",
  },
  {
    icon: "📚",
    title: "프리세셔널 등록",
    desc: "어학연수·프리세셔널 코스 등록 지원 (필요 시)",
  },
  {
    icon: "✈️",
    title: "출국 오리엔테이션",
    desc: "출국 전 영국 생활·학업 오리엔테이션 무료 제공",
  },
  {
    icon: "🏠",
    title: "기숙사 신청 지원",
    desc: "온캠퍼스 기숙사 신청 안내 및 지원",
  },
  {
    icon: "🤝",
    title: "현지 도착 후 케어",
    desc: "영국 도착 후 정착 가이드 및 BRP 수령 안내",
  },
];

const partners = [
  "University of Edinburgh",
  "King's College London",
  "University of Manchester",
  "University of Bristol",
  "University of Glasgow",
  "Cardiff University",
  "Newcastle University",
  "University of Sheffield",
];

export default function FreeStudentVisa() {
  return (
    <section
      id="free"
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-300/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-wider text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full mb-4">
            📚 FREE SERVICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            파트너십 대학 <span className="text-blue-600">무료 학생비자 지원</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            영국유학센터 신촌지사 파트너십 대학에서 오퍼를 받으셨다면,
            비자 신청부터 출국까지 100% 무료로 지원해 드립니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="bg-white border border-blue-100 rounded-2xl p-7 md:p-10">
          <div className="text-center mb-6">
            <h3 className="font-bold text-gray-900 text-xl mb-2">
              🎓 신촌지사 파트너십 대학 (일부)
            </h3>
            <p className="text-sm text-gray-500">
              아래 대학에서 오퍼를 받으신 분은 무료 신청 대상입니다
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {partners.map((name, i) => (
              <div
                key={i}
                className="bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-700"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-5">
            * 그 외 60여 개 영국 대학과 파트너십을 맺고 있습니다. 정확한 파트너십 여부는 상담을 통해 확인해 드립니다.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            무료 비자 지원 신청하기
            <span>→</span>
          </a>
          <p className="text-xs text-gray-400 mt-3">
            * 파트너십 대학 오퍼 컨펌 후 신청 가능
          </p>
        </div>
      </div>
    </section>
  );
}
