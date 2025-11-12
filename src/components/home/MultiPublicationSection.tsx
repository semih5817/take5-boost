import { MultiPublicationAnimation } from "@/components/animations";
import { TrendingUp, Star, Clock } from "lucide-react";

export const MultiPublicationSection = () => {
  return <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
          <div className="space-y-6">
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Un seul message WhatsApp.
              </span>
              <br />
              <span className="text-foreground">
                Toutes vos publications partent automatiquement.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous envoyez une photo + un texte rapide sur WhatsApp.
              TakeFive rédige la légende, respecte votre charte graphique et publie sur vos
              réseaux en quelques secondes.
            </p>

            <div className="space-y-4 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">0 onglet à ouvrir</p>
                  <p className="text-sm text-muted-foreground">Plus besoin d'aller sur Instagram, Google, Facebook…</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Publication cohérente</p>
                  <p className="text-sm text-muted-foreground">Texte, ton et visuels parfaitement alignés partout</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">5 h gagnées par mois</p>
                  <p className="text-sm text-muted-foreground">En moyenne sur la communication locale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animation à droite */}
          <div>
            <MultiPublicationAnimation />
          </div>
        </div>
      </div>
    </section>;
};