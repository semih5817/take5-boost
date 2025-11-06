import { Header } from "@/components/Header";
import { NewHero } from "@/components/NewHero";
import { ProblemAwareness } from "@/components/ProblemAwareness";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { Stats } from "@/components/Stats";
import { Benefits } from "@/components/Benefits";
import WhyTakeFiveSection from "@/components/WhyTakeFiveSection";
import { HowItWorks } from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import { IrresistibleOffer } from "@/components/IrresistibleOffer";
import { NewPricing } from "@/components/NewPricing";
import { FAQ } from "@/components/FAQ";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { Footer } from "@/components/Footer";

const IndexNew = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* ÉTAPE 1 : Capter l'attention */}
      <NewHero />
      
      {/* ÉTAPE 2 : Faire ressentir la douleur */}
      <ProblemAwareness />
      
      {/* ÉTAPE 3 : Éducation */}
      <WhatsAppDemo />
      <Stats />
      <Benefits />
      <WhyTakeFiveSection />
      
      {/* ÉTAPE 4 : Différenciation */}
      <HowItWorks />
      <TestimonialsSection />
      
      {/* ÉTAPE 5 : Conversion */}
      <IrresistibleOffer />
      <NewPricing />
      <FAQ />
      <SubscriptionForm />
      
      <Footer />
    </div>
  );
};

export default IndexNew;
