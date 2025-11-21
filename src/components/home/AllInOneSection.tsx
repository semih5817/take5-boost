export const AllInOneSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Titre centré */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Un service
            </span>{" "}
            <span className="text-white">tout-en-un</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tout ce dont vous avez besoin pour devenir #1 sur Google
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Carte 1 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Score de Santé & Gamification
            </h3>
            <p className="text-gray-400 text-sm">
              Note de 0 à 100, missions automatiques, progression gamifiée. Restez toujours actif sur Google.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">📡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Radar Multi-Plateformes
            </h3>
            <p className="text-gray-400 text-sm">
              Tous vos avis centralisés. Réponses IA 24/7. Alertes instantanées. Zéro avis manqué.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Rapport Mensuel sur WhatsApp
            </h3>
            <p className="text-gray-400 text-sm">
              Statistiques détaillées, analyse IA automatique, veille concurrentielle, 100% sur WhatsApp.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Optimisation SEO Local
            </h3>
            <p className="text-gray-400 text-sm">
              Audit complet de votre fiche Google, optimisation des textes et catégories, plan de contenu personnalisé.
            </p>
          </div>

          {/* Carte 5 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Analyse Concurrentielle
            </h3>
            <p className="text-gray-400 text-sm">
              Comparez-vous à vos concurrents locaux. Forces/faiblesses. Plan d'action concret.
            </p>
          </div>

          {/* Carte 6 - Projets à venir (remplace Jeux Concours) */}
          <a href="#bientot-disponible" className="group relative bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 overflow-hidden">
            {/* Badge "Coming Soon" */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full">
              <span className="text-pink-400 text-xs font-semibold uppercase">Bientôt</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Projets à venir
            </h3>
            <p className="text-gray-400 text-sm">
              Découvrez les fonctionnalités en préparation : générateur de flyers, publication multi-plateforme, jeux concours, campagnes SMS & email. Inscrivez-vous pour être prévenu au lancement.
            </p>

            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </section>
  );
};
