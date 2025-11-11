import { Card } from "@/components/ui/card";
import { ReviewAlertsAnimation } from "@/components/animations";

export const RadarReviewsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          📡 Radar Multi-Plateformes : Tous Vos Avis Centralisés
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
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-3">Collecte Automatique</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Connexion à Google My Business, Facebook Pages, Trustpilot et Yelp</p>
                <p className="font-semibold">Vérification toutes les 6 heures</p>
                <p className="font-semibold">Zéro avis manqué</p>
              </div>
            </Card>
            
            {/* Carte 2 */}
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-3">Réponses IA Personnalisées</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>L'IA analyse le ton et le sentiment</p>
                <p className="font-semibold">Génère des réponses adaptées</p>
                <p className="font-semibold">Avis positifs = réponse auto</p>
              </div>
            </Card>
            
            {/* Carte 3 */}
            <Card className="p-6 text-left hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl mb-3">⚠️</div>
              <h3 className="text-xl font-bold mb-3">Alertes Instantanées</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Avis négatif détecté ?</p>
                <p className="font-semibold">WhatsApp vous prévient en 2 minutes</p>
                <p className="font-semibold">Réagissez avant qu'il soit trop tard</p>
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
