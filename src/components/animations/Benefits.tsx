import React from 'react';

/**
 * Composant de carte de bénéfice réutilisable
 * Style sobre et professionnel
 */
const BenefitCard = ({ icon, title, text }) => (
  <div
    style={{
      background: 'white',
      padding: '22px',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
    }}
  >
    <div style={{ fontSize: '32px' }}>{icon}</div>
    <h3 style={{ 
      margin: 0, 
      fontSize: '17px', 
      fontWeight: 600, 
      color: '#111827',
      lineHeight: 1.3
    }}>
      {title}
    </h3>
    <p style={{ 
      margin: 0, 
      fontSize: '14px', 
      color: '#6b7280', 
      lineHeight: 1.6 
    }}>
      {text}
    </p>
  </div>
);

/**
 * Benefits pour Publication Multi-Réseaux
 * Focus : Gain de temps, présence, qualité
 */
export const MultiPublicationBenefits = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    marginTop: '30px'
  }}>
    <BenefitCard
      icon="⏱️"
      title="5 h de gagnées par mois"
      text="Planning de posts, copier-coller, connexions multiples… TakeFive remplace tout ça par un seul message WhatsApp."
    />
    <BenefitCard
      icon="📣"
      title="Présence partout, sans effort"
      text="Instagram, Google, Facebook (et plus tard TikTok…) : vos infos sont toujours à jour, même quand vous êtes en service."
    />
    <BenefitCard
      icon="🧠"
      title="Toujours la bonne formulation"
      text="L'IA reformule votre message brut pour le rendre clair, vendeur et adapté à chaque réseau."
    />
  </div>
);

/**
 * Benefits pour Réponses IA
 * Focus : Réputation, sérénité, croissance
 */
export const AIResponseBenefits = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    marginTop: '30px'
  }}>
    <BenefitCard
      icon="⭐"
      title="Image professionnelle"
      text="Chaque client reçoit une réponse posée et respectueuse. Même en période de rush, votre e-réputation reste impeccable."
    />
    <BenefitCard
      icon="🛟"
      title="Gestion de crise simplifiée"
      text="En cas d'avis négatif, vous recevez une alerte et une réponse proposée. Vous gardez le contrôle tout en gagnant du temps."
    />
    <BenefitCard
      icon="📈"
      title="Plus d'avis, plus de réservations"
      text="Une page bien gérée incite davantage de clients à laisser un avis et à revenir. C'est un vrai levier de chiffre d'affaires."
    />
  </div>
);

/**
 * Benefits pour Générateur de Flyers
 * Focus : Vente, cohérence, polyvalence
 */
export const FlyerGeneratorBenefits = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    marginTop: '30px'
  }}>
    <BenefitCard
      icon="🎯"
      title="Promos lancées en quelques minutes"
      text="Une nouvelle offre pour ce week-end ? Le flyer est prêt avant même la fin du service."
    />
    <BenefitCard
      icon="🎨"
      title="Toujours dans votre style"
      text="Logo, couleurs, typographie : le visuel respecte l'identité de votre établissement sans que vous touchiez à un logiciel de design."
    />
    <BenefitCard
      icon="🧾"
      title="Prêt pour le digital et le papier"
      text="Format carré pour Insta, mais aussi adapté à l'impression en A5/A4 pour votre vitrine ou vos menus."
    />
  </div>
);

export default BenefitCard;
