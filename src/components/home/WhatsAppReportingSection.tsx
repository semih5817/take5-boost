import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Star, Phone, Globe } from "lucide-react";
import take5Logo from "@/assets/take5-logo.png";

export const WhatsAppReportingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    reviews: 0,
    rating: 0,
    views: 0,
    score: 0,
  });

  const targetStats = {
    reviews: 42,
    rating: 4.8,
    views: 2847,
    score: 85,
  };

  const chartData = [
    { name: 'Sem 1', avis: 28 },
    { name: 'Sem 2', avis: 32 },
    { name: 'Sem 3', avis: 38 },
    { name: 'Sem 4', avis: 42 },
  ];

  // Animation des statistiques
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        reviews: Math.floor(targetStats.reviews * progress),
        rating: parseFloat((targetStats.rating * progress).toFixed(1)),
        views: Math.floor(targetStats.views * progress),
        score: Math.floor(targetStats.score * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto-scroll entre les sections avec animation
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % 6);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(autoScroll);
  }, []);

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const slides = [
    // Slide 1: Header & Stats principales
    {
      title: "📊 RAPPORT MENSUEL",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4 text-white">
            <div className="text-xs opacity-90 mb-1">Café Le Gourmet</div>
            <div className="text-lg font-bold">Novembre 2025</div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center gap-1 mb-1">
                <div className="text-lg">📈</div>
                <div className="text-[10px] text-slate-400">Avis Google</div>
              </div>
              <div className="text-xl font-bold text-white">{animatedStats.reviews}</div>
              <div className="text-[9px] text-green-400 mt-1">+14 ce mois</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center gap-1 mb-1">
                <div className="text-lg">⭐</div>
                <div className="text-[10px] text-slate-400">Note moyenne</div>
              </div>
              <div className="text-xl font-bold text-white">{animatedStats.rating}/5</div>
              <div className="text-[9px] text-green-400 mt-1">↗️ +0.3</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center gap-1 mb-1">
                <div className="text-lg">👀</div>
                <div className="text-[10px] text-slate-400">Vues fiche</div>
              </div>
              <div className="text-xl font-bold text-white">{animatedStats.views}</div>
              <div className="text-[9px] text-green-400 mt-1">+42%</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center gap-1 mb-1">
                <div className="text-lg">🎮</div>
                <div className="text-[10px] text-slate-400">Score Take 5</div>
              </div>
              <div className="text-xl font-bold text-white">{animatedStats.score}</div>
              <div className="text-[9px] text-purple-400 mt-1">+12 pts</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 2: Graphique évolution
    {
      title: "📈 ÉVOLUTION",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
            <div className="text-[10px] text-slate-400 mb-2">Progression des avis ce mois</div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={10}
                />
                <YAxis stroke="#64748b" fontSize={10} />
                <Line 
                  type="monotone" 
                  dataKey="avis" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ fill: '#8b5cf6', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
              <div className="text-lg">📞</div>
              <div className="text-sm font-bold text-white">124</div>
              <div className="text-[9px] text-slate-400">appels</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
              <div className="text-lg">🗺️</div>
              <div className="text-sm font-bold text-white">456</div>
              <div className="text-[9px] text-slate-400">itinéraires</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
              <div className="text-lg">🌐</div>
              <div className="text-sm font-bold text-white">892</div>
              <div className="text-[9px] text-slate-400">clics site</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Analyse IA
    {
      title: "🤖 ANALYSE IA",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3">
            <div className="text-white text-xs font-semibold mb-1">✨ Réponses automatiques IA</div>
            <div className="text-white text-xl font-bold">38 avis traités</div>
            <div className="text-purple-200 text-[9px] mt-1">Temps moyen: 1m 47s</div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 space-y-2">
            <div className="flex items-start gap-2">
              <div className="text-lg">💬</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold mb-1">Avis positifs (4-5⭐)</div>
                <div className="text-slate-400 text-[9px]">34 réponses publiées</div>
                <div className="mt-1 bg-green-500/20 border border-green-500/50 rounded p-1">
                  <div className="text-green-400 text-[9px]">✓ 100% de taux</div>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-700"></div>

            <div className="flex items-start gap-2">
              <div className="text-lg">⚠️</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold mb-1">Avis négatifs (1-3⭐)</div>
                <div className="text-slate-400 text-[9px]">4 alertes envoyées</div>
                <div className="mt-1 bg-orange-500/20 border border-orange-500/50 rounded p-1">
                  <div className="text-orange-400 text-[9px]">⏱️ Réponse: 8 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 4: Gamification
    {
      title: "🏆 RÉCOMPENSES",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-3 text-white">
            <div className="text-xs opacity-90 mb-1">Votre niveau</div>
            <div className="text-xl font-bold mb-2">🏅 Expert Local</div>
            <div className="bg-white/20 rounded-full h-1.5 overflow-hidden">
              <div className="bg-white h-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>
            <div className="text-[9px] mt-1 opacity-75">85/100 pts (15 pts restants)</div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
            <div className="text-xs text-slate-400 mb-2">Badges débloqués</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-[9px] text-slate-300">Série 10j</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-[9px] text-slate-300">Rapide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">👑</div>
                <div className="text-[9px] text-slate-300">Top 10%</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="text-lg">🎯</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold">Objectif suivant</div>
                <div className="text-blue-400 text-[9px]">50 avis (+8)</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Concurrence
    {
      title: "🔍 VEILLE CONCURRENCE",
      content: (
        <div className="space-y-3">
          <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
            <div className="text-xs text-slate-400 mb-2">Position locale</div>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-purple-400">#3</div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">sur 18 cafés</div>
                <div className="text-slate-400 text-[9px] mt-1">Top 17% secteur</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-sm">🎯</div>
                <div className="text-yellow-400 text-[9px] font-semibold">Opportunité</div>
              </div>
              <div className="text-white text-xs">Le Café Central (#2) n'a pas répondu à 12 avis</div>
              <div className="text-slate-400 text-[9px] mt-1">Maintenez votre réactivité</div>
            </div>

            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-sm">⚠️</div>
                <div className="text-red-400 text-[9px] font-semibold">Alerte</div>
              </div>
              <div className="text-white text-xs">Boulangerie Moderne: +8 avis cette semaine</div>
              <div className="text-slate-400 text-[9px] mt-1">Lancez une campagne SMS</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: Recommandations
    {
      title: "💡 ACTIONS",
      content: (
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 text-white">
            <div className="text-xs opacity-90 mb-1">Prioritaires</div>
            <div className="text-lg font-bold">3 opportunités</div>
          </div>

          <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <div className="flex items-start gap-2">
              <div className="bg-purple-500 rounded w-6 h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold">Campagne SMS</div>
                <div className="text-slate-400 text-[9px]">892 contacts • +5 avis/sem</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <div className="flex items-start gap-2">
              <div className="bg-blue-500 rounded w-6 h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold">Horaires à jour</div>
                <div className="text-slate-400 text-[9px]">Impact: -15% visibilité</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <div className="flex items-start gap-2">
              <div className="bg-pink-500 rounded w-6 h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold">5 photos produits</div>
                <div className="text-slate-400 text-[9px]">+35% engagement</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" id="whatsapp-solution">
            Tout se passe sur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              WhatsApp
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Gère ta visibilité en quelques secondes, sans quitter WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4 md:space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Statistiques détaillées</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Vues, avis, note moyenne et évolution mensuelle en un coup d'œil
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Analyse IA automatique</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Réponses automatiques et traitement des avis en temps réel
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Veille concurrentielle</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Position locale et alertes sur vos concurrents en temps réel
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">100% sur WhatsApp</h3>
                <p className="text-sm md:text-base text-slate-300">
                  Pas d'app à installer, tout arrive directement sur votre téléphone
                </p>
              </div>
            </div>
          </div>

          {/* Phone Mockup avec animation */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            
            <div className="relative w-[280px] md:w-[300px] lg:w-[320px] h-[560px] md:h-[600px] lg:h-[640px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl z-10"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-[#0A0E1A] overflow-hidden">
                {/* WhatsApp Header */}
                <div className="bg-[#128C7E] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 overflow-hidden">
                    <img src={take5Logo} alt="Take 5" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Take 5</div>
                    <div className="text-green-100 text-xs">en ligne</div>
                  </div>
                </div>

                {/* Message bubble with slides */}
                <div className="p-4 min-h-[560px] bg-[#0A0E1A] overflow-hidden">
                  <div className="bg-[#1A1F35] rounded-2xl rounded-tl-sm p-3 shadow-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-sm">{slides[currentSlide].title}</h3>
                      <div className="text-[9px] text-slate-500">10:34</div>
                    </div>
                    
                    <div className={`transition-all duration-300 ${
                      isTransitioning 
                        ? 'opacity-0 translate-y-4' 
                        : 'opacity-100 translate-y-0'
                    }`}>
                      {slides[currentSlide].content}
                    </div>
                  </div>

                  {/* Indicateur de slide */}
                  <div className="flex justify-center gap-1.5 mt-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentSlide 
                            ? 'w-6 bg-purple-500' 
                            : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
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
