import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";

export const MicroCTA = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="relative p-8 md:p-12 bg-card/70 backdrop-blur-sm rounded-3xl shadow-glow border border-primary/30">
          <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/40" />
          
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl font-medium mb-4 italic">
              "En 2 mois, je suis passé de 15 avis à 87 avis, et ma note est montée de 3,9 à 4,7. Take 5 a complètement transformé ma présence en ligne !"
            </p>
            <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <cite className="not-italic">
                <p className="font-bold text-foreground">Marc D.</p>
                <p className="text-sm text-muted-foreground">Restaurant Le Gourmet, Lyon</p>
              </cite>
              
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-primary transition-all duration-300"
              >
                Je veux les mêmes résultats
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
