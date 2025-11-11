import { Button } from "@/components/ui/button";
import { MultiPublicationAnimation } from "@/components/animations";
import { AIResponseAnimation } from "@/components/animations";

export const WaouwMomentsSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('subscription-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          TakeFive en Action : Publiez et Gérez Tout Depuis WhatsApp
        </h2>
        
        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Deux automatisations qui transforment 5 heures de travail en quelques secondes
        </p>
        
        {/* 2 colonnes côte à côte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* MOMENT 1 */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                📱 Publication Multi-Réseaux Instantanée
              </h3>
              <p className="text-muted-foreground">
                Un seul message WhatsApp, 3 réseaux sociaux publiés simultanément
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <MultiPublicationAnimation />
            </div>
            
            <p className="text-xl md:text-2xl font-bold text-center text-green-600">
              ⏱️ Publié en 28 secondes
            </p>
          </div>
          
          {/* MOMENT 2 */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                ⭐ Réponses IA Automatiques
              </h3>
              <p className="text-muted-foreground">
                L'IA répond automatiquement à tous vos avis Google
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <AIResponseAnimation />
            </div>
            
            <p className="text-xl md:text-2xl font-bold text-center text-green-600">
              ✅ Répondu en 4 secondes
            </p>
          </div>
        </div>
        
        {/* Bouton CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-elegant"
            onClick={scrollToForm}
          >
            ▶️ Voir la Démo Vidéo (45 secondes)
          </Button>
        </div>
      </div>
    </section>
  );
};
