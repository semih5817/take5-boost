import { FlyerGeneratorAnimation } from "@/components/animations";

export const FlyerGeneratorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre et sous-titre en pleine largeur */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-foreground">Transformez une </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              simple photo en communication professionnelle
            </span>
            <span className="text-foreground"> prête à publier.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Plus besoin de graphiste, d'outils complexes ou de perdre du temps à formater vos publications.
            TakeFive transforme instantanément votre photo en un visuel crédible, harmonieux et cohérent avec votre marque — directement depuis WhatsApp.
          </p>
        </div>

        {/* Contenu en grille : arguments à gauche, animation à droite */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Arguments marketing à gauche */}
          <div className="space-y-4">
            {/* Temps */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-2xl">
                ⏱️
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Temps</h3>
                <p className="text-muted-foreground">
                  Tout est fait en moins d'une minute, sans ouvrir Canva ni aucun autre outil.
                </p>
              </div>
            </div>

            {/* Argent */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-2xl">
                💰
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Argent</h3>
                <p className="text-muted-foreground">
                  Plus besoin de payer un graphiste ou une agence pour chaque visuel.
                </p>
              </div>
            </div>

            {/* Crédibilité */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-2xl">
                💼
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Crédibilité</h3>
                <p className="text-muted-foreground">
                  Vos promotions et annonces ont enfin un style professionnel constant.
                </p>
              </div>
            </div>

            {/* Flexibilité */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-2xl">
                📲
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Flexibilité</h3>
                <p className="text-muted-foreground">
                  Vous pouvez poster en plein service, depuis votre téléphone.
                </p>
              </div>
            </div>

            {/* Évolutif */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Évolutif</h3>
                <p className="text-muted-foreground">
                  Chaque image publiée renforce la cohérence de votre communication.
                </p>
              </div>
            </div>
          </div>

          {/* Animation à droite */}
          <div>
            <FlyerGeneratorAnimation />
          </div>
        </div>

        {/* 3 cartes de bénéfices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Carte 1 - Pourquoi c'est différent */}
          <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Pourquoi c'est différent ?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              TakeFive ne se contente pas de créer des visuels : il libère le chef d'entreprise de la contrainte de communication.
              Chaque publication devient une action automatique, maîtrisée et cohérente — sans effort, sans perte de temps, sans dépendre d'un tiers.
              C'est la puissance d'un service marketing complet, dans votre poche.
            </p>
          </div>

          {/* Carte 2 - Gain de temps */}
          <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Un gain de temps monumental
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Créer un visuel pro prend souvent 30 à 45 minutes entre la photo, la mise en page et la publication.
              Avec TakeFive, tout est prêt en moins d'une minute, directement depuis WhatsApp.
              Résultat : plus de temps pour vos clients, moins de stress, et une communication constante.
            </p>
          </div>

          {/* Carte 3 - Publication multi-canaux */}
          <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Publication multi-canaux
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Votre visuel est automatiquement publié sur Instagram et Google Business.
              Bientôt, il le sera aussi sur Facebook, TikTok, LinkedIn et bien d'autres.
              TakeFive centralise tout pour vous offrir une présence pro sur chaque réseau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};