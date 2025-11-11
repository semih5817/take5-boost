import { MultiPublicationAnimation } from "@/components/animations";

export const MultiPublicationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-blue-400 font-semibold">
              Automatisation n°1 · Publication multi-réseaux
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Un seul message WhatsApp.<br />
              Toutes vos publications partent automatiquement.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous envoyez une photo + un texte rapide sur WhatsApp.
              TakeFive rédige la légende, respecte votre charte graphique et publie sur vos
              réseaux en quelques secondes.
            </p>

            <ul className="space-y-3">
              <li className="text-foreground">
                ✅ <strong>0 onglet à ouvrir</strong> : plus besoin d'aller sur Instagram, Google, Facebook…
              </li>
              <li className="text-foreground">
                ✅ <strong>Publication cohérente</strong> partout (texte, ton, visuels alignés).
              </li>
              <li className="text-foreground">
                ✅ <strong>5 h gagnées par mois</strong> en moyenne sur la com' locale.
              </li>
            </ul>
          </div>

          {/* Animation à droite */}
          <div>
            <MultiPublicationAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
