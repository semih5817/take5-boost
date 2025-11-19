import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { WaouwMomentsSection } from "@/components/home/WaouwMomentsSection";
import { WhatsAppReportingSection } from "@/components/home/WhatsAppReportingSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { CompetitiveAnalysisSection } from "@/components/home/CompetitiveAnalysisSection";
import { RadarReviewsSection } from "@/components/home/RadarReviewsSection";
import { ContestSection } from "@/components/home/ContestSection";
import { AllInOneSection } from "@/components/home/AllInOneSection";
import { SeoLocalAiSection } from "@/components/home/SeoLocalAiSection";
import { CustomNFCSection } from "@/components/home/CustomNFCSection";
import { UpcomingProjectsGrid } from "@/components/home/UpcomingProjectsGrid";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { TestimonialsNewSection } from "@/components/home/TestimonialsNewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatsAppReportingSection />
      <GamificationSection />
      <CompetitiveAnalysisSection />
      <RadarReviewsSection />
      <ContestSection />
      <AllInOneSection />
      <SeoLocalAiSection />
      <CustomNFCSection />
      <UpcomingProjectsGrid />
      <LeadCaptureSection />
      <TestimonialsNewSection />
      <FinalCTASection />
      <SubscriptionForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;