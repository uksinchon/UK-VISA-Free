"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState<"free" | "premium" | "">("");

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#101935] to-[#0d1a3a]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
              Free Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              무료 상담 신청
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              영국유학·비자에 대한 궁금한 점이 있으시면 언제든 문의해 주세요.
              영국유학센터 신촌지사 전문 상담사가 친절하게 답변드립니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">전화 상담</p>
                  <p className="text-white font-bold">02-365-0500</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">카카오톡 상담</p>
                  <p className="text-white font-bold">@영국유학센터신촌</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">이메일</p>
                  <p className="text-white font-bold">sinchon@ukvisa.kr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">신촌지사 위치</p>
                  <p className="text-white font-bold">서울 서대문구 신촌로 134</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  상담 신청이 완료되었습니다
                </h3>
                <p className="text-gray-500 text-sm">
                  영업일 기준 24시간 이내에 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                {/* Service Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    어떤 서비스를 원하시나요? <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setServiceType("free")}
                      className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        serviceType === "free"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="text-xs font-bold text-blue-600 mb-0.5">
                        📚 FREE
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        파트너십 학생비자
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType("premium")}
                      className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        serviceType === "premium"
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-accent/40"
                      }`}
                    >
                      <div className="text-xs font-bold text-accent mb-0.5">
                        💎 PREMIUM
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        유료 비자 지원
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    이름 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                    placeholder="홍길동"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      연락처 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    비자 / 유학 유형 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm text-gray-700"
                  >
                    <option value="">선택해 주세요</option>
                    <option>파트너십 대학 학생비자 (무료)</option>
                    <option>비파트너 대학 학생비자</option>
                    <option>아동 학생비자</option>
                    <option>방문교수 비자 (Academic Visitor)</option>
                    <option>단기취업 비자 (GAE)</option>
                    <option>동반 가족 비자</option>
                    <option>가디언 비자 (Parent of a Child Student)</option>
                    <option>아직 잘 모르겠음</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm resize-none"
                    placeholder="비자 / 유학 관련 궁금한 점을 남겨주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-lg transition-colors text-base"
                >
                  무료 상담 신청하기
                </button>
                <p className="text-xs text-gray-400 text-center">
                  * 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
