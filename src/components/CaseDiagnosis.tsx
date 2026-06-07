"use client";

import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface Answers {
  university?: string;
  selfApply?: "yes" | "no";
  level?: "undergrad" | "master" | "phd" | "other";
  location?: "london" | "outside";
  duration?: "short" | "long";
  family?: "solo" | "with";
  prevVisa?: "none" | "had" | "refused";
}

const questions = [
  {
    key: "university" as const,
    title: "Q1. 합격(예정) 대학을 알려 주세요",
    type: "text" as const,
    placeholder: "예: University of Edinburgh",
  },
  {
    key: "selfApply" as const,
    title: "Q2. 현재 비자를 어떻게 진행 중이신가요?",
    options: [
      { label: "처음부터 끝까지 혼자 알아보는 중", value: "yes" },
      { label: "전문가의 도움을 받을 예정", value: "no" },
    ],
  },
  {
    key: "level" as const,
    title: "Q3. 어떤 코스 레벨에 합격하셨나요?",
    options: [
      { label: "학사 (Undergraduate)", value: "undergrad" },
      { label: "석사 (Master)", value: "master" },
      { label: "박사 (PhD / 연구과정)", value: "phd" },
      { label: "프리세셔널 / 어학연수 / 기타", value: "other" },
    ],
  },
  {
    key: "location" as const,
    title: "Q4. 대학교의 위치는 어디인가요?",
    options: [
      { label: "런던 (London)", value: "london" },
      { label: "런던 외 지역", value: "outside" },
    ],
  },
  {
    key: "duration" as const,
    title: "Q5. 코스 기간은 어떻게 되시나요?",
    options: [
      { label: "6개월 이하 (단기)", value: "short" },
      { label: "6개월 초과 (장기)", value: "long" },
    ],
  },
  {
    key: "family" as const,
    title: "Q6. 가족과 함께 가시나요?",
    options: [
      { label: "본인만", value: "solo" },
      { label: "배우자 또는 자녀 동반", value: "with" },
    ],
  },
  {
    key: "prevVisa" as const,
    title: "Q7. 이전 영국 비자 신청 경험이 있으신가요?",
    options: [
      { label: "처음 신청", value: "none" },
      { label: "신청·발급 받은 적 있음", value: "had" },
      { label: "거절 받은 적 있음", value: "refused" },
    ],
  },
];

function diagnose(a: Answers): {
  level: "낮음" | "중간" | "중상" | "높음";
  color: string;
  bgColor: string;
  risks: string[];
} {
  const risks: string[] = [];
  let score = 0;

  if (a.selfApply === "yes") {
    score += 1;
    risks.push(
      "자력 신청 시 CAS 신청서 작성 실수 · 28일 룰 등 핵심 규정 누락 리스크"
    );
  }
  if (a.level === "phd") {
    score += 2;
    risks.push("ATAS 인증 대상 여부 확인 필요 (STEM 분야 박사·연구 필수)");
  }
  if (a.location === "london") {
    score += 1;
    risks.push("런던 거주비 반영 재정증명 기준 상향 — 정확한 재정 금액 넉넉히 준비");
  }
  if (a.duration === "long") {
    score += 1;
    risks.push("장기 코스 비자는 결핵검사·재정증명 등 서류 요건을 좀더 신경써야해요");
  }
  if (a.family === "with") {
    score += 2;
    risks.push("부양가족 동반 시 배우자·자녀당 추가 재정증명 필요");
  }
  if (a.prevVisa === "refused") {
    score += 3;
    risks.push("거절 이력 보유 — 거절 사유 분석 없이 재신청 시 또 거절 리스크");
  } else if (a.prevVisa === "had") {
    score += 0;
  }

  // 위로 카운트
  if (a.level === "master") score += 0.5;

  let level: "낮음" | "중간" | "중상" | "높음";
  let color: string;
  let bgColor: string;

  if (score >= 5) {
    level = "높음";
    color = "text-red-600";
    bgColor = "bg-red-100";
  } else if (score >= 3) {
    level = "중상";
    color = "text-orange-600";
    bgColor = "bg-orange-100";
  } else if (score >= 1.5) {
    level = "중간";
    color = "text-amber-600";
    bgColor = "bg-amber-100";
  } else {
    level = "낮음";
    color = "text-green-600";
    bgColor = "bg-green-100";
  }

  // 최소 3개 리스크 보장
  if (risks.length < 3) {
    if (risks.length < 3)
      risks.push("결핵검사 결과일과 비자 접수 시점이 어긋날 가능성");
    if (risks.length < 3)
      risks.push("CAS 정보 오류 시 대학 재발급까지 평균 5-10 영업일 소요");
    if (risks.length < 3)
      risks.push("비자센터 예약 슬롯 부족으로 출국 일정 지연 가능");
  }

  return { level, color, bgColor, risks: risks.slice(0, 5) };
}

