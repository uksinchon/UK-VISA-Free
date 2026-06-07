const statusItems = [
  {
    date: "2026.05.15",
    name: "김○○",
    type: "파트너십 학생비자 (무료)",
    status: "발급 완료",
    color: "text-green-600 bg-green-50",
  },
  {
    date: "2026.05.14",
    name: "이○○",
    type: "단기취업 GAE",
    status: "심사 중",
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    date: "2026.05.13",
    name: "박○○",
    type: "동반 가족 비자",
    status: "서류 접수",
    color: "text-blue-600 bg-blue-50",
  },
  {
    date: "2026.05.12",
    name: "최○○",
    type: "방문교수 비자",
    status: "발급 완료",
    color: "text-green-600 bg-green-50",
  },
  {
    date: "2026.05.11",
    name: "정○○",
    type: "파트너십 학생비자 (무료)",
    status: "발급 완료",
    color: "text-green-600 bg-green-50",
  },
  {
    date: "2026.05.10",
    name: "강○○",
    type: "가디언 비자",
    status: "심사 중",
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    date: "2026.05.09",
    name: "한○○",
    type: "아동 학생비자",
    status: "서류 준비",
    color: "text-purple-600 bg-purple-50",
  },
  {
    date: "2026.05.08",
    name: "윤○○",
    type: "비파트너 학생비자",
    status: "발급 완료",
    color: "text-green-600 bg-green-50",
  },
];

export default function ProcessStatus() {
  return (
    <section id="status" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Processing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            수속 현황
          </h2>
          <p className="text-gray-500 mt-3">
            실시간 비자 수속 진행 현황입니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-bold text-gray-500">
            <span>날짜</span>
            <span>고객명</span>
            <span>비자 유형</span>
            <span>진행 상태</span>
          </div>
          {/* Rows */}
          {statusItems.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-50 text-sm hover:bg-gray-50/50 transition-colors"
            >
              <span className="text-gray-400">{item.date}</span>
              <span className="text-gray-700 font-medium">{item.name}</span>
              <span className="text-gray-700">{item.type}</span>
              <span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.color}`}
                >
                  {item.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
