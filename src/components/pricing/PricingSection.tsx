import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Minus } from "lucide-react";
interface PricingOption {
  duration: string;
  pricePerMonth: number;
  totalPrice: number;
  savings?: number;
  savingsDetail?: string;
  nfcPlates: number;
  nfcPremium?: boolean;
  badge?: string;
}
interface PackFeature {
  text: string;
  included: boolean | "annual";
  badge?: string;
}
interface Pack {
  name: string;
  icon: string;
  tagline: string;
  badge?: string;
  monthly: {
    price: number;
    duration: string;
    nfcPlates: number;
  };
  annual?: PricingOption[];
  features: PackFeature[];
  cta: string;
  ctaStyle: string;
}
const PackCard = ({
  pack,
  billing,
  options,
  recommended
}: {
  pack: Pack;
  billing: string;
  options?: PricingOption[] | null;
  recommended?: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState<PricingOption | null>(options ? options[0] : null);
  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const displayPrice = billing === "free" ? pack.monthly : billing === "monthly" ? pack.monthly : selectedOption;
  return <div className={`relative bg-slate-800/50 backdrop-blur border rounded-2xl p-6 transition-all hover:scale-105 ${recommended ? "border-purple-500 border-2 shadow-2xl shadow-purple-500/50" : "border-slate-700"}`}>
      {/* Badge recommandé */}
      {pack.badge && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
          {pack.badge}
        </div>}

      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{pack.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
        <p className="text-slate-400 text-sm">{pack.tagline}</p>
      </div>

      {/* Prix */}
      <div className="text-center mb-6">
        {billing === "free" ? <>
            <div className="text-5xl font-bold text-white mb-2">Gratuit</div>
            <p className="text-slate-400">{pack.monthly.duration}</p>
          </> : billing === "monthly" ? <>
            <div className="text-5xl font-bold text-white mb-2">
              {pack.monthly.price}€<span className="text-2xl text-slate-400"> HT</span>
            </div>
            <p className="text-slate-400">/mois</p>
          </> : <>
            {/* Sélecteur de durée pour annuel */}
            <div className="mb-4 space-y-2">
              {options?.map((option, idx) => <button key={idx} onClick={() => setSelectedOption(option)} className={`w-full text-left p-3 rounded-lg border transition-all ${selectedOption === option ? "border-purple-500 bg-purple-900/30" : "border-slate-700 bg-slate-900/30 hover:border-slate-600"}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-lg">
                        {option.pricePerMonth}€/mois
                      </div>
                      <div className="text-sm text-slate-400">{option.duration}</div>
                    </div>
                    {option.badge && <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                        {option.badge}
                      </Badge>}
                  </div>
                  {option.savings && <div className="mt-2 text-sm text-green-400 font-semibold">
                      💰 Économisez {option.savings}€
                    </div>}
                  {option.nfcPlates > 0 && <div className="mt-1 text-sm text-purple-400">
                      🎁 {option.nfcPlates} plaque{option.nfcPlates > 1 ? "s" : ""} NFC
                      offerte{option.nfcPlates > 1 ? "s" : ""}
                      {option.nfcPremium && " (dont 1 Premium)"}
                    </div>}
                </button>)}
            </div>

            {selectedOption && <>
                <div className="text-5xl font-bold text-white mb-2">
                  {selectedOption.pricePerMonth}€
                  <span className="text-2xl text-slate-400"> HT</span>
                </div>
                <p className="text-slate-400">/mois</p>
                <p className="text-sm text-slate-500 mt-1">
                  Soit {selectedOption.totalPrice}€ pour {selectedOption.duration}
                </p>
              </>}
          </>}
      </div>

      {/* Ligne séparatrice */}
      <div className="border-t border-slate-700 mb-6"></div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {pack.features.map((feature, idx) => {})}
      </ul>

      {/* CTA */}
      <Button onClick={scrollToForm} className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-105 ${pack.ctaStyle}`}>
        {pack.cta}
      </Button>

      {billing === "free" && <p className="text-center text-xs text-slate-500 mt-3">
          Aucune carte bancaire requise
        </p>}
    </div>;
};
export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const packs: Record<string, Pack> = {
    free: {
      name: "Free",
      icon: "💡",
      tagline: "Testez toutes les fonctionnalités",
      monthly: {
        price: 0,
        duration: "1 mois",
        nfcPlates: 0
      },
      features: [{
        text: "1 QR Code dynamique",
        included: true
      }, {
        text: "Scans illimités",
        included: true
      }, {
        text: "Centralisation Avis Google",
        included: true
      }, {
        text: "Réponses IA (100 tokens)",
        included: true
      }, {
        text: "🚨 Alertes avis négatifs WhatsApp",
        included: true
      }, {
        text: "📊 Alertes concurrents (hebdo)",
        included: true
      }, {
        text: "💡 Opportunités IA (hebdo)",
        included: true
      }, {
        text: "🎯 Missions gamifiées",
        included: true
      }, {
        text: "📱 Rapports WhatsApp",
        included: true
      }],
      cta: "Commencer gratuitement",
      ctaStyle: "bg-slate-700 hover:bg-slate-600"
    },
    starter: {
      name: "Starter",
      icon: "💼",
      tagline: "Pour les commerçants qui démarrent",
      monthly: {
        price: 19.9,
        duration: "mois",
        nfcPlates: 0
      },
      annual: [{
        duration: "1 an",
        pricePerMonth: 14.9,
        totalPrice: 178.8,
        savings: 89.9,
        savingsDetail: "60€ abonnement + 29,90€ plaque",
        nfcPlates: 1
      }, {
        duration: "2 ans",
        pricePerMonth: 13,
        totalPrice: 312,
        savings: 225.4,
        savingsDetail: "165,60€ abonnement + 59,80€ plaques",
        nfcPlates: 2,
        badge: "🔥 MEILLEURE OFFRE"
      }, {
        duration: "4 ans",
        pricePerMonth: 10,
        totalPrice: 480,
        savings: 594.8,
        savingsDetail: "475,20€ abonnement + 119,60€ plaques",
        nfcPlates: 4,
        badge: "⚡ -50%"
      }],
      features: [{
        text: "Tout du pack FREE, en illimité",
        included: true
      }, {
        text: "Support prioritaire",
        included: true
      }, {
        text: "Plaque NFC offerte",
        included: "annual"
      }],
      cta: "Démarrer",
      ctaStyle: "bg-purple-600 hover:bg-purple-700"
    },
    pro: {
      name: "Pro",
      icon: "🚀",
      tagline: "Pour dominer votre marché",
      badge: "⭐ Recommandé",
      monthly: {
        price: 49,
        duration: "mois",
        nfcPlates: 0
      },
      annual: [{
        duration: "1 an",
        pricePerMonth: 37,
        totalPrice: 444,
        savings: 203.8,
        savingsDetail: "144€ abonnement + 59,80€ plaques",
        nfcPlates: 2,
        badge: "⭐ POPULAIRE"
      }, {
        duration: "2 ans",
        pricePerMonth: 32,
        totalPrice: 768,
        savings: 497.7,
        savingsDetail: "408€ abonnement + 89,70€ plaques",
        nfcPlates: 3,
        badge: "🔥 MEILLEURE OFFRE"
      }, {
        duration: "4 ans",
        pricePerMonth: 25,
        totalPrice: 1200,
        savings: 1321.6,
        savingsDetail: "1 152€ abonnement + 169,60€ plaques premium",
        nfcPlates: 5,
        nfcPremium: true,
        badge: "⚡ OFFRE ELITE"
      }],
      features: [{
        text: "Tout du Starter +",
        included: true
      }, {
        text: "Réponses IA illimitées",
        included: true
      }, {
        text: "🎨 Dashboard Analytics (démo)",
        included: true,
        badge: "🎨 Aperçu"
      }, {
        text: "Alertes concurrents quotidiennes",
        included: true
      }, {
        text: "Opportunités IA quotidiennes",
        included: true
      }, {
        text: "Support prioritaire 24/7",
        included: true
      }, {
        text: "🎮 Jeux concours",
        included: false,
        badge: "🔜 T1 2026"
      }, {
        text: "📧 Campagnes SMS/Email",
        included: false,
        badge: "🔜 T2 2026"
      }],
      cta: "Passer au Pro",
      ctaStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
    }
  };
  return <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Grille de packs */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          
          
        </div>

        {/* Lien vers tableau comparatif */}
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};