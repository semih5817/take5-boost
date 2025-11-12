import { Card } from "@/components/ui/card";
import { ReviewAlertsAnimation } from "@/components/animations";

export const RadarReviewsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            📡 Radar Multi-Plateformes
          </span>
          <br />
          <span className="text-foreground">Tous Vos Avis Centralisés</span>
        </h2>
        
        {/* Introduction */}
        <p className="text-base md:text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Ne perdez plus de temps à vérifier Google, Facebook ou Trustpilot un par un.
          TakeFive surveille vos avis en continu, vous alerte sur WhatsApp dès qu'un
          problème apparaît, et vous aide à répondre dans le bon ton. <strong className="text-green-500">Répondre
          vite</strong> permet souvent de désamorcer un conflit, rassurer les futurs clients, et
          parfois même faire retirer une mauvaise note.
        </p>
        
        {/* Layout horizontal : Animation + Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
          {/* Animation à gauche */}
          <div>
            <ReviewAlertsAnimation />
          </div>

          {/* 3 cartes fonctionnalités à droite */}
          <div className="space-y-6">
            {/* Carte 1 */}
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold">Collecte Automatique</h3>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm pl-[4.5rem]">
                <p>Connexion à Google My Business, Facebook Pages, Trustpilot et Yelp</p>
                <p className="font-semibold text-primary">Vérification toutes les 6 heures</p>
                <p className="font-semibold text-foreground">Zéro avis manqué</p>
              </div>
            </Card>
            
            {/* Carte 2 */}
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-3xl">
                  🤖
                </div>
                <h3 className="text-xl font-bold">Réponses IA Personnalisées</h3>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm pl-[4.5rem]">
                <p>L'IA analyse le ton et le sentiment</p>
                <p className="font-semibold text-secondary">Génère des réponses adaptées</p>
                <p className="font-semibold text-foreground">Avis positifs = réponse auto</p>
              </div>
            </Card>
            
            {/* Carte 3 */}
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center text-3xl">
                  ⚠️
                </div>
                <h3 className="text-xl font-bold">Alertes Instantanées</h3>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm pl-[4.5rem]">
                <p>Avis négatif détecté ?</p>
                <p className="font-semibold text-destructive">WhatsApp vous prévient en 2 minutes</p>
                <p className="font-semibold text-foreground">Réagissez avant qu'il soit trop tard</p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Badge version 2 */}
        <p className="text-center text-lg text-muted-foreground italic">
          🎁 Version 2 à venir : TripAdvisor, Booking.com et analyse concurrentielle
        </p>
      </div>
    </section>
  );
};
