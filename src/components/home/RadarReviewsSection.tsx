import { useState, useEffect } from 'react';

export const RadarReviewsSection = () => {
  const [cards, setCards] = useState<Array<{
    id: number;
    platform: string;
    icon: string;
    rating: string;
    text: string;
    badge: string;
    badgeColor: string;
    direction: string;
  }>>([]);
  const [nextId, setNextId] = useState(0);

  const reviewsData = [
    {
      platform: "Google",
      icon: "🌐",
      rating: "5★",
      text: "Excellent service, je recommande !",
      badge: "Réponse automatique envoyée",
      badgeColor: "from-green-500 to-teal-500",
      direction: "left"
    },
    {
      platform: "Facebook",
      icon: "👥",
      rating: "2★",
      text: "Temps d'attente trop long...",
      badge: "Avis négatif détecté – Agissez vite",
      badgeColor: "from-orange-500 to-red-500",
      direction: "top"
    },
    {
      platform: "Trustpilot",
      icon: "⭐",
      rating: "4★",
      text: "Bon rapport qualité/prix, ambiance sympa",
      badge: "Suggestion de réponse disponible",
      badgeColor: "from-purple-500 to-pink-500",
      direction: "right"
    }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const review = reviewsData[index % reviewsData.length];
      const newCard = { id: nextId, ...review };
      
      setCards(prev => [newCard, ...prev].slice(0, 2)); // Max 2 cartes visibles
      setNextId(prev => prev + 1);
      
      // Supprimer après 4 secondes
      setTimeout(() => {
        setCards(prev => prev.filter(c => c.id !== newCard.id));
      }, 4000);
      
      index++;
    }, 3000); // Nouvelle carte toutes les 3 secondes

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="radar-multi-plateformes">
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
              Tous vos avis centralisés
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ne perdez plus de temps à vérifier Google, Facebook ou Trustpilot un par un. TakeFive surveille vos avis en continu, vous alerte sur WhatsApp dès qu'un problème apparaît, et vous aide à répondre dans le bon ton.
          </p>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : Arguments */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Argument 1 - Collecte automatique */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Collecte automatique
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connexion à Google My Business, Facebook Pages, Trustpilot et Yelp. Vérification toutes les 6 heures. Zéro avis manqué.
                </p>
              </div>
            </div>

            {/* Argument 2 - Réponses IA */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Réponses IA personnalisées 24/7
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  L'IA analyse le ton et le sentiment. Génère des réponses adaptées. Avis positif = réponse auto. Avis négatif = proposition IA, vous décidez.
                </p>
              </div>
            </div>

            {/* Argument 3 - Alertes instantanées */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Alertes instantanées en cas d'avis négatif
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Avis négatif détecté ? WhatsApp vous prévient en 2 minutes. Réagissez avant qu'il soit trop tard.
                </p>
              </div>
            </div>

            {/* Argument 4 - Zéro avis manqué */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Zéro avis manqué
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Répondre vite permet souvent de désamorcer un conflit, rassurer les futurs clients, et parfois même faire retirer une mauvaise note.
                </p>
              </div>
            </div>

          </div>

          {/* Droite : Animation téléphone */}
          <div className="relative order-1 lg:order-2">
            {/* Téléphone */}
            <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 max-w-sm mx-auto">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl z-10" />
              
              {/* Écran */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4 text-center">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <span className="text-white text-sm font-semibold">Alertes WhatsApp</span>
                  </div>
                </div>

                {/* Zone de cartes */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full space-y-4">
                    {cards.map((card, index) => (
                      <div
                        key={card.id}
                        className={`bg-gray-800/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-gray-700 ${
                          card.direction === 'left' ? 'animate-slide-from-left' :
                          card.direction === 'top' ? 'animate-slide-from-top' :
                          'animate-slide-from-right'
                        }`}
                        style={{ opacity: 1 - (index * 0.3) }}
                      >
                        {/* Header de la carte */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-3xl">{card.icon}</div>
                          <div>
                            <div className="text-white font-semibold">{card.platform}</div>
                            <div className="text-yellow-400 text-sm">{card.rating}</div>
                          </div>
                        </div>

                        {/* Texte de l'avis */}
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          "{card.text}"
                        </p>

                        {/* Badge */}
                        <div className={`inline-block px-3 py-1.5 bg-gradient-to-r ${card.badgeColor} rounded-lg`}>
                          <span className="text-white text-xs font-semibold">{card.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder si pas de cartes */}
                {cards.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📡</div>
                      <p className="text-gray-500 text-sm">Surveillance en cours...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
