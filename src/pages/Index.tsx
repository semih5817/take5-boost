import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AlertSection } from "@/components/home/AlertSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { MainFeaturesSection } from "@/components/home/MainFeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
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
      <AlertSection />
      <ProblemSolutionSection />
      <MainFeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <RoadmapSection />
      <TestimonialsNewSection />
      <FAQSection />
      <FinalCTASection />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
