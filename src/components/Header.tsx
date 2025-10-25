import { Button } from "@/components/ui/button";
import take5Logo from "@/assets/take5-logo.png";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center gap-3">
            <img src={take5Logo} alt="Take 5 Logo" className="h-8 md:h-10 w-auto" />
          </div>
          
          <Button 
            onClick={scrollToForm}
            size="default"
            className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-sm md:text-base px-4 md:px-6"
          >
            S'abonner
          </Button>
        </div>
      </div>
    </header>
  );
};
