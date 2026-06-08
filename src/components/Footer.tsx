import EmailChooser from "@/components/EmailChooser";
export default function Footer() {
  return (
    <footer className="bg-primary-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xs">UK</span>
              </div>
              <span className="text-white font-heading font-bold">
                영국학생비자센터
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              영국학생비자센터
              <br />
              <span className="text-xs text-gray-500">
                Serviced by 영국유학센터 신촌지사
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              British Council 공인 에이전트
              <br />
              2006년부터 20년 · 40여 개 대학 공식 파트너
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">서비스</h4>
            <div className="space-y-2 text-sm">
              <a href="/#services" className="block hover:text-accent transition-colors">
                무료 지원 서비스
              </a>
              <a href="/#partners" className="block hover:text-accent transition-colors">
                파트너 대학
              </a>
              <a href="/#presessional" className="block hover:text-accent transition-colors">
                프리세셔널 안내
              </a>
              <a href="/#eligibility" className="block hover:text-accent transition-colors">
                신청 조건
              </a>
              <a href="/#contact" className="block hover:text-accent transition-colors">
                신청하기
              </a>
            </div>
          </div>

          {/* 기타 비자 대행 - 강조 박스 */}
          <div className="border-2 border-accent/30 hover:border-accent/60 rounded-xl p-4 bg-accent/5 transition-colors">
            <h4 className="text-accent font-bold text-sm mb-3 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              기타 비자 대행
            </h4>
            <div className="space-y-2 text-sm">
              <a href="/visa/non-partner" className="block hover:text-accent transition-colors">
                비파트너 대학 학생비자
              </a>
              <a href="/visa/academic" className="block hover:text-accent transition-colors">
                방문교수 비자
              </a>
              <a href="/visa/gae" className="block hover:text-accent transition-colors">
                GAE 단기취업
              </a>
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">연락처</h4>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+8223931030" className="flex items-center gap-2 hover:text-accent transition-colors">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +82 2 393 1030
              </a>
              <EmailChooser
                wrapperClassName="relative"
                className="flex items-center gap-2 hover:text-accent transition-colors"
                iconClassName="w-4 h-4"
              />
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.86 5.18 4.62 6.54-.21.78-.78 2.91-.9 3.36-.15.57.21.57.45.42.18-.12 2.85-1.95 4.05-2.76.59.1 1.18.15 1.78.15 5.52 0 10-3.48 10-7.71S17.52 3 12 3z"/>
                </svg>
                <a
                  href="https://pf.kakao.com/_VNmTxd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  카카오톡 채널
                </a>
              </p>
              <p className="flex items-start gap-2 text-xs text-gray-500 pt-1">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  서울특별시 서대문구 신촌로 127,
                  <br />
                  신촌르메이르타운 3차 307호 (창천동)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <a href="/privacy" className="hover:text-accent transition-colors">개인정보 처리방침</a>
          <span className="text-center sm:text-right">
            &copy; 2026 영국학생비자센터 Serviced by 영국유학센터 신촌지사.
            <br className="sm:hidden" />
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
