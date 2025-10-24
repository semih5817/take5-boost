import { TrendingUp, Users, Zap, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+64%",
      label: "Augmentation moyenne de visibilité",
      color: "from-primary to-accent"
    },
    {
      icon: Users,
      value: "3x",
      label: "Plus d'avis clients collectés",
      color: "from-secondary to-indigo"
    },
    {
      icon: Zap,
      value: "100%",
      label: "Automatisé par IA",
      color: "from-accent to-primary"
    },
    {
      icon: Clock,
      value: "5min",
      label: "Temps de setup",
      color: "from-indigo to-secondary"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
