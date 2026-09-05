const services = [
  {
    icon: "🎓",
    title: "학생비자 (Tier 4)",
    desc: "영국 대학·어학연수 학생비자 신청 지원. CAS 확인부터 서류 준비, 신청까지 원스톱.",
    price: "₩350,000~",
    tag: "BEST",
  },
  {
    icon: "💼",
    title: "취업비자 (Skilled Worker)",
    desc: "영국 취업비자 스폰서십 확인, 서류 작성, 신청 전 과정 지원 서비스.",
    price: "₩500,000~",
    tag: "HOT",
  },
  {
    icon: "✈️",
    title: "방문비자 (Standard Visitor)",
    desc: "관광, 가족 방문, 단기 비즈니스 등 영국 방문비자 전문 지원.",
    price: "₩250,000~",
    tag: "",
  },
  {
    icon: "💑",
    title: "배우자비자 (Spouse Visa)",
    desc: "영국 시민권자·영주권자 배우자를 위한 비자 신청 지원. 복잡한 서류도 안심.",
    price: "₩600,000~",
    tag: "NEW",
  },
];

export default function RecommendedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Recommended
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            오늘의 추천 서비스
          </h2>
          <p className="text-gray-500 mt-3">
            고객님들이 고민없이 선택하는 인기 서비스입니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-accent/30 group"
            >
              {s.tag && (
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-accent font-bold">{s.price}</span>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  상담하기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
