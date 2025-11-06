import { Gift, Sparkles, TrendingUp, Crown, Zap, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const NewPricing = () => {
  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const pricingPlans = [
    {
      name: "Essai Gratuit",
      badge: "IDÉAL POUR TESTER",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse",
      icon: Gift,
      iconColor: "text-green-500",
      duration: "1 mois offert",
      originalPrice: "19,90€",
      price: "0€",
      priceDetail: "puis 19,90€/mois",
      discount: "-100%",
      monthlyEquivalent: "0€/mois",
      features: [
        "Toutes les fonctionnalités incluses",
        "Réponses IA illimitées",
        "Alertes WhatsApp instantanées",
        "Rapport mensuel détaillé",
        "Sans engagement",
        "Annulation en 1 clic",
      ],
      cta: "🎁 Essayer gratuitement",
      highlight: "Aucune carte bancaire requise",
      borderColor: "border-green-500/30",
      isPopular: false,
    },
    {
      name: "Mensuel",
      badge: "FLEXIBLE",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
      icon: Sparkles,
      iconColor: "text-blue-500",
      duration: "Sans engagement",
      price: "19,90€",
      priceDetail: "/mois",
      monthlyEquivalent: "19,90€/mois",
      features: [
        "Toutes les fonctionnalités incluses",
        "Réponses IA illimitées",
        "Alertes WhatsApp instantanées",
        "Rapport mensuel détaillé",
        "Sans engagement",
        "Annulation en 1 clic",
      ],
      cta: "Commencer maintenant",
      highlight: "Résiliation à tout moment",
      borderColor: "border-blue-500/30",
      isPopular: false,
    },
    {
      name: "1 An",
      badge: "⭐ PLUS POPULAIRE",
      badgeColor: "bg-gradient-to-r from-primary to-secondary text-white",
      icon: TrendingUp,
      iconColor: "text-primary",
      duration: "Paiement unique",
      originalPrice: "239€",
      price: "216€",
      priceDetail: "paiement unique",
      discount: "-10%",
      bonus: "1 mois offert",
      monthlyEquivalent: "18€/mois",
      features: [
        "🎁 Tout du plan Mensuel",
        "🎁 1 mois offert (économie 23€)",
        "✨ Audit IA personnalisé offert",
        "✨ Description Google optimisée SEO",
        "⚡ Pack de 10 modèles de réponses IA",
        "🏆 Badge 'Client VIP' sur support",
      ],
      cta: "Je prends 1 an",
      highlight: "Économisez 23€ immédiatement",
      borderColor: "border-primary",
      isPopular: true,
    },
    {
      name: "2 Ans",
      badge: "💎 MEILLEURE VALEUR",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      icon: Crown,
      iconColor: "text-purple-500",
      duration: "Paiement unique",
      originalPrice: "478€",
      price: "360€",
      priceDetail: "paiement unique",
      discount: "-25%",
      bonus: "6 mois offerts",
      monthlyEquivalent: "15€/mois",
      features: [
        "🎁 Tout du plan 1 An",
        "🎁 6 mois offerts (économie 118€)",
        "✨ Tous les bonus du plan 1 An",
        "⚡ Support prioritaire illimité",
        "🏆 Accès anticipé aux nouvelles fonctionnalités",
        "💎 Consultation stratégie digitale offerte",
      ],
      cta: "Je prends 2 ans",
      highlight: "Sérénité totale pendant 2 ans",
      borderColor: "border-purple-500/30",
      isPopular: false,
    },
    {
      name: "4 Ans",
      badge: "🔥 ÉCONOMIE MAXIMALE",
      badgeColor: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
      icon: Zap,
      iconColor: "text-orange-500",
      duration: "Paiement unique",
      originalPrice: "956€",
      price: "575€",
      priceDetail: "paiement unique",
      discount: "-40%",
      bonus: "19 mois offerts",
      monthlyEquivalent: "12€/mois",
      features: [
        "🎁 Tout du plan 2 Ans",
        "🎁 19 mois offerts (économie 381€)",
        "✨ Tous les bonus premium",
        "⚡ Support VIP dédié",
        "🏆 Formation personnalisée 1h offerte",
        "💎 Garantie prix gelé jusqu'en 2029",
      ],
      cta: "Je prends 4 ans",
      highlight: "Votre fiche Google automatisée jusqu'en 2029",
      borderColor: "border-orange-500/30",
      isPopular: false,
    },
  ];

  const allFeatures = [
    "Plaque NFC personnalisée livrée sous 48h",
    "Connexion Google Business automatique",
    "Réponses IA illimitées aux avis (positifs ET négatifs)",
    "Alertes WhatsApp instantanées pour avis ≤ 3★",
    "Rapport mensuel détaillé sur WhatsApp",
    "Surveillance 24/7 de votre fiche Google",
    "Optimisation SEO locale continue",
    "Mises à jour et améliorations incluses",
    "Support client prioritaire 7j/7",
    "Tableau de bord en temps réel",
    "Historique complet des avis et réponses",
    "Satisfaction garantie ou remboursé 30 jours",
  ];

  const trustElements = [
    { check: "✓", title: "Satisfait ou remboursé", detail: "30 jours" },
    { check: "✓", title: "Installation express", detail: "5 minutes chrono" },
    { check: "✓", title: "Support premium", detail: "7j/7 inclus" },
    { check: "✓", title: "Paiement sécurisé", detail: "Stripe & PayPal" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Titre de section */}
        <div className="text-center mb-16 space-y-6">
          <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
            💰 L'offre qui change tout
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold">
            Choisissez votre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              investissement
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus vous vous engagez, plus vous{" "}
            <span className="text-primary font-bold">économisez</span>
          </p>

          <p className="text-sm text-muted-foreground">
            De <span className="text-primary font-bold">0€</span> pour essayer à{" "}
            <span className="text-primary font-bold">-40%</span> d'économie sur 4 ans. Aucune carte
            bancaire pour l'essai gratuit • Sans engagement
          </p>
        </div>

        {/* 5 Cartes de pricing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                plan.isPopular
                  ? "scale-105 border-4 shadow-xl shadow-primary/30 " + plan.borderColor
                  : "border-2 " + plan.borderColor
              }`}
            >
              {/* Badge en haut */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <Badge className={plan.badgeColor + " px-4 py-1.5 shadow-lg"}>
                  {plan.badge}
                </Badge>
              </div>

              <div className="space-y-6 mt-4">
                {/* Icône */}
                <div className="flex justify-center">
                  <plan.icon className={`w-12 h-12 ${plan.iconColor}`} />
                </div>

                {/* Titre et durée */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.duration}</p>
                </div>

                {/* Prix */}
                <div className="text-center space-y-1">
                  {plan.originalPrice && (
                    <p className="text-2xl line-through text-muted-foreground">
                      {plan.originalPrice}
                    </p>
                  )}
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{plan.priceDetail}</p>
                  
                  {plan.discount && (
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      {plan.discount}
                    </Badge>
                  )}
                  
                  {plan.bonus && (
                    <p className="text-sm font-semibold text-green-500">{plan.bonus}</p>
                  )}
                </div>

                {/* Prix mensuel équivalent */}
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">Prix mensuel équivalent</p>
                  <p className="text-xl font-bold">{plan.monthlyEquivalent}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToForm}
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50"
                      : ""
                  } hover:-translate-y-1 transition-all duration-300`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {/* Highlight */}
                <p className="text-xs text-center text-muted-foreground">{plan.highlight}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bloc "Toutes les fonctionnalités incluses" */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              ✨ Toutes ces fonctionnalités dans TOUS les plans
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Trust elements en bas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {trustElements.map((element, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-2xl text-primary font-bold">{element.check}</p>
              <p className="font-semibold text-sm">{element.title}</p>
              <p className="text-xs text-muted-foreground">{element.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
