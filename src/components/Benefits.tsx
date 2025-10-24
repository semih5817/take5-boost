import { Card } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      emoji: "⚡",
      title: "100% Automatisé",
      description: "Notre IA surveille votre fiche 24/7, répond aux avis et optimise votre visibilité sans aucune intervention de votre part."
    },
    {
      emoji: "📊",
      title: "Reporting intelligent",
      description: "Recevez chaque mois un rapport détaillé sur WhatsApp avec toutes vos statistiques et recommandations personnalisées."
    },
    {
      emoji: "🤖",
      title: "Réponses IA aux avis",
      description: "L'IA répond automatiquement à tous vos avis (positifs et négatifs) de manière personnalisée et professionnelle."
    },
    {
      emoji: "⭐",
      title: "Boostez votre note",
      description: "La plaque NFC facilite la collecte d'avis positifs de vos clients satisfaits, améliorant rapidement votre réputation."
    },
    {
      emoji: "💰",
      title: "Économisez du temps",
      description: "Plus besoin de gérer manuellement votre fiche Google. Concentrez-vous sur votre cœur de métier pendant que Take 5 s'occupe du reste."
    },
    {
      emoji: "📈",
      title: "Visibilité maximale",
      description: "Optimisez votre référencement local et apparaissez en tête des résultats Google Maps dans votre secteur."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Pourquoi choisir Take 5 ?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Une solution complète qui transforme votre présence locale en machine à clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{benefit.emoji}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
