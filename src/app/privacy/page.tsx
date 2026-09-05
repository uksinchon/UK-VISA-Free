import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | 영국학생비자 지원센터",
  description:
    "영국학생비자 지원센터(ukvisa.kr) 개인정보 처리방침. 영국유학센터 신촌지사가 운영하는 영국 학생비자 무료 지원 서비스의 개인정보 보호 정책입니다.",
};

const internalRetention: [string, string, string][] = [
  ["부정 이용 기록", "부정 이용 방지", "1년"],
  ["비자 상담·수속 진행 기록", "사후 문의 대응 및 서비스 품질 개선", "서비스 종료 후 3년"],
];

const legalRetention: [string, string, string][] = [
  [
    "계약 또는 청약철회 등에 관한 기록",
    "전자상거래 등에서의 소비자보호에 관한 법률",
    "5년",
  ],
  [
    "대금결제 및 재화 등의 공급에 관한 기록",
    "전자상거래 등에서의 소비자보호에 관한 법률",
    "5년",
  ],
  ["전자금융 거래에 관한 기록", "전자금융거래법", "5년"],
  [
    "소비자의 불만 또는 분쟁처리에 관한 기록",
    "전자상거래 등에서의 소비자보호에 관한 법률",
    "3년",
  ],
  [
    "본인 확인에 관한 기록",
    "정보통신망 이용촉진 및 정보보호 등에 관한 법률",
    "6개월",
  ],
  ["웹사이트 방문 기록", "통신비밀보호법", "3개월"],
];

const thirdParty: [string, string, string, string][] = [
  [
    "영국유학센터 강남본사",
    "파트너 대학 학생비자 무료 지원 수속 연계",
    "성명, 생년월일, 연락처, 이메일, 합격 대학명, 오퍼 타입, 코스 정보",
    "서비스의 제공 목적이 달성된 후 파기",
  ],
  [
    "edm유학",
    "영국 학생비자 수속 협력 서비스 제공",
    "성명, 생년월일, 지원 학교, 지원 학과",
    "서비스의 제공 목적이 달성된 후 파기",
  ],
  [
    "UKEN 영국유학",
    "영국 학생비자 수속 협력 서비스 제공",
    "성명, 생년월일, 지원 학교, 지원 학과",
    "서비스의 제공 목적이 달성된 후 파기",
  ],
  [
    "사람사랑유학원",
    "영국 학생비자 수속 협력 서비스 제공",
    "성명, 생년월일, 지원 학교, 지원 학과",
    "서비스의 제공 목적이 달성된 후 파기",
  ],
];

const trustees: [string, string, string][] = [
  [
    "한국유학출장여행보험센터",
    "유학생 보험 신청 지원",
    "회원탈퇴 또는 위탁계약 종료 시까지",
  ],
  [
    "어시스트카드",
    "유학생 보험 신청 지원",
    "회원탈퇴 또는 위탁계약 종료 시까지",
  ],
];

const purposes = [
  "영국 학생비자 무료 지원 자격 확인 및 안내(파트너 대학 합격자 대상)",
  "영국 학생비자 유료 지원 서비스(16.5만원~) 제공",
  "영국 학생비자 상담 및 회사 서비스 정보 제공",
  "회원 및 신청자 관리",
  "만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의 여부 확인",
  "고객 불만 접수 및 처리, 분쟁조정을 위한 기록 보전",
  "고지사항 전달",
  "서비스 제공에 관한 계약 이행 및 비용 정산, 결제",
  "마케팅 및 광고",
  "웹사이트 사용성 개선",
  "회사 서비스 개선",
  "고객과의 상담기록 보존, 상담 서비스에 대한 실시간 혹은 사후적 개선 활용, 서비스 개선을 위한 내부 교육자료 활용",
];

