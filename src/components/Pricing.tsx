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

  const pricingPlans = [
    {
      name: "Essai Gratuit",
      badge: "1 MOIS OFFERT",
      price: "0€",
      period: "pendant 1 mois",
      detail: "puis 19,90€/mois",
      savings: null,
      isPopular: false,
    },
    {
      name: "Mensuel",
      badge: "FLEXIBLE",
      price: "19,90€",
      period: "/mois",
      detail: "Sans engagement",
      savings: null,
      isPopular: false,
    },
    {
      name: "1 An",
      badge: "⭐ POPULAIRE",
      price: "216€",
      originalPrice: "239€",
      period: "paiement unique",
      detail: "18€/mois",
      savings: "-10%",
      isPopular: true,
    },
    {
      name: "2 Ans",
      badge: "MEILLEURE VALEUR",
      price: "360€",
      originalPrice: "478€",
      period: "paiement unique",
      detail: "15€/mois",
      savings: "-25%",
      isPopular: false,
    },
    {
      name: "4 Ans",
      badge: "ÉCONOMIE MAX",
      price: "575€",
      originalPrice: "956€",
      period: "paiement unique",
      detail: "12€/mois",
      savings: "-40%",
      isPopular: false,
    },
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

        {/* Grille des offres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular
                  ? "border-4 border-primary shadow-primary scale-105"
                  : "border-2"
              }`}
            >
              {/* Badge */}
              <Badge
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                {plan.badge}
              </Badge>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{plan.name}</h3>
                
                {plan.originalPrice && (
                  <p className="text-xl line-through text-muted-foreground mb-1">
                    {plan.originalPrice}
                  </p>
                )}
                
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground"> {plan.period}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{plan.detail}</p>
                
                {plan.savings && (
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary/30">
                    {plan.savings}
                  </Badge>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToForm}
                size="lg"
                className={`w-full transition-all duration-300 hover:-translate-y-1 ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-primary to-secondary hover:shadow-primary"
                    : ""
                }`}
              >
                Je choisis cette offre
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 text-center max-w-3xl mx-auto">
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
    </section>
  );
};
