import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Devenez le commerce{" "}
            <span className="highlight-box text-white">#1 sur Google</span>
            <br />
            dans votre ville
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Take 5 collecte et gère vos avis Google automatiquement. IA incluse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto w-full sm:w-auto"
            >
              Essayer 1 mois gratuitement
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>
            
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-bold gradient-text">69€/mois</p>
              <p className="text-xs md:text-sm text-muted-foreground">Sans engagement</p>
            </div>
          </div>

          {/* Features badges */}
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Star className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">+64% de visibilité</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Zap className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">100% automatisé</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <TrendingUp className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">3x plus d'avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
