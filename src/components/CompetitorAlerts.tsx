import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, MapPin, ArrowRight } from "lucide-react";

export const CompetitorAlerts = () => {
  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Surveillez vos concurrents
            <br />
            <span className="gradient-text">pendant que vous dormez</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre IA surveille vos concurrents directs 24/7 et vous alerte des mouvements du marché
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          <Card className="p-6 bg-card/50 backdrop-blur border-2 hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-xl mb-2">Coffee Lab</h3>
                <p className="text-sm text-muted-foreground">Nouveau concurrent</p>
              </div>
              <Badge className="bg-destructive/10 text-destructive border-destructive/30">
                Nouveau
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avis collectés</span>
                <span className="font-semibold">18 avis en 30j</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Note moyenne</span>
                <span className="font-semibold flex items-center gap-1">
                  4.6/5 <TrendingUp className="w-4 h-4 text-green-500" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Distance</span>
                <span className="font-semibold flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> 0.3 km
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-primary font-medium">
                ⚠️ Concurrent agressif - Surveiller de près
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-2 hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-xl mb-2">Le Bistrot</h3>
                <p className="text-sm text-muted-foreground">Concurrent établi</p>
              </div>
              <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/30">
                Alerte
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avis cette semaine</span>
                <span className="font-semibold">+5 avis</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Évolution note</span>
                <span className="font-semibold flex items-center gap-1">
                  4.4 → 4.5 <TrendingUp className="w-4 h-4 text-green-500" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Classement local</span>
                <span className="font-semibold">#3 → #2</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-orange-500 font-medium">
                📈 Gagne du terrain - Action recommandée
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-1">Nouveau concurrent</h4>
            <p className="text-xs text-muted-foreground">Détection automatique</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-1">Changement de note</h4>
            <p className="text-xs text-muted-foreground">Analyse d'impact</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <TrendingDown className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-1">Menace détectée</h4>
            <p className="text-xs text-muted-foreground">Contre-attaque suggérée</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-1">Classement local</h4>
            <p className="text-xs text-muted-foreground">Temps réel</p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Recevez un rapport hebdomadaire sur WhatsApp avec les mouvements de marché
          </p>
          <a href="#subscription-form" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Activer la veille concurrentielle
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
