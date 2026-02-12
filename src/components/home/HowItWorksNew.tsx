import { Link2, MessageSquare, TrendingUp } from "lucide-react";

export const HowItWorksNew = () => {
  const steps = [
    {
      number: 1,
      icon: Link2,
      title: "Connectez votre fiche Google",
      description: "2 minutes chrono. Aucune installation requise. Connexion sécurisée OAuth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "TakeFive répond et vous alerte",
      description: "L'IA répond aux avis 24/7. Vous êtes notifié sur WhatsApp pour les avis critiques.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Vous progressez et dominez localement",
      description: "Score de santé, missions simples, rapport mensuel. Objectif : top 3 de votre zone.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Devenez visible en 3 étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]"
              >
                {/* Step Number */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
