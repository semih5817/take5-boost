import { Button } from "@/components/ui/button";
import { MultiPublicationAnimation, AIResponseAnimation, MultiPublicationBenefits, AIResponseBenefits } from "@/components/animations";
export const WaouwMomentsSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <>
      {/* BLOC 1 – Publication Multi-Réseaux */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            {/* Texte à gauche */}
            <div>
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
                Automatisation n°1 · Publication multi-réseaux
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Un seul message WhatsApp.<br />
                Toutes vos publications partent automatiquement.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vous envoyez une photo + un texte rapide sur WhatsApp.  
                TakeFive rédige la légende, respecte votre charte graphique et publie sur vos
                réseaux en quelques secondes.
              </p>

              {/* Bénéfices business */}
              <ul className="space-y-2 mb-6">
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

              <p className="text-sm text-muted-foreground leading-relaxed">
                Idéal pour les <strong>restaurants, hôtels, salons de coiffure, garages</strong> qui n'ont pas
                de community manager mais doivent rester visibles.
              </p>
            </div>

            {/* Animation à droite */}
            <div>
              <MultiPublicationAnimation />
            </div>
          </div>

          {/* Benefits en dessous */}
          <div className="mt-12">
            <MultiPublicationBenefits />
          </div>
        </div>
      </section>

      {/* BLOC 2 – Réponses IA aux Avis */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            {/* Texte à gauche */}
            

            {/* Animation à droite */}
            <div>
              
            </div>
          </div>

          {/* Benefits en dessous */}
          <div className="mt-12">
            
          </div>
        </div>
      </section>
    </>;
};