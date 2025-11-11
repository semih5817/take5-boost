import { Button } from "@/components/ui/button";
import { 
  MultiPublicationAnimation, 
  AIResponseAnimation,
  MultiPublicationBenefits,
  AIResponseBenefits
} from "@/components/animations";

export const WaouwMomentsSection = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* BLOC 1 – Publication Multi-Réseaux */}
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
              color: '#3498db',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}>
              Automatisation n°1 · Publication multi-réseaux
            </p>
            <h2 style={{
              fontSize: '2.1rem',
              margin: '0 0 1rem 0',
              color: '#111827',
              lineHeight: 1.3
            }}>
              Un seul message WhatsApp.<br />
              Toutes vos publications partent automatiquement.
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Vous envoyez une photo + un texte rapide sur WhatsApp.  
              TakeFive rédige la légende, respecte votre charte graphique et publie sur vos
              réseaux en quelques secondes.
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
                ✅ <strong>0 onglet à ouvrir</strong> : plus besoin d'aller sur Instagram, Google, Facebook…
              </li>
              <li style={{ color: '#111827', fontSize: '0.95rem' }}>
                ✅ <strong>Publication cohérente</strong> partout (texte, ton, visuels alignés).
              </li>
              <li style={{ color: '#111827', fontSize: '0.95rem' }}>
                ✅ <strong>5 h gagnées par mois</strong> en moyenne sur la com' locale.
              </li>
            </ul>

            <p style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              marginTop: '1.5rem',
              lineHeight: 1.5
            }}>
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
        <div style={{ maxWidth: '1200px', margin: '2rem auto 0' }}>
          <MultiPublicationBenefits />
        </div>
      </section>

      {/* BLOC 2 – Réponses IA aux Avis */}
      <section style={{ 
        background: '#ffffff', 
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
              color: '#8b5cf6',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}>
              Automatisation n°2 · Réponses aux avis
            </p>
            <h2 style={{
              fontSize: '2.1rem',
              margin: '0 0 1rem 0',
              color: '#111827',
              lineHeight: 1.3
            }}>
              Tous vos avis reçoivent une réponse professionnelle, sans y penser.
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              TakeFive surveille vos avis 24h/24 (Google, Facebook…) et prépare une réponse
              personnalisée dans le bon ton.  
              Vous validez en un clic les cas sensibles.
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '0.6rem'
            }}>
              <li style={{ color: '#111827', fontSize: '0.95rem' }}>
                ✅ <strong>0 avis laissé sans réponse</strong> → image sérieuse et rassurante.
              </li>
              <li style={{ color: '#111827', fontSize: '0.95rem' }}>
                ✅ <strong>Ton cohérent</strong> avec votre marque, même si plusieurs personnes répondent.
              </li>
              <li style={{ color: '#111827', fontSize: '0.95rem' }}>
                ✅ <strong>Rattrapage des clients mécontents</strong> grâce à des réponses calmes et structurées.
              </li>
            </ul>

            <p style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              marginTop: '1.5rem',
              lineHeight: 1.5
            }}>
              Résultat : une réputation maîtrisée et plus d'avis positifs sans y passer vos soirées.
            </p>
          </div>

          {/* Animation à droite */}
          <div>
            <AIResponseAnimation />
          </div>
        </div>

        {/* Benefits en dessous */}
        <div style={{ maxWidth: '1200px', margin: '2rem auto 0' }}>
          <AIResponseBenefits />
        </div>
      </section>
    </>
  );
};
