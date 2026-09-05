"use client";

import { useState } from "react";

const faqs = [
  {
    q: "정말 100% 무료인가요? 숨겨진 비용은 없나요?",
    a: "네, 영국학생비자 지원센터의 비자 신청 지원 서비스 자체는 100% 무료입니다. 단, 영국 정부에 납부하는 비자 신청료(약 524파운드), IHS 의료보험료, 결핵검사비 등 공식 비용은 신청자 본인 부담입니다. 우리는 모든 비용 항목을 사전에 투명하게 안내해 드립니다.",
  },
  {
    q: "어떤 학교에 합격해야 무료 지원을 받을 수 있나요?",
    a: "영국학생비자 지원센터 파트너십 대학에서 오퍼(Conditional / Unconditional)를 받으신 분이 대상입니다. 영국 60여 개 대학과 파트너십을 맺고 있어 대부분 가능합니다. 합격하신 대학명을 알려 주시면 즉시 확인해 드립니다.",
  },
  {
    q: "학생비자 발급까지 얼마나 걸리나요?",
    a: "일반적으로 한국에서 신청 시 3주, Priority 서비스(추가 비용)를 이용하면 5영업일 이내에 결과가 나옵니다. CAS 컨펌·재정증명 준비 기간을 포함하면 보통 1~2개월 정도 소요됩니다.",
  },
  {
    q: "비자가 거절되면 어떻게 되나요?",
    a: "거절 시 우리가 원인을 분석해 드리고, 재신청을 무료로 도와드립니다. 단, 영국 정부에 납부한 비자 신청료(약 524파운드)는 환불되지 않습니다. 그래서 한 번에 발급받는 게 가장 중요하며, 우리의 노하우로 99% 이상 합격률을 유지하고 있습니다.",
  },
  {
    q: "프리세셔널 과정도 무료 지원에 포함되나요?",
    a: "네, 포함됩니다. 영어 점수가 부족해 프리세셔널 과정 등록이 필요한 경우, 대학과 연계하여 코스 등록도 무료로 지원해 드립니다.",
  },
  {
    q: "해외에 있어도 신청 가능한가요?",
    a: "네, 가능합니다. 카카오톡·이메일·화상상담으로 해외에 계신 분도 편리하게 무료 비자 지원 서비스를 이용하실 수 있습니다.",
  },
  {
    q: "학생비자 외 다른 영국비자도 지원하나요?",
    a: "네. 비파트너 대학 학생비자 · 방문교수(Academic Visitor) · 단기취업(GAE) 비자 등은 유료 지원 서비스로 진행됩니다. 비자별 안내 페이지에서 자세한 내용을 확인하실 수 있습니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-accent font-bold text-sm">
                    Q{i + 1}
                  </span>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {faq.q}
                  </span>
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
              >
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
