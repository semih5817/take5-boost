import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
              <Star className="w-5 md:w-6 h-5 md:h-6 text-white fill-white" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-foreground">Take 5</span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <Button 
              onClick={scrollToForm}
              size="default"
              className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-sm md:text-base px-4 md:px-6"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
