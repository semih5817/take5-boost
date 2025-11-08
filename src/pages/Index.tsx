import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { MicroCTA } from "@/components/MicroCTA";
import { Stats } from "@/components/Stats";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AlertSection } from "@/components/home/AlertSection";
import { CompetitorAlerts } from "@/components/CompetitorAlerts";
import { AIOpportunities } from "@/components/AIOpportunities";
import { GamificationSection } from "@/components/GamificationSection";
import { WhatsAppReports } from "@/components/WhatsAppReports";
import WhyTakeFiveSection from "@/components/WhyTakeFiveSection";
import WhatsAppReportingSection from "@/components/WhatsAppReportingSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { Comparison } from "@/components/Comparison";
import { NFCGallery } from "@/components/NFCGallery";
import { TargetAudience } from "@/components/TargetAudience";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <UrgencyBanner />
      <AlertSection />
      <WhatsAppDemo />
      <MicroCTA />
      <Stats />
      <FeaturesSection />
      <CompetitorAlerts />
      <AIOpportunities />
      <GamificationSection />
      <WhatsAppReports />
      <WhyTakeFiveSection />
      <WhatsAppReportingSection />
      <HowItWorksSection />
      <Comparison />
      <NFCGallery />
      <RoadmapSection />
      <TargetAudience />
      <TestimonialsSection />
      <Testimonials />
      <FAQSection />
      <PricingSection />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
