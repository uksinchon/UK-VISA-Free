const services = [
  { n: "01", title: "비자 지원 상담", desc: "무료 비자 지원 대상 여부 확인" },
  { n: "02", title: "CAS 발급 요청 절차 지원", desc: "일부 파트너 대학 CAS 발급 요청 진행" },
  { n: "03", title: "프리세셔널 등록 지원", desc: "입학 전 사전어학 과정 신청 지원" },
  { n: "04", title: "비자 신청 서류 안내", desc: "결핵검사, 재정 증빙 준비 철저 안내" },
  { n: "05", title: "비자 신청서 작성 지원", desc: "개별 확인 후 신청서 작성 지원 (제출은 학생 본인)" },
  {
    n: "06",
    title: "비자비 & 건강보험료 결제 안내",
    desc: "결제 방법 및 비자센터 방문 준비물 안내",
  },
  {
    n: "07",
    title: "비자 발급 후 최종 점검",
    desc: "Decision Letter 확인, E-visa 신청 안내",
  },
  { n: "08", title: "기숙사 예약 지원 (선택)", desc: "기숙사 전문 예약업체 연결" },
  { n: "09", title: "출국 전 오리엔테이션", desc: "영국 생활 꿀팁 총정리 안내" },
];

export default function FreeServiceInfo() {
  return (
    <section id="services" className="pt-10 pb-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Free Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            무료 지원 서비스 안내
          </h2>
          <p className="text-gray-500 mt-3">
            비자 상담부터 출국 준비까지, 모든 서비스를 무료로 제공합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-accent/30 hover:shadow-md rounded-2xl p-6 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 font-extrabold text-base">
                {s.n}
              </div>
              <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
