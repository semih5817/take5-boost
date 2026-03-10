import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'annual'>('monthly');
  const navigate = useNavigate();

  const goToTarifs = () => {
    navigate('/tarifs');
  };

  const prices = {
    monthly: 19.90,
    annual: 15.92
  };

  const proFeatures = [
    "QR Code dynamique",
    "Collecte avis Google (4x/jour) + Facebook",
    "Réponses IA illimitées 24/7",
    "Alertes WhatsApp instantanées (avis négatifs en 2 min)",
    "Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)",
    "Analyse concurrentielle quotidienne",
    "SEO local optimisé avec IA",
    "Gamification",
    "Opportunités IA quotidiennes",
    "Reporting hebdomadaire détaillé",
    "Support prioritaire",
    "Plaque NFC offerte (offre annuelle)"
  ];

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">L'offre tout-en-un</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Propulsez votre visibilité locale et dominez Google Maps
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-card/60 p-2 rounded-full border border-primary/30">
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingType === 'monthly'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/40'
                  : 'text-muted-foreground'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingType('annual')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingType === 'annual'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/40'
                  : 'text-muted-foreground'
              }`}
            >
              Annuel
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs">
                -20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Single Pricing Card */}
        <Card className="p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-secondary/50 shadow-lg shadow-secondary/20 max-w-lg mx-auto">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-secondary/80 text-white px-6 py-1.5">
            💎 TOUT INCLUS
          </Badge>
          <div className="text-center mb-8 mt-2">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="mb-2">
              <span className="text-5xl font-bold gradient-text">
                {prices[billingType].toFixed(2)}€
              </span>
              <span className="text-lg text-muted-foreground"> TTC / mois</span>
            </div>
            <p className="text-sm text-muted-foreground">Tout ce qu'il faut pour dominer localement</p>
          </div>
          <ul className="space-y-3 mb-8">
            {proFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            onClick={goToTarifs}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
          >
            S'abonner maintenant
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Card>

        {/* NFC Section */}
        <Card className="p-8 bg-card/60 backdrop-blur border-2 border-primary/30 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-4xl shadow-lg shadow-primary/40 flex-shrink-0">
              📱
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ajouter la plaque NFC Google personnalisée</h3>
              <p className="text-muted-foreground mb-4">
                Collectez facilement des avis en magasin. Zéro avis manqué.
              </p>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <div className="text-4xl font-bold gradient-text mb-2">39,90€ HT</div>
              <p className="text-sm text-muted-foreground mb-4">47,88€ TTC<br />Paiement unique</p>
              <Button
                onClick={goToTarifs}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent"
              >
                Ajouter la plaque
              </Button>
            </div>
          </div>
        </Card>

        {/* Trust Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 text-center max-w-3xl mx-auto">
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
