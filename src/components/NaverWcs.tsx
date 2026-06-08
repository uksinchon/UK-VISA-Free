"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// 네이버 전환추적(NAVER CTS) 공통키 — 광고주시스템에서 발급
const NAVER_WCS_ACCOUNT_ID = "s_3d1918825fe3";
// 쿠키 도메인 (1차 도메인만 설정 — 가이드 기준)
const NAVER_WCS_INFLOW_DOMAIN = "ukvisa.kr";

declare global {
  interface Window {
    wcs?: {
      inflow: (domain?: string) => void;
      trans: (conv: { type: string; [key: string]: unknown }) => void;
    };
    wcs_add?: Record<string, string>;
    wcs_do?: () => void;
  }
}

/** PV(페이지뷰) 이벤트 전송 — 공통 스크립트 */
function sendPv() {
  try {
    if (typeof window === "undefined" || !window.wcs || !window.wcs_do) return;
    if (!window.wcs_add) window.wcs_add = {};
    window.wcs_add["wa"] = NAVER_WCS_ACCOUNT_ID;
    window.wcs.inflow(NAVER_WCS_INFLOW_DOMAIN);
    window.wcs_do();
  } catch {
    /* 전환추적 오류가 사이트 동작에 영향 주지 않도록 무시 */
  }
}

/** 신청완료(lead) 전환 이벤트 전송 — 폼 제출 성공 시 호출 */
export function sendNaverLead() {
  try {
    if (typeof window === "undefined" || !window.wcs) return;
    if (!window.wcs_add) window.wcs_add = {};
    window.wcs_add["wa"] = NAVER_WCS_ACCOUNT_ID;
    window.wcs.trans({ type: "lead" });
  } catch {
    /* 무시 */
  }
}

/**
 * NAVER 공통 SCRIPT (wcslog.js) 로더.
 * - 최초 로드 시 PV 1회 전송
 * - Next.js 클라이언트 라우팅으로 페이지가 바뀔 때마다 PV 재전송
 */
export default function NaverWcs() {
  const pathname = usePathname();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) sendPv();
  }, [pathname]);

  return (
    <Script
      src="https://wcs.naver.net/wcslog.js"
      strategy="afterInteractive"
      onLoad={() => {
        loadedRef.current = true;
        sendPv();
      }}
    />
  );
}
