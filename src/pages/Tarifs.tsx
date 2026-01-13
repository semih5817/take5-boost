import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Tarifs = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [copied, setCopied] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | null>(null);

  const copyPromoCode = () => {
    navigator.clipboard.writeText('SEMIH');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    if (!selectedPlan) return;
    navigate(`/checkout?offre=${selectedPlan}&periode=${billingPeriod}`);
  };

  const plans = [
    {
      id: 'starter' as const,
      name: 'Starter',
      description: 'Essentiel pour petits commerces',
      badge: 'POPULAIRE',
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
        'Plaque NFC offerte (offre annuelle)'
      ]
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      description: 'Pour dominer localement',
      badge: 'RECOMMANDÉ',
      price: {
        monthly: 29.90,
        yearly: 299
      },
      features: [
        'Tout Starter +',
        'Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)',
        'Analyse concurrentielle géolocalisée',
        'Collecte avis 4x/jour (toutes les 6h)',
        'SEO local optimisé avec IA',
        'Gamification',
        'Opportunités IA quotidiennes',
        'Support prioritaire',
        'Plaque NFC offerte (offre annuelle)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-5">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Code Promo Banner */}
          <div className="bg-gradient-to-r from-[#667eea] to-[#d946ef] rounded-2xl p-6 text-center mb-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl">🎁</span> 
              CODE PROMO : 1 MOIS GRATUIT
            </h2>
            <div className="inline-flex items-center gap-4 bg-white/25 px-5 py-2.5 rounded-xl mt-1">
              <span className="text-2xl font-bold tracking-widest">SEMIH</span>
              <button 
                onClick={copyPromoCode}
                className="bg-white/30 hover:bg-white/40 px-3 py-1.5 rounded-lg text-sm transition-all"
              >
                {copied ? '✓ Copié !' : '📋 Copier'}
              </button>
            </div>
            <p className="mt-3 text-sm opacity-95">
              Utilisez ce code sur l'offre Starter pour tester gratuitement
            </p>
          </div>

          {/* Section Title */}
          <h1 className="text-3xl font-semibold mb-4">1. Choisissez votre offre</h1>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex gap-2 bg-[#161b34]/80 p-1.5 rounded-xl border border-[#4F5EFF]/30">
              <button
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'monthly' 
                    ? 'bg-gradient-to-r from-[#667eea] to-[#4F5EFF] text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Mensuel
              </button>
              <button
                className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gradient-to-r from-[#667eea] to-[#4F5EFF] text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Annuel
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">
                  -17%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`text-left bg-[#161b34]/80 border-2 rounded-2xl p-8 relative transition-all hover:-translate-y-1 ${
                  selectedPlan === plan.id 
                    ? 'border-[#667eea] shadow-lg shadow-[#667eea]/20' 
                    : 'border-[#4F5EFF]/50 hover:border-[#4F5EFF]'
                }`}
              >
                {/* Selection indicator */}
                <div className={`absolute top-5 left-5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-[#667eea] bg-[#667eea]' 
                    : 'border-slate-500'
                }`}>
                  {selectedPlan === plan.id && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                <span className="absolute top-5 right-5 bg-gradient-to-r from-[#667eea] to-[#d946ef] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wide">
                  {plan.id === 'starter' ? '⭐' : '👑'} {plan.badge}
                </span>
                
                <div className="mt-8">
                  <h2 className="text-3xl font-semibold mb-4">{plan.name}</h2>
                  <div className="text-5xl font-bold text-[#8B9EFF] mb-1">
                    {plan.price[billingPeriod]}€
                  </div>
                  <div className="text-[#8891A8] text-sm mb-2">HT / mois</div>
                  <div className="text-[#9CA3AF] text-sm mb-6">{plan.description}</div>
                  
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#D1D5DB] text-sm">
                        <span className="text-[#8B9EFF] text-xs mt-1">●</span>
                        {feature}
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
                  ? 'bg-gradient-to-r from-[#667eea] to-[#4F5EFF] text-white shadow-lg shadow-[#4F5EFF]/30 hover:shadow-xl hover:shadow-[#4F5EFF]/40 hover:-translate-y-0.5'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continuer →
            </button>
            {!selectedPlan && (
              <p className="text-slate-500 text-sm mt-3">Sélectionnez une offre pour continuer</p>
            )}
          </div>

          {/* Divider */}
          <div className="relative text-center my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/15"></div>
            </div>
            <span className="relative px-6 text-[#8891A8] text-xs uppercase tracking-widest font-medium bg-gradient-to-b from-[#302b63] to-[#24243e]">
              OU
            </span>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-[#25D366]/10 border-2 border-[#25D366] rounded-2xl p-12 text-center max-w-[750px] mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              Ou faites tout directement sur WhatsApp
            </h2>
            
            <p className="text-[#D1D5DB] text-base leading-relaxed mb-6">
              <strong>Aucun formulaire à remplir ici.</strong> Envoyez-nous simplement un message, 
              nous nous occupons de tout sur WhatsApp : choix de l'offre, connexion à votre fiche Google, 
              activation du service.
            </p>

            <div className="bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] px-6 py-3 rounded-xl text-2xl font-bold tracking-wide inline-block mb-6">
              +33 9 39 03 76 44
            </div>

            <div>
              <a 
                href="https://wa.me/33939037644?text=Bonjour,%20je%20souhaite%20d%C3%A9marrer%20TakeFive%20et%20faire%20l%27onboarding%20via%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Démarrer sur WhatsApp
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center pt-12 text-[#6B7280] text-xs">
            <p>Paiement 100% sécurisé • Résiliable à tout moment</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;