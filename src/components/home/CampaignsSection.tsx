export const CampaignsSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* GAUCHE : Texte + arguments */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  📧 Campagnes SMS & Email :
                </span>
                <br />
                <span className="text-white">
                  relancez vos clients automatiquement
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Créez des campagnes ciblées pour vos promotions, nouveautés et événements. L'outil automatise tout : segmentation, envoi, et suivi des résultats.
              </p>
            </div>

            {/* Arguments */}
            <div className="space-y-6">
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Segmentation intelligente
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ciblez vos clients par critères : dernière visite, montant dépensé, préférences produits. Envoyez le bon message à la bonne personne.
                  </p>
                </div>
              </div>

              {/* Argument 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Automatisation 100%
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Créez votre campagne une fois, définissez les règles d'envoi, et TakeFive s'occupe du reste. SMS et emails partent automatiquement aux bons moments.
                  </p>
                </div>
              </div>

              {/* Argument 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Suivi des résultats en temps réel
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Taux d'ouverture, clics, conversions… Suivez les performances de vos campagnes et ajustez votre stratégie en fonction des résultats.
                  </p>
                </div>
              </div>

              {/* Argument 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    100% conforme RGPD
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Collecte de consentement, gestion des désabonnements, respect de la vie privée. Vos campagnes sont conformes aux réglementations européennes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE : Mockup */}
          <div className="relative lg:pl-8">
            {/* Effet halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            {/* Placeholder mockup - Dashboard de campagne */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Campagne active</div>
                    <div className="text-xl font-bold text-white">Promo Week-end</div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-lg">
                    En cours
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                    <div className="text-2xl font-bold text-white">347</div>
                    <div className="text-xs text-gray-400">Envoyés</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-4 border border-green-500/20">
                    <div className="text-2xl font-bold text-white">89%</div>
                    <div className="text-xs text-gray-400">Ouverture</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-xs text-gray-400">Réservations</div>
                  </div>
                </div>

                {/* Message preview */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                  <div className="text-sm text-gray-400 mb-2">Message</div>
                  <div className="text-white text-sm leading-relaxed">
                    🎉 Ce week-end : -20% sur tous nos plats !<br />
                    Réservez votre table maintenant 👉
                  </div>
                </div>

                {/* Bouton */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                  Voir les détails
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
