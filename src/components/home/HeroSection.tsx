import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35] flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          Devenez le commerce{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            #1 sur Google
          </span>
          {" "}dans votre ville
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in">
          Take 5 collecte et gère vos avis Google automatiquement.
          <br />
          <strong className="text-purple-300">IA incluse • Alertes WhatsApp • 19,90€/mois</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button onClick={scrollToForm} size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 text-lg transition-all transform hover:scale-105 shadow-2xl">
            Essayer gratuitement 1 mois
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 text-lg border border-slate-700 transition-all">
            Voir la démo
          </Button>
        </div>

        {/* Sous-texte */}
        <p className="text-slate-400 text-sm mb-8 animate-fade-in">
          ✓ Aucune carte bancaire requise • ✓ Annulation en 1 clic • ✓ 50+ commerces nous font confiance
        </p>

        {/* Badge avis */}
        <div className="mt-8 inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-4 py-2 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
          </div>
          <span className="text-white font-semibold">4.8/5</span>
          <span className="text-slate-400">• 50+ commerces nous font confiance</span>
        </div>
      </div>
    </section>;
};