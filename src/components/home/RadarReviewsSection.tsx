export const RadarReviewsSection = () => {
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
                  📡 Radar Multi-Plateformes :
                </span>
                <br />
                <span className="text-white">
                  Tous Vos Avis Centralisés
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Ne perdez plus de temps à vérifier Google, Facebook ou Trustpilot un par un. TakeFive surveille vos avis en continu, vous alerte sur WhatsApp dès qu'un problème apparaît, et vous aide à répondre dans le bon ton.
              </p>
            </div>

            {/* Arguments */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Collecte automatique</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Connexion à Google My Business, Facebook Pages, Trustpilot et Yelp. Vérification toutes les 6 heures. Zéro avis manqué.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Réponses IA personnalisées</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    L'IA analyse le ton et le sentiment. Génère des réponses adaptées. Avis positifs = réponse auto. Avis négatifs = proposition IA, vous décidez.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Alertes instantanées en cas d'avis négatif</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Avis négatif détecté ? WhatsApp vous prévient en 2 minutes. Réagissez avant qu'il soit trop tard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Zéro avis manqué</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Répondre vite permet souvent de désamorcer un conflit, rassurer les futurs clients, et parfois même faire retirer une mauvaise note.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE : Mockup */}
          <div className="relative lg:pl-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-purple-500/20 shadow-2xl max-w-sm mx-auto">
              <div className="space-y-4">
                <div className="text-center text-sm text-gray-400 mb-4">Alertes WhatsApp</div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⭐</div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Nouvel avis 5★</div>
                      <div className="text-gray-300 text-xs mt-1">"Excellent service, je recommande !"</div>
                      <div className="text-green-400 text-xs mt-2">✓ Réponse automatique envoyée</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⚠️</div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Avis négatif 2★</div>
                      <div className="text-gray-300 text-xs mt-1">"Temps d'attente trop long..."</div>
                    </div>
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
