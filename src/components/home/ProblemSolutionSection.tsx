import { X, Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ce qu'une fiche Google optimisée vous apporte
            </span>
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Before */}
          <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <X className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Avant</h3>
            </div>
            <ul className="space-y-4">
              {[
                "2-3 avis par mois",
                "Note moyenne 3,8/5",
                "200 vues mensuelles",
                "Pas de réponses aux avis",
                "Visibilité faible",
                "Peu de nouveaux clients"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <p className="font-bold text-lg text-white">Avec Take 5</p>
            </div>
          </div>

          {/* After */}
          <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Check className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Après</h3>
            </div>
            <ul className="space-y-4">
              {[
                { text: "15-20 avis par mois", badge: "+600%" },
                { text: "Note moyenne 4,7/5", badge: "+24%" },
                { text: "2 000+ vues mensuelles", badge: "+900%" },
                { text: "100% des avis répondus", badge: "Auto" },
                { text: "Top 3 résultats locaux", badge: "🔥" },
                { text: "Flux constant de clients", badge: "✨" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <span className="text-white">{item.text}</span>
                    <Badge className="bg-green-500 text-white text-xs shrink-0 hover:bg-green-600">{item.badge}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "1",
              title: "Plus de clients",
              description: "Attirez 3x plus de nouveaux clients grâce à une meilleure visibilité"
            },
            {
              number: "2",
              title: "Meilleure réputation",
              description: "Note moyenne qui passe de 3,8 à 4,7+ en quelques mois"
            },
            {
              number: "3",
              title: "Gain de temps",
              description: "100% automatisé, vous ne gérez plus rien manuellement"
            },
            {
              number: "4",
              title: "ROI prouvé",
              description: "Investissement de 29,90€/mois pour des milliers d'€ de CA supplémentaire"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {benefit.number}
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">{benefit.title}</h4>
              <p className="text-sm text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
