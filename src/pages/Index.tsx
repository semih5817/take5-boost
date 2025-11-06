import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { MicroCTA } from "@/components/MicroCTA";
import { Stats } from "@/components/Stats";
import { Benefits } from "@/components/Benefits";
import WhyTakeFiveSection from "@/components/WhyTakeFiveSection";
import WhatsAppReportingSection from "@/components/WhatsAppReportingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { NFCGallery } from "@/components/NFCGallery";
import { TargetAudience } from "@/components/TargetAudience";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UrgencyBanner />
      <WhatsAppDemo />
      <MicroCTA />
      <Stats />
      <Benefits />
      <WhyTakeFiveSection />
      <WhatsAppReportingSection />
      <HowItWorks />
      <Comparison />
      <NFCGallery />
      <TargetAudience />
      <TestimonialsSection />
      <Testimonials />
      <FAQ />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
