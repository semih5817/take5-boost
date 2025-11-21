import { useState, useEffect } from 'react';

export const CompetitiveAnalysisSection = () => {
  const [step, setStep] = useState(0);
  
  // Animation : 4 étapes de 3 secondes chacune
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const competitors = [
    { name: "Pizza Del Arte", score: 92 },
    { name: "Votre Restaurant", score: 78, isYou: true },
    { name: "La Bella Vita", score: 71 },
    { name: "Pizzeria Roma", score: 68 },
    { name: "Le Napolitain", score: 64 }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="analyse-concurrentielle">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Analyse concurrentielle :
            </span>
            <br />
            <span className="text-white">
              voyez où vous vous situez vraiment
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            TakeFive compare votre fiche Google à celles de vos concurrents locaux et vous montre comment les dépasser.
          </p>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : Arguments */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Argument 1 - Radar concurrents */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Radar de vos concurrents
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Identification automatique de 5 à 20 concurrents dans un rayon personnalisé. Sachez qui sont vos vrais rivaux sur Google Maps.
                </p>
              </div>
            </div>

            {/* Argument 2 - Comparaison */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Comparaison des indicateurs clés
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nombre d'avis, note moyenne, fréquence des nouveaux avis, fraîcheur des photos, activité posts. Tous les critères qui comptent pour Google.
                </p>
              </div>
            </div>

            {/* Argument 3 - Forces/Faiblesses */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Forces / Faiblesses & Plan d'action
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Découvrez ce que vous faites mieux ou moins bien que les autres. Suggestions concrètes : "Ajoutez des photos", "Demandez plus d'avis".
                </p>
              </div>
            </div>

            {/* Argument 4 - Suivi classement */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Suivi du classement
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visualisez votre progression dans le top 5 / top 3 de votre ville au fil des mois. Objectif : devenir n°1 dans votre zone.
                </p>
              </div>
            </div>

          </div>

          {/* Droite : Animation workflow */}
          <div className="relative order-1 lg:order-2">
            {/* Carte principale */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-purple-500/20 overflow-hidden">
              
              {/* ÉTAPE 1 : Radar concurrents (0-3s) */}
              {step === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Radar Concurrents</h3>
                  </div>
                  <div className="space-y-3">
                    {competitors.map((comp, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700 animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
                        <span className="text-gray-300">{comp.name}</span>
                        <span className="text-gray-500 text-sm">Détecté</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ÉTAPE 2 : Comparaison indicateurs (3-6s) */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Comparaison</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Nombre d'avis</div>
                      <div className="text-2xl font-bold text-white">156</div>
                      <div className="text-green-400 text-xs">Moyenne locale: 89</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Note moyenne</div>
                      <div className="text-2xl font-bold text-white">4.3★</div>
                      <div className="text-orange-400 text-xs">Moyenne locale: 4.6★</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Posts / mois</div>
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-orange-400 text-xs">Moyenne locale: 6</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Photos récentes</div>
                      <div className="text-2xl font-bold text-white">8</div>
                      <div className="text-green-400 text-xs">Moyenne locale: 5</div>
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 3 : Classement (6-9s) */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Top 5 - Restaurants Pizza à Lyon</h3>
                    <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-lg">
                      <span className="text-purple-400 text-sm font-semibold">Vous passez #2 ! 🎉</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { rank: 1, name: "Pizza Del Arte", score: 92, badge: null },
                      { rank: 2, name: "Votre Restaurant", score: 85, badge: "C'est vous !", isYou: true },
                      { rank: 3, name: "La Bella Vita", score: 71, badge: null },
                      { rank: 4, name: "Pizzeria Roma", score: 68, badge: null },
                      { rank: 5, name: "Le Napolitain", score: 64, badge: null }
                    ].map((item) => (
                      <div 
                        key={item.rank}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                          item.isYou 
                            ? 'bg-purple-500/20 border-purple-500/60 shadow-lg shadow-purple-500/30 scale-105' 
                            : 'bg-gray-800/50 border-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-2xl font-bold ${item.isYou ? 'text-purple-400' : 'text-gray-500'}`}>
                            #{item.rank}
                          </span>
                          <div>
                            <div className={`font-semibold ${item.isYou ? 'text-white' : 'text-gray-300'}`}>
                              {item.name}
                            </div>
                            {item.badge && (
                              <div className="text-purple-400 text-xs mt-1">{item.badge}</div>
                            )}
                          </div>
                        </div>
                        <span className={`text-xl font-bold ${item.isYou ? 'text-purple-400' : 'text-gray-400'}`}>
                          {item.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ÉTAPE 4 : Plan d'action (9-12s) */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Plan d'action</h3>
                  </div>
                  <div className="text-gray-300 mb-6">
                    Pour passer #1 sur Google :
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <span className="text-blue-400 text-sm">📸</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Ajoutez 5 photos ce mois-ci</div>
                        <div className="text-gray-400 text-sm">Les concurrents ont +12 photos récentes</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center mt-0.5">
                        <span className="text-yellow-400 text-sm">⭐</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Obtenez 8 nouveaux avis</div>
                        <div className="text-gray-400 text-sm">Pour atteindre 4.6★ et dépasser la moyenne</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center mt-0.5">
                        <span className="text-purple-400 text-sm">📝</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Publiez 2 posts cette semaine</div>
                        <div className="text-gray-400 text-sm">Montrez votre activité à Google</div>
                      </div>
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
