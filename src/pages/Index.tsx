import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { WaouwMomentsSection } from "@/components/home/WaouwMomentsSection";
import { WhatsAppReportingSection } from "@/components/home/WhatsAppReportingSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { CompetitiveAnalysisSection } from "@/components/home/CompetitiveAnalysisSection";
import { RadarReviewsSection } from "@/components/home/RadarReviewsSection";
import { AllInOneSection } from "@/components/home/AllInOneSection";
import { SeoLocalAiSection } from "@/components/home/SeoLocalAiSection";
import { CustomNFCSection } from "@/components/home/CustomNFCSection";
import { UpcomingProjectsGrid } from "@/components/home/UpcomingProjectsGrid";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { TestimonialsNewSection } from "@/components/home/TestimonialsNewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { HomePricingSection } from "@/components/home/HomePricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />
      <HeroSection />
      <WhatsAppReportingSection />
      <GamificationSection />
      <CompetitiveAnalysisSection />
      <RadarReviewsSection />
      <AllInOneSection />
      <SeoLocalAiSection />
      <CustomNFCSection />
      <UpcomingProjectsGrid />
      <LeadCaptureSection />
      <TestimonialsNewSection />
      <FinalCTASection />
      <HomePricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;