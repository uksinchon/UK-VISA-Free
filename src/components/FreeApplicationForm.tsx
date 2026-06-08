"use client";

import { useState } from "react";
import { sendNaverLead } from "@/components/NaverWcs";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqaqagrk";

export default function FreeApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "[ukvisa.kr] 무료 비자 지원 신청");
    formData.append("폼_종류", "메인 무료 신청 폼");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        sendNaverLead(); // NAVER 신청완료(lead) 전환 전송
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(
          data?.errors?.[0]?.message ||
            "신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
        );
      }
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-10 pb-20 md:py-24 overflow-hidden bg-gradient-to-br from-primary via-[#1f2c4a] to-primary-700"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Apply Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            지금 무료 비자 지원 신청하기
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-gray-300">
            <span>✓ 대행 수수료 0원</span>
            <span>✓ 비자부터 출국까지 원스톱</span>
            <span>✓ British Council 공인</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                무료 비자 지원 신청이 완료되었습니다
              </h3>
              <p className="text-gray-500 text-sm">
                영업일 기준 24시간 이내에 전담 매니저가 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-400 mb-2">
                아래 항목을 입력해 주세요. * 표시는 필수 입력 항목입니다.
              </p>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  이름 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="이름"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                  placeholder="홍길동"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    이메일 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    연락처 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="연락처"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  합격 대학 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="합격_대학"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm"
                  placeholder="예: University of Edinburgh"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  오퍼 종류 <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 border border-gray-200 hover:border-accent rounded-lg px-4 py-3 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="오퍼_종류"
                      value="조건부 오퍼"
                      required
                      className="accent-accent"
                    />
                    <span className="text-sm text-gray-700">조건부 오퍼</span>
                  </label>
                  <label className="flex items-center gap-2 border border-gray-200 hover:border-accent rounded-lg px-4 py-3 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="오퍼_종류"
                      value="무조건부 오퍼"
                      required
                      className="accent-accent"
                    />
                    <span className="text-sm text-gray-700">무조건부 오퍼</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  문의사항 <span className="text-gray-400 text-xs">(선택)</span>
                </label>
                <textarea
                  name="문의사항"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-sm resize-none"
                  placeholder="비자 관련 궁금한 점이나, 합격 통보 일정 등을 알려주세요"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors text-base shadow-md shadow-accent/30"
              >
                {submitting ? "신청 중..." : "지금 무료 비자 지원 시작하기 →"}
              </button>

              <div className="pt-4 border-t border-gray-100 text-center">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-600">
                  <a href="tel:+8223931030" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +82 2 393 1030
                  </a>
                  <a href="mailto:info@ukvisa.kr" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@ukvisa.kr
                  </a>
                  <a
                    href="https://pf.kakao.com/_VNmTxd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.86 5.18 4.62 6.54-.21.78-.78 2.91-.9 3.36-.15.57.21.57.45.42.18-.12 2.85-1.95 4.05-2.76.59.1 1.18.15 1.78.15 5.52 0 10-3.48 10-7.71S17.52 3 12 3z"/>
                    </svg>
                    카카오톡 채널
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 pt-3">
                  * 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Other visa entry */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-300 mb-2">
            학생비자 외 다른 영국비자도 필요하신가요?
          </p>
          <p className="text-xs text-gray-400 mb-3">
            비파트너 대학 학생비자 · 방문교수 · 단기취업(GAE) 비자
          </p>
          <a
            href="/visa-services"
            className="inline-block text-sm font-bold text-accent hover:text-accent-light"
          >
            비자 종류별 안내 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}
