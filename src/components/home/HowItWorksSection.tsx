import { Settings, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HowItWorksSection = () => {
  const navigate = useNavigate();
  
  const goToTarifs = () => {
    navigate('/tarifs');
  };

  const steps = [
    {
      icon: Settings,
      number: "1",
      title: "Créez votre compte",
      description:
        "Inscription en 2 minutes. Connectez votre fiche Google My Business.",
      color: "from-purple-900/30 to-purple-800/30",
      borderColor: "border-purple-500",
      iconBg: "bg-purple-600/20",
      iconColor: "text-purple-400",
      numberBg: "bg-purple-600",
    },
    {
      icon: Zap,
      number: "2",
      title: "Partagez votre QR code",
      description:
        "Affichez-le en boutique, sur votre site, vos réseaux sociaux.",
      color: "from-pink-900/30 to-pink-800/30",
      borderColor: "border-pink-500",
      iconBg: "bg-pink-600/20",
      iconColor: "text-pink-400",
      numberBg: "bg-pink-600",
    },
    {
      icon: Star,
      number: "3",
      title: "Récoltez des avis 5⭐",
      description:
        "L'IA répond automatiquement. Vous montez dans le classement Google.",
      color: "from-green-900/30 to-green-800/30",
      borderColor: "border-green-500",
      iconBg: "bg-green-600/20",
      iconColor: "text-green-400",
      numberBg: "bg-green-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0A0E1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          3 étapes pour <span className="text-purple-400">dominer Google</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16">
          Configuration en 5 minutes • Résultats en 48h
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div
                  className={`bg-gradient-to-br ${step.color} border ${step.borderColor} rounded-xl p-8`}
                >
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 ${step.numberBg} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`w-16 h-16 ${step.iconBg} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                  >
                    <Icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={goToTarifs}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 text-lg transition-all transform hover:scale-105"
          >
            Démarrer maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};
