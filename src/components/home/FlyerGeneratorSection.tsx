import { Card } from "@/components/ui/card";
import { FlyerGeneratorAnimation } from "@/components/animations";

export const FlyerGeneratorSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          🎨 Générateur de Flyers : Un Visuel Pro en 15 Secondes
        </h2>
        
        {/* Animation du générateur */}
        <div className="mb-12">
          <FlyerGeneratorAnimation />
        </div>
        
        {/* Comparaison avant/après en 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-8">
          
          {/* AVANT */}
          <Card className="p-6 md:p-8 bg-red-50 border-2 border-red-500">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-500">
              ❌ AVANT TakeFive
            </h3>
            <ul className="space-y-3 mb-6 text-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1️⃣</span>
                <span>Prendre une photo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2️⃣</span>
                <span>Ouvrir Canva</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3️⃣</span>
                <span>Choisir un template</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">4️⃣</span>
                <span>Insérer l'image</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">5️⃣</span>
                <span>Écrire le texte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">6️⃣</span>
                <span>Ajuster les couleurs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">7️⃣</span>
                <span>Ajouter le logo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">8️⃣</span>
                <span>Télécharger et publier</span>
              </li>
            </ul>
            <p className="text-2xl md:text-3xl font-bold text-center text-red-500 mt-6">
              ⏱️ 15-20 minutes
            </p>
          </Card>
          
          {/* AVEC TAKEFIVE */}
          <Card className="p-6 md:p-8 bg-green-50 border-2 border-green-600">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-600">
              ✅ AVEC TakeFive
            </h3>
            <div className="py-6 md:py-10 text-center space-y-6">
              <p className="text-xl md:text-2xl font-semibold">
                1️⃣ Envoyez une photo sur WhatsApp
              </p>
              <p className="text-lg md:text-xl text-primary italic px-4">
                "Nouveau burger dispo ce week-end à 9,90€"
              </p>
              <p className="font-bold text-red-500 text-lg">
                ↓ TakeFive génère ↓
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Flyer avec votre logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Vos couleurs de marque</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Texte optimisé par IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>QR code vers votre fiche Google</span>
                </li>
              </ul>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-center text-green-600 mt-6">
              ⏱️ 15 secondes
            </p>
          </Card>
        </div>
        
        {/* Note technique */}
        <p className="text-center text-base md:text-lg text-muted-foreground">
          Dimensions : 1080x1080px | Format : Carré Instagram | Personnalisable : 100%
        </p>
      </div>
    </section>
  );
};
