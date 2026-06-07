const premiumVisas = [
  {
    icon: "🎓",
    title: "비파트너 대학 학생비자",
    en: "Student Visa (Non-Partner)",
    desc: "신촌지사 파트너십이 아닌 대학에서 오퍼를 받으신 분",
    price: "₩350,000~",
    tag: "BEST",
  },
  {
    icon: "🧒",
    title: "아동 학생비자",
    en: "Child Student Visa",
    desc: "만 4~17세 어린이 사립학교 / 보딩스쿨 진학",
    price: "₩450,000~",
    tag: "",
  },
  {
    icon: "🏛️",
    title: "방문교수 비자",
    en: "Academic Visitor Visa",
    desc: "대학·연구소 방문 교수 / 연구원 / 학자",
    price: "₩400,000~",
    tag: "",
  },
  {
    icon: "💼",
    title: "단기취업 비자 (GAE)",
    en: "Government Authorised Exchange",
    desc: "정부 인증 교환 프로그램 (인턴십 / 리서치 / 트레이닝)",
    price: "₩500,000~",
    tag: "HOT",
  },
  {
    icon: "👪",
    title: "동반 가족 비자",
    en: "Dependant Visa",
    desc: "배우자·자녀 동반. 재정 입증 서류 컨설팅 포함",
    price: "₩400,000~",
    tag: "",
  },
  {
    icon: "🧑‍🍼",
    title: "가디언 비자",
    en: "Parent of a Child Student",
    desc: "자녀 동반 보호자 (Parent of a Child Student) 비자",
    price: "₩450,000~",
    tag: "NEW",
  },
];

export default function AllServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Premium Visa Agency
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            영국유학센터 신촌지사 유료 비자 대행
          </h2>
          <p className="text-gray-500 mt-3">
            6종 비자를 전문 매니저가 1:1로 책임지고 대행합니다 (₩165,000부터)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {premiumVisas.map((s, i) => (
            <div
              key={i}
              className="service-card relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-accent/40 hover:shadow-lg transition-all group"
            >
              {s.tag && (
                <span
                  className={`absolute top-5 right-5 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${
                    s.tag === "BEST"
                      ? "bg-accent/10 text-accent"
                      : s.tag === "HOT"
                      ? "bg-red-50 text-red-500"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {s.tag}
                </span>
              )}
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase mb-3">
                {s.en}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 min-h-[40px]">
                {s.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-accent font-bold">{s.price}</span>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-gray-500 hover:text-accent transition-colors"
                >
                  상담하기 →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4 items-start">
          <div className="text-2xl">💡</div>
          <div>
            <p className="font-bold text-gray-900 text-sm mb-1">
              파트너십 대학에서 오퍼를 받으셨나요?
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              영국유학센터 신촌지사 파트너십 대학 학생은{" "}
              <a
                href="#free"
                className="text-blue-600 font-bold underline underline-offset-2 hover:text-blue-700"
              >
                무료 비자 지원 서비스
              </a>{" "}
              를 이용하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
