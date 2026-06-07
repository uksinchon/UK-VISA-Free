const rows = [
  {
    step: "Step 1",
    students: ["CAS 정보 전달"],
    us: ["대학별 CAS 신청절차 검토 및 신청대행", "대학과 컨펌"],
  },
  {
    step: "Step 2",
    students: ["여권 사진 전달"],
    us: ["결핵검사·재정증명 가이드", "비자 신청서 작성"],
  },
  {
    step: "Step 3",
    students: ["비자비 결제"],
    us: ["비자센터 예약", "준비물 안내"],
  },
  {
    step: "Step 4",
    students: ["비자센터 방문", "E-Visa 신청"],
    us: ["비자 발급 확인", "E-Visa 신청 안내", "출국 오리엔테이션"],
  },
];

export default function SimpleProcess() {
  return (
    <section
      id="process"
      className="py-20 md:py-24 bg-gradient-to-b from-orange-50/40 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            What You Do vs What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            학생은 <span className="text-gray-400">최소한</span>,{" "}
            우리는 <span className="text-accent">전부</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            학생이 직접 하실 일은 5가지 뿐. 나머지 모든 절차는 저희가 처리합니다.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-100">
            <div className="col-span-2 md:col-span-2 py-4 px-3 md:px-5 text-xs font-bold tracking-wider text-gray-400 uppercase">
              단계
            </div>
            <div className="col-span-4 md:col-span-4 py-4 px-3 md:px-5 text-xs font-bold tracking-wider text-gray-500 uppercase border-l border-gray-100">
              학생이 하는 일
            </div>
            <div className="col-span-6 md:col-span-6 py-4 px-3 md:px-5 text-xs font-bold tracking-wider text-accent uppercase border-l border-gray-100 bg-accent/5">
              저희가 하는 일
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b border-gray-50 last:border-b-0"
            >
              <div className="col-span-2 py-5 px-3 md:px-5 text-xs md:text-sm font-bold text-accent flex items-center">
                {row.step}
              </div>
              <div className="col-span-4 py-5 px-3 md:px-5 border-l border-gray-100">
                <ul className="space-y-1.5">
                  {row.students.map((s, j) => (
                    <li
                      key={j}
                      className="text-xs md:text-sm text-gray-700 leading-snug"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-6 py-5 px-3 md:px-5 border-l border-gray-100 bg-accent/[0.02]">
                <ul className="space-y-1.5">
                  {row.us.map((item, j) => (
                    <li
                      key={j}
                      className="text-xs md:text-sm text-gray-700 leading-snug flex items-start gap-1.5"
                    >
                      <span className="text-accent flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Footer summary */}
          <div className="bg-gradient-to-r from-primary-700 to-primary text-white py-5 px-5 md:px-7 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-wider text-accent uppercase mb-1">
                요약
              </div>
              <p className="text-sm md:text-base">
                <span className="font-bold">학생이 하실 일은 단 5가지.</span>{" "}
                <span className="text-gray-300">
                  나머지 절차는 저희가 처리합니다.
                </span>
              </p>
            </div>
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors flex-shrink-0"
            >
              무료 의뢰 시작 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
