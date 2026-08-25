export type VisaDetail = {
  slug: string;
  category: string; // "United Kingdom" English category
  enTitle: string; // English title shown in hero
  enSubtitle: string; // English subtitle
  title: string; // 한글 제목
  tagline: string; // 한 줄 설명
  price: string;
  tag?: "BEST" | "HOT" | "NEW" | "";
  // Overview: 4 핵심 항목
  overview: { num: string; title: string; desc: string }[];
  // 누구를 위한 비자? (콜아웃)
  highlight: {
    title: string;
    desc: string;
  };
  // 공식 서류 / 필수 서류
  documents: string[];
  // 비자 신청비 & 기타 정부 납부 비용
  fees: { label: string; amount: string; note?: string }[];
  // 가족 동반 가능 여부 + 설명 (+ 선택적 1인당 지원 가격)
  family: {
    allowed: boolean;
    desc: string;
    pricePerPerson?: string;
  };
  // 신청 절차 (6단계)
  process: { step: string; title: string; desc: string }[];
  // 추가 안내 사항
  notes: string[];
  // 표 형식 비자 정보 (선택)
  infoTable?: { label: string; value: string }[];
  // Check Point — 특별 강조 박스 (거절률 경고 + 선택적 발급 지원 실적)
  checkPoint?: {
    warning: string;
    experience?: string;
    institutions?: string[];
  };
  // 흔한 거절 사유 TOP — 거절률 높은 비자 카테고리용
  rejectionReasons?: {
    intro?: string;
    cases: { title: string; cause: string; tip: string }[];
  };
  // 신청 시기 권장 일정 — 출국 역산 가이드
  timing?: {
    recommended: string;
    schedule: { weeks: string; action: string }[];
  };
};

