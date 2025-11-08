import { Link, Package, Sparkles, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      number: "1",
      title: "Connexion",
      description: "Connectez votre fiche Google Business Profile en un clic. Nous gérons toute la configuration technique."
    },
    {
      icon: Package,
      number: "2",
      title: "Installation",
      description: "Recevez votre plaque NFC personnalisée sous 48h. Placez-la à l'accueil pour collecter les avis facilement."
    },
    {
      icon: Sparkles,
      number: "3",
      title: "Automatisation",
      description: "Notre IA surveille votre fiche 24/7, répond aux avis et optimise votre visibilité en temps réel."
    },
    {
      icon: MessageSquare,
      number: "4",
      title: "Reporting",
      description: "Recevez votre rapport mensuel détaillé sur WhatsApp avec statistiques et recommandations."
    }
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Comment ça marche ?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            4 étapes simples pour transformer votre visibilité locale
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 relative"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 md:mb-6 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-primary">
                {step.number}
              </div>
              
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-muted mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <step.icon className="w-5 md:w-6 h-5 md:h-6 text-primary" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
