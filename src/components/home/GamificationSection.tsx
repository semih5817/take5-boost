export const GamificationSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* GAUCHE : Texte + arguments */}
          <div className="space-y-8">
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

            {/* Arguments */}
            <div className="space-y-6">
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
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
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
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
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
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
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Rapports clairs & motivation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Visualisez vos points forts, vos axes d'amélioration et vos objectifs de la semaine. Suivez l'évolution de votre score dans le temps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE : Mockup */}
          <div className="relative lg:pl-8">
            {/* Effet halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            {/* Placeholder mockup */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎉</div>
                <div className="text-xl font-bold text-white">OBJECTIF ATTEINT !</div>
                <div className="text-gray-300">Tu as obtenu 10 avis cette semaine !</div>
                <div className="text-3xl font-bold text-yellow-400">+100 points</div>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold">
                  Niveau 3 débloqué : Pro
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Ton score de santé</div>
                  <div className="text-4xl font-bold text-white">78/100</div>
                  <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
