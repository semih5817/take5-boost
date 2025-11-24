import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import plaquePersonnalisee from "@/assets/plaque-personnalisee-take5.jpg";

export const CustomNFCSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-purple-500/30 shadow-2xl">
              <img 
                src={plaquePersonnalisee} 
                alt="Plaque NFC Take 5 personnalisée"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Contenu */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Personnalisation incluse</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre plaque NFC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">100% personnalisée</span>
            </h2>

            <p className="text-xl text-slate-300 mb-6">
              Chaque plaque est gravée avec <strong>votre logo</strong>, vos couleurs et votre message. Design élégant et professionnel pour maximiser la collecte d'avis.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Plaque en acrylique premium",
                "Fabriquée en France 🇫🇷",
                "Gravure laser haute qualité",
                "Compatible NFC + QR Code",
                "Résistante à l'eau et aux rayures",
                "Installation ultra-simple (adhésif inclus)",
                "Offerte avec abonnement annuel"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:-translate-y-1"
              >
                Commander ma plaque
              </Button>
              <Button 
                onClick={scrollToForm}
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg"
              >
                Voir les tarifs
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              🎁 Plaque personnalisée offerte avec tout abonnement annuel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
