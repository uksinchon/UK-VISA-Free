"use client";

import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | 4;

interface Answers {
  purpose?: string;
  partner?: string;
  hasOffer?: string;
  family?: string;
}

const questions = [
  {
    key: "purpose" as const,
    title: "Q1. 영국에 가시는 목적이 무엇인가요?",
    options: [
      { label: "📚 유학 / 어학연수", value: "study" },
      { label: "💼 단기 취업 (Government Authorised Exchange)", value: "gae" },
      { label: "🎓 방문 교수 / 학자", value: "academic" },
      { label: "👨‍👩‍👧 가족 동반 / 가디언", value: "family" },
    ],
  },
  {
    key: "partner" as const,
    title: "Q2. 영국 대학 오퍼를 받으셨나요?",
    options: [
      { label: "✅ 영국유학센터 파트너십 대학에서 받음", value: "partner" },
      { label: "📨 파트너십 대학이 아닌 곳에서 받음", value: "non-partner" },
      { label: "🤔 아직 못 받음 / 모르겠음", value: "none" },
    ],
  },
  {
    key: "hasOffer" as const,
    title: "Q3. 학생의 연령은 어떻게 되시나요?",
    options: [
      { label: "👨‍🎓 만 18세 이상 (성인 학생)", value: "adult" },
      { label: "🧒 만 4 ~ 17세 (아동 학생)", value: "child" },
    ],
  },
  {
    key: "family" as const,
    title: "Q4. 가족과 함께 가시나요?",
    options: [
      { label: "🙋 본인만", value: "solo" },
      { label: "👪 배우자 또는 자녀 동반", value: "with-family" },
      { label: "🧑‍🍼 자녀의 가디언으로 동반", value: "guardian" },
    ],
  },
];

function diagnose(a: Answers): {
  tier: "free" | "premium";
  visa: string;
  desc: string;
  cta: string;
  ctaHref: string;
  badge: string;
} {
  // 가디언
  if (a.family === "guardian") {
    return {
      tier: "premium",
      visa: "Parent of a Child Student Visa (가디언 비자)",
      desc: "자녀 동반 가디언으로 영국에 입국하시는 경우, 가디언 비자 지원이 필요합니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 방문교수
  if (a.purpose === "academic") {
    return {
      tier: "premium",
      visa: "Academic Visitor Visa (방문교수)",
      desc: "방문 교수 / 학자로 입국하시는 경우, 영국유학센터 신촌지사의 유료 지원으로 도와드립니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 단기취업 GAE
  if (a.purpose === "gae") {
    return {
      tier: "premium",
      visa: "Temporary Work - GAE Visa (단기취업)",
      desc: "Government Authorised Exchange 비자 신청은 신촌지사의 유료 지원 서비스로 진행됩니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 아동학생
  if (a.hasOffer === "child") {
    return {
      tier: "premium",
      visa: "Child Student Visa (아동 학생비자)",
      desc: "만 4~17세 아동 학생비자는 보호자 동반 등 검토 사항이 많아 유료 지원을 권장합니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 가족동반
  if (a.family === "with-family") {
    return {
      tier: "premium",
      visa: "Dependant Visa (동반 가족)",
      desc: "배우자·자녀 동반 비자는 추가 서류와 재정 입증이 필요해 유료 지원으로 진행됩니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 파트너십 대학 학생비자 → 무료
  if (a.purpose === "study" && a.partner === "partner") {
    return {
      tier: "free",
      visa: "Student Visa (파트너십 대학)",
      desc: "영국유학센터 신촌지사 파트너십 대학 학생비자는 무료로 전 과정을 지원해 드립니다.",
      cta: "무료 신청하기",
      ctaHref: "#free",
      badge: "📚 FREE",
    };
  }
  // 파트너십 아닌 대학 학생비자 → 유료
  if (a.purpose === "study" && a.partner === "non-partner") {
    return {
      tier: "premium",
      visa: "Student Visa (비파트너 대학)",
      desc: "파트너십이 아닌 대학에서 오퍼를 받으신 경우 유료 지원 서비스로 진행됩니다.",
      cta: "유료 지원 상담 신청",
      ctaHref: "#contact",
      badge: "💎 PREMIUM",
    };
  }
  // 오퍼 아직 못 받음
  if (a.purpose === "study" && a.partner === "none") {
    return {
      tier: "free",
      visa: "유학 상담 + 대학 매칭",
      desc: "오퍼를 받기 전이라면, 영국유학센터 신촌지사의 무료 유학 상담으로 시작하세요!",
      cta: "무료 유학 상담 신청",
      ctaHref: "#free",
      badge: "📚 FREE",
    };
  }
  // 기본
  return {
    tier: "premium",
    visa: "맞춤 상담 추천",
    desc: "전문 상담사가 정확한 비자 유형을 안내해 드립니다. 상담은 언제든 무료입니다.",
    cta: "상담 신청하기",
    ctaHref: "#contact",
    badge: "💎 RECOMMENDED",
  };
}

export default function VisaDiagnosis() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const total = questions.length;
  const progress = step === 4 ? 100 : (step / total) * 100;

  const select = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => (prev < 4 ? ((prev + 1) as Step) : prev));
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const result = step === 4 ? diagnose(answers) : null;

  return (
    <section
      id="diagnosis"
      className="relative py-20 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Visa Diagnosis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            3분 비자 진단
          </h2>
          <p className="text-gray-500 mt-3">
            간단한 질문 4개로 나에게 맞는 비자와 서비스를 추천해 드립니다
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
              <span>{step === 4 ? "진단 완료" : `Step ${step + 1} / ${total}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question or result */}
          {step < 4 && (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {questions[step].title}
              </h3>
              <div className="grid gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => select(questions[step].key, opt.value)}
                    className="text-left bg-white hover:bg-accent/5 border-2 border-gray-200 hover:border-accent rounded-xl px-5 py-4 font-medium text-gray-700 hover:text-accent transition-all group flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <span className="text-gray-300 group-hover:text-accent transition-colors">
                      →
                    </span>
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep((step - 1) as Step)}
                  className="mt-6 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  ← 이전 질문
                </button>
              )}
            </div>
          )}

          {step === 4 && result && (
            <div className="text-center">
              <div
                className={`inline-block text-xs font-bold tracking-wider px-3 py-1.5 rounded-full mb-5 ${
                  result.tier === "free"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {result.badge}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {result.visa}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
                {result.desc}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={result.ctaHref}
                  className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-white transition-all ${
                    result.tier === "free"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-accent hover:bg-accent-dark"
                  }`}
                >
                  {result.cta} →
                </a>
                <button
                  onClick={reset}
                  className="text-sm text-gray-500 hover:text-accent transition-colors font-medium px-4 py-2"
                >
                  다시 진단하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
