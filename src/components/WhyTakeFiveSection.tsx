import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Bot, Star, DollarSign, TrendingUp, Bell, Clock } from "lucide-react";

const WhyTakeFiveSection = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-600",
      title: "Réponses IA aux avis",
      description: "L'IA répond automatiquement à tous vos avis (positifs et négatifs) de manière personnalisée et professionnelle.",
      highlight: false
    },
    {
      icon: <Bell className="w-8 h-8" />,
      color: "from-red-600 to-red-700",
      bgGradient: "from-red-900/20 to-red-800/20",
      borderColor: "border-red-600",
      title: "Notification avis négatif",
      description: "Notification WhatsApp instantanée dès qu'un avis ≤3★ est posté. Réagissez avant que l'image ne soit impactée !",
      highlight: false
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      bgGradient: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-600",
      title: "Reporting intelligent",
      description: "Recevez chaque mois un rapport détaillé sur WhatsApp avec toutes vos statistiques et recommandations personnalisées.",
      highlight: false
    },
    {
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-600 to-yellow-700",
      bgGradient: "from-yellow-900/20 to-yellow-800/20",
      borderColor: "border-yellow-600",
      title: "Boostez votre note",
      description: "La plaque NFC facilite la collecte d'avis positifs de vos clients satisfaits, améliorant rapidement votre réputation.",
      highlight: false
    },
    {
      icon: <Clock className="w-8 h-8" />,
      color: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-600",
      title: "Économisez du temps",
      description: "Plus besoin de gérer manuellement votre fiche Google. Concentrez-vous sur votre cœur de métier pendant que Take 5 s'occupe du reste.",
      highlight: false
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-cyan-600 to-cyan-700",
      bgGradient: "from-cyan-900/20 to-cyan-800/20",
      borderColor: "border-cyan-600",
      title: "Visibilité maximale",
      description: "Optimisez votre référencement local et apparaissez en tête des résultats Google Maps dans votre secteur.",
      highlight: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Take 5
            </span>
            {" "}?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Une solution complète qui transforme votre présence locale en machine à clients
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur border-2 ${
                feature.borderColor
              } rounded-xl p-6 hover:scale-105 transition-all duration-300`}
            >
              {/* Icône */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistiques de résultats */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Des résultats qui parlent d'eux-mêmes
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-900/50">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">+64%</p>
              <p className="text-slate-400">Augmentation moyenne de visibilité</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-900/50">
                <Star className="w-10 h-10 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">3x</p>
              <p className="text-slate-400">Plus d'avis clients collectés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-green-900/50">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-slate-400">Automatisé par IA</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-900/50">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">5min</p>
              <p className="text-slate-400">Temps de setup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTakeFiveSection;
