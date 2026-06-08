export default function Eligibility() {
  return (
    <section id="eligibility" className="pt-10 pb-20 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Eligibility
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            무료 지원 신청 조건
          </h2>
          <p className="text-gray-500 mt-3">
            아래 조건에 해당하시면 무료 비자 지원을 받으실 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* 가능 */}
          <div className="bg-white border-2 border-green-200 rounded-2xl p-6 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                <span className="text-green-600">신청 가능</span>
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  유학원을 통하지 않고{" "}
                  <strong>직접 파트너 대학에 지원하여 오퍼를 받은 학생</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  일부 <strong>파운데이션 / 프리마스터 / 에이레벨 과정</strong> 학생
                  <span className="text-xs text-gray-400 block mt-0.5">
                    (상담 필요)
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* 불가 */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                <span className="text-red-600">신청 불가</span>
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>
                  <strong>Pathway College(패스웨이) 경유 진학자</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>
                  <strong>복학자</strong>
                </span>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">
                위 조건에 해당하시거나, 학생비자 외 다른 영국비자가 필요하시면
                유료 대행 서비스를 이용하실 수 있습니다.
              </p>
              <a
                href="/visa-services"
                className="block mt-3 text-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                유료 비자 대행 보러가기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
