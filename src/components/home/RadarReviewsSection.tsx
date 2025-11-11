import { Card } from "@/components/ui/card";

export const RadarReviewsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          📡 Radar Multi-Plateformes : Tous Vos Avis Centralisés
        </h2>
        
        {/* Introduction */}
        <p className="text-base md:text-lg text-center text-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Ne perdez plus de temps à vous connecter sur Google, Facebook, Trustpilot et Yelp. TakeFive collecte automatiquement tous vos avis, les analyse par IA, et vous alerte instantanément sur WhatsApp en cas de problème. Plus jamais un avis négatif ignoré.
        </p>
        
        {/* 3 cartes fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          
          {/* Carte 1 */}
          <Card className="p-6 md:p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="text-5xl md:text-6xl mb-4">✅</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Collecte Automatique</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Connexion à Google My Business, Facebook Pages, Trustpilot et Yelp</p>
              <p className="font-semibold">Vérification toutes les 6 heures</p>
              <p className="font-semibold">Zéro avis manqué</p>
            </div>
          </Card>
          
          {/* Carte 2 */}
          <Card className="p-6 md:p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="text-5xl md:text-6xl mb-4">🤖</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Réponses IA Personnalisées</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>L'IA analyse le ton et le sentiment</p>
              <p className="font-semibold">Génère des réponses adaptées</p>
              <p className="font-semibold">Avis positifs = réponse auto</p>
            </div>
          </Card>
          
          {/* Carte 3 */}
          <Card className="p-6 md:p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="text-5xl md:text-6xl mb-4">⚠️</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Alertes Instantanées</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Avis négatif détecté ?</p>
              <p className="font-semibold">WhatsApp vous prévient en 2 minutes</p>
              <p className="font-semibold">Réagissez avant qu'il soit trop tard</p>
            </div>
          </Card>
        </div>
        
        {/* Badge version 2 */}
        <p className="text-center text-lg text-muted-foreground italic">
          🎁 Version 2 à venir : TripAdvisor, Booking.com et analyse concurrentielle
        </p>
      </div>
    </section>
  );
};
