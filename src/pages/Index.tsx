import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { WaouwMomentsSection } from "@/components/home/WaouwMomentsSection";
import { WhatsAppReportingSection } from "@/components/home/WhatsAppReportingSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { RadarReviewsSection } from "@/components/home/RadarReviewsSection";
import { MainFeaturesSection } from "@/components/home/MainFeaturesSection";
import { FlyerGeneratorSection } from "@/components/home/FlyerGeneratorSection";
import { MultiPublicationSection } from "@/components/home/MultiPublicationSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CustomNFCSection } from "@/components/home/CustomNFCSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { TestimonialsNewSection } from "@/components/home/TestimonialsNewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <WhatsAppReportingSection />
      <ProblemSolutionSection />
      <MultiPublicationSection />
      <RadarReviewsSection />
      <MainFeaturesSection />
      <FlyerGeneratorSection />
      <HowItWorksSection />
      <CustomNFCSection />
      <RoadmapSection />
      <TestimonialsNewSection />
      <FinalCTASection />
      <SubscriptionForm />
      <FAQSection />
      <Footer />
    </div>;
};
export default Index;