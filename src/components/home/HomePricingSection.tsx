import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export const HomePricingSection = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const [copied, setCopied] = useState(false);

  const copyPromoCode = () => {
    navigator.clipboard.writeText('SEMIH');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    if (!selectedPlan) return;
    navigate(`/checkout?offre=${selectedPlan}&periode=${billingPeriod}`);
  };

  const prices = {
    starter: { monthly: 19.90, yearly: 15.92 },
    pro: { monthly: 29.90, yearly: 23.92 }
  };

  const plans = [
    {
      id: 'starter' as const,
      name: 'Starter',
      description: 'Idéal pour : Restaurants, salons, commerces locaux',
      badge: 'POPULAIRE',
      badgeIcon: '⚡',
      badgeColor: 'from-blue-500 to-blue-600',
      features: [
        'QR Code dynamique',
        'Collecte avis Google (2x/jour) + Facebook',
        'Réponses IA illimitées 24/7',
        'Alertes WhatsApp instantanées (avis négatifs en 2 min)',
        'Rapport mensuel sur WhatsApp',
        'Reporting hebdomadaire détaillé',
        billingPeriod === 'yearly' ? '🎁 Plaque NFC offerte' : 'Plaque NFC offerte (offre annuelle)'
      ]
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      description: 'Idéal pour : Franchises, multi-établissements, chaînes',
      badge: 'RECOMMANDÉ',
      badgeIcon: '💎',
      badgeColor: 'from-purple-500 to-pink-500',
      features: [
        'Tout Starter +',
        'Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)',
        'Analyse concurrentielle quotidienne',
        'Collecte avis 4x/jour (toutes les 6h)',
        'SEO local optimisé avec IA',
        'Gamification',
        'Opportunités IA quotidiennes',
        'Support prioritaire',
        billingPeriod === 'yearly' ? '🎁 Plaque NFC offerte' : 'Plaque NFC offerte (offre annuelle)'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-5 bg-[#0A0E1A]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Code Promo Banner */}
        <div className="bg-gradient-to-r from-[#667eea] to-[#d946ef] rounded-2xl p-6 text-center mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-white">
            <span className="text-3xl">🎁</span> 
            CODE PROMO : 1 MOIS GRATUIT
          </h2>
          <div className="inline-flex items-center bg-white/25 px-6 py-3 rounded-xl mt-1">
            <span className="text-2xl font-bold tracking-widest text-white">SEMIH</span>
          </div>
          <p className="mt-3 text-sm opacity-95 text-white">
            Utilisez ce code sur l'offre Starter pour tester gratuitement
          </p>
        </div>

        {/* NFC Banner discret */}
        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-4 md:p-5 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-3xl">🎁</span>
          <div className="text-center sm:text-left flex-1">
            <strong className="text-white">Plaque NFC offerte</strong>
            <p className="text-slate-400 text-sm">Avec tout abonnement annuel (valeur 49€)</p>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6 text-white">1. Choisissez votre offre</h2>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0f1629] border border-[#1e293b] rounded-full p-1 inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annuel
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`text-left bg-[#0f1629] border rounded-2xl p-8 pt-12 relative transition-all hover:-translate-y-1 ${
                selectedPlan === plan.id 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-[#1e293b] hover:border-purple-500/50'
              }`}
            >
              {/* Badge centered at top */}
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${plan.badgeColor} px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg text-white`}>
                  {plan.badgeIcon} {plan.badge}
                </span>
              </div>
              
              {/* Content centered */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">{plan.name}</h3>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold text-purple-400">
                    {prices[plan.id][billingPeriod].toFixed(2).replace('.', ',')}€
                  </span>
                  <span className="text-slate-400 ml-2">HT / mois</span>
                </div>
                {billingPeriod === 'yearly' && (
                  <p className="text-green-400 text-xs mb-1">
                    Facturé {(prices[plan.id].yearly * 12).toFixed(2).replace('.', ',')}€/an
                  </p>
                )}
                
                <p className="text-purple-300/70 text-sm mb-8">{plan.description}</p>
                
                {/* Features aligned left */}
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs">✓</span>
                      </span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center my-12">
          <button 
            onClick={handleContinue}
            disabled={!selectedPlan}
            className={`px-16 py-4 rounded-xl text-base font-semibold transition-all ${
              selectedPlan
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            Continuer →
          </button>
          {!selectedPlan && (
            <p className="text-slate-500 text-sm mt-3">Sélectionnez une offre pour continuer</p>
          )}
        </div>

        {/* Footer Info */}
        <div className="text-center pt-12 text-slate-600 text-xs">
          <p>Paiement 100% sécurisé • Résiliable à tout moment</p>
        </div>

      </div>
    </section>
  );
};