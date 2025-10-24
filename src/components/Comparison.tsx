import { X, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Comparison = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Ce qu'une fiche Google optimisée vous apporte</span>
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {/* Before */}
          <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <X className="w-5 md:w-6 h-5 md:h-6 text-destructive" />
              <h3 className="text-xl md:text-2xl font-bold">Avant</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {[
                "2-3 avis par mois",
                "Note moyenne 3,8/5",
                "200 vues mensuelles",
                "Pas de réponses aux avis",
                "Visibilité faible",
                "Peu de nouveaux clients"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-primary animate-pulse">
                <ArrowRight className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <p className="font-bold text-base md:text-lg gradient-text">Avec Take 5</p>
            </div>
          </div>

          {/* After */}
          <Card className="p-6 md:p-8 bg-green-50 border-green-200">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Check className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
              <h3 className="text-xl md:text-2xl font-bold">Après</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {[
                { text: "15-20 avis par mois", badge: "+600%" },
                { text: "Note moyenne 4,7/5", badge: "+24%" },
                { text: "2 000+ vues mensuelles", badge: "+900%" },
                { text: "100% des avis répondus", badge: "Auto" },
                { text: "Top 3 résultats locaux", badge: "🔥" },
                { text: "Flux constant de clients", badge: "✨" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <span className="font-medium text-sm md:text-base">{item.text}</span>
                    <Badge className="bg-green-600 text-white text-xs shrink-0">{item.badge}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
              description: "Investissement de 9,90€/mois pour des milliers d'€ de CA supplémentaire"
            }
          ].map((benefit, index) => (
            <Card key={index} className="p-4 md:p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-3 md:mb-4 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                {benefit.number}
              </div>
              <h4 className="font-bold text-base md:text-lg mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
