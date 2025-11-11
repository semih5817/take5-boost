import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const WaouwMomentsSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('subscription-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
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
          
          {/* WAOUH MOMENT 1 */}
          <Card className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-red-500">
              WAOUH MOMENT 1
            </h3>
            <h4 className="text-xl md:text-2xl text-center mb-6 font-semibold">
              📱 Publication Multi-Réseaux Instantanée
            </h4>
            
            {/* Démonstration visuelle 3 écrans */}
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-bold mb-2">1️⃣ Smartphone WhatsApp</p>
                <p className="text-primary italic">
                  "Publie sur Insta et Google : nouvelle pizza truffe 🍕 12,90€"
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-bold mb-2">2️⃣ Post Instagram créé</p>
                <p className="text-primary">
                  Photo + légende + hashtags #foodporn #pizza
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-bold mb-2">3️⃣ Post Google My Business publié</p>
                <p className="text-primary">
                  Visible par tous vos clients locaux
                </p>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-center text-green-600">
              ⏱️ Publié en 28 secondes
            </p>
          </Card>
          
          {/* WAOUH MOMENT 2 */}
          <Card className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-red-500">
              WAOUH MOMENT 2
            </h3>
            <h4 className="text-xl md:text-2xl text-center mb-6 font-semibold">
              ⭐ Réponses IA Automatiques
            </h4>
            
            {/* Démonstration avant/après */}
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="font-bold mb-2">AVANT : Avis Google 5 étoiles</p>
                <p className="text-muted-foreground">
                  "Excellent restaurant, service rapide et plats délicieux !"
                </p>
              </div>
              
              <p className="text-center font-bold text-red-500 py-2">
                ↓ TakeFive IA analyse et répond ↓
              </p>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded-lg">
                <p className="font-bold mb-2">APRÈS : Réponse automatique</p>
                <p className="text-green-600 font-semibold">
                  "Merci beaucoup pour votre retour ! Ravis que notre service vous ait plu. Au plaisir de vous revoir bientôt ! 🙏"
                </p>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-center text-green-600">
              ✅ Répondu en 4 secondes
            </p>
          </Card>
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
