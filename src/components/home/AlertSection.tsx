import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AlertSection = () => {
  const navigate = useNavigate();
  
  const goToTarifs = () => {
    navigate('/tarifs');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        {/* Stat choc */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/10 border-2 border-red-500 rounded-xl px-6 py-3 mb-6 animate-pulse">
            <p className="text-red-400 text-2xl md:text-3xl font-bold">
              ⚠️ 85% des clients ne reviennent jamais après un avis négatif non traité
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ne laissez plus un avis négatif{" "}
            <span className="text-red-400">ruiner votre réputation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Avec Take 5, soyez alerté instantanément et répondez en 2 minutes grâce à l'IA
          </p>
        </div>

        {/* Split view : Avant vs Après */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AVANT */}
          <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sans Take 5</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Vous découvrez l'avis négatif{" "}
                  <strong className="text-red-400">3 jours après</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Vous ne savez pas quoi répondre</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Le client est déjà parti chez le concurrent
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Votre note Google chute de{" "}
                  <strong className="text-red-400">-0.2 points</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* APRÈS */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-2 border-green-500 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Avec Take 5</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-green-400">Alerte WhatsApp instantanée</strong> dès
                  l'avis publié
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  L'IA vous{" "}
                  <strong className="text-green-400">propose une réponse</strong>{" "}
                  professionnelle
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Vous validez ou modifiez en{" "}
                  <strong className="text-green-400">1 clic</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-green-400">Répondu en 2 minutes</strong> - Le
                  client est reconquis
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important note */}
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">
                IMPORTANT : Vous gardez le contrôle total
              </h4>
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-green-400">Avis positifs (4-5⭐)</strong> : L'IA
                publie automatiquement la réponse
                <br />
                <strong className="text-red-400">Avis négatifs (1-3⭐)</strong> : L'IA
                propose MAIS NE publie PAS. Vous décidez.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={goToTarifs}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-10 text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/50"
          >
            Activer les alertes intelligentes
          </Button>
          <p className="text-slate-400 text-sm mt-4">
            Essai gratuit 1 mois • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};
