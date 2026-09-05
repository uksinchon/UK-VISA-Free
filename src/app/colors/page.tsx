import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "컬러 팔레트 비교 | 영국학생비자 지원센터",
  description: "현재 + 3가지 대안 컬러 팔레트 비교",
};

type Palette = {
  id: string;
  name: string;
  subtitle: string;
  concept: string;
  pros: string[];
  cons: string[];
  // Color tokens
  bgPrimary: string;
  bgPrimaryFrom: string;
  bgPrimaryVia: string;
  bgPrimaryTo: string;
  textOnDark: string;
  textOnLight: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  accentBg: string; // 카드 액센트 배경
  surface: string; // 일반 카드 배경
  surfaceBorder: string;
  badgeBg: string;
  badgeText: string;
  ctaBg: string;
  ctaText: string;
  highlightColor: string; // 헤드라인 강조어
};

const palettes: Palette[] = [
  {
    id: "current",
    name: "A. 현재 (Navy + Orange)",
    subtitle: "Energetic · Conversion-focused",
    concept: "활기·전환 유도 중심. 모던 SaaS 톤.",
    pros: ["CTA 가시성 매우 높음", "친근하고 활기참", "전환율 친화적"],
    cons: ["영국적 정서 약함", "미국 e-commerce 톤"],
    bgPrimary: "#1a2236",
    bgPrimaryFrom: "#1a2236",
    bgPrimaryVia: "#1f2c4a",
    bgPrimaryTo: "#2a3a63",
    textOnDark: "#FFFFFF",
    textOnLight: "#1a2236",
    accent: "#FF6B35",
    accentDark: "#E84F1C",
    accentLight: "#FF8A5C",
    accentBg: "#FFE6D8",
    surface: "#F9FAFB",
    surfaceBorder: "#E5E7EB",
    badgeBg: "rgba(255,255,255,0.1)",
    badgeText: "#FFFFFF",
    ctaBg: "#FF6B35",
    ctaText: "#FFFFFF",
    highlightColor: "#FF6B35",
  },
  {
    id: "oxford",
    name: "B. Oxford Blue + Heritage Gold",
    subtitle: "Academic · Heritage · Prestige",
    concept:
      "옥스퍼드·케임브리지 브로셔 톤. 명문 학술 신뢰감. 학생비자센터 정체성과 가장 강하게 부합.",
    pros: [
      "영국 명문 대학 톤과 완벽 매칭",
      "British Council 공인 권위감",
      "장기 신뢰 자산화",
    ],
    cons: ["오렌지 대비 CTA 시각 자극은 약간 부드러움"],
    bgPrimary: "#002147",
    bgPrimaryFrom: "#001A38",
    bgPrimaryVia: "#002147",
    bgPrimaryTo: "#003366",
    textOnDark: "#FAF7F0",
    textOnLight: "#002147",
    accent: "#C9A227",
    accentDark: "#A8861F",
    accentLight: "#E0BC4A",
    accentBg: "#F5EBC8",
    surface: "#FAF7F0",
    surfaceBorder: "#E5DDC8",
    badgeBg: "rgba(201,162,39,0.18)",
    badgeText: "#E0BC4A",
    ctaBg: "#C9A227",
    ctaText: "#002147",
    highlightColor: "#C9A227",
  },
  {
    id: "union",
    name: "C. Union Jack Navy + Crimson",
    subtitle: "Official · Authoritative · British",
    concept:
      "영국 국기 컬러. UK Visas & Immigration·영국 정부 공식 톤. 권위와 정통성 강조.",
    pros: [
      "영국 공식 정체성 매우 강함",
      "신뢰·권위 인상",
      "관공서·법무 톤과 일치",
    ],
    cons: ["빨강이 강해 톤 컨트롤 필요", "다소 무거울 수 있음"],
    bgPrimary: "#012169",
    bgPrimaryFrom: "#011445",
    bgPrimaryVia: "#012169",
    bgPrimaryTo: "#02307A",
    textOnDark: "#FFFFFF",
    textOnLight: "#012169",
    accent: "#C8102E",
    accentDark: "#A40C24",
    accentLight: "#E63950",
    accentBg: "#FCE0E5",
    surface: "#F9FAFB",
    surfaceBorder: "#E5E7EB",
    badgeBg: "rgba(255,255,255,0.12)",
    badgeText: "#FFFFFF",
    ctaBg: "#C8102E",
    ctaText: "#FFFFFF",
    highlightColor: "#C8102E",
  },
  {
    id: "racing",
    name: "D. Racing Green + Cream Gold",
    subtitle: "Heritage · Premium · Refined",
    concept:
      "Aston Martin·Saville Row·영국 컨트리클럽 톤. 고급·헤리티지·세련됨.",
    pros: [
      "프리미엄 포지셔닝에 강력",
      "차별화 극대화 (경쟁사와 톤 완전히 다름)",
      "고객 단가 높은 비자에 적합",
    ],
    cons: ["대중성은 낮음", "전환 CTA로는 골드가 약간 약함"],
    bgPrimary: "#0F3D2E",
    bgPrimaryFrom: "#0A2E22",
    bgPrimaryVia: "#0F3D2E",
    bgPrimaryTo: "#1A5440",
    textOnDark: "#FAF7F0",
    textOnLight: "#0F3D2E",
    accent: "#D4AF37",
    accentDark: "#B0902C",
    accentLight: "#E4C557",
    accentBg: "#F5ECCA",
    surface: "#FAF7F0",
    surfaceBorder: "#DDD4BD",
    badgeBg: "rgba(212,175,55,0.18)",
    badgeText: "#E4C557",
    ctaBg: "#D4AF37",
    ctaText: "#0F3D2E",
    highlightColor: "#D4AF37",
  },
];

