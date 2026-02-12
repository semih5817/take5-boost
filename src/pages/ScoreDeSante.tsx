import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Target, CheckSquare, Star, Camera, Calendar, MapPin, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScoreDeSante = () => {
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimating(true);
    let currentScore = 0;
    const targetScore = 87;
    const interval = setInterval(() => {
      if (currentScore < targetScore) {
        currentScore += 2;
        setScore(Math.min(currentScore, targetScore));
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (s: number) => {
    if (s >= 80) return 'from-green-500 to-emerald-600';
    if (s >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  const getScoreLabel = (s: number) => {
    if (s >= 90) return 'Excellent';
    if (s >= 80) return 'Très bon';
    if (s >= 70) return 'Bon';
    if (s >= 60) return 'Moyen';
    return 'À améliorer';
  };

  const recommendations = [
    { icon: Camera, title: 'Ajouter 3 nouvelles photos', impact: '+5 points', color: 'from-blue-500 to-blue-600', completed: false },
    { icon: Star, title: 'Répondre à 2 avis récents', impact: '+3 points', color: 'from-purple-500 to-pink-500', completed: false },
    { icon: Calendar, title: 'Publier 1 post Google cette semaine', impact: '+4 points', color: 'from-green-500 to-emerald-600', completed: false },
    { icon: MapPin, title: "Vérifier vos horaires d'ouverture", impact: '+2 points', color: 'from-orange-500 to-red-500', completed: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              <span className="text-purple-400 text-sm font-medium">Suivi & Optimisation</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Score de santé TakeFive :
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Optimisez votre présence Google</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl leading-relaxed">
              TakeFive analyse votre fiche Google et vous attribue un score de 0 à 100.
              Recevez des recommandations concrètes pour maintenir une présence solide et
              <span className="text-purple-400 font-semibold"> rester en tête dans votre zone locale</span>.
            </p>
          </div>
        </section>

        {/* Score Dashboard */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Score Visualization */}
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl p-6 md:p-8 border border-purple-500/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Target className="w-7 h-7 text-purple-400" />
                  Votre Score de Santé
                </h2>

                {/* Circular Progress */}
                <div className="relative w-56 md:w-64 h-56 md:h-64 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r="112" stroke="rgba(107, 114, 128, 0.2)" strokeWidth="16" fill="none" />
                    <circle
                      cx="128" cy="128" r="112"
                      stroke="url(#scoreGradient)"
                      strokeWidth="16" fill="none" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 112}`}
                      strokeDashoffset={`${2 * Math.PI * 112 * (1 - score / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {score}
                    </div>
                    <div className="text-xl md:text-2xl text-slate-400 font-semibold">/100</div>
                    <div className="mt-2 px-4 py-1 bg-green-500/20 rounded-full">
                      <span className="text-green-400 text-sm font-semibold">{getScoreLabel(score)}</span>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-r ${getScoreColor(score)} opacity-20 blur-3xl rounded-full ${isAnimating ? 'animate-pulse' : ''}`} />
                </div>

                {/* Score Breakdown */}
                <div className="space-y-4">
                  {[
                    { label: 'Photos & Visuels', pct: 90, color: 'from-blue-500 to-blue-600' },
                    { label: 'Réponses aux avis', pct: 85, color: 'from-purple-500 to-pink-500' },
                    { label: 'Posts & Actualités', pct: 75, color: 'from-green-500 to-emerald-600' },
                    { label: 'Infos & Catégories', pct: 95, color: 'from-orange-500 to-red-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-28 md:w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.pct}%` }} />
                        </div>
                        <span className="text-white font-semibold w-10 text-right text-sm">{item.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Target Score */}
                <div className="mt-8 bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-purple-400 text-sm font-semibold">Objectif</div>
                        <div className="text-white font-bold">Score 95+</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-sm">Encore</div>
                      <div className="text-2xl font-bold text-purple-400">+8 pts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckSquare className="w-7 h-7 text-purple-400" />
                  Missions recommandées
                </h2>

                <div className="space-y-4">
                  {recommendations.map((rec, index) => {
                    const Icon = rec.icon;
                    return (
                      <div
                        key={index}
                        className={`bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-5 md:p-6 border ${
                          rec.completed ? 'border-green-500/30 opacity-60' : 'border-purple-500/20'
                        } shadow-lg hover:shadow-xl transition-all duration-300 ${
                          !rec.completed ? 'hover:scale-[1.02]' : ''
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${rec.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className={`font-semibold text-base md:text-lg ${rec.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                                {rec.title}
                              </h3>
                              {rec.completed && (
                                <div className="bg-green-500/20 px-3 py-1 rounded-full">
                                  <span className="text-green-400 text-xs font-semibold">✓ Fait</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`text-sm ${rec.completed ? 'text-slate-500' : 'text-slate-400'}`}>
                                Impact sur votre score
                              </span>
                              <span className={`font-bold ${rec.completed ? 'text-slate-500' : 'text-purple-400'}`}>
                                {rec.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mission Info */}
                <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-blue-400 font-semibold text-sm mb-1">Missions hebdomadaires</div>
                      <div className="text-slate-400 text-sm">
                        Recevez chaque semaine vos nouvelles missions sur WhatsApp.
                        Suivez votre progression en temps réel.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Score Is Calculated */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Comment est calculé votre score ?
            </h2>
            <p className="text-slate-400 text-center text-lg mb-16">
              TakeFive analyse 40+ critères pour évaluer la santé de votre fiche Google
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Camera, title: 'Contenu visuel', desc: 'Nombre, qualité et fraîcheur de vos photos et vidéos', color: 'from-blue-500 to-blue-600' },
                { icon: Star, title: 'Gestion des avis', desc: 'Taux de réponse, délai, qualité et note moyenne', color: 'from-purple-500 to-pink-500' },
                { icon: Calendar, title: 'Activité régulière', desc: 'Fréquence des posts, actualités et mises à jour', color: 'from-green-500 to-emerald-600' },
                { icon: MapPin, title: 'Infos complètes', desc: 'Horaires, téléphone, adresse, catégories et attributs', color: 'from-orange-500 to-red-500' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-6 border border-purple-500/10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tracking & Reports */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 md:p-10 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Suivi & rapports WhatsApp</h2>
              </div>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Recevez chaque semaine votre rapport de progression sur WhatsApp : évolution de votre score,
                missions accomplies, prochains défis. Restez motivé et progressez régulièrement.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-purple-400 font-bold text-3xl mb-2">+12 pts</div>
                  <p className="text-slate-400">Progression moyenne mensuelle</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-green-400 font-bold text-3xl mb-2">Top 3</div>
                  <p className="text-slate-400">Classement dans votre zone locale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimisez votre présence Google dès aujourd'hui
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Suivez votre score en temps réel et recevez des recommandations personnalisées
            </p>
            <button
              onClick={() => navigate('/tarifs')}
              className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-1"
            >
              S'abonner
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ScoreDeSante;
