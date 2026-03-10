import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TargetAudience = () => {
  const navigate = useNavigate();
  
  const goToTarifs = () => {
    navigate('/tarifs');
  };

  const sectors = [
    {
      emoji: "🍽️",
      title: "Restaurants & Cafés",
      stats: ["+187% Réservations", "4,8/5 note moyenne"],
      description: "Collectez des avis pendant que vos clients savourent leur repas. L'IA répond automatiquement, même aux critiques négatives.",
      cta: "Je suis restaurateur"
    },
    {
      emoji: "💈",
      title: "Salons de coiffure & Beauté",
      stats: ["+240% Prises de RDV", "92% Retour clients"],
      description: "Fidélisez vos clients avec un suivi automatique. Demandez un avis avant même qu'ils quittent le salon.",
      cta: "Je suis coiffeur"
    },
    {
      emoji: "🔧",
      title: "Artisans & Services",
      stats: ["+156% Nouveaux chantiers", "4,9/5 note moyenne"],
      description: "Bâtissez votre réputation locale automatiquement. Chaque intervention devient une opportunité d'avis positif.",
      cta: "Je suis artisan"
    },
    {
      emoji: "🏋️",
      title: "Salles de sport & Fitness",
      stats: ["+198% Inscriptions", "85% Rétention membres"],
      description: "Transformez vos membres satisfaits en ambassadeurs. L'IA encourage les recommandations automatiquement.",
      cta: "Je suis coach"
    },
    {
      emoji: "🏪",
      title: "Commerces de proximité",
      stats: ["+145% Visites", "67% Clients réguliers"],
      description: "Dominez les recherches locales de votre quartier. Attirez les passants grâce à votre note exceptionnelle.",
      cta: "Je suis commerçant"
    },
    {
      emoji: "🏨",
      title: "Hôtels & Hébergements",
      stats: ["+210% Réservations directes", "4,7/5 note moyenne"],
      description: "Chaque client devient une opportunité d'avis. L'IA répond 24/7 en français et anglais pour rassurer vos prospects.",
      cta: "Je suis hôtelier"
    },
    {
      emoji: "🚗",
      title: "Garages & Auto",
      stats: ["+178% Nouveaux clients", "89% Fidélisation"],
      description: "Prouvez votre expertise avec des avis authentiques. L'IA explique vos interventions aux clients indécis.",
      cta: "Je suis garagiste"
    },
    {
      emoji: "🏢",
      title: "Franchises & Enseignes",
      stats: ["-70% Temps de gestion", "Multi-sites centralisés"],
      description: "Gérez toutes vos fiches Google depuis un seul endroit. Reporting consolidé et contrôle qualité automatique.",
      cta: "Tarif entreprise",
      featured: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Quels commerces locaux</span>
            <br />
            utilisent TakeFive ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des résultats concrets pour tous les types d'activités locales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {sectors.map((sector, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 relative ${
                sector.featured ? 'border-4 border-primary bg-gradient-to-br from-primary/5 to-secondary/5' : 'border-2'
              }`}
            >
              {sector.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 md:px-4 py-1 text-xs md:text-sm">
                  🔥 POPULAIRE
                </Badge>
              )}
              
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="text-4xl md:text-5xl">{sector.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{sector.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {sector.stats.map((stat, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                {sector.description}
              </p>
              
              <Button 
                onClick={goToTarifs}
                variant={sector.featured ? "default" : "outline"}
                className={`w-full text-sm md:text-base ${sector.featured ? "bg-gradient-to-r from-primary to-secondary hover:shadow-primary" : ""}`}
              >
                {sector.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-indigo/10 rounded-2xl md:rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                <p className="text-2xl md:text-3xl font-bold gradient-text">847</p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Commerces actifs</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 md:w-6 h-5 md:h-6 text-secondary" />
                <p className="text-2xl md:text-3xl font-bold gradient-text">28 459</p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Avis collectés ce mois</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                <p className="text-2xl md:text-3xl font-bold gradient-text">4.9/5</p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Satisfaction clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
