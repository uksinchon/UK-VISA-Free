export default function VisaInfo() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234191FA' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Stats */}
          <div>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              영국비자, 왜 전문가에게
              <br />
              맡겨야 할까요?
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-2xl font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      비자 거절률{" "}
                      <span className="text-red-400">약 2.9%</span>
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      2022년 1/4분기 기준, 영국 비자의 약 2.9%가 거절됩니다.
                      한 번 거절되면 재신청 시 불이익이 가중됩니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      전문가 대행 시 합격률{" "}
                      <span className="text-accent">99% 이상</span>
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      25년간 1,000명 이상의 비자를 성공적으로 발급한
                      노하우로, 한 번에 비자를 받으실 수 있도록 도와드립니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      복잡한 서류, 전문가가 해결
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      재정증명, 영문서류, 바이오메트릭 예약까지
                      까다로운 영국비자 신청 과정을 한 번에 해결합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-blue-600/10 rounded-3xl p-8 border border-white/10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-6">
                  <span className="text-5xl">🇬🇧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  비자 한 방에 받는 방법
                </h3>
                <p className="text-gray-400 mb-8">
                  전문가 상담으로 시작하세요
                </p>
                <div className="space-y-3 text-left">
                  {[
                    "비자 유형별 맞춤 상담",
                    "필수 서류 체크리스트 제공",
                    "서류 작성 및 번역 대행",
                    "온라인 신청서 작성 대행",
                    "바이오메트릭 예약 안내",
                    "발급까지 진행상황 실시간 공유",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3"
                    >
                      <span className="text-accent font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
