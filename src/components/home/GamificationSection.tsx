import { BarChart3, Target, Trophy, TrendingUp } from 'lucide-react';
import { GamificationPhone } from '../animations/GamificationPhone';

export const GamificationSection = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" id="gamification">
      {/* Fond dégradé identique à "Tout se passe sur WhatsApp" */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* GAUCHE : Téléphone avec animation notifications */}
          <div className="relative lg:pr-8 order-2 lg:order-1">
            {/* Halo qui pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse-fast" />
            
            <div className="relative">
              <GamificationPhone />
            </div>
          </div>

          {/* DROITE : Texte + arguments avec icônes LINE/STROKE */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  🎮 Gamification :
                </span>
                <br />
                <span className="text-white">
                  boostez votre Score de Santé Google
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Chaque semaine, TakeFive note votre fiche Google de 0 à 100 et vous envoie des missions simples pour vous rapprocher du 100 %.
              </p>
            </div>

            {/* Arguments avec icônes LINE/STROKE */}
            <div className="space-y-6">
              
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Graphique barres */}
                  <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Score de Santé 0–100
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Calcul automatique basé sur vos photos, posts, avis, taux de réponse et infos à jour. Suivez votre progression en temps réel : 62/100, 78/100…
                  </p>
                </div>
              </div>

              {/* Argument 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Cible */}
                  <Target className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Missions automatiques sur WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recevez des missions simples : "Ajoutez 3 nouvelles photos", "Répondez à ces 2 avis", "Mettez à jour vos horaires". Vous savez exactement quoi faire pour progresser.
                  </p>
                </div>
              </div>

              {/* Argument 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Trophée */}
                  <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Progression gamifiée
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gagnez des points à chaque action, débloquez des niveaux (Débutant, Pro, Expert Local) et recevez des notifications motivantes : "Objectif atteint !", "Niveau 3 débloqué !"
                  </p>
                </div>
              </div>

              {/* Argument 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Tendance croissante */}
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Rapports clairs & motivation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recevez chaque semaine votre rapport sur WhatsApp : évolution de votre score, missions accomplies, prochains défis. Restez motivé et progressez régulièrement.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
