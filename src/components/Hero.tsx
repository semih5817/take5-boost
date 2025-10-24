import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Votre fiche Google</span>
            <br />
            optimisée en automatique
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Boostez votre visibilité locale avec Take 5 : IA qui répond aux avis, plaque NFC pour collecter facilement, et reporting mensuel automatique sur WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6 h-auto"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold gradient-text">9,90€/mois</p>
              <p className="text-sm text-muted-foreground">Engagement 12 mois</p>
            </div>
          </div>

          {/* Features badges */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">+64% de visibilité</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">100% automatisé</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">3x plus d'avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
