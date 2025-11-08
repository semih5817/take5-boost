import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, MessageSquare } from "lucide-react";

export const AlertNegativeReviews = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-destructive/5 to-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/30 text-sm px-4 py-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Statistique alarmante
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            85% des clients ne reviennent jamais
            <br />
            <span className="gradient-text">après un avis négatif non traité</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ne laissez plus un avis négatif ruiner votre réputation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual mockup */}
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur border-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">Nouvel avis négatif détecté</p>
                  <p className="text-xs text-muted-foreground">Il y a 2 minutes</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⭐⭐</span>
                  <span className="text-sm font-medium">Jacques M.</span>
                </div>
                <p className="text-sm">"Déçu par l'attente, service lent..."</p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Proposition de réponse IA</span>
                </div>
                <p className="text-sm text-foreground/80 mb-3">
                  "Bonjour Jacques, nous sommes sincèrement désolés pour cette expérience. 
                  Nous prenons vos remarques très au sérieux..."
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Publier</Button>
                  <Button size="sm" variant="outline" className="flex-1">Modifier</Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Répondu en 2 minutes</span>
              </div>
            </div>
          </Card>

          {/* Features list */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Notification WhatsApp instantanée</h3>
                <p className="text-muted-foreground">
                  Recevez une alerte dès qu'un avis négatif (1-3⭐) est publié
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">IA génère une proposition (ne la publie PAS)</h3>
                <p className="text-muted-foreground">
                  L'IA analyse le contexte et propose une réponse appropriée que VOUS validez
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Validez ou modifiez en 1 clic</h3>
                <p className="text-muted-foreground">
                  Gardez le contrôle total sur vos réponses aux avis négatifs
                </p>
              </div>
            </div>

            <Card className="p-4 bg-accent/50">
              <p className="text-sm font-medium mb-2">💡 Bon à savoir</p>
              <p className="text-sm text-muted-foreground">
                Pour les avis positifs (4-5⭐) : réponse automatique immédiate par l'IA.<br />
                Pour les avis négatifs (1-3⭐) : VOUS gardez le contrôle total.
              </p>
            </Card>

            <Button size="lg" className="w-full md:w-auto">
              Activer les alertes intelligentes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
