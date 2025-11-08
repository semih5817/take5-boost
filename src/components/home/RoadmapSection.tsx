import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Rocket, Target, Zap } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: Rocket,
      status: "Disponible",
      title: "Phase 1 - Fondations",
      description: "Collecte d'avis automatique, réponses IA, alertes WhatsApp, dashboard analytics",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Target,
      status: "À venir Q1 2026",
      title: "Phase 2 - Gamification",
      description: "Système de missions, badges, récompenses et programme de fidélité intégré",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Zap,
      status: "À venir Q2 2026",
      title: "Phase 3 - Marketing SMS",
      description: "Campagnes SMS automatiques, jeux-concours, promotions saisonnières",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Calendar,
      status: "À venir Q3 2026",
      title: "Phase 4 - Multi-sites",
      description: "Gestion centralisée de plusieurs établissements, rapports consolidés",
      color: "text-muted-foreground",
      bgColor: "bg-muted/30"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Notre roadmap</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les fonctionnalités à venir qui vont révolutionner votre e-réputation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 relative overflow-hidden group"
            >
              <Badge className={`mb-4 ${item.bgColor} ${item.color}`}>
                {item.status}
              </Badge>
              
              <div className={`w-12 md:w-14 h-12 md:h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 md:w-7 h-6 md:h-7 ${item.color}`} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
