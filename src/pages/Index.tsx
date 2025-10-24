import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { MicroCTA } from "@/components/MicroCTA";
import { Stats } from "@/components/Stats";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { NFCGallery } from "@/components/NFCGallery";
import { TargetAudience } from "@/components/TargetAudience";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
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
      <HowItWorks />
      <Comparison />
      <NFCGallery />
      <TargetAudience />
      <Testimonials />
      <Pricing />
      <FAQ />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
