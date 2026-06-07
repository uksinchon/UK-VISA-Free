import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyFree from "@/components/WhyFree";
import DIYRisk from "@/components/DIYRisk";
import SimpleProcess from "@/components/SimpleProcess";
import CaseDiagnosis from "@/components/CaseDiagnosis";
import TrustEvidence from "@/components/TrustEvidence";
import FreeServiceInfo from "@/components/FreeServiceInfo";
import Eligibility from "@/components/Eligibility";
import PartnerUniversities from "@/components/PartnerUniversities";
import PreSessional from "@/components/PreSessional";
import Orientation from "@/components/Orientation";
import FreeApplicationForm from "@/components/FreeApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - 영국학생비자 무료 대행 */}
        <Hero />

        {/* 2. 왜 무료인가요? (P0 - 가장 치명적) */}
        <WhyFree />

        {/* 3. 자력 신청 페인포인트 5가지 (P0) */}
        <DIYRisk />

        {/* 4. 학생 vs 우리 비대칭 (P1) */}
        <SimpleProcess />

        {/* 5. 30초 케이스 복잡도 진단 (P2) */}
        <CaseDiagnosis />

        {/* 6. 신뢰 증거 - 통계/연혁/로고/후기 (P1) */}
        <TrustEvidence />

        {/* 7. 무료 지원 서비스 9가지 */}
        <FreeServiceInfo />

        {/* 8. 무료 지원 신청 조건 */}
        <Eligibility />

        {/* 9. 파트너 대학 64개 (펼치기) */}
        <PartnerUniversities />

        {/* 10. 프리세셔널 과정 */}
        <PreSessional />

        {/* 11. 출국 전 오리엔테이션 */}
        <Orientation />

        {/* 12. 무료 비자 신청 폼 + 기타 비자 진입점 */}
        <FreeApplicationForm />
      </main>
      <Footer />
    </>
  );
}