function Mockup({ p }: { p: Palette }) {
  const heroStyle = {
    background: `linear-gradient(135deg, ${p.bgPrimaryFrom} 0%, ${p.bgPrimaryVia} 50%, ${p.bgPrimaryTo} 100%)`,
  };

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg bg-white">
      {/* Header bar (mini) */}
      <div
        className="h-12 px-5 flex items-center justify-between"
        style={{ background: p.bgPrimary }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold"
            style={{ background: p.accent, color: p.ctaText }}
          >
            UK
          </div>
          <span className="text-white font-bold text-sm">영국학생비자 지원센터</span>
        </div>
        <div
          className="text-[11px] font-bold px-3 py-1 rounded"
          style={{ background: p.ctaBg, color: p.ctaText }}
        >
          무료 신청
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 py-10 text-center" style={heroStyle}>
        <span
          className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full border mb-4"
          style={{
            background: p.badgeBg,
            color: p.badgeText,
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          British Council 공인 에이전트
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3" style={{ color: p.textOnDark }}>
          혼자 지원했지만,
          <br />
          비자는{" "}
          <span style={{ color: p.highlightColor }}>전문가</span>와 함께
          확실하게.
        </h2>
        <p
          className="text-sm mb-4"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          2006년부터 20년 · 40여 개 영국 대학 공식 파트너
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <span
            className="text-xs font-bold px-5 py-2.5 rounded-lg"
            style={{ background: p.ctaBg, color: p.ctaText }}
          >
            지금 무료 비자 지원 →
          </span>
          <span
            className="text-xs font-bold px-5 py-2.5 rounded-lg border"
            style={{
              color: p.textOnDark,
              borderColor: "rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            서비스 자세히 보기
          </span>
        </div>
      </div>

      {/* WhyFree 카드 + CTA 박스 (서비스 카드 톤) */}
      <div className="p-6" style={{ background: p.surface }}>
        <div className="text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: p.accent }}>
          Why Free?
        </div>
        <h3 className="text-lg font-bold mb-3" style={{ color: p.textOnLight }}>
          왜{" "}
          <span style={{ color: p.highlightColor }}>무료</span>인가요?
        </h3>
        <div
          className="rounded-xl border p-4 mb-4 text-xs leading-relaxed"
          style={{
            background: p.accentBg + "55",
            borderColor: p.accent + "33",
            color: p.textOnLight,
          }}
        >
          영국유학센터 신촌지사는 영국 40여개 대학의 공식 파트너로, 학생의
          지원·입학·비자 절차를 함께 진행합니다.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="rounded-xl p-4 text-white text-center"
            style={{
              background: `linear-gradient(135deg, ${p.bgPrimaryVia}, ${p.bgPrimary})`,
            }}
          >
            <div className="text-[10px] font-bold tracking-wider mb-1" style={{ color: p.accentLight }}>
              학생이 받는 것
            </div>
            <div className="text-sm font-bold">전 과정 풀 서비스</div>
            <div className="text-[10px] mt-2 opacity-80">
              ✓ 비자 신청 준비·서류 검토 지원<br />
              ✓ 20년 전문성<br />
              ✓ 40개 대학 직접 채널
            </div>
          </div>
          <div
            className="rounded-xl p-4 text-center border-2 border-dashed"
            style={{
              borderColor: p.accent + "66",
              color: p.textOnLight,
              background: "#FFFFFF",
            }}
          >
            <div className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">
              학생이 내는 것
            </div>
            <div
              className="text-3xl font-extrabold"
              style={{ color: p.accent }}
            >
              0원
            </div>
            <div className="text-[10px] mt-1 text-gray-500">
              서비스 이용료 모두
            </div>
          </div>
        </div>

        {/* 서비스 카드 미니 (3개) */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {["01\n비자 상담", "02\nCAS 지원", "03\n신청서 작성"].map((s, i) => {
            const [num, ...title] = s.split("\n");
            return (
              <div
                key={i}
                className="rounded-lg p-3 border bg-white"
                style={{ borderColor: p.surfaceBorder }}
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-extrabold mb-1.5"
                  style={{
                    background: p.accent + "1a",
                    color: p.accent,
                  }}
                >
                  {num}
                </div>
                <div
                  className="text-[10px] font-bold"
                  style={{ color: p.textOnLight }}
                >
                  {title.join("")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PalettePros({ p }: { p: Palette }) {
  return (
    <div className="space-y-3">
      <div>
        <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
          컨셉
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{p.concept}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
        <div>
          <div className="text-[10px] font-bold tracking-wider text-green-600 uppercase mb-1.5">
            ✓ 강점
          </div>
          <ul className="space-y-1 text-xs text-gray-600 leading-relaxed">
            {p.pros.map((pro, i) => (
              <li key={i} className="flex gap-1">
                <span className="text-green-500">·</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-wider text-red-500 uppercase mb-1.5">
            ✗ 약점
          </div>
          <ul className="space-y-1 text-xs text-gray-600 leading-relaxed">
            {p.cons.map((con, i) => (
              <li key={i} className="flex gap-1">
                <span className="text-red-500">·</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Color swatches */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
        <div className="text-center">
          <div
            className="h-9 rounded-md mb-1 border border-gray-200"
            style={{ background: p.bgPrimary }}
          />
          <div className="text-[10px] text-gray-500">Primary</div>
          <div className="text-[9px] font-mono text-gray-400">{p.bgPrimary}</div>
        </div>
        <div className="text-center">
          <div
            className="h-9 rounded-md mb-1 border border-gray-200"
            style={{ background: p.accent }}
          />
          <div className="text-[10px] text-gray-500">Accent</div>
          <div className="text-[9px] font-mono text-gray-400">{p.accent}</div>
        </div>
        <div className="text-center">
          <div
            className="h-9 rounded-md mb-1 border border-gray-200"
            style={{ background: p.surface }}
          />
          <div className="text-[10px] text-gray-500">Surface</div>
          <div className="text-[9px] font-mono text-gray-400">{p.surface}</div>
        </div>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
              Internal Review
            </div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900">
              컬러 팔레트 비교
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-xs text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              ← 메인으로
            </a>
            <a
              href="/visa-services"
              className="text-xs text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              유료 비자
            </a>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-sm text-gray-600 leading-relaxed">
            현재 컬러셋(<strong className="text-gray-900">A. Navy + Orange</strong>)과
            영국 정체성·전문성을 강화한 3가지 대안(B/C/D)을 동일한 Hero·WhyFree·서비스
            카드 구성으로 비교합니다.
            <br className="hidden md:block" />각 팔레트는 같은 콘텐츠 위에서 Primary
            배경, 액센트 강조, CTA 버튼 색상이 어떻게 적용되는지 보여드립니다.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {palettes.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="block bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2.5 border border-gray-100"
              >
                <div className="font-bold text-gray-900 mb-1 text-[12px]">
                  {p.name}
                </div>
                <div className="flex gap-1 items-center">
                  <span
                    className="inline-block w-4 h-4 rounded"
                    style={{ background: p.bgPrimary }}
                  />
                  <span
                    className="inline-block w-4 h-4 rounded"
                    style={{ background: p.accent }}
                  />
                  <span className="text-gray-400 ml-1 text-[10px]">{p.subtitle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {palettes.map((p) => (
          <div key={p.id} id={p.id} className="scroll-mt-24">
            <div className="mb-5">
              <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">
                {p.subtitle}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {p.name}
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Mockup (2/3) */}
              <div className="lg:col-span-2">
                <Mockup p={p} />
              </div>
              {/* Info (1/3) */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <PalettePros p={p} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Recommendation footer */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">
            추천
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            제 의견: <span className="text-blue-700">B. Oxford Blue + Heritage Gold</span>가
            영국학생비자 지원센터에 가장 적합합니다.
          </h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>
              <strong>이유 1:</strong> &ldquo;영국 명문대 파트너십&rdquo;이 핵심 가치인데, 옥스퍼드 블루는 그 정체성과 정확히 매칭됩니다.
            </li>
            <li>
              <strong>이유 2:</strong> British Council 공인 에이전트라는 권위와 골드 액센트가 잘 어울립니다.
            </li>
            <li>
              <strong>이유 3:</strong> 전환율 측면에서도 골드 CTA는 충분히 시인성이 있고, 오히려 &ldquo;프리미엄 무료 서비스&rdquo;라는 모순적 가치를 더 잘 살립니다.
            </li>
            <li>
              <strong>차선:</strong> 더 강한 영국 정체성을 원하시면{" "}
              <strong>C. Union Jack Navy + Crimson</strong> (관공서·법무 톤),
              차별화 극대화는 <strong>D. Racing Green + Gold</strong> (헤리티지 럭셔리).
            </li>
          </ul>
          <p className="text-xs text-gray-400 mt-4">
            * 결정해 주시면 전체 사이트(Header / Hero / 모든 컴포넌트 / 비자 상세 6개 페이지)에 일괄 반영하겠습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
