export default function PreSessional() {
  return (
    <section id="presessional" className="py-20 md:py-24 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Pre-Sessional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            프리세셔널 과정이란?
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
          {/* 정의 */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <div className="text-xs font-bold tracking-wider text-accent uppercase mb-2">
              정의
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong>입학 전, 대학교 부설 어학원에서 진행하는 아카데믹 영어 과정</strong>
            </p>
          </div>

          {/* 대상 */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <div className="text-xs font-bold tracking-wider text-accent uppercase mb-2">
              적용 대상
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>영어 점수가 부족한 경우</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>학업 준비가 더 필요한 경우 추천</span>
              </li>
            </ul>
          </div>

          {/* 혜택 */}
          <div>
            <div className="text-xs font-bold tracking-wider text-accent uppercase mb-2">
              혜택
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>수료 시 별도 IELTS 제출 없이 입학 가능</strong>
              <span className="text-xs text-gray-400 block mt-0.5">
                (학교별 규정 상이)
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-5 mt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>프리세셔널 등록</strong>도 학생비자 무료 대행 서비스에
              포함됩니다. 입학 전 사전어학 과정 신청을 무료로 대행해
              드립니다.
            </p>
            <a
              href="#contact"
              className="inline-block mt-3 text-sm font-bold text-accent hover:text-accent-dark"
            >
              프리세셔널 무료 상담 신청 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
