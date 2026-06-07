"use client";

import { useState } from "react";

const allPartners: [string, string][] = [
  ["Aberystwyth University", "애버리스티스대학교"],
  ["Aberdeen, University of", "아버딘 대학교"],
  ["Arts University Bournemouth", "본머스예술대"],
  ["Aston University", "아스톤대학교"],
  ["Bath, University of", "바스대학교"],
  ["Birkbeck, University of London", "버벡 런던대"],
  ["Birmingham, University of", "버밍엄대학교"],
  ["Bournemouth University", "본머스대학교"],
  ["Brighton, University of", "브라이튼대학교"],
  ["Bristol, University of", "브리스톨대학교"],
  ["Brunel University of London", "브루넬 런던대"],
  ["Cardiff Metropolitan University", "카디프 메트로폴리탄대학교"],
  ["Cardiff University", "카디프대학교"],
  ["Central Lancashire, University of", "UCLan"],
  ["Coventry University", "코벤트리대학교"],
  ["Cranfield University", "크랜필드대학교"],
  ["De Montfort University", "드몽포트대학교"],
  ["Dundee, University of", "던디대학교"],
  ["Durham University", "더럼대학교"],
  ["East Anglia, University of", "이스트 앵글리아대학교"],
  ["Essex, University of", "에식스대학교"],
  ["Exeter, University of", "엑시터대학교"],
  ["Glasgow School of Art", "글래스고 예술대"],
  ["Glasgow, University of", "글래스고대학교"],
  ["Goldsmiths, University of London", "골드스미스 런던대"],
  ["Greenwich, University of", "그리니치대학교"],
  ["Huddersfield, University of", "허더스필드대학교"],
  ["Kent, University of", "켄트대학교"],
  ["Kingston University", "킹스턴대학교"],
  ["Lancaster University", "랑카스터대학교"],
  ["Leeds Arts University", "리즈 아트 대학교"],
  ["Leeds Beckett University", "리즈 베켓대학교"],
  ["Leeds, University of", "리즈대학교"],
  ["Leicester, University of", "레스터대학교"],
  ["Liverpool Institute for Performing Arts", "LIPA"],
  ["Liverpool John Moores University", "리버풀 존 무어 대학교"],
  ["Liverpool, University of", "리버풀대학교"],
  ["Manchester Metropolitan University", "맨체스터 메트로폴리탄대학교"],
  ["Newcastle University", "뉴캐슬대학교"],
  ["Northumbria University, Newcastle", "노섬브리아대학교"],
  ["Nottingham Trent University", "노팅엄트렌트대학교"],
  ["Nottingham, University of", "노팅엄대학교"],
  ["Oxford Brookes University", "옥스포드 브룩스대학교"],
  ["Plymouth, University of", "플리머스대학교"],
  ["Portsmouth, University of", "포츠머스대학교"],
  ["Queen Mary, University of London", "퀸메리 런던대"],
  ["Queen's University, Belfast", "퀸즈 대학교 벨파스트"],
  ["Ravensbourne", "레이번스본"],
  ["Reading, University of", "레딩대학교"],
  ["Royal Holloway, University of London", "로열 홀로웨이 런던대"],
  ["Sheffield Hallam University", "셰필드 할램 대학교"],
  ["Sheffield, University of", "셰필드대학교"],
  ["SOAS, University of London", "소아스 런던대"],
  ["Southampton, University of", "사우스햄튼대학교"],
  ["St. Andrews, University of", "세인트 앤드류스대학교"],
  ["Strathclyde, University of", "스트라스클라이드대학교"],
  ["Surrey, University of", "서리대학교"],
  ["Sussex, University of", "서식스대학교"],
  ["University for the Creative Arts", "UCA"],
  ["Warwick, University of", "워릭대학교"],
  ["West London, University of", "웨스트 런던대학교"],
  ["West of England, Bristol, University of", "웨스트 잉글랜드 대학교"],
  ["Westminster, University of", "웨스트민스터대학교"],
  ["York, University of", "요크대학교"],
];

const PREVIEW_COUNT = 20;

export default function PartnerUniversities() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allPartners : allPartners.slice(0, PREVIEW_COUNT);

  return (
    <section id="partners" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Partner Universities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            서비스 이용 가능 파트너 대학
          </h2>
          <p className="text-gray-500 mt-3">
            아래 대학에 합격하셨다면 학생비자 무료 대행 서비스를 이용하실 수 있습니다
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {visible.map(([en, kr], i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-3.5 py-3 text-sm"
              >
                <span className="text-accent flex-shrink-0">●</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-[12px] truncate">
                    {en}
                  </div>
                  <div className="text-[11px] text-gray-400 truncate">{kr}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-accent text-gray-700 hover:text-accent font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
              >
                + {allPartners.length - PREVIEW_COUNT}개 대학 더 보기
              </button>
            ) : (
              <button
                onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent font-semibold text-sm px-5 py-2.5 transition-colors"
              >
                ▲ 접기
              </button>
            )}
            <p className="text-xs text-gray-400 mt-3">
              총 {allPartners.length}개 영국 대학과 파트너십 ·{" "}
              <strong>이 리스트에 없는 대학은 문의 주세요</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
