const cases = [
  {
    n: "01",
    title: "CAS Shield에서 막힌 케이스",
    detail: "대학마다 다른 CAS 신청 절차, 충분히 인지하지 못해 비자 발급 보류",
  },
  {
    n: "02",
    title: "재정증명 28일 룰을 놓친 케이스",
    detail: "랜덤으로 재정서류 요청받았으나 28일 연속 잔액 유지 제공 실패",
  },
  {
    n: "03",
    title: "ATAS 대상인지 모르고 신청해 지연된 박사 케이스",
    detail: "STEM 분야 박사·연구과정에 필수 ATAS 인증 누락",
  },
  {
    n: "04",
    title: "거절 이력이 있는데 그대로 재신청한 케이스",
    detail: "거절 사유 분석 없이 재신청 시 다시 거절 경험",
  },
  {
    n: "05",
    title: "부양가족 동반 시 추가 재정 요건을 놓친 케이스",
    detail: "배우자·자녀당 추가 재정증명 미충족",
  },
];

export default function DIYRisk() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Real Cases
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-gray-900 break-keep">
            학생비자, 정말 <span className="text-red-500">혼자서</span>
            <br className="sm:hidden" />
            신청해도 괜찮으실까요?
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            지난 20년간 저희가 직접 도움을 드렸던 사례입니다.
            <br className="hidden md:block" />
            아래 어느 하나라도 해당된다면, 혼자서 준비하시기 보다 전문가의 도움을 받으시는 것이 안전합니다.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group bg-white border border-red-100 hover:border-red-200 rounded-2xl p-5 md:p-6 transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:shadow-md"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0 md:min-w-[60px]">
                <div className="text-2xl md:text-3xl font-extrabold text-red-100 group-hover:text-red-200 transition-colors">
                  {c.n}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1.5">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {c.detail}
                </p>
              </div>

              <a
                href="#contact"
                className="md:flex-shrink-0 inline-flex items-center justify-center gap-1.5 bg-accent/10 hover:bg-accent group-hover:bg-accent text-accent group-hover:text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-lg transition-all"
              >
                저희가 준비를 도와드립니다 →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 bg-gradient-to-r from-primary-700 to-primary rounded-2xl p-7 md:p-9 text-center text-white">
          <p className="text-sm md:text-base text-gray-300 mb-2">
            한 번의 실수가 1년을 잃을 수 있습니다.
          </p>
          <p className="text-lg md:text-xl font-bold mb-5">
            영국비자 전문가와 함께 안전하게 준비하세요.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            무료 의뢰 신청하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
