import { useState, useEffect } from 'react';

export const SeoLocalAiSection = () => {
  const [step, setStep] = useState(0);
  
  // Animation : 4 étapes de 3 secondes chacune
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="seo-local">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Optimisation SEO Local & IA :
            </span>
            <br />
            <span className="text-white">
              devenez n°1 dans votre ville
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nous optimisons votre fiche Google et votre présence en ligne pour remonter dans les résultats locaux... et dans les recommandations des IA (ChatGPT, Claude, etc.).
          </p>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : Arguments */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Argument 1 - Audit complet */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Audit complet de la fiche Google
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyse approfondie : catégories, titre, description, photos, posts, NAP (nom, adresse, téléphone). On identifie tous les points à optimiser.
                </p>
              </div>
            </div>

            {/* Argument 2 - Optimisation SEO local */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Optimisation SEO local
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Réécriture des textes avec les bons mots-clés locaux (ville, quartier, spécialité). Ajustement des catégories et attributs. Plan de contenu : types de photos, idées de posts, fréquence de publication.
                </p>
              </div>
            </div>

            {/* Argument 3 - Visibilité IA (GEO) */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Visibilité dans les IA (GEO)
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Les IA (ChatGPT, Claude, Perplexity) se basent sur la qualité de vos données en ligne. Objectif : être cité quand un utilisateur demande "Quel est le meilleur [type de commerce] à [Ville] ?"
                </p>
              </div>
            </div>

            {/* Argument 4 - Suivi & ajustements */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Suivi & ajustements réguliers
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Suivi de votre rang dans Google Maps, de votre note moyenne, du nombre d'avis. Ajustements progressifs pour atteindre et maintenir le top 3 local.
                </p>
              </div>
            </div>

          </div>

          {/* Droite : Animation workflow SEO */}
          <div className="relative order-1 lg:order-2">
            {/* Carte principale */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-purple-500/20 overflow-hidden max-w-md mx-auto">
              
              {/* ÉTAPE 1 : Audit (0-3s) */}
              {step === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Audit fiche Google</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-gray-300 text-sm">Catégories</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">À améliorer</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-gray-300 text-sm">Description</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Manquante</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-gray-300 text-sm">Photos</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">OK</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-gray-300 text-sm">NAP (nom, adresse)</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">OK</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 2 : Optimisation (3-6s) */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Optimisation</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-xs mb-2">AVANT</div>
                      <div className="text-gray-500 text-sm line-through">Restaurant</div>
                      <div className="text-gray-400 text-xs mt-3 mb-2">APRÈS ✓</div>
                      <div className="text-white text-sm font-semibold">Pizzeria napolitaine – Centre Lyon</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-xs mb-2">Description SEO</div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        Pizzeria authentique au cœur de Lyon 6ème. Pâte fraîche, four à bois, ingrédients italiens. Livraison et terrasse.
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-orange-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-4/5 animate-pulse"></div>
                      </div>
                      <span className="text-orange-400 text-xs font-semibold">80%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 3 : Visibilité IA (6-9s) */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Visibilité IA</h3>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/40">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">✨</div>
                      <div className="text-white font-bold text-lg mb-2">
                        Visible dans ChatGPT & Claude
                      </div>
                      <div className="text-purple-300 text-sm">
                        Vos données sont optimisées pour les recommandations IA
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">ChatGPT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">Claude</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">Perplexity</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 4 : Résultats (9-12s) */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Résultats</h3>
                  </div>

                  {/* Badge TOP 3 LOCAL */}
                  <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/40 text-center">
                    <div className="text-5xl mb-3">🏆</div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                      TOP 3 LOCAL
                    </div>
                    <div className="text-yellow-300 text-sm">
                      #1 sur Google Maps
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 text-center">
                      <div className="text-2xl font-bold text-white mb-1">189</div>
                      <div className="text-gray-400 text-xs">Avis</div>
                      <div className="text-green-400 text-xs">+33</div>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 text-center">
                      <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                      <div className="text-gray-400 text-xs">Note</div>
                      <div className="text-green-400 text-xs">+0.7</div>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 text-center">
                      <div className="text-2xl font-bold text-white mb-1">98%</div>
                      <div className="text-gray-400 text-xs">SEO</div>
                      <div className="text-green-400 text-xs">+32%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Indicateurs de progression */}
              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      step === i ? 'bg-purple-500 w-8' : 'bg-gray-700 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