export const visas: Record<string, VisaDetail> = {
  // ─────────────────────────────────────
  "non-partner": {
    slug: "non-partner",
    category: "United Kingdom",
    enTitle: "STUDENT VISA",
    enSubtitle: "Non-Partner University",
    title: "비파트너 대학 학생비자 신청 지원",
    tagline:
      "영국학생비자 지원센터 파트너십이 아닌 대학에서 오퍼를 받으신 분을 위한 학생비자 신청 지원 서비스",
    price: "₩165,000~",
    tag: "BEST",
    overview: [
      {
        num: "01",
        title: "신청 대상",
        desc: "파트너십이 아닌 영국 대학에서 오퍼(Conditional/Unconditional)를 받으신 분",
      },
      {
        num: "02",
        title: "체류 기간",
        desc: "코스 기간 + 최대 4개월 (석사 이상은 코스 종료 후 Graduate Visa 전환 가능)",
      },
      {
        num: "03",
        title: "처리 기간",
        desc: "일반 약 3주 / Priority 5영업일 이내 (영국 정부 별도 비용)",
      },
      {
        num: "04",
        title: "가족 동반",
        desc: "박사 과정 및 정부 후원 석사 이상의 과정의 경우 동반 가족 비자 가능",
      },
    ],
    highlight: {
      title: "이런 분께 추천드립니다",
      desc: "영국학생비자 지원센터의 파트너십이 아닌 대학에서 오퍼를 받으신 학생분이라면 본 서비스로 안전하게 비자 발급을 진행하실 수 있습니다.",
    },
    documents: [
      "여권 (만료일 6개월 이상)",
      "CAS (Confirmation of Acceptance for Studies) Statement",
      "영어 성적표 (UKVI IELTS 등)",
      "재정증명서 (28일 연속 잔액 유지)",
      "결핵 검사 결과서 (TB Test Certificate)",
      "학력 증빙 서류 (학위·성적·재학 증명서)",
      "(미성년자) 부모 동의서·재정 후원자 서약서",
    ],
    fees: [
      { label: "비자 신청료", amount: "£524", note: "영국 정부 납부" },
      {
        label: "건강보험료 (IHS)",
        amount: "£776/년",
        note: "코스 기간만큼 일시 납부",
      },
      { label: "결핵 검사", amount: "약 9~12만원", note: "지정 병원 별도" },
      { label: "비자 신청 지원 서비스료", amount: "₩165,000~", note: "당사 서비스" },
    ],
    family: {
      allowed: true,
      desc: "정부 후원을 받아 지원하는 석사·박사 과정의 경우 배우자·자녀를 위한 동반 가족 비자(Dependant)를 함께 신청할 수 있습니다.",
    },
    process: [
      { step: "01", title: "상담 신청", desc: "합격(예정) 대학·코스·일정 확인" },
      { step: "02", title: "CAS 발급 확인", desc: "대학 측 CAS Statement 검토 및 컨펌" },
      {
        step: "03",
        title: "서류 준비 안내",
        desc: "결핵검사·재정증명·번역 등 단계별 안내",
      },
      { step: "04", title: "비자 신청서 작성", desc: "GOV.UK 온라인 신청서 작성 지원 (제출은 본인)" },
      {
        step: "05",
        title: "비자센터 방문 안내",
        desc: "VFS Global 예약·바이오메트릭·서류 제출 안내",
      },
      {
        step: "06",
        title: "발급 및 출국",
        desc: "Decision Letter·E-Visa 안내 및 출국 오리엔테이션",
      },
    ],
    notes: [
      "위 비용은 영국 정부 정책에 따라 변동될 수 있습니다.",
      "거절 이력이 있으신 경우 상담 시 별도로 안내드립니다.",
      "Pathway College(패스웨이) 경유 진학자는 지원 가능 여부 별도 확인 필요.",
    ],
    infoTable: [
      { label: "비자 종류", value: "Student Visa (구 Tier 4)" },
      {
        label: "체류 기간",
        value:
          "코스 기간이 6개월 이상 1년 미만: + 2개월\n코스 기간이 1년 이상: + 4개월",
      },
      { label: "근로 가능", value: "주 20시간 (학기 중) / 풀타임 (방학)" },
      { label: "연장 신청", value: "영국 내 연장 가능" },
      { label: "동반 가족", value: "조건부 가능 (위 안내 참고)" },
    ],
  },

  // ─────────────────────────────────────
  academic: {
    slug: "academic",
    category: "United Kingdom",
    enTitle: "ACADEMIC VISITOR",
    enSubtitle: "Standard Visitor (Academic)",
    title: "방문교수 비자 (Academic Visitor)",
    tagline:
      "영국 대학·연구소를 방문하는 교수·연구원·학자를 위한 단기 방문 비자 신청 지원",
    price: "₩550,000~",
    tag: "NEW",
    overview: [
      {
        num: "01",
        title: "신청 대상",
        desc: "대학 전임 교원의 안식년뿐 아니라, 비전임 교원 · 정부 부처 · 공기업 · 국책연구기관 임직원도 연구자(researcher) 자격으로 신청 가능합니다.",
      },
      {
        num: "02",
        title: "체류 기간",
        desc: "최대 12개월 (Standard Visitor 카테고리 중 가장 긴 체류 기간) — 연장 불가, 12개월까지만 체류 가능",
      },
      {
        num: "03",
        title: "활동 범위",
        desc: "방문 강의·공동 연구·세미나·논문 검토 등 학술 활동 가능 — 본국 기관과의 근무 관계 유지 필수",
      },
      {
        num: "04",
        title: "유급 활동",
        desc: "영국 기관으로부터 정규 고용 형태의 급여 수령은 불가하며, 강연·세미나 관련 사례비(honorarium)는 허용됩니다.",
      },
    ],
    highlight: {
      title: "대학 전임 교원만 가능한 비자가 아닙니다",
      desc: "Academic Visitor 비자는 'Academics, scientists, and researchers' 를 신청 대상으로 합니다. 즉 학자(academic)뿐 아니라 연구자(researcher) 자격도 별도로 인정되며, 해외 고용이 학술기관일 것을 요구하지 않습니다. 비전임 교원, 정부 부처·공기업·국책연구기관 임직원도 본인의 해외 고용과 관련된 연구 목적으로 영국을 방문할 수 있습니다.",
    },
    documents: [
      "여권 (만료일 6개월 이상)",
      "영국 초청 기관의 초청장 (Invitation Letter) — 활동 일정·기간 명시",
      "본국 기관 재직증명서 · 안식년/해외연수 승인서",
      "박사 학위 증명서 또는 학술·연구 경력 동등 자격 증빙",
      "재정증명서 — 12개월 기준 런던 월 £1,529 / 지방 월 £1,171 + 항공료 £1,500 (최소 1개월 잔고 유지)",
      "직장의 재정 지원서 (해당 시)",
      "본국 거주 증빙 (가족관계증명·주민등록등본)",
      "결핵 검사 결과서 (6개월 이상 체류 예정 시 일반적으로 제출 요구)",
    ],
    fees: [
      {
        label: "비자 신청료",
        amount: "£234",
        note: "Academic 트랙 / 최대 12개월 (2026 기준, 영국 정책에 따라 변동 가능)",
      },
      {
        label: "급행 신청 (선택)",
        amount: "+ £500",
        note: "Priority — 5영업일 이내 결과",
      },
      {
        label: "건강보험료 (IHS)",
        amount: "면제",
        note: "Standard Visitor 카테고리 — NHS 무상 이용 불가, 개인보험 권장",
      },
      { label: "결핵 검사", amount: "약 9~12만원", note: "6개월 이상 체류 예정 시" },
      { label: "비자 신청 지원 서비스료", amount: "₩550,000~", note: "당사 서비스" },
    ],
    family: {
      allowed: false,
      desc: "배우자·자녀도 각각 별도의 Standard Visitor 비자를 신청해야 하며, 체류 목적과 재정 능력을 개별적으로 입증해야 합니다. 단, 6개월 초과(최대 12개월) 학자 트랙으로 동반하는 경우 자녀는 영국 공립학교 입학이 가능합니다.",
      pricePerPerson: "₩165,000~",
    },
    process: [
      {
        step: "01",
        title: "방문 기관 컨펌",
        desc: "영국 초청 기관·일정·연구 주제 확인",
      },
      {
        step: "02",
        title: "초청장 검토",
        desc: "Invitation Letter 형식·내용 적합성 검토",
      },
      {
        step: "03",
        title: "서류 준비",
        desc: "재직·안식년/해외연수 승인서, 학력·연구 경력, 재정증명 안내",
      },
      { step: "04", title: "비자 신청서 작성", desc: "온라인 신청서 작성 지원 (제출은 본인)" },
      {
        step: "05",
        title: "비자센터 방문",
        desc: "VFS Global 예약 및 바이오메트릭",
      },
      {
        step: "06",
        title: "발급 및 출국 안내",
        desc: "Decision Letter 확인 및 입국 시 유의사항 안내",
      },
    ],
    notes: [
      "Standard Visitor 카테고리이므로 IHS는 면제되나, NHS 무상 이용권이 없어 개인보험 가입을 권장합니다.",
    ],
    infoTable: [
      { label: "비자 종류", value: "Standard Visitor - Academic" },
      { label: "체류 기간", value: "최대 12개월 (연장 불가)" },
      {
        label: "근로 가능",
        value: "영국 기관의 정규 고용 형태 급여 불가\n사례비(honorarium) 허용",
      },
      { label: "IHS (건강보험료)", value: "면제 (Standard Visitor 카테고리)" },
      {
        label: "동반 가족",
        value:
          "각자 별도 Standard Visitor 비자 신청\n만 18세 미만 자녀 동반시 자녀 공립학교 입학 가능",
      },
    ],
  },

  // ─────────────────────────────────────
  gae: {
    slug: "gae",
    category: "United Kingdom",
    enTitle: "GAE",
    enSubtitle: "Government Authorised Exchange",
    title: "GAE 단기취업 비자",
    tagline:
      "영국 정부 승인 교환 프로그램(인턴십·리서치·트레이닝·펠로우십)을 위한 단기 취업 비자",
    price: "₩440,000~",
    tag: "HOT",
    overview: [
      {
        num: "01",
        title: "신청 대상",
        desc: "영국 정부가 승인한 교환 스킴(인턴십·리서치·트레이닝·펠로우십) 참여자, 고등교육기관의 연구원·방문학자·시험관",
      },
      {
        num: "02",
        title: "체류 기간",
        desc: "스킴에 따라 최대 12개월 또는 24개월 — 업무 시작 14일 전부터 종료 14일 후까지 영국 체류 가능",
      },
      {
        num: "03",
        title: "필수 요건",
        desc: "승인된 정부 교류 기관의 후원(CoS Reference Number)이 필요합니다",
      },
      {
        num: "04",
        title: "가족 동반",
        desc: "배우자·자녀 동반 가능 — 배우자는 영국에서 풀타임 취업이 가능합니다",
      },
    ],
    highlight: {
      title: "정부 인증 교환 프로그램 전용 비자",
      desc: "GAE는 일반 취업비자(Skilled Worker)와 달리, 영국 정부가 승인한 공식 교환·훈련 스킴에 한해서만 발급되는 특수 비자입니다. 스폰서 기관의 CoS 발급, 직무 적합성 입증, 재정 요건이 모두 맞아떨어져야 하므로 사전 컨펌이 중요합니다.",
    },
    documents: [
      "여권 (만료일 6개월 이상)",
      "CoS (Certificate of Sponsorship) Reference Number",
      "재정증명서 (£1,270 이상, 28일 연속 잔액 유지)",
      "결핵 검사 결과서",
    ],
    fees: [
      { label: "비자 신청료", amount: "£340", note: "국내외 동일 (2026 기준)" },
      {
        label: "건강보험료 (IHS)",
        amount: "£1,035/년",
        note: "체류 기간만큼 일시 납부",
      },
      { label: "결핵 검사", amount: "약 9~12만원" },
      { label: "비자 신청 지원 서비스료", amount: "₩440,000~", note: "당사 서비스" },
    ],
    family: {
      allowed: true,
      desc: "배우자·만 18세 미만 자녀를 동반 신청할 수 있습니다. 배우자는 영국에서 풀타임 취업이 가능해 체류 기간 동안 실질적인 경제 활동이 가능합니다.",
      pricePerPerson: "₩165,000~",
    },
    process: [
      {
        step: "01",
        title: "프로그램 확인",
        desc: "GAE 적합성 확인",
      },
      {
        step: "02",
        title: "CoS 검토",
        desc: "스폰서 기관 라이센스 및 CoS Reference Number 확인",
      },
      {
        step: "03",
        title: "서류 준비",
        desc: "재정·결핵검사·학력 증빙 안내",
      },
      { step: "04", title: "비자 신청서 작성", desc: "GOV.UK 온라인 신청서 작성 지원 (제출은 본인)" },
      {
        step: "05",
        title: "비자센터 방문",
        desc: "VFS Global 예약·바이오메트릭",
      },
      {
        step: "06",
        title: "발급 및 입국",
        desc: "Decision Letter 확인, 영국 도착 후 등록 안내",
      },
    ],
    notes: [
      "처리 기간은 영국 외부 신청 약 3주, 영국 내 신청 약 8주 소요됩니다.",
      "GAE 비자 영구직 취업 및 공적자금(복지 혜택) 수령은 불가합니다.",
    ],
    infoTable: [
      { label: "비자 종류", value: "Temporary Worker - GAE" },
      { label: "체류 기간", value: "최대 12개월 또는 24개월 (스킴별)" },
      {
        label: "근로 가능",
        value: "CoS상 직무 + 주 20시간 이내 보조 근무 가능\n영구직 취업 불가",
      },
      { label: "IHS (건강보험료)", value: "£1,035/년 (체류 기간 일시 납부)" },
      {
        label: "동반 가족",
        value: "배우자·자녀 동반 가능\n배우자는 풀타임 취업 가능",
      },
    ],
  },

};

export const visaSlugs = Object.keys(visas);
