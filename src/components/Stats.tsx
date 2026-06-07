"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "25",
    suffix: "년+",
    label: "전문 노하우",
    desc: "2001년부터 쌓아온 영국유학·비자 전문성",
    icon: "📅",
  },
  {
    number: "BC",
    suffix: "",
    label: "UK Specialist",
    desc: "영국문화원 공인 영국 전문가",
    icon: "🏛️",
  },
  {
    number: "1,000",
    suffix: "+",
    label: "누적 고객",
    desc: "1,000여 명의 학생·전문직이 선택한 서비스",
    icon: "👥",
  },
  {
    number: "99",
    suffix: "%+",
    label: "비자 합격률",
    desc: "업계 최고 수준의 비자 발급 합격률",
    icon: "🏆",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            신뢰할 수 있는 실적
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 ${
                visible ? "animate-count" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary-600">
                {s.number}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="text-sm font-bold text-gray-900 mt-2">
                {s.label}
              </div>
              <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
