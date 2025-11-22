import { useState, useEffect } from 'react';

export const AllInOneSection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const sections = [
    {
      title: "Score de Santé & Gamification",
      icon: "📊",
      description: "Note de 0 à 100, missions automatiques, progression gamifiée. Restez toujours actif sur Google.",
      color: "blue"
    },
    {
      title: "Radar Multi-Plateformes",
      icon: "📡",
      description: "Tous vos avis centralisés. Réponses IA 24/7. Alertes instantanées. Zéro avis manqué.",
      color: "purple"
    },
    {
      title: "Rapport Mensuel sur WhatsApp",
      icon: "📈",
      description: "Statistiques détaillées, analyse IA automatique, veille concurrentielle, 100% sur WhatsApp.",
      color: "pink"
    },
    {
      title: "Optimisation SEO Local",
      icon: "🚀",
      description: "Audit complet de votre fiche Google, optimisation des textes et catégories, plan de contenu personnalisé.",
      color: "green"
    },
    {
      title: "Analyse Concurrentielle",
      icon: "📊",
      description: "Comparez-vous à vos concurrents locaux. Forces/faiblesses. Plan d'action concret.",
      color: "orange"
    }
  ];

  const messages = [
    { text: "📊 Rapport Mensuel - Janvier 2025", time: "10:30", isBot: true },
    { text: "Score de santé : 87/100 (+5 pts)", time: "10:30", isBot: true },
    { text: "🌟 15 nouveaux avis ce mois\n⭐ Note moyenne : 4.8/5", time: "10:31", isBot: true },
    { text: "💡 3 missions à valider pour atteindre 92/100", time: "10:31", isBot: true }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
      setMessageIndex(0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSection === 2 && messageIndex < messages.length) {
      const timeout = setTimeout(() => {
        setMessageIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentSection, messageIndex]);

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      pink: "from-pink-500 to-rose-500",
      green: "from-green-500 to-teal-500",
      orange: "from-orange-500 to-red-500"
    };
    return colors[color] || colors.blue;
  };

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

        {/* Contenu avec iPhone */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Texte à gauche */}
          <div className="flex-1 space-y-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className={`flex gap-4 items-start transition-all duration-500 ${
                  idx === currentSection 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-40 scale-95'
                }`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${getColorClass(section.color)} flex items-center justify-center shadow-lg transition-transform ${
                  idx === currentSection ? 'scale-110' : ''
                }`}>
                  <span className="text-2xl">{section.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Carte Projets à venir */}
            <a 
              href="#bientot-disponible" 
              className="group relative flex gap-4 items-start bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 overflow-hidden mt-8"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full">
                <span className="text-pink-400 text-xs font-semibold uppercase">Bientôt</span>
              </div>
              
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Projets à venir
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Découvrez les fonctionnalités en préparation : générateur de flyers, publication multi-plateforme, jeux concours, campagnes SMS & email.
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </a>
          </div>

          {/* iPhone à droite */}
          <div className="relative">
            {/* iPhone Container */}
            <div className="relative w-[360px] h-[720px] bg-[#1e293b] rounded-[50px] p-[14px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] ring-2 ring-white/10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[32px] bg-[#0f172a] rounded-b-[20px] z-[100]" />
              
              {/* Camera */}
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] bg-[#1e293b] rounded-full border-2 border-[#334155] z-[101]" />

              {/* Screen */}
              <div className="w-full h-full bg-[#0a1628] rounded-[40px] relative overflow-hidden">
                {/* WhatsApp Header (visible pour section 2) */}
                {currentSection === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-[110px] bg-gradient-to-br from-[#075e54] to-[#128c7e] pt-[50px] px-4 pb-4 z-50 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-[44px] h-[44px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        ⭐
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-[17px] font-semibold">Take 5</div>
                        <div className="text-white/80 text-[13px]">en ligne</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Chat Background pour WhatsApp */}
                {currentSection === 2 && (
                  <div className="absolute top-[110px] left-0 right-0 bottom-[70px] bg-[#0a1628] p-4 overflow-hidden">
                    <div className="flex flex-col gap-3">
                      {messages.slice(0, messageIndex).map((msg, idx) => (
                        <div
                          key={idx}
                          className={`message-appear ${msg.isBot ? 'self-start' : 'self-end'}`}
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                            msg.isBot 
                              ? 'bg-[#1f2937] text-white rounded-tl-sm' 
                              : 'bg-[#8b5cf6] text-white rounded-tr-sm'
                          }`}>
                            <div className="text-[14px] leading-relaxed whitespace-pre-line">{msg.text}</div>
                            <div className="text-[11px] text-gray-400 mt-1 text-right">{msg.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gamification Dashboard (section 0) */}
                {currentSection === 0 && (
                  <div className="absolute inset-0 p-6 pt-16">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 mb-4">
                      <div className="text-white text-center">
                        <div className="text-5xl font-black mb-2">87</div>
                        <div className="text-sm opacity-90">Score de Santé</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">🎯 Publier 2 photos</span>
                          <span className="text-green-400 text-xs">+5 pts</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{ width: '60%' }} />
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">✍️ Répondre aux avis</span>
                          <span className="text-purple-400 text-xs">+3 pts</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '80%' }} />
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">📝 Créer un post</span>
                          <span className="text-orange-400 text-xs">+4 pts</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '30%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Radar Dashboard (section 1) */}
                {currentSection === 1 && (
                  <div className="absolute inset-0 p-6 pt-16">
                    <div className="text-white text-2xl font-bold mb-6">Tous vos avis</div>
                    
                    <div className="space-y-3">
                      {[
                        { platform: 'Google', avatar: '🔵', rating: 4.8, count: 156 },
                        { platform: 'Facebook', avatar: '🔷', rating: 4.7, count: 89 },
                        { platform: 'TripAdvisor', avatar: '🦉', rating: 4.9, count: 234 }
                      ].map((platform, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4"
                        >
                          <div className="text-3xl">{platform.avatar}</div>
                          <div className="flex-1">
                            <div className="text-white font-semibold">{platform.platform}</div>
                            <div className="text-gray-400 text-sm">{platform.count} avis</div>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-400 text-lg font-bold">{platform.rating}</div>
                            <div className="text-xs text-gray-400">⭐⭐⭐⭐⭐</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SEO Dashboard (section 3) */}
                {currentSection === 3 && (
                  <div className="absolute inset-0 p-6 pt-16">
                    <div className="text-white text-2xl font-bold mb-4">Fiche Google</div>
                    
                    <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-4 mb-4">
                      <div className="text-green-400 text-sm mb-2">✓ Optimisation complète</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white">Score SEO</span>
                        <span className="text-white text-2xl font-bold">98%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{ width: '98%' }} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-white text-sm">📍 Position locale</div>
                        <div className="text-yellow-400 text-3xl font-bold mt-2">#1</div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-white text-sm mb-2">Visibilité IA</div>
                        <div className="flex gap-2">
                          {['ChatGPT', 'Claude'].map((ai, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-green-400 text-xs">
                              <span>✓</span>
                              <span>{ai}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Competitive Analysis (section 4) */}
                {currentSection === 4 && (
                  <div className="absolute inset-0 p-6 pt-16">
                    <div className="text-white text-2xl font-bold mb-6">Analyse Concurrents</div>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'Votre Restaurant', score: 87, color: 'from-purple-500 to-pink-500' },
                        { name: 'Concurrent A', score: 72, color: 'from-orange-500 to-red-500' },
                        { name: 'Concurrent B', score: 68, color: 'from-blue-500 to-cyan-500' }
                      ].map((resto, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/5 border border-white/10 rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-semibold text-sm">{resto.name}</span>
                            <span className="text-white text-lg font-bold">{resto.score}</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${resto.color} rounded-full`} style={{ width: `${resto.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4">
                      <div className="text-orange-400 text-sm font-semibold mb-2">💡 Recommandation</div>
                      <div className="text-gray-300 text-xs">Publiez 2 photos de plus pour dépasser vos concurrents</div>
                    </div>
                  </div>
                )}

                {/* WhatsApp Input Bar (pour section 2) */}
                {currentSection === 2 && (
                  <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#1f2937] p-3 flex items-center gap-2">
                    <div className="flex-1 bg-[#374151] rounded-full px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Message..." 
                        className="w-full bg-transparent text-white text-sm outline-none placeholder:text-gray-500"
                        disabled
                      />
                    </div>
                    <button className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">➤</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSection(idx);
                    setMessageIndex(0);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSection 
                      ? 'w-6 bg-purple-500' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
