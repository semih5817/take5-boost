import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const NewHero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <div className="space-y-8">
            {/* Titre H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Et si votre fiche Google{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  travaillait pour vous
                </span>
              </span>{" "}
              24h/24 ?
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pendant que vos concurrents perdent{" "}
              <span className="text-destructive font-bold">3h par semaine</span> à gérer leurs
              avis, votre fiche Google répond automatiquement, vous alerte des problèmes et vous
              envoie un rapport détaillé{" "}
              <span className="text-primary font-bold">chaque mois sur WhatsApp</span>.
            </p>

            {/* CTA Principal + Prix */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 text-xl px-10 py-7"
              >
                🎁 Essayer 1 mois OFFERT
              </Button>
              
              <div className="space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  0€
                </p>
                <p className="text-sm text-muted-foreground">
                  puis 19,90€/mois • Sans engagement
                </p>
              </div>
            </div>

            {/* Badges de preuve sociale */}
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full px-4 py-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-600 hover:scale-105 transition-transform">
                ⭐ +64% de visibilité garantie
              </Badge>
              <Badge className="rounded-full px-4 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-600 hover:scale-105 transition-transform">
                ⏰ 3h économisées/semaine
              </Badge>
              <Badge className="rounded-full px-4 py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-600 hover:scale-105 transition-transform">
                📈 3x plus d'avis clients
              </Badge>
              <Badge className="rounded-full px-4 py-2.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 text-orange-600 hover:scale-105 transition-transform">
                🛡️ Satisfait ou remboursé 30j
              </Badge>
            </div>

            {/* Trust line */}
            <p className="text-sm text-muted-foreground">
              ✓ Déjà 247 entreprises ont automatisé leur fiche Google • Satisfaction client : 4.9/5
            </p>
          </div>

          {/* Colonne droite : Vidéo */}
          <div className="relative">
            {!showVideo ? (
              <div
                onClick={() => setShowVideo(true)}
                className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center cursor-pointer group hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
                <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Play className="w-16 h-16 text-white fill-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-semibold text-lg">
                    Découvrez comment Take Five révolutionne votre fiche Google
                  </p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Take Five Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
