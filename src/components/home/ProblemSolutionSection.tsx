import { X, Check } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-[#0A0E1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Les avis Google, c'est{" "}
          <span className="text-purple-400">90% de vos nouveaux clients</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Sans stratégie d'avis, vous laissez vos concurrents vous dépasser
        </p>

        {/* Tableau comparatif */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* AVANT */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">❌</span>
              Avant Take 5
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">3 avis en 6 mois</strong> : vos clients
                  oublient de laisser un avis
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Note 3.8/5</strong> : les avis négatifs
                  plombent votre réputation
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Avis négatif non traité</strong> : -85% de
                  clients en moins
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Classement #12 local</strong> : invisible
                  sur Google Maps
                </span>
              </li>
            </ul>
          </div>

          {/* APRÈS */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              Avec Take 5
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">30 avis en 30 jours</strong> : QR code +
                  alertes automatiques
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Note 4.7/5</strong> : réponses IA
                  professionnelles
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Réponse en 2 min</strong> : alertes
                  WhatsApp instantanées
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Classement #2 local</strong> : +300% de
                  visibilité
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
