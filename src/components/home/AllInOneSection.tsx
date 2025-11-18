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

          {/* Carte 6 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Jeux Concours & QR Code
            </h3>
            <p className="text-gray-400 text-sm">
              Roue de la chance, collecte de contacts, SMS automatiques, base client exploitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