export default function CaseDiagnosis() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [textValue, setTextValue] = useState("");

  const total = questions.length;
  const progress = step === total ? 100 : (step / total) * 100;

  const selectOption = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => (prev < total ? ((prev + 1) as Step) : prev));
  };

  const submitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textValue.trim()) return;
    setAnswers((prev) => ({ ...prev, university: textValue.trim() }));
    setStep((prev) => (prev < total ? ((prev + 1) as Step) : prev));
  };

  const reset = () => {
    setAnswers({});
    setTextValue("");
    setStep(0);
  };

  const result = step === total ? diagnose(answers) : null;

  return (
    <section
      id="diagnosis"
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50/50"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Free Diagnosis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            30초 케이스 복잡도 진단
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            7개 질문으로 내 비자 케이스의 복잡도와 리스크를 진단해 드립니다.
            <br />
            <span className="text-gray-400 text-xs">
              * 진단은 무료이며, 응답은 저장되지 않습니다.
            </span>
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
          {/* Progress */}
          <div className="mb-7">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
              <span>
                {step === total ? "진단 완료" : `Step ${step + 1} / ${total}`}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question or Result */}
          {step < total && questions[step].type === "text" && (
            <form onSubmit={submitText}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {questions[step].title}
              </h3>
              <input
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder={(questions[step] as any).placeholder}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-base"
                autoFocus
              />
              <button
                type="submit"
                className="w-full mt-4 bg-accent hover:bg-accent-dark text-white font-bold py-3.5 rounded-xl transition-colors disabled:bg-gray-300"
                disabled={!textValue.trim()}
              >
                다음 질문 →
              </button>
            </form>
          )}

          {step < total &&
            (questions[step] as any).options &&
            !(questions[step] as any).type && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {questions[step].title}
                </h3>
                <div className="grid gap-3">
                  {(questions[step] as any).options.map((opt: any) => (
                    <button
                      key={opt.value}
                      onClick={() =>
                        selectOption(questions[step].key, opt.value)
                      }
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

          {step === total && result && (
            <div className="text-center">
              {/* 복잡도 결과 */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  내 케이스 복잡도
                </div>
                <div
                  className={`inline-flex items-center gap-2 ${result.bgColor} ${result.color} font-extrabold text-2xl md:text-3xl px-6 py-2.5 rounded-full`}
                >
                  {result.level}
                </div>
              </div>

              {/* 리스크 */}
              <div className="text-left bg-red-50/50 border border-red-100 rounded-2xl p-5 md:p-7 mb-6">
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4">
                  이 케이스의 주요 리스크 {result.risks.length}가지
                </h4>
                <ul className="space-y-2.5">
                  {result.risks.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-gray-700 leading-relaxed"
                    >
                      <span className="text-red-500 font-bold flex-shrink-0">
                        {i + 1}.
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 큰 CTA */}
              <div className="bg-gradient-to-br from-primary-700 to-primary rounded-2xl p-7 text-white">
                <p className="text-sm text-gray-300 mb-2">
                  이 케이스, 직접 처리하시기 어려우신가요?
                </p>
                <p className="text-xl md:text-2xl font-extrabold mb-5">
                  저희가 무료로 처리해드립니다.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30"
                >
                  지금 무료 의뢰 신청 →
                </a>
                <button
                  onClick={reset}
                  className="block mx-auto mt-4 text-xs text-gray-400 hover:text-white transition-colors"
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
