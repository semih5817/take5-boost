import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Calendar, Image, FileText, TrendingUp } from "lucide-react";

export const AIOpportunities = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Intelligence Artificielle
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Une IA qui analyse votre fiche Google
            <br />
            <span className="gradient-text">et vous dit exactement quoi faire</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fini les questions "Qu'est-ce que je dois améliorer ?"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-destructive/10 text-destructive text-xs">Impact -12%</Badge>
                <h3 className="font-bold mb-2">Horaires obsolètes</h3>
                <p className="text-sm text-muted-foreground">
                  Vos horaires ne reflètent pas vos jours fériés. Mettez à jour pour éviter les déceptions.
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full">Corriger maintenant</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-primary">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Image className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-primary/10 text-primary text-xs">Impact +35%</Badge>
                <h3 className="font-bold mb-2">Photos manquantes</h3>
                <p className="text-sm text-muted-foreground">
                  Ajoutez 3 photos de vos produits phares. Les fiches avec photos obtiennent 35% de clics en plus.
                </p>
              </div>
            </div>
            <Button size="sm" className="w-full">Ajouter des photos</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-orange-500/10 text-orange-500 text-xs">Opportunité</Badge>
                <h3 className="font-bold mb-2">Black Friday</h3>
                <p className="text-sm text-muted-foreground">
                  Le Black Friday arrive dans 15 jours. Créez une campagne SMS pour vos clients.
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full">Créer campagne</Button>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Recommandations quotidiennes personnalisées</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm">Post Google suggéré avec modèle prêt à publier</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm">Opportunités saisonnières détectées automatiquement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm">Chaque recommandation = gain de visibilité quantifié</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-3">Exemple de recommandation :</p>
              <div className="bg-muted/50 p-3 rounded text-sm mb-3">
                <p className="font-medium mb-1">💡 Action prioritaire</p>
                <p className="text-muted-foreground">
                  Votre concurrent "Le Bistrot" vient de publier 3 posts cette semaine. 
                  Maintenez votre visibilité en publiant un post aujourd'hui.
                </p>
              </div>
              <Button size="sm" className="w-full">Voir toutes les opportunités (7)</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
