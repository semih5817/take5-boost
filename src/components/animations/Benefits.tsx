import React from 'react';

/**
 * Composant de carte de bénéfice réutilisable
 * Style sobre et professionnel
 */
const BenefitCard = ({ icon, title, text, extra = null }) => (
  <div
    className="bg-card p-6 rounded-xl border border-border hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
  >
    <div className="text-4xl mb-3">
      {typeof icon === 'string' ? icon : icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {text}
    </p>
    {extra && <div className="mt-3">{extra}</div>}
  </div>
);

/**
 * Benefits pour Publication Multi-Réseaux
 * Focus : Gain de temps, présence, qualité
 */
export const MultiPublicationBenefits = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
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
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
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
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
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
