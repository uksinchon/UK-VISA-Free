const steps = [
  {
    step: "01",
    title: "무료 상담",
    desc: "비자 유형 확인 및 맞춤 상담. 카톡, 전화, 방문 모두 가능합니다.",
    icon: "💬",
  },
  {
    step: "02",
    title: "서류 준비",
    desc: "필수 서류 체크리스트 제공. 서류 작성 및 번역을 대행합니다.",
    icon: "📋",
  },
  {
    step: "03",
    title: "신청서 작성",
    desc: "온라인 비자 신청서를 전문가가 직접 작성하고 검토합니다.",
    icon: "✍️",
  },
  {
    step: "04",
    title: "바이오메트릭",
    desc: "비자 센터 방문 예약 및 지문 등록 절차를 안내합니다.",
    icon: "🔐",
  },
  {
    step: "05",
    title: "심사 & 발급",
    desc: "심사 진행 상황을 실시간 공유. 발급까지 책임 관리합니다.",
    icon: "✅",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            비자 대행 절차
          </h2>
          <p className="text-gray-500 mt-3">
            상담부터 발급까지, 5단계로 간단하게 진행됩니다
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gray-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative z-10 w-16 h-16 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/10 transition-all">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <span className="text-accent font-heading font-bold text-xs">
                  STEP {s.step}
                </span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed px-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
