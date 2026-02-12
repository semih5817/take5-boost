import { TrendingUp, Globe, Gamepad2, BarChart3, Zap, AlertTriangle } from "lucide-react";
import { UnifiedWhatsAppAnimation } from "@/components/animations";
import { useNavigate } from "react-router-dom";

export const WhatsAppReportingSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: TrendingUp,
      title: "Rapport mensuel",
      description: "Statistiques détaillées : vues, avis, note moyenne et évolution mensuelle en un coup d'œil",
      gradient: "from-blue-500 to-cyan-500",
      link: null as string | null,
    },
    {
      icon: Gamepad2,
      title: "Gamification + Score de santé",
      description: "Badges, niveaux, récompenses et score de 0 à 100 pour suivre la performance de votre fiche",
      gradient: "from-yellow-500 to-orange-500",
      link: "/gamification",
    },
    {
      icon: BarChart3,
      title: "Analyse concurrentielle & Radar multi-plateformes",
      description: "Position locale, alertes concurrents et surveillance de vos avis sur Google, Facebook, Trustpilot et Yelp",
      gradient: "from-pink-500 to-rose-500",
      link: "/analyse-concurrentielle",
    },
    {
      icon: AlertTriangle,
      title: "Réponses IA 24/7 + Alertes avis négatifs",
      description: "Réponses automatiques à tous vos avis et notification WhatsApp instantanée en cas d'avis négatif",
      gradient: "from-purple-500 to-pink-500",
      link: "/reponses-ia-alertes-avis",
    },
    {
      icon: Zap,
      title: "Optimisation SEO & GEO locale IA",
      description: "Améliorez votre visibilité locale avec l'intelligence artificielle",
      gradient: "from-emerald-500 to-teal-500",
      link: "/seo-local-ia",
    },
    {
      icon: Globe,
      title: "100% sur WhatsApp",
      description: "Pas d'app à installer, tout arrive directement sur votre téléphone",
      gradient: "from-green-500 to-emerald-500",
      link: null,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const content = (
                <div className={`flex items-start gap-3 md:gap-4 ${feature.link ? "cursor-pointer group" : ""}`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${feature.link ? "group-hover:scale-110 transition-transform" : ""}`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg md:text-xl font-bold text-white mb-1 md:mb-2 ${feature.link ? "group-hover:text-purple-400 transition-colors" : ""}`}>
                      {feature.title}
                      {feature.link && <span className="ml-2 text-sm text-slate-500 group-hover:text-purple-400">→</span>}
                    </h3>
                    <p className="text-sm md:text-base text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );

              return feature.link ? (
                <div key={index} onClick={() => navigate(feature.link!)} role="link" tabIndex={0}>
                  {content}
                </div>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <UnifiedWhatsAppAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
