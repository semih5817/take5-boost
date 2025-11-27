import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Tarifs = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  // TODO: Remplacer par vos vrais IDs LemonSqueezy
  const LEMONSQUEEZY_CHECKOUT_IDS = {
    starter: {
      monthly: 'https://takefive.lemonsqueezy.com/checkout/buy/STARTER_MONTHLY_ID',
      yearly: 'https://takefive.lemonsqueezy.com/checkout/buy/STARTER_YEARLY_ID'
    },
    pro: {
      monthly: 'https://takefive.lemonsqueezy.com/checkout/buy/PRO_MONTHLY_ID',
      yearly: 'https://takefive.lemonsqueezy.com/checkout/buy/PRO_YEARLY_ID'
    },
    enterprise: {
      contact: '/nous-contacter'
    }
  };

  const plans = [
    {
      id: 'starter' as const,
      name: 'Starter',
      description: 'Essentiel pour petits commerces',
      icon: '🚀',
      badge: 'POPULAIRE',
      badgeColor: 'from-blue-500 to-blue-600',
      price: {
        monthly: 19.90,
        yearly: 199
      },
      features: [
        'QR Code dynamique',
        'Collecte avis Google (2x/jour) + Facebook',
        'Réponses IA illimitées 24/7',
        'Alertes WhatsApp instantanées (avis négatifs en 2 min)',
        'Rapport mensuel sur WhatsApp',
        'Reporting hebdomadaire détaillé',
        'Plaque NFC offerte (offre annuelle)'
      ],
      popular: true
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      description: 'Pour dominer localement',
      icon: '⭐',
      badge: 'RECOMMANDÉ',
      badgeColor: 'from-purple-500 to-pink-500',
      price: {
        monthly: 29.90,
        yearly: 299
      },
      features: [
        'Tout Starter +',
        'Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)',
        'Analyse concurrentielle quotidienne',
        'Collecte avis 4x/jour (toutes les 6h)',
        'SEO local optimisé avec IA',
        'Gamification',
        'Opportunités IA quotidiennes',
        'Support prioritaire',
        'Plaque NFC offerte (offre annuelle)'
      ],
      popular: false
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise',
      description: 'Solution sur mesure',
      icon: '🏢',
      badge: null,
      badgeColor: null,
      price: {
        monthly: 'Sur devis',
        yearly: 'Sur devis'
      },
      features: [
        'Établissements illimités',
        'Tout du plan Pro',
        'Compte manager dédié',
        'SLA garanti 99.9%',
        'Onboarding personnalisé',
        'Intégrations custom',
        'Facturation annuelle',
        'Support 24/7'
      ],
      popular: false
    }
  ];

  const handleCheckout = (planId: 'starter' | 'pro' | 'enterprise') => {
    if (planId === 'enterprise') {
      window.location.href = LEMONSQUEEZY_CHECKOUT_IDS.enterprise.contact;
    } else {
      window.location.href = LEMONSQUEEZY_CHECKOUT_IDS[planId][billingPeriod];
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto py-20 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Tarifs Transparents
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Choisissez le plan qui correspond à vos besoins. Essai gratuit 14 jours.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex gap-2 bg-card/60 p-1.5 rounded-xl border border-primary/30">
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensuel
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                billingPeriod === 'yearly' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Annuel
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">
                -17%
              </span>
            </button>
          </div>
        </section>

        {/* Plans Grid */}
        <div className="max-w-6xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-[#0f172a] border border-purple-500/30 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {plan.badge && (
                  <div className="flex justify-center mb-6">
                    <span className={`px-4 py-1.5 bg-gradient-to-r ${plan.badgeColor} rounded-full text-white text-xs font-bold flex items-center gap-1.5`}>
                      {plan.id === 'starter' ? '⚡' : '👑'} {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2 text-white">{plan.name}</h2>
                  
                  <div className="my-6">
                    <span className="text-5xl font-black text-purple-400">
                      {typeof plan.price[billingPeriod] === 'number' 
                        ? `${plan.price[billingPeriod]}€`
                        : plan.price[billingPeriod]
                      }
                    </span>
                    {typeof plan.price[billingPeriod] === 'number' && (
                      <span className="text-slate-400 ml-2">HT / mois</span>
                    )}
                  </div>
                  
                  <p className="text-slate-400 mb-8">{plan.description}</p>

                  <button
                    onClick={() => handleCheckout(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg mb-8 ${
                      plan.id === 'enterprise'
                        ? 'bg-transparent border border-slate-600 text-white hover:bg-slate-800'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-purple-500/40'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Nous Contacter' : "Commencer l'Essai Gratuit"}
                  </button>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="mt-16 bg-card/40 border border-primary/20 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ✅ Garantie Satisfait ou Remboursé 30 Jours
            </h3>
            <p className="text-muted-foreground">
              Essayez TakeFive sans risque. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;
