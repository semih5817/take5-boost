import { RadarMultiPlatformPhone } from '../animations/RadarMultiPlatformPhone';

export const RadarReviewsSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden" id="radar-reviews">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Radar Multi-Plateformes :
            </span>
            <br />
            <span className="text-white">
              Capturez tous vos avis en temps réel
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Surveillance active 24/7 de Google, Facebook, Trustpilot et Yelp. Réponse IA automatique aux avis positifs et alertes WhatsApp pour les avis négatifs.
          </p>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : Arguments */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Argument 1 - Collecte automatique */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Collecte automatique multi-plateformes
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tous vos avis Google, Facebook, Trustpilot et Yelp arrivent en temps réel. Plus aucun avis manqué, tout est centralisé.
                </p>
              </div>
            </div>

            {/* Argument 2 - Réponses IA */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Réponses automatiques par IA
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Avis positif ? L'IA génère et envoie une réponse personnalisée en 2 secondes. Vous gagnez un temps précieux.
                </p>
              </div>
            </div>

            {/* Argument 3 - Alertes WhatsApp */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Alertes instantanées WhatsApp
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Avis négatif ou neutre ? Vous recevez une alerte WhatsApp immédiate pour réagir vite et préserver votre réputation.
                </p>
              </div>
            </div>

            {/* Argument 4 - Statistiques */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Zéro avis manqué
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Suivi en temps réel du nombre d'avis surveillés, temps de réponse moyen et série sans avis manqué. Performance totale.
                </p>
              </div>
            </div>

          </div>

          {/* Droite : Animation iPhone Radar */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-fast" />
            <div className="relative flex justify-center">
              <RadarMultiPlatformPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
