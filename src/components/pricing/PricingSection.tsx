import { PackCard } from "./PackCard";

export const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "Alertes avancées WhatsApp avis négatifs",
    "Alertes concurrents hebdomadaires",
    "Opportunités détectées par IA (hebdomadaire)",
    "Système complet de missions gamifiées",
    "Rapports WhatsApp hebdomadaires et mensuels",
    "Centralisation de vos Avis Google",
    "Réponses générées par IA (100 Tokens)"
  ];

  const pricingPlans = [
    {
      name: "Free",
      badge: "ESSAI 1 MOIS",
      price: "0€",
      period: "/mois",
      detail: "Fonctionnalités limitées",
      isPopular: false,
    },
    {
      name: "Starter",
      badge: "IDÉAL DÉBUTANT",
      price: "19,90€",
      period: "/mois",
      detail: "Toutes les fonctionnalités FREE mensualisées",
      isPopular: false,
    },
    {
      name: "Pro",
      badge: "⭐ RECOMMANDÉ",
      price: "49€",
      period: "/mois",
      detail: "Fonctionnalités avancées incluses",
      isPopular: true,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <PackCard
              key={index}
              name={plan.name}
              badge={plan.badge}
              price={plan.price}
              period={plan.period}
              detail={plan.detail}
              features={features}
              isPopular={plan.isPopular}
              onSelect={scrollToForm}
            />
          ))}
        </div>

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