function SectionHeading({ children, n }: { children: React.ReactNode; n: number }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
      <span className="text-accent mr-2">{n}.</span>
      {children}
    </h2>
  );
}

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50">
            {head.map((h, i) => (
              <th
                key={i}
                className="border border-gray-200 px-3 py-2.5 text-left font-bold text-gray-700 text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="bg-white">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-gray-200 px-3 py-2.5 text-gray-700 leading-relaxed"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="pt-28 pb-10 md:pt-32 md:pb-12 bg-gradient-to-br from-primary via-[#1f2c4a] to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full border border-white/20 mb-4">
              PRIVACY POLICY
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">
              개인정보 처리방침
            </h1>
            <p className="text-sm text-gray-300">
              영국학생비자 지원센터(ukvisa.kr) · 영국유학센터 신촌지사
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-gray-700 leading-relaxed">
          <div className="bg-orange-50/50 border border-accent/15 rounded-2xl p-5 md:p-6 text-sm">
            <p>
              영국유학센터 신촌지사(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」 제30조에 따라
              정보주체(이용자)의 개인정보를 보호하고, 이와 관련한 고충을 신속하고
              원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>
            <p className="mt-2">
              본 방침은 회사가 운영하는 영국학생비자 전문 안내·지원 서비스 사이트{" "}
              <a
                href="https://ukvisa.kr"
                className="text-accent font-semibold hover:underline"
              >
                ukvisa.kr
              </a>{" "}
              에 적용됩니다.
            </p>
          </div>

          {/* 1 */}
          <SectionHeading n={1}>개인정보 처리목적</SectionHeading>
          <p className="text-sm mb-3">
            회사는 개인정보를 다음의 목적을 위해 활용합니다. 활용한 개인정보는
            다음의 목적 이외의 용도로는 사용되지 않으며, 이용목적이 변경되는
            경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            {purposes.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="text-sm mt-3 text-gray-500">
            수집된 개인정보가 고객의 권리를 침해할 시에는 노출되지 않도록 보호받습니다.
          </p>

          {/* 2 */}
          <SectionHeading n={2}>개인정보 처리 및 보유기간</SectionHeading>
          <p className="text-sm mb-3">
            회사는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간
            또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>

          <h3 className="font-bold text-gray-900 mt-5 mb-2 text-base">
            2-1. 회사 내부 방침에 의한 정보 보유 사유
          </h3>
          <Table head={["항목", "보존 이유", "보존 기간"]} rows={internalRetention} />

          <h3 className="font-bold text-gray-900 mt-6 mb-2 text-base">
            2-2. 관련 법령에 의한 정보 보유 사유
          </h3>
          <p className="text-sm mb-2 text-gray-600">
            상법, 전자상거래 등에서의 소비자보호에 관한 관계법령의 규정에 의하여
            보존할 필요가 있는 경우, 회사는 관계법령에서 정한 일정한 기간 동안
            회사정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의
            목적으로만 이용합니다.
          </p>
          <Table head={["내용", "보존 이유", "보존 기간"]} rows={legalRetention} />

          {/* 3 */}
          <SectionHeading n={3}>개인정보 제3자 제공</SectionHeading>
          <p className="text-sm mb-3">
            회사는 이용자들의 개인정보를 「개인정보의 수집·이용」에서 고지한 범위
            내에서 사용하며, 이용자의 사전 동의 없이 동 범위를 초과하여 이용하거나
            원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의
            경우에는 예외로 합니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5 mb-4">
            <li>이용자들이 사전에 공개 또는 제3자 제공에 동의한 경우</li>
            <li>
              법령의 규정에 의거하거나, 수사·조사 목적으로 법령에 정해진 절차와
              방법에 따라 수사기관 및 감독당국의 요구가 있는 경우
            </li>
            <li>요금 정산을 위하여 필요한 경우</li>
          </ul>
          <Table
            head={["제공받는 자", "제공 목적", "제공 정보", "보유 및 이용기간"]}
            rows={thirdParty}
          />
          <p className="text-sm mt-3 text-gray-600">
            그 밖에 개인정보 제3자 제공이 필요한 경우에는 이용자의 동의를 얻는 등
            적법한 절차를 통하여 제3자에게 개인정보를 제공할 수 있습니다.
          </p>
          <p className="text-sm mt-2 text-gray-600">
            위와 같이 제공하는 개인정보에 대해, 동의하지 않거나 개인정보를 기재하지
            않음으로써 거부할 수 있습니다. 다만, 이때 회원에게 제공되는 서비스가
            제한될 수 있습니다.
          </p>

          {/* 4 */}
          <SectionHeading n={4}>개인정보 처리 위탁</SectionHeading>
          <p className="text-sm mb-3">
            회사는 서비스 제공과 고객 편의 제공 등 업무 수행을 위하여 다음과 같이
            개인정보를 위탁하고 있습니다.
          </p>
          <Table
            head={["위탁받은 자", "위탁업무 내용", "개인정보 보유 및 이용기간"]}
            rows={trustees}
          />
          <p className="text-sm mt-3 text-gray-600">
            회사는 위탁계약 체결 시 「개인정보 보호법」 제25조에 따라 위탁업무 수행
            목적 외 개인정보 처리 금지, 재위탁 제한, 수탁자에 대한 관리·감독, 책임에
            관한 사항을 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
            감독하고 있습니다.
          </p>

          {/* 5 */}
          <SectionHeading n={5}>정보주체와 법정대리인의 권리·의무 및 행사방법</SectionHeading>
          <p className="text-sm mb-3">
            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를
            행사할 수 있습니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
          </ul>

          {/* 6 */}
          <SectionHeading n={6}>처리하는 개인정보 항목</SectionHeading>
          <p className="text-sm mb-3">
            회사는 상담, 신청, 서비스 제공의 이유로 아래와 같이 개인정보를 수집하고
            있습니다.
          </p>

          <h3 className="font-bold text-gray-900 mt-5 mb-2 text-base">
            6-1. 웹 양식 (ukvisa.kr 비자 신청 폼 등)
          </h3>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>
              <strong>무료 비자 지원 신청:</strong> 성명, 연락처, 이메일, 합격 대학명(university), 오퍼 타입(offer_type: conditional / unconditional), 문의 내용(message)
            </li>
            <li>
              <strong>유료 비자 지원 / 상담 신청:</strong> 성명, 연락처, 이메일, 합격 대학명, 코스명, 입학 시기, 문의 내용
            </li>
          </ul>

          <h3 className="font-bold text-gray-900 mt-5 mb-2 text-base">
            6-2. 자동 수집 정보
          </h3>
          <p className="text-sm mb-2 text-gray-600">
            회사는 이용자가 웹사이트와 상호작용할 때마다 특정 유형의 정보를 자동으로
            수집·저장합니다. 회사는 이 정보를 웹사이트 트래픽 모니터링과 사용자
            경험 개선에 활용합니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>서비스 이용기록</li>
            <li>접속 로그</li>
            <li>쿠키</li>
            <li>접속 IP 정보</li>
          </ul>

          <h3 className="font-bold text-gray-900 mt-5 mb-2 text-base">
            6-3. 비자 수속 서비스 진행 단계에서 수집되는 정보
          </h3>
          <p className="text-sm mb-2 text-gray-600">
            영국 학생비자 신청 지원 진행 시, 비자 신청에 필요한 다음 서류를 수집합니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>
              <strong>학업 관련:</strong> 무조건부 합격증(Unconditional Offer), CAS Statement, 영어 성적표(IELTS for UKVI 등), 졸업·재학 증명서, 성적증명서
            </li>
            <li>
              <strong>신원 관련:</strong> 여권 사본, 사진(영국 비자 사진 규격), (해당 시) 기존 영국 비자 또는 BRP 사본
            </li>
            <li>
              <strong>재정 증빙:</strong> 통장 거래 내역서, 잔고 증명서, 학비/생활비 납부 영수증
            </li>
            <li>
              <strong>가족 관련(미성년자 또는 부모 후원 시):</strong> 가족관계증명서, 기본증명서, (해당 시) 혼인관계증명서, 부모 동의서·후원자 서약서
            </li>
            <li>
              <strong>후원자 재정(부모/제3자 후원 시):</strong> 사업자등록증명원, 재직증명원, 소득금액증명원
            </li>
            <li>
              <strong>건강 관련:</strong> 결핵 검사 결과서(TB Test Certificate)
            </li>
            <li>
              <strong>(해당 시) 기타:</strong> ATAS Clearance, 부양가족(Dependant) 관련 서류
            </li>
          </ul>

          {/* 7 */}
          <SectionHeading n={7}>개인정보 파기</SectionHeading>
          <p className="text-sm mb-3">
            회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
            되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
          </p>
          <p className="text-sm mb-2">회사는 다음의 방법으로 개인정보를 파기합니다.</p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>
              <strong>전자적 파일:</strong> 파일 삭제, 디스크 포맷
            </li>
            <li>
              <strong>종이 문서:</strong> 분쇄하거나 소각
            </li>
          </ul>

          {/* 8 */}
          <SectionHeading n={8}>개인정보 안정성 확보 조치</SectionHeading>
          <p className="text-sm mb-3">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>
              <strong>관리적 조치:</strong> 직원 등에 대한 정기적 교육
            </li>
            <li>
              <strong>기술적 조치:</strong> 개인정보처리시스템(또는 개인정보가
              저장된 컴퓨터)의 비밀번호 설정 등 접근권한 관리, 백신 소프트웨어 등
              보안 프로그램 설치, 개인정보가 저장된 파일의 암호화
            </li>
            <li>
              <strong>물리적 조치:</strong> 개인정보가 저장·보관된 장소의 시건, 출입통제 등
            </li>
          </ul>

          {/* 9 */}
          <SectionHeading n={9}>
            개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항
          </SectionHeading>
          <p className="text-sm mb-3">
            회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를
            저장하고 수시로 불러오는 &lsquo;쿠키(cookie)&rsquo;를 사용합니다.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1.5">
            <li>
              <strong>쿠키란:</strong> 웹사이트를 운영하는 데 이용되는 서버(http)가
              이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며, 이용자의 PC
              컴퓨터 내의 하드디스크에 저장되기도 합니다.
            </li>
            <li>
              <strong>쿠키의 사용 목적:</strong> 이용자가 방문한 각 서비스와
              웹사이트에 대한 방문 및 이용 형태, 인기 검색어, 보안 접속 여부 등을
              파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
            </li>
            <li>
              <strong>쿠키의 설치·운영 및 거부:</strong> 웹브라우저 상단의 도구 &gt;
              인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할
              수 있습니다.
            </li>
            <li>쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
          </ul>

          {/* 10 */}
          <SectionHeading n={10}>개인정보 보호책임자</SectionHeading>
          <p className="text-sm mb-3">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
            관련한 정보주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이
            개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm">
            <p className="font-bold text-gray-900 mb-2">개인정보 보호책임자</p>
            <ul className="space-y-1.5">
              <li>
                <strong>성명:</strong> 이정민
              </li>
              <li>
                <strong>직책:</strong> 영국유학센터 신촌지사 지사장
              </li>
              <li>
                <strong>연락처:</strong> 전화 02-393-1030 / 이메일{" "}
                <a
                  href="mailto:info@ukvisa.kr"
                  className="text-accent hover:underline"
                >
                  info@ukvisa.kr
                </a>{" "}
                / 팩스 02-393-5021
              </li>
            </ul>
          </div>

          {/* 11 */}
          <SectionHeading n={11}>개인정보 처리방침 변경</SectionHeading>
          <p className="text-sm">
            이 개인정보 처리방침은{" "}
            <strong>2026년 5월 18일</strong>부터 적용됩니다.
          </p>
          <p className="text-sm mt-2 text-gray-600">
            본 방침의 내용 추가, 삭제 및 수정이 있을 시에는 변경 사항의 시행 7일
            전부터 ukvisa.kr 사이트 내 공지사항을 통하여 고지할 것입니다.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
