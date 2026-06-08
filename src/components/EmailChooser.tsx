"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "info@ukvisa.kr";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

type Props = {
  /** 외부 wrapper 클래스 (footer: "relative", 폼: "relative inline-block") */
  wrapperClassName?: string;
  /** 트리거 버튼 클래스 (기존 링크 스타일과 동일하게) */
  className?: string;
  /** 아이콘 크기 클래스 */
  iconClassName?: string;
};

/**
 * 이메일 클릭 시 메일 작성 방법을 선택할 수 있는 드롭다운.
 * Gmail 작성 / 기본 메일 앱(mailto) / 주소 복사 제공.
 */
export default function EmailChooser({
  wrapperClassName = "relative inline-block",
  className = "",
  iconClassName = "w-4 h-4",
}: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* 복사 실패 시 무시 */
    }
    setOpen(false);
  }

  return (
    <div ref={ref} className={wrapperClassName}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={className}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg
          className={`${iconClassName} text-accent flex-shrink-0`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {EMAIL}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 z-50 w-44 rounded-xl bg-white shadow-xl border border-gray-100 py-1 text-sm text-gray-700 text-left"
        >
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 hover:bg-gray-50 transition-colors"
            role="menuitem"
          >
            Gmail로 작성
          </a>
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 hover:bg-gray-50 transition-colors"
            role="menuitem"
          >
            기본 메일 앱
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors"
            role="menuitem"
          >
            {copied ? "복사됨 ✓" : "주소 복사"}
          </button>
        </div>
      )}
    </div>
  );
}
