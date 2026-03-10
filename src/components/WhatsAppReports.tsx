import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, TrendingUp, Calendar, BarChart3 } from "lucide-react";

export const WhatsAppReports = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Votre business dans votre poche.
            <br />
            <span className="gradient-text">Littéralement.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Recevez vos rapports directement sur WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* WhatsApp mockup */}
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2">
            <div className="bg-card rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold">TakeFive - Rapport Hebdo</p>
                  <p className="text-xs text-muted-foreground">Aujourd'hui, 09:00</p>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg space-y-3 text-sm">
                <p className="font-bold">📊 Votre semaine en résumé</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Avis collectés</span>
                    <span className="font-bold text-primary">+5 (vs +2)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Note moyenne</span>
                    <span className="font-bold">4.7/5 (↗️ +0.2)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vues fiche</span>
                    <span className="font-bold">1 247 (+34%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score TakeFive</span>
                    <span className="font-bold text-green-500">67/100 (+5)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <p className="font-medium mb-2">🎯 3 actions prioritaires :</p>
                  <ol className="text-xs space-y-1 list-decimal list-inside text-muted-foreground">
                    <li>Répondre à l'avis de Jacques M.</li>
                    <li>Ajouter 2 photos produits</li>
                    <li>Publier un post cette semaine</li>
                  </ol>
                </div>
              </div>

              <div className="text-xs text-center text-muted-foreground">
                📱 Voir le rapport complet
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/30">
                <Calendar className="w-3 h-3 mr-2" />
                Rapports automatiques
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Restez informé sans effort</h3>
            </div>

            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Rapport hebdomadaire</h4>
                  <p className="text-sm text-muted-foreground mb-3">Chaque lundi matin :</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Avis collectés vs semaine dernière</li>
                    <li>• Évolution de votre note moyenne</li>
                    <li>• Statistiques de visibilité</li>
                    <li>• Score Take 5 et progression</li>
                    <li>• 3 actions prioritaires pour la semaine</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Rapport mensuel détaillé</h4>
                  <p className="text-sm text-muted-foreground mb-3">Le 1er de chaque mois :</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Analytics complets (appels, itinéraires, clics)</li>
                    <li>• Réponses IA publiées (avis positifs uniquement)</li>
                    <li>• Avis négatifs traités + temps de réponse</li>
                    <li>• Évolution vs concurrents</li>
                    <li>• Recommandations stratégiques personnalisées</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-accent/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Alertes instantanées</h4>
                  <p className="text-sm text-muted-foreground">
                    En plus des rapports programmés, recevez des alertes en temps réel pour les événements importants :
                    nouveaux avis négatifs, mouvements de concurrents, opportunités urgentes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
