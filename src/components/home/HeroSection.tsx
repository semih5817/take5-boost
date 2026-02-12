import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const goToTarifs = () => {
    navigate('/tarifs');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight px-4">
          Devenez le commerce{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            #1 sur Google
          </span>
          {" "}dans votre ville
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in px-4">
          TakeFive collecte et gère vos avis Google automatiquement.
          <br />
          <strong className="text-purple-300">IA incluse • Alertes WhatsApp • 29,90€/mois</strong>
        </p>

        {/* CTAs - Hiérarchie renforcée */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in">
          <Button
            onClick={goToTarifs}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 px-10 text-lg transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:shadow-[0_10px_50px_rgba(139,92,246,0.7)]"
          >
            Essayer gratuitement 1 mois
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-medium py-4 px-6 text-base transition-all"
          >
            Voir la démo
          </Button>
        </div>

        {/* Micro-réassurances */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mb-8 animate-fade-in">
          {[
            "✓ Sans carte bancaire",
            "✓ Sans engagement",
            "✓ Annulation en 1 clic",
            "✓ Activation en 2 min"
          ].map((item, i) => (
            <span key={i} className="text-slate-400 text-sm">{item}</span>
          ))}
        </div>

        {/* Badge avis */}
        <div className="mt-4 inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-4 py-2 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold">4.8/5</span>
          <span className="text-slate-400">• 200+ commerces nous font confiance</span>
        </div>
      </div>
    </section>
  );
};
