export default function WhyFree() {
  return (
    <section id="why-free" className="pt-10 pb-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Why Free?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            왜 <span className="text-accent">무료</span>인가요?
          </h2>
        </div>

        {/* Explanation */}
        <div className="bg-gradient-to-br from-orange-50/60 to-white border border-accent/15 rounded-3xl p-7 md:p-10 mb-8">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            영국유학센터 신촌지사는{" "}
            <strong className="text-accent">영국 40여개 대학의 공식 파트너</strong>
            로, 학생의 지원·입학·비자 절차를 대학과 함께 협력 체계 안에서
            진행해왔습니다.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            따라서{" "}
            <strong className="text-gray-900">
              학생분께서 별도로 부담하시는 비자대행 비용은 없습니다.
            </strong>
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-accent text-white font-bold text-sm md:text-base px-5 py-2.5 rounded-full">
            <span>학생 측 비용 0원 · 추가 청구 없음</span>
          </div>
        </div>

        {/* Infographic: 학생이 받는 것 vs 학생이 내는 것 */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* 학생이 받는 것 (큰 박스) */}
          <div className="bg-gradient-to-br from-primary-700 to-primary rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-xs font-bold tracking-wider text-accent uppercase mb-3">
                학생이 받는 것
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-5">
                전 과정 풀 서비스
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base">
                    <strong>비자 전 과정 대행</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base">
                    <strong>20년 전문성</strong> · British Council 공인 카운슬러 1:1 서포트
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base">
                    <strong>40개 대학 직접 채널</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base">
                    프리세셔널 · 기숙사 · 오리엔테이션까지
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 학생이 내는 것 (작은 박스 - 0원) */}
          <div className="bg-white border-2 border-dashed border-accent/40 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[260px]">
            <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
              학생이 내는 것
            </div>
            <div className="text-7xl md:text-8xl font-extrabold text-accent mb-2">
              0
              <span className="text-3xl md:text-4xl">원</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              대행 수수료 · 상담료 · 컨설팅비 모두
            </p>
            <p className="text-xs text-gray-400 mt-1">
              영국 정부 납부 비자 신청료(IHS 등)는 신청자 본인 부담
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            지금 무료로 의뢰하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
