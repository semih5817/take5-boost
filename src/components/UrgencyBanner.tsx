import { Zap } from "lucide-react";

export const UrgencyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-destructive to-orange-500 text-white py-3 md:py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" 
           style={{ backgroundSize: '200% 100%' }} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center relative">
          <Zap className="w-5 md:w-6 h-5 md:h-6 fill-white animate-pulse" />
          <p className="text-sm md:text-xl font-bold">
            Offre limitée : Les 50 prochains inscrits bénéficient de 1 mois offert !
          </p>
          <div className="bg-white/20 px-3 md:px-4 py-0.5 md:py-1 rounded-full backdrop-blur-sm">
            <span className="font-mono font-bold text-sm md:text-lg">37 places restantes</span>
          </div>
        </div>
      </div>
    </div>
  );
};
