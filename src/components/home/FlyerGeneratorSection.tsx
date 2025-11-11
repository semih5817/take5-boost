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
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Texte à gauche */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Automatisation n°3 · Générateur de flyers IA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Transformez une simple photo en communication professionnelle prête à publier.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Plus besoin de graphiste, d'outils complexes ou de perdre du temps à formater vos publications.
              TakeFive transforme instantanément votre photo en un visuel crédible, harmonieux et cohérent avec votre marque — directement depuis WhatsApp.
            </p>

            <div className="bg-card/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-foreground mb-3 leading-relaxed">
                Vous prenez la photo d'un plat, d'un produit, d'une chambre ou d'une offre spéciale.
                Vous écrivez simplement :
              </p>
              <div className="bg-background/80 rounded-lg p-3 mb-3 border-l-4 border-primary">
                <p className="text-foreground italic">
                  "Publie sur Insta et Google — nouvelle pizza à la truffe, 12,90€, dispo vendredi."
                </p>
              </div>
              <p className="text-foreground leading-relaxed">
                Et c'est tout.
                TakeFive conçoit un flyer professionnel avec vos couleurs, votre logo, une mise en page claire, et le publie automatiquement sur vos canaux actifs (Instagram, Google, bientôt Facebook & TikTok).
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">✅ Ce que vous gagnez</h3>
              <ul className="space-y-3">
                <li className="text-foreground">
                  <span className="text-primary font-semibold">⏱️ Temps :</span> tout est fait en moins d'une minute, sans ouvrir Canva ni aucun autre outil.
                </li>
                <li className="text-foreground">
                  <span className="text-primary font-semibold">💰 Argent :</span> plus besoin de payer un graphiste ou une agence pour chaque visuel.
                </li>
                <li className="text-foreground">
                  <span className="text-primary font-semibold">💼 Crédibilité :</span> vos promotions et annonces ont enfin un style professionnel constant.
                </li>
                <li className="text-foreground">
                  <span className="text-primary font-semibold">📲 Flexibilité :</span> vous pouvez poster en plein service, depuis votre téléphone.
                </li>
                <li className="text-foreground">
                  <span className="text-primary font-semibold">🤖 Évolutif :</span> chaque image publiée renforce la cohérence de votre communication.
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary mb-2">🚀 Pourquoi c'est différent</h3>
              <p className="text-foreground leading-relaxed mb-2">
                TakeFive ne se contente pas de créer des visuels.
                Il vous libère de la contrainte de communication.
              </p>
              <p className="text-foreground leading-relaxed">
                Chaque publication devient une action automatique, maîtrisée et cohérente — sans effort, sans perte de temps, sans dépendre d'un tiers.
              </p>
              <p className="text-primary font-semibold mt-3">
                C'est la puissance d'un service marketing, dans votre poche.
              </p>
            </div>
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
