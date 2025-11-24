export const AllInOneSection = () => {
  const sections = [
    {
      title: "Score de Santé & Gamification",
      icon: "📊",
      description: "Note de 0 à 100, missions automatiques, progression gamifiée. Restez toujours actif sur Google.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Radar Multi-Plateformes",
      icon: "📡",
      description: "Tous vos avis centralisés. Réponses IA 24/7. Alertes instantanées. Zéro avis manqué.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Rapport Mensuel sur WhatsApp",
      icon: "📈",
      description: "Statistiques détaillées, analyse IA automatique, veille concurrentielle, 100% sur WhatsApp.",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Optimisation SEO Local",
      icon: "🚀",
      description: "Audit complet de votre fiche Google, optimisation des textes et catégories, plan de contenu personnalisé.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Analyse Concurrentielle",
      icon: "📊",
      description: "Comparez-vous à vos concurrents locaux. Forces/faiblesses. Plan d'action concret.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" id="tout-en-un">
      
      <div className="relative max-w-7xl mx-auto">
        {/* Titre centré */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Un service
            </span>{" "}
            <span className="text-white">tout-en-un</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Tout ce dont vous avez besoin pour devenir #1 sur Google
          </p>
        </div>

        {/* Grille 2x3 de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg mb-4`}>
                <span className="text-2xl lg:text-3xl">{section.icon}</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                {section.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}

          {/* Carte Projets à venir */}
          <a 
            href="#bientot-disponible" 
            className="group relative bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full">
              <span className="text-pink-400 text-xs font-semibold uppercase">Bientôt</span>
            </div>
            
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg mb-4">
              <span className="text-2xl lg:text-3xl">🚀</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
              Projets à venir
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Découvrez les fonctionnalités en préparation : générateur de flyers, publication multi-plateforme, jeux concours, campagnes SMS & email.
            </p>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </section>
  );
};
