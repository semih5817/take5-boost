import { Star, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const BenefitsResults = () => {
  const benefits = [
    {
      icon: Star,
      title: "Plus d'avis + crédibilité renforcée",
      description: "Réponses IA 24/7 aux avis positifs. Alertes WhatsApp instantanées pour les avis critiques. Zéro avis manqué, zéro opportunité gâchée.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: MessageSquare,
      title: "Automatisation intelligente sur WhatsApp",
      description: "Tout se pilote depuis votre téléphone. Réponses IA, alertes, missions, rapports. Simple et efficace, aucune interface complexe.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Progression mesurée et classement local",
      description: "Score de santé 0-100, suivi concurrentiel, recommandations concrètes. Objectif : top 3 de votre ville en 3 mois.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              3 leviers
            </span>{" "}
            pour dominer votre marché local
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Lien discret vers automatisations */}
        <div className="text-center mt-10">
          <Link
            to="/gamification"
            className="text-slate-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center gap-2"
          >
            Découvrir toutes les automatisations →
          </Link>
        </div>
      </div>
    </section>
  );
};
