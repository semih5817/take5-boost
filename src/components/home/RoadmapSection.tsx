import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";

export const RoadmapSection = () => {
  const features = [
    {
      icon: "🎮",
      title: "Jeux Concours",
      description: [
        "Multipliez vos avis par 5",
        "Tirages au sort automatiques",
        "Gestion des dotations",
        "Templates prêts à l'emploi",
      ],
      color: "yellow",
      badge: "🔜 T1 2026",
      bgGradient: "from-yellow-900/20 to-yellow-800/20",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: "📧",
      title: "Campagnes SMS / Email",
      description: [
        "Relances automatiques",
        "Segmentation intelligente",
        "Templates personnalisables",
        "Suivi des conversions",
      ],
      color: "green",
      badge: "🔜 T2 2026",
      bgGradient: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: "📊",
      title: "Dashboard Analytics",
      description: [
        "Démo interactive disponible",
        "Toutes vos stats en temps réel",
        "Synchronisation complète (bientôt)",
        "Exports PDF personnalisés",
      ],
      color: "purple",
      badge: "🎨 Aperçu",
      bgGradient: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500",
    },
  ];

  const handleNavigation = (title: string) => {
    if (title === "Dashboard Analytics") {
      window.location.href = "/dashboard";
    } else {
      const subscriptionForm = document.getElementById("subscription-form");
      subscriptionForm?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Notre <span className="text-purple-400">Roadmap</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Les fonctionnalités qui arrivent bientôt (exclusivité Pro)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} border-2 ${feature.borderColor} rounded-xl p-8 hover:scale-105 transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-${feature.color}-600 rounded-xl flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <Badge
                  className={`bg-${feature.color}-500/20 border border-${feature.color}-500 text-${feature.color}-400 text-xs font-bold px-3 py-1`}
                >
                  {feature.badge}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>

              <ul className="space-y-2 mb-6 text-slate-300 text-sm">
                {feature.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`text-${feature.color}-400`}>
                      {feature.badge.includes("Aperçu") && idx < 2 ? "✓" : "•"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleNavigation(feature.title)}
                className={`w-full ${
                  feature.color === "purple"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : `bg-${feature.color}-600 hover:bg-${feature.color}-700`
                } text-white font-semibold py-3 transition-all`}
              >
                {feature.badge.includes("Aperçu")
                  ? "Voir la démo ci-dessous ↓"
                  : "Être notifié du lancement"}
              </Button>
            </div>
          ))}
        </div>

        {/* Dashboard Preview intégré */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              📊 Aperçu du <span className="text-purple-400">Dashboard Analytics</span>
            </h3>
            <p className="text-slate-300">
              Découvrez l'interface complète du dashboard (démo interactive)
            </p>
          </div>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};
