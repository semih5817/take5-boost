import { useState, useEffect } from 'react';

export const SeoLocalAiSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['base', 'optimization', 'top-local', 'ai-visibility'];
  const [progress, setProgress] = useState(80);
  const [seoPercent, setSeoPercent] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate based on current step
    switch(steps[currentStep]) {
      case 'base':
        setProgress(80);
        setSeoPercent(80);
        break;
      case 'optimization':
        // Animate progress from 80 to 98
        animateValue(80, 98, 900, (val) => {
          setProgress(val);
          setSeoPercent(val);
        });
        break;
    }
  }, [currentStep]);

  const animateValue = (from: number, to: number, duration: number, callback: (val: number) => void) => {
    const range = to - from;
    const increment = range / (duration / 16);
    let current = from;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        current = to;
        clearInterval(timer);
      }
      callback(Math.round(current));
    }, 16);
  };

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

          {/* Droite : Animation carte SEO */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl max-w-lg mx-auto overflow-hidden" style={{ height: '420px' }}>
              
              {/* TOP 3 Badge */}
              <div className={`absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg transition-all duration-600 ${
                currentStep === 2 ? 'opacity-100 animate-pulse-glow' : 'opacity-30'
              }`}>
                🔥 TOP 3 LOCAL
              </div>

              {/* Icon & Title */}
              <div className="mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  🎯
                </div>
                <h3 className="text-white text-2xl font-bold transition-all duration-500">
                  {currentStep === 2 ? '#1 sur Google' : 'Votre fiche Google'}
                </h3>
                <p className="text-gray-400 mt-2">Restaurant Pizza - Lyon 6ème</p>
              </div>

              {/* Status Message */}
              <div className={`bg-purple-500/10 border border-purple-500/30 rounded-xl px-4 py-3 text-purple-300 text-sm mb-5 transition-all duration-500 ${
                currentStep === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                Optimisation des catégories, textes & photos...
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 border-2 border-white/10 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs mb-2">Avis</div>
                  <div className="text-white text-2xl font-bold">156</div>
                </div>
                <div className="bg-white/5 border-2 border-white/10 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs mb-2">Note</div>
                  <div className="text-white text-2xl font-bold">4.8★</div>
                </div>
                <div className="bg-white/5 border-2 border-white/10 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs mb-2">SEO</div>
                  <div className="text-white text-2xl font-bold">{seoPercent}%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-white text-sm mb-2">
                  <span>Optimisation SEO Local</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Rank Badge */}
              <div className={`absolute top-1/2 right-10 -translate-y-1/2 transition-opacity duration-600 ${
                currentStep === 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-6xl font-black bg-gradient-to-br from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  #1
                </div>
              </div>

              {/* AI Visibility Banner */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600/90 to-transparent p-6 transition-all duration-600 ${
                currentStep === 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <div className="text-white font-semibold mb-3">Visibilité IA</div>
                <div className="flex gap-4">
                  {['ChatGPT', 'Claude', 'Perplexity'].map((platform, idx) => (
                    <div 
                      key={platform}
                      className={`flex items-center gap-2 text-white text-sm transition-all duration-400 ${
                        currentStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                      }`}
                      style={{ transitionDelay: `${idx * 200}ms` }}
                    >
                      <span className="text-green-400 font-bold text-lg">✓</span>
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentStep 
                        ? 'w-6 bg-purple-500' 
                        : 'w-2 bg-white/30'
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
