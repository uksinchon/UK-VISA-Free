"use client";

import { useState } from "react";

const navItems = [
  { label: "서비스 안내", href: "/#services" },
  { label: "파트너 대학", href: "/#partners" },
  { label: "신청 조건", href: "/#eligibility" },
  { label: "프리세셔널", href: "/#presessional" },
  { label: "신청하기", href: "/#contact" },
];

const otherVisas = [
  { label: "비파트너 대학 학생비자", href: "/visa/non-partner" },
  { label: "방문교수 비자", href: "/visa/academic" },
  { label: "GAE 단기취업", href: "/visa/gae" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [other, setOther] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">UK</span>
            </div>
            <div className="leading-tight">
              <span className="text-white font-heading font-bold text-base md:text-lg tracking-tight">
                영국학생비자센터
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}

            {/* Other Visas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOther(true)}
              onMouseLeave={() => setOther(false)}
            >
              <button className="ml-2 bg-accent/10 hover:bg-accent/20 border border-accent/40 hover:border-accent text-accent px-3.5 py-2 text-sm font-bold transition-all rounded-lg flex items-center gap-1">
                기타 비자
                <svg
                  className="w-3 h-3"
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
              {other && (
                <div className="absolute right-0 top-full pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <div className="px-4 py-2 text-[10px] font-bold text-gray-400 tracking-wider uppercase border-b border-gray-100">
                      유료 비자 대행
                    </div>
                    {otherVisas.map((v) => (
                      <a
                        key={v.href}
                        href={v.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-accent transition-colors"
                      >
                        {v.label}
                      </a>
                    ))}
                    <a
                      href="/visa-services"
                      className="block px-4 py-2.5 text-xs font-semibold text-accent hover:bg-orange-50 transition-colors border-t border-gray-100 mt-1"
                    >
                      전체 비자 종류 보기 →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="hidden md:inline-flex bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-md shadow-accent/30"
            >
              무료 신청
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2"
              aria-label="메뉴"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="lg:hidden pb-4 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-200 hover:text-white px-4 py-3 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-white/10 mt-2 pt-2">
              <p className="px-4 py-2 text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                기타 비자 (유료 대행)
              </p>
              {otherVisas.map((v) => (
                <a
                  key={v.href}
                  href={v.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-white px-4 py-2.5 text-sm transition-colors"
                >
                  {v.label}
                </a>
              ))}
            </div>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block mt-3 mx-4 text-center bg-accent text-white text-sm font-bold px-5 py-3 rounded-lg"
            >
              무료 신청
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
