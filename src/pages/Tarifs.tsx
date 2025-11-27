import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

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
      description: 'Parfait pour démarrer',
      icon: '🚀',
      price: {
        monthly: 19.90,
        yearly: 199
      },
      features: [
        '1 établissement',
        '50 réponses IA/mois',
        'Google Business',
        'Dashboard analytics',
        'Support email',
        'Notifications en temps réel'
      ],
      popular: false
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      description: 'Pour les professionnels',
      icon: '⭐',
      price: {
        monthly: 29.90,
        yearly: 299
      },
      features: [
        '3 établissements',
        'Réponses IA illimitées',
        'Multi-plateformes (Google, Facebook, Trustpilot)',
        'Analytics avancés',
        'Support prioritaire',
        'API Access',
        'White-label',
        'Formation personnalisée'
      ],
      popular: true
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise',
      description: 'Solution sur mesure',
      icon: '🏢',
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
                className={`relative bg-card/60 backdrop-blur-xl border-2 rounded-3xl p-10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 ${
                  plan.popular 
                    ? 'border-primary/60 md:scale-105' 
                    : 'border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-px left-0 right-0 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-3xl flex items-center justify-center gap-2 text-white font-bold text-sm">
                    <Star className="w-4 h-4 fill-white" /> Plus Populaire
                  </div>
                )}
                
                <div className={plan.popular ? 'pt-8' : ''}>
                  <span className="text-5xl block mb-5">{plan.icon}</span>
                  <h2 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h2>
                  <p className="text-muted-foreground mb-8">{plan.description}</p>
                  
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {typeof plan.price[billingPeriod] === 'number' 
                      ? `${plan.price[billingPeriod]}€`
                      : plan.price[billingPeriod]
                    }
                  </div>
                  {typeof plan.price[billingPeriod] === 'number' && (
                    <p className="text-muted-foreground mb-8">
                      par {billingPeriod === 'monthly' ? 'mois' : 'an'}
                    </p>
                  )}

                  <button
                    onClick={() => handleCheckout(plan.id)}
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-8 ${
                      plan.id === 'enterprise'
                        ? 'bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/10'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-primary/40'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Nous Contacter' : "Commencer l'Essai Gratuit"}
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
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
