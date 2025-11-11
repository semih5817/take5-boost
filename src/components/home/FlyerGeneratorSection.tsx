import { FlyerGeneratorAnimation } from "@/components/animations";
export const FlyerGeneratorSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre en pleine largeur */}
        <div className="mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Transformez une simple photo en communication professionnelle prête à publier.
          </h2>
        </div>

        {/* Contenu en grille : arguments à gauche, animation à droite */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Arguments marketing à gauche */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Plus besoin de graphiste, d'outils complexes ou de perdre du temps à formater vos publications.
              TakeFive transforme instantanément votre photo en un visuel crédible, harmonieux et cohérent avec votre marque — directement depuis WhatsApp.
            </p>

            

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
      </div>
    </section>;
};