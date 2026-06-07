const rows = [
  { label: "대상", free: "파트너십 대학 오퍼 받은 학생", premium: "모든 비자 신청자" },
  { label: "비용", free: "100% 무료", premium: "₩165,000 ~ ", highlight: true },
  { label: "서비스 범위", free: "학생비자 한정", premium: "6종 비자 (학생/아동/방문교수/GAE/동반가족/가디언)" },
  { label: "CAS 컨펌 / 비자 스폰서 레터", free: true, premium: true },
  { label: "서류 검수 (Document Review)", free: true, premium: true },
  { label: "온라인 비자 신청서 작성", free: true, premium: true },
  { label: "비자 번역 대행", free: "학생 한정", premium: true },
  { label: "프리세셔널 코스 등록", free: true, premium: "옵션" },
  { label: "오리엔테이션 / 출국 준비", free: true, premium: "옵션" },
  { label: "전담 매니저 1:1 관리", free: "—", premium: true },
  { label: "비자 거절 시 재신청 지원", free: "—", premium: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-bold">
        ✓
      </span>
    );
  if (value === false || value === "—")
    return <span className="text-gray-300">—</span>;
  return <span className="text-gray-700 text-sm">{value}</span>;
}

export default function ServiceTiers() {
  return (
    <section id="tiers" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Service Tiers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            무료 vs 프리미엄 서비스 비교
          </h2>
          <p className="text-gray-500 mt-3">
            영국유학센터 신촌지사의 두 가지 서비스를 한눈에 비교해 보세요
          </p>
        </div>

        {/* Tier Cards Top (mobile-friendly headline) */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {/* Free tier */}
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-7">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="inline-block text-xs font-bold tracking-wider text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full mb-2">
                  📚 FREE
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  파트너십 대학 학생비자
                </h3>
              </div>
            </div>
            <div className="text-4xl font-extrabold text-blue-600 mb-1">
              무료
            </div>
            <p className="text-sm text-gray-500 mb-5">
              파트너십 대학 학생 한정
            </p>
            <a
              href="#free"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              무료 신청하기
            </a>
          </div>

          {/* Premium tier */}
          <div className="relative rounded-2xl border-2 border-accent bg-gradient-to-br from-accent/10 to-white p-7">
            <div className="absolute -top-3 right-5 bg-accent text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
              가장 인기
            </div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="inline-block text-xs font-bold tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-2">
                  💎 PREMIUM
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  그 외 영국비자 전체
                </h3>
              </div>
            </div>
            <div className="text-4xl font-extrabold text-accent mb-1">
              ₩165,000<span className="text-base text-gray-400">~</span>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              비자 유형에 따라 상이
            </p>
            <a
              href="#contact"
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl transition-colors"
            >
              상담 신청하기
            </a>
          </div>
        </div>

        {/* Detailed comparison table - desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-bold uppercase tracking-wider text-gray-500 py-4 px-6 w-2/5">
                  서비스 내용
                </th>
                <th className="text-center text-xs font-bold uppercase tracking-wider text-blue-600 py-4 px-6">
                  📚 무료 (파트너십 학생)
                </th>
                <th className="text-center text-xs font-bold uppercase tracking-wider text-accent py-4 px-6 bg-accent/5">
                  💎 프리미엄 (유료 대행)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight ? "bg-amber-50/50" : "bg-white"}
                >
                  <td className="py-4 px-6 text-sm font-semibold text-gray-700">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.free} />
                  </td>
                  <td className="py-4 px-6 text-center bg-accent/[0.03]">
                    <Cell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked rows */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                {row.label}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-[10px] font-bold text-blue-600 mb-1">
                    📚 FREE
                  </div>
                  <Cell value={row.free} />
                </div>
                <div className="border-l border-gray-100 pl-3">
                  <div className="text-[10px] font-bold text-accent mb-1">
                    💎 PREMIUM
                  </div>
                  <Cell value={row.premium} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
