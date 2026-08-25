// 투명성/법적 고지 — 민간 유학원임을 명시 (Google Ads "정부 문서 및 서비스" 정책 대응)
export default function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-700">안내 · </span>
            본 유학원은 영국 정부, 이민성(UKVI) 또는 공식 비자 신청 센터(VFS Global)와
            관련이 없는 <span className="font-semibold text-gray-700">민간 유학 수속 전문 기관</span>입니다.
            비자 발급의 최종 결정권은 영국 이민성에 있으며, 당사는 비자 신청 서류 준비 및
            자문 서비스를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
