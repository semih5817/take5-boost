export const CompetitiveAnalysisSection = () => {
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
                  📊 Analyse concurrentielle :
                </span>
                <br />
                <span className="text-white">
                  voyez où vous vous situez vraiment
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                TakeFive compare votre fiche Google à celles de vos concurrents locaux et vous montre comment les dépasser.
              </p>
            </div>

            {/* Arguments */}
            <div className="space-y-6">
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Radar de vos concurrents
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Identification automatique de vos principaux concurrents dans un rayon de 5 à 20 km. Sachez qui sont vos vrais rivaux sur Google Maps.
                  </p>
                </div>
              </div>

              {/* Argument 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Comparaison des indicateurs clés
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nombre d'avis, note moyenne, fréquence des nouveaux avis, fraîcheur des photos, activité sur les posts… Tous les critères qui comptent pour Google.
                  </p>
                </div>
              </div>

              {/* Argument 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Forces / faiblesses & plan d'action
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Découvrez ce que vous faites mieux ou moins bien que les autres. Suggestions concrètes : "Ajoutez des photos pour rattraper X", "Demandez plus d'avis pour dépasser Y".
                  </p>
                </div>
              </div>

              {/* Argument 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Suivi du classement
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Visualisez votre progression dans le top 5 / top 3 de votre ville au fil des mois. Objectif : devenir n°1 dans votre zone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE : Mockup */}
          <div className="relative lg:pl-8">
            {/* Effet halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            {/* Placeholder mockup - Dashboard classement */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-purple-500/20 shadow-2xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Top 5 - Restaurants Pizza à Lyon</div>
                
                {/* Classement */}
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Pizza Del Arte", score: 92, isYou: false },
                    { rank: 2, name: "Votre Restaurant", score: 78, isYou: true },
                    { rank: 3, name: "La Bella Vita", score: 71, isYou: false },
                    { rank: 4, name: "Pizzeria Roma", score: 68, isYou: false },
                    { rank: 5, name: "Le Napolitain", score: 64, isYou: false },
                  ].map((item) => (
                    <div 
                      key={item.rank}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        item.isYou 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30' 
                          : 'bg-gray-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`text-lg font-bold ${item.isYou ? 'text-purple-400' : 'text-gray-400'}`}>
                          #{item.rank}
                        </div>
                        <div>
                          <div className={`font-semibold ${item.isYou ? 'text-white' : 'text-gray-300'}`}>
                            {item.name}
                          </div>
                          {item.isYou && <div className="text-xs text-purple-400">C'est vous !</div>}
                        </div>
                      </div>
                      <div className={`text-xl font-bold ${item.isYou ? 'text-purple-400' : 'text-gray-400'}`}>
                        {item.score}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Pour passer #1</div>
                  <div className="text-white text-sm">
                    📸 Ajoutez 5 photos ce mois-ci<br />
                    ⭐ Obtenez 8 nouveaux avis<br />
                    📝 Publiez 2 posts cette semaine
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
