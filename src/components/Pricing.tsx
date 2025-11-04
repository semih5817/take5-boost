import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "Plaque NFC personnalisée incluse",
    "Connexion Google Business automatique",
    "Réponses IA illimitées aux avis",
    "Rapport mensuel sur WhatsApp",
    "Surveillance 24/7 de votre fiche",
    "Support client prioritaire",
    "Optimisation SEO locale continue",
    "Mises à jour et améliorations incluses"
  ];

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Un prix simple,</span>
            <br />
            une valeur exceptionnelle
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour dominer les recherches locales
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-10 border-4 border-primary shadow-primary relative overflow-hidden">
            {/* Badge */}
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-destructive to-orange-500 text-white px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm animate-pulse">
              ⚡ OFFRE LIMITÉE
            </Badge>

            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Pack Take 5 Complet</h3>
              <div className="mb-2">
                <span className="text-4xl md:text-6xl font-bold gradient-text">9,90€</span>
                <span className="text-xl md:text-2xl text-muted-foreground"> HT/mois</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">11,88€ TTC • Engagement 12 mois</p>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-base md:text-lg py-5 md:py-6 h-auto"
            >
              Je m'abonne maintenant
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>

            <p className="text-center text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
              Sans engagement après 12 mois • Résiliation en 1 clic
            </p>
          </Card>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 text-center">
            <div>
              <p className="text-xl md:text-2xl font-bold gradient-text mb-1">✓</p>
              <p className="text-xs md:text-sm text-muted-foreground">Satisfait ou remboursé 30 jours</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold gradient-text mb-1">✓</p>
              <p className="text-xs md:text-sm text-muted-foreground">Installation en 5 minutes</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold gradient-text mb-1">✓</p>
              <p className="text-xs md:text-sm text-muted-foreground">Support 7j/7 inclus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
