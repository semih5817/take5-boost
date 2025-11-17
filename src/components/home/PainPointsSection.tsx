import { Clock, Sparkles, Lock, AlertTriangle, Calendar, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Tu perds 3 à 5 heures par semaine",
      description: "À répondre aux avis sur Google, Facebook, Trustpilot... Et tu n'as même pas le temps de tout traiter."
    },
    {
      icon: Sparkles,
      title: "Tu ne sais jamais quoi poster",
      description: "Sur Instagram, Facebook, TikTok... Et quand tu postes, ça te prend 20 minutes à créer."
    },
    {
      icon: Lock,
      title: "Tu dois te connecter partout",
      description: "5 plateformes différentes, 5 mots de passe, 5 interfaces compliquées. C'est épuisant."
    },
    {
      icon: AlertTriangle,
      title: "Tu rates des avis négatifs",
      description: "Et quand tu les vois, c'est trop tard. Le mal est fait, ta réputation en prend un coup."
    },
    {
      icon: Calendar,
      title: "Tu aimerais publier plus souvent",
      description: "Mais entre le service, la compta, la gestion... tu n'as tout simplement pas le temps."
    },
    {
      icon: TrendingDown,
      title: "Ta visibilité en ligne est négligée",
      description: "Et ça impacte directement ton chiffre d'affaires. Tes concurrents te dépassent sur Google."
    }
  ];

  const scrollToSolution = () => {
    document.getElementById('whatsapp-solution')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A0E1A] via-[#1A1F35] to-[#0A0E1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tu te reconnais dans ces situations ?
          </h2>
          <p className="text-xl text-slate-400">
            La visibilité en ligne, c'est <span className="text-purple-400 font-semibold">chronophage</span>, <span className="text-pink-400 font-semibold">compliqué</span>, et <span className="text-purple-300 font-semibold">stressant</span>
          </p>
        </div>

        {/* Liste des douleurs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{pain.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{pain.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 p-8 md:p-12 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Et si tout ça se gérait depuis WhatsApp<br/>en quelques secondes ?
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Pas besoin de te connecter à 10 interfaces. Pas besoin d'apprendre un nouvel outil.<br/>
            Juste... <span className="text-purple-300 font-semibold">envoyer un message</span>.
          </p>
          <Button 
            onClick={scrollToSolution}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/50"
          >
            Découvrir la solution →
          </Button>
        </div>
      </div>
    </section>
  );
};
