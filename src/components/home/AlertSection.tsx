import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, MessageSquare, Sparkles } from "lucide-react";

export const AlertSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4 md:mb-6">
            <AlertCircle className="w-4 md:w-5 h-4 md:h-5" />
            <span className="text-sm md:text-base font-semibold">85% des clients ne reviennent jamais</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Réagissez aux <span className="text-destructive">avis négatifs</span>
            <br />
            avant qu'il ne soit trop tard
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre IA vous alerte instantanément et vous propose une réponse professionnelle en 2 minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="p-6 md:p-8 border-2 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 md:mb-6">
              <Clock className="w-6 md:w-7 h-6 md:h-7 text-destructive" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Notification instantanée</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Dès qu'un avis négatif est publié, vous recevez une alerte WhatsApp avec le contenu complet et la note attribuée.
            </p>
            <div className="bg-muted/50 p-3 md:p-4 rounded-lg border-l-4 border-destructive">
              <p className="text-xs md:text-sm font-medium">⚠️ Nouvel avis 2⭐ de Marie L.</p>
              <p className="text-xs text-muted-foreground mt-1">"Déçue par le service..."</p>
            </div>
          </Card>

          <Card className="p-6 md:p-8 border-2 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
              <Sparkles className="w-6 md:w-7 h-6 md:h-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Réponse IA proposée</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Notre IA analyse l'avis et génère une réponse professionnelle, empathique et constructive. Vous validez ou modifiez en 1 clic.
            </p>
            <div className="bg-primary/5 p-3 md:p-4 rounded-lg border-l-4 border-primary">
              <p className="text-xs md:text-sm font-medium">💡 Réponse suggérée par l'IA</p>
              <p className="text-xs text-muted-foreground mt-1">"Nous sommes désolés de votre expérience..."</p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 md:p-8 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <MessageSquare className="w-10 md:w-12 h-10 md:h-12 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2">Vous gardez le contrôle total</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Pour les avis négatifs (1-3⭐), l'IA <strong>NE publie JAMAIS</strong> automatiquement.
                  <br className="hidden sm:block" />
                  Pour les avis positifs (4-5⭐), réponse automatique immédiate.
                </p>
                <Button onClick={scrollToForm} size="lg" className="w-full sm:w-auto">
                  Activer les alertes intelligentes
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
