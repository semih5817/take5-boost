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
        {pack.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            {feature.included === true ? (
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : feature.included === "annual" ? (
              billing === "annual" ? (
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Minus className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              )
            ) : (
              <X className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included === false ? "text-slate-500" : "text-slate-300"}`}>
              {feature.text}
              {feature.badge && (
                <Badge className="ml-2 text-xs bg-purple-600 text-white">
                  {feature.badge}
                </Badge>
              )}
            </span>
          </li>
        ))}
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
    essentiel: {
      name: "Essentiel",
      icon: "💡",
      tagline: "Pour débuter avec TakeFive",
      monthly: {
        price: 29.9,
        duration: "mois",
        nfcPlates: 0
      },
      features: [{
        text: "Radar avis Google",
        included: true
      }, {
        text: "Réponses IA automatiques",
        included: true
      }, {
        text: "Alertes WhatsApp",
        included: true
      }, {
        text: "Dashboard basique",
        included: true
      }],
      cta: "Essayer Gratuitement",
      ctaStyle: "bg-primary hover:bg-primary/90"
    },
    pro: {
      name: "Pro",
      icon: "🚀",
      tagline: "Pour développer votre présence",
      badge: "⭐ RECOMMANDÉ",
      monthly: {
        price: 59.9,
        duration: "mois",
        nfcPlates: 0
      },
      features: [{
        text: "Tout Essentiel",
        included: true
      }, {
        text: "Radar multi-plateformes",
        included: true
      }, {
        text: "Publication WhatsApp",
        included: true
      }, {
        text: "Instagram + Google + Facebook",
        included: true
      }, {
        text: "Reporting hebdomadaire",
        included: true
      }],
      cta: "Essayer Gratuitement",
      ctaStyle: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
    },
    premium: {
      name: "Premium",
      icon: "👑",
      tagline: "Pour une communication professionnelle",
      monthly: {
        price: 99.9,
        duration: "mois",
        nfcPlates: 0
      },
      features: [{
        text: "Tout Pro",
        included: true
      }, {
        text: "Générateur de flyers",
        included: true
      }, {
        text: "Templates personnalisés",
        included: true
      }, {
        text: "Analytics avancés",
        included: true
      }, {
        text: "Support prioritaire",
        included: true
      }],
      cta: "Essayer Gratuitement",
      ctaStyle: "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
    }
  };
  return <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tarifs Simples et Transparents
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Choisissez le forfait qui correspond à vos besoins
          </p>
        </div>

        {/* Grille de packs */}
        <div className="grid lg:grid-cols-3 gap-8">
          <PackCard pack={packs.essentiel} billing="monthly" />
          <PackCard pack={packs.pro} billing="monthly" recommended={true} />
          <PackCard pack={packs.premium} billing="monthly" />
        </div>

        {/* Message 30 jours gratuit */}
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl text-green-400 font-bold">
            🎁 30 jours d'essai gratuit sur tous les forfaits - Sans carte bancaire
          </p>
        </div>
      </div>
    </section>;
};