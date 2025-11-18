export const SeoLocalAiSection = () => {
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
                  🚀 Optimisation SEO Local & IA :
                </span>
                <br />
                <span className="text-white">
                  devenez n°1 dans votre ville
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Nous optimisons votre fiche Google et votre présence en ligne pour remonter dans les résultats locaux… et dans les recommandations des IA (ChatGPT, Claude, etc.).
              </p>
            </div>

            {/* Arguments */}
            <div className="space-y-6">
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Audit complet de la fiche Google
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Analyse approfondie : catégories, titre, description, photos, posts, NAP (nom, adresse, téléphone). On identifie tous les points à optimiser.
                  </p>
                </div>
              </div>

              {/* Argument 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">✍️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Optimisation SEO local
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Réécriture des textes avec les bons mots-clés locaux (ville, quartier, spécialité). Ajustement des catégories et attributs. Plan de contenu : types de photos, idées de posts, fréquence de publication.
                  </p>
                </div>
              </div>

              {/* Argument 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Visibilité dans les IA (GEO)
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Les IA (ChatGPT, Claude, Perplexity) se basent sur la qualité de vos données en ligne. Objectif : être cité quand un utilisateur demande "Quel est le meilleur [type de commerce] à [Ville] ?"
                  </p>
                </div>
              </div>

              {/* Argument 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Suivi & ajustements réguliers
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Suivi de votre rang dans Google Maps, de votre note moyenne, du nombre d'avis. Ajustements progressifs pour atteindre et maintenir le top 3 local.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE : Mockup */}
          <div className="relative lg:pl-8">
            {/* Effet halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            {/* Placeholder mockup - Badge #1 */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-bold text-sm">
                  🏆 TOP 3 LOCAL
                </div>
                
                <div className="text-6xl">🎯</div>
                
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    #1 sur Google
                  </div>
                  <div className="text-gray-400">
                    Restaurant Pizza - Lyon 6ème
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">156</div>
                    <div className="text-xs text-gray-400">Avis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">4.8</div>
                    <div className="text-xs text-gray-400">Note</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">98%</div>
                    <div className="text-xs text-gray-400">SEO</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <div className="text-sm text-green-400 flex items-center justify-center gap-2">
                    <span>✓</span>
                    <span>Visible dans ChatGPT & Claude</span>
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
