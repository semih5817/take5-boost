import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Tarifs = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handleContinue = () => {
    navigate(`/checkout?offre=pro&periode=${billingPeriod}`);
  };

  const prices = {
    monthly: 19.90,
    yearly: 15.92
  };

  const features = [
    'QR Code dynamique',
    'Collecte avis Google (4x/jour) + Facebook',
    'Réponses IA illimitées 24/7',
    'Alertes WhatsApp instantanées (avis négatifs en 2 min)',
    'Rapport mensuel sur WhatsApp',
    'Reporting hebdomadaire détaillé',
    'Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)',
    'Analyse concurrentielle quotidienne',
    'SEO local optimisé avec IA',
    'Gamification',
    'Opportunités IA quotidiennes',
    'Support prioritaire',
    billingPeriod === 'yearly' ? '🎁 Plaque NFC offerte' : 'Plaque NFC offerte (offre annuelle)'
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-5">
        <div className="max-w-[700px] mx-auto">
          
          {/* Code Promo Banner */}
          <div className="bg-gradient-to-r from-[#667eea] to-[#d946ef] rounded-2xl p-6 text-center mb-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl">🎁</span> 
              CODE PROMO : 1 MOIS GRATUIT
            </h2>
            <div className="inline-flex items-center bg-white/25 px-6 py-3 rounded-xl mt-1">
              <span className="text-2xl font-bold tracking-widest">SEMIH</span>
            </div>
            <p className="mt-3 text-sm opacity-95">
              Utilisez ce code pour tester gratuitement pendant 1 mois
            </p>
          </div>

          {/* Section Title */}
          <h1 className="text-3xl font-bold mb-8 text-center">L'offre tout-en-un</h1>

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

          {/* Single Pricing Card */}
          <div className="bg-[#0f1629] border border-purple-500 shadow-lg shadow-purple-500/20 rounded-2xl p-8 pt-12 relative mb-10">
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                💎 TOUT INCLUS
              </span>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Pro</h2>
              
              <div className="mb-2">
                <span className="text-5xl font-bold text-purple-400">
                  {prices[billingPeriod].toFixed(2).replace('.', ',')}€
                </span>
                <span className="text-slate-400 ml-2">TTC / mois</span>
              </div>
              {billingPeriod === 'yearly' && (
                <p className="text-green-400 text-xs mb-1">
                  Facturé {(prices.yearly * 12).toFixed(2).replace('.', ',')}€/an
                </p>
              )}
              
              <p className="text-purple-300/70 text-sm mb-8">Tout ce qu'il faut pour dominer localement</p>
              
              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </span>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center my-12">
            <button 
              onClick={handleContinue}
              className="px-16 py-4 rounded-xl text-base font-semibold transition-all bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              S'abonner maintenant →
            </button>
          </div>

          {/* Divider */}
          <div className="relative text-center my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <span className="relative px-6 text-slate-500 text-xs uppercase tracking-widest font-medium bg-[#0A0E1A]">
              OU
            </span>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-[#0f1629] border border-[#25D366]/30 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Ou faites tout directement sur WhatsApp
            </h2>
            
            <p className="text-slate-400 text-center mb-8 max-w-xl mx-auto">
              <strong className="text-white">Aucun formulaire à remplir.</strong> Envoyez-nous un message, 
              nous nous occupons de tout : connexion Google, activation.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/33939037644?text=Bonjour,%20je%20souhaite%20d%C3%A9marrer%20TakeFive%20et%20faire%20l%27onboarding%20via%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Démarrer sur WhatsApp
              </a>
              
              <div className="flex items-center gap-3">
                <div className="w-px h-10 bg-slate-700 hidden md:block"></div>
                <div className="text-center md:text-left">
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Notre numéro</p>
                  <p className="text-[#25D366] text-xl font-bold tracking-wide">+33 9 39 03 76 44</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center pt-12 text-slate-600 text-xs">
            <p>Paiement 100% sécurisé • Résiliable à tout moment</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;
