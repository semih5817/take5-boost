import { useState, useEffect } from 'react';
import { CompetitiveAnalysisPhone } from '../animations/CompetitiveAnalysisPhone';

export const CompetitiveAnalysisSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['idle', 'reviews', 'rating', 'posts-photos', 'suggestions'];
  const [reviews, setReviews] = useState(156);
  const [rating, setRating] = useState(4.3);
  const [posts, setPosts] = useState(2);
  const [photos, setPhotos] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const step = steps[currentStep];
    
    switch(step) {
      case 'idle':
        setReviews(156);
        setRating(4.3);
        setPosts(2);
        setPhotos(8);
        break;
      case 'reviews':
        animateValue(89, 156, 700, setReviews);
        break;
      case 'rating':
        animateValue(4.0, 4.3, 700, (val) => setRating(parseFloat(val.toFixed(1))));
        break;
      case 'posts-photos':
        animateValue(1, 2, 400, setPosts);
        setTimeout(() => {
          animateValue(5, 8, 400, setPhotos);
        }, 500);
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
      callback(current);
    }, 16);
  };

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

          {/* Droite : Animation iPhone concurrence */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-fast" />
            <div className="relative">
              <CompetitiveAnalysisPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
