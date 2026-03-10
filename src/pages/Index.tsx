import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksNew } from "@/components/home/HowItWorksNew";
import { BenefitsResults } from "@/components/home/BenefitsResults";
import { WhatsAppReportingSection } from "@/components/home/WhatsAppReportingSection";
import { ApporteurCTASection } from "@/components/home/ApporteurCTASection";
import { CustomNFCSection } from "@/components/home/CustomNFCSection";
import { TestimonialsNewSection } from "@/components/home/TestimonialsNewSection";
import { MidCTASection } from "@/components/home/MidCTASection";
import { HomePricingSection } from "@/components/home/HomePricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-in, .scroll-slide-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksNew />
      <BenefitsResults />
      <WhatsAppReportingSection />
      <ApporteurCTASection />
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
