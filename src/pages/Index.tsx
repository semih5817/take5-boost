import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksNew } from "@/components/home/HowItWorksNew";
import { BenefitsResults } from "@/components/home/BenefitsResults";
import { AllInOneSection } from "@/components/home/AllInOneSection";
import { CustomNFCSection } from "@/components/home/CustomNFCSection";
import { TestimonialsNewSection } from "@/components/home/TestimonialsNewSection";
import { MidCTASection } from "@/components/home/MidCTASection";
import { HomePricingSection } from "@/components/home/HomePricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />
      <HeroSection />
      <HowItWorksNew />
      <BenefitsResults />
      <AllInOneSection />
      <CustomNFCSection />
      <TestimonialsNewSection />
      <MidCTASection />
      <HomePricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
