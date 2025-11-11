import { Button } from "@/components/ui/button";
import { 
  FlyerGeneratorAnimation,
  FlyerGeneratorBenefits
} from "@/components/animations";

export const FlyerGeneratorSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Texte à gauche */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Automatisation n°3 · Générateur de flyers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Vos posts deviennent automatiquement des flyers prêts à imprimer.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Une promo pour ce week-end ? Un nouveau menu ? TakeFive transforme votre publication
              en support marketing imprimable (affiche, flyer, carte de visite) avec votre logo et vos couleurs.
            </p>

            {/* Bénéfices business */}
            <ul className="space-y-2 mb-6">
              <li className="text-foreground">
                ✅ <strong>Prêt en 3 minutes</strong> : plus besoin de passer par un graphiste.
              </li>
              <li className="text-foreground">
                ✅ <strong>Cohérence visuelle</strong> garantie avec votre identité de marque.
              </li>
              <li className="text-foreground">
                ✅ <strong>Multi-format</strong> : carré pour Insta, A5/A4 pour impression.
              </li>
            </ul>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Parfait pour annoncer vos offres spéciales et événements sans toucher à Canva ou Photoshop.
            </p>
          </div>

          {/* Animation à droite */}
          <div>
            <FlyerGeneratorAnimation />
          </div>
        </div>

        {/* Benefits en dessous */}
        <div className="mt-12">
          <FlyerGeneratorBenefits />
        </div>
      </div>
    </section>
  );
};
