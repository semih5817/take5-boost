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
    <section style={{ 
      background: '#f5f7fb', 
      padding: '70px 20px' 
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
        gap: '40px',
        alignItems: 'center'
      }}
      className="grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        {/* Texte à gauche */}
        <div>
          <p style={{
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#f97316',
            fontWeight: 600,
            marginBottom: '0.5rem'
          }}>
            Automatisation n°3 · Générateur de flyers
          </p>
          <h2 style={{
            fontSize: '2.1rem',
            margin: '0 0 1rem 0',
            color: '#111827',
            lineHeight: 1.3
          }}>
            Vos posts deviennent automatiquement des flyers prêts à imprimer.
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#4b5563',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            Une promo pour ce week-end ? Un nouveau menu ? TakeFive transforme votre publication
            en support marketing imprimable (affiche, flyer, carte de visite) avec votre logo et vos couleurs.
          </p>

          {/* Bénéfices business */}
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '0.6rem'
          }}>
            <li style={{ color: '#111827', fontSize: '0.95rem' }}>
              ✅ <strong>Prêt en 3 minutes</strong> : plus besoin de passer par un graphiste.
            </li>
            <li style={{ color: '#111827', fontSize: '0.95rem' }}>
              ✅ <strong>Cohérence visuelle</strong> garantie avec votre identité de marque.
            </li>
            <li style={{ color: '#111827', fontSize: '0.95rem' }}>
              ✅ <strong>Multi-format</strong> : carré pour Insta, A5/A4 pour impression.
            </li>
          </ul>

          <p style={{
            fontSize: '0.95rem',
            color: '#6b7280',
            marginTop: '1.5rem',
            lineHeight: 1.5
          }}>
            Parfait pour annoncer vos offres spéciales et événements sans toucher à Canva ou Photoshop.
          </p>
        </div>

        {/* Animation à droite */}
        <div>
          <FlyerGeneratorAnimation />
        </div>
      </div>

      {/* Benefits en dessous */}
      <div style={{ maxWidth: '1200px', margin: '2rem auto 0' }}>
        <FlyerGeneratorBenefits />
      </div>
    </section>
  );
};
