import { TrendingUp, Star, Globe, Gamepad2, BarChart3, Target, Zap } from "lucide-react";
import { UnifiedWhatsAppAnimation } from "@/components/animations";

export const WhatsAppReportingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" id="whatsapp-solution">
            Tout se passe sur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              WhatsApp
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Gère ta visibilité en quelques secondes, sans quitter WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4 md:space-y-6">
            {/* Feature 1 - Statistiques détaillées */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Statistiques détaillées</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Vues, avis, note moyenne et évolution mensuelle en un coup d'œil
                </p>
              </div>
            </div>

            {/* Feature 2 - Gamification */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Gamepad2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Gamification</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Badges, niveaux et récompenses pour booster votre engagement
                </p>
              </div>
            </div>

            {/* Feature 3 - Analyse concurrentielle */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Analyse concurrentielle</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Position locale et alertes sur vos concurrents en temps réel
                </p>
              </div>
            </div>

            {/* Feature 4 - Radar multiplateforme */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Radar multiplateforme</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Surveillez vos avis sur Google, Facebook, Trustpilot et Yelp
                </p>
              </div>
            </div>

            {/* Feature 5 - Analyse IA automatique */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Star className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Analyse IA automatique</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Réponses automatiques et traitement des avis en temps réel
                </p>
              </div>
            </div>

            {/* Feature 6 - Optimisation SEO locale IA */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Optimisation SEO locale IA</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Améliorez votre visibilité locale avec l'intelligence artificielle
                </p>
              </div>
            </div>

            {/* Feature 7 - 100% sur WhatsApp */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Globe className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">100% sur WhatsApp</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Pas d'app à installer, tout arrive directement sur votre téléphone
                </p>
              </div>
            </div>
          </div>

          {/* Phone Mockup avec animation */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <UnifiedWhatsAppAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
