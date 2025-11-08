import { Badge } from "@/components/ui/badge";
import { QrCode, AlertTriangle, Bot, TrendingUp, Trophy, Mail } from "lucide-react";

export const MainFeaturesSection = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Code Dynamique",
      description:
        "Créez votre QR code personnalisé. Vos clients laissent un avis en 10 secondes.",
      color: "bg-purple-600",
      borderColor: "border-purple-500",
      bgGradient: "from-purple-900/30 to-purple-800/30",
      isComingSoon: false,
    },
    {
      icon: AlertTriangle,
      title: "🚨 Alerte Avis Négatifs",
      description:
        "Notification WhatsApp instantanée. L'IA propose une réponse, vous validez. Réagissez avant que l'image ne soit impactée !",
      color: "bg-red-600",
      borderColor: "border-red-500",
      bgGradient: "from-red-900/30 to-red-800/30",
      isComingSoon: false,
      badge: "HOT",
      animate: true,
    },
    {
      icon: Bot,
      title: "Réponses IA 24/7",
      description:
        "Avis positifs : réponse automatique immédiate. Avis négatifs : proposition IA, vous décidez.",
      color: "bg-purple-600",
      borderColor: "border-purple-500",
      bgGradient: "from-purple-900/30 to-purple-800/30",
      isComingSoon: false,
    },
    {
      icon: TrendingUp,
      title: "📊 Veille Concurrentielle",
      description:
        "Surveillez vos concurrents 24/7. Nouveau concurrent ? Changement de note ? Vous êtes alerté.",
      color: "bg-blue-600",
      borderColor: "border-blue-500",
      bgGradient: "from-blue-900/30 to-blue-800/30",
      isComingSoon: false,
    },
    {
      icon: Trophy,
      title: "🎮 Jeux Concours",
      description:
        "Multipliez vos avis par 5 avec des tirages au sort automatiques. Lancement T1 2026",
      color: "bg-yellow-600",
      borderColor: "border-yellow-500",
      bgGradient: "from-yellow-900/30 to-yellow-800/30",
      isComingSoon: true,
      comingSoonDate: "T1 2026",
      comingSoonBadge: "BIENTÔT",
    },
    {
      icon: Mail,
      title: "📧 Campagnes SMS/Email",
      description:
        "Relancez vos clients automatiquement avec des campagnes ciblées. Lancement T2 2026",
      color: "bg-green-600",
      borderColor: "border-green-500",
      bgGradient: "from-green-900/30 to-green-800/30",
      isComingSoon: true,
      comingSoonDate: "T2 2026",
      comingSoonBadge: "BIENTÔT",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Une plateforme <span className="text-purple-400">tout-en-un</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Tout ce dont vous avez besoin pour devenir #1 sur Google
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur border ${
                  feature.isComingSoon ? "border-slate-600 opacity-90" : feature.borderColor
                } rounded-xl p-6 hover:scale-105 transition-all ${
                  feature.bgGradient && !feature.isComingSoon
                    ? `bg-gradient-to-br ${feature.bgGradient}`
                    : ""
                }`}
              >
                {/* Badge Coming Soon */}
                {feature.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 border border-yellow-500 rounded-full px-3 py-1">
                    <span className="text-yellow-400 text-xs font-bold">
                      🔜 {feature.comingSoonDate}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 ${
                    feature.animate ? "animate-pulse" : ""
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                  {feature.title}
                  {feature.badge && (
                    <Badge className="bg-red-500 text-white text-xs px-2 py-0.5">
                      {feature.badge}
                    </Badge>
                  )}
                  {feature.comingSoonBadge && (
                    <Badge
                      className={`${
                        feature.color === "bg-yellow-600"
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      } text-white text-xs px-2 py-0.5`}
                    >
                      {feature.comingSoonBadge}
                    </Badge>
                  )}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
