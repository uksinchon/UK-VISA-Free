const items = [
  {
    title: "출국 준비물",
    desc: "항공권, 필수 서류, 짐 싸기 체크리스트",
  },
  {
    title: "영국 입국 & 생활",
    desc: "기숙사, 통신사 개통, 은행 계좌 등",
  },
];

export default function Orientation() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Orientation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            출국 전 오리엔테이션
          </h2>
          <p className="text-gray-500 mt-3">
            영국 도착 직전까지, 모든 준비를 함께합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-orange-50/40 border border-gray-100 hover:border-accent/30 rounded-2xl p-7 transition-all"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 일정 */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-accent/20 rounded-2xl p-6 text-center">
          <div className="text-xs font-bold tracking-wider text-accent uppercase mb-2">
            오리엔테이션 일정
          </div>
          <p className="text-gray-900 font-bold text-base md:text-lg">
            매년 6-8월 진행 · 온라인 오리엔테이션
          </p>
        </div>
      </div>
    </section>
  );
}
