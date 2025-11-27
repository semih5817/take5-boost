import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto py-16 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Conditions Générales de Vente
          </h1>
          <p className="text-sm text-muted-foreground">Dernière mise à jour : 27 novembre 2024</p>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-5 pb-20 space-y-6">
          <Section title="1. Objet et Champ d'Application">
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société TakeFive, ci-après dénommée "TakeFive" ou "le Prestataire", et toute personne physique ou morale souhaitant accéder aux services proposés sur la plateforme takefive.fr, ci-après dénommée "le Client".
            </p>
            <p>
              TakeFive propose une solution SaaS (Software as a Service) permettant la gestion automatisée des avis en ligne via intelligence artificielle.
            </p>
          </Section>

          <Section title="2. Services Proposés">
            <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-4">2.1 Description des Services</h3>
            <p>TakeFive propose les services suivants :</p>
            <BulletList items={[
              'Surveillance automatique des avis sur Google Business et autres plateformes',
              'Génération de réponses personnalisées via intelligence artificielle',
              "Dashboard de suivi et d'analyse des performances",
              'Notifications en temps réel',
              'Support technique et assistance'
            ]} />

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">2.2 Formules d'Abonnement</h3>
            <p>Plusieurs formules d'abonnement sont proposées :</p>
            <BulletList items={[
              'Starter : 19,90€/mois - Fonctionnalités de base',
              'Pro : 29,90€/mois - Fonctionnalités avancées',
              'Entreprise : Sur devis - Solution sur mesure'
            ]} />
          </Section>

          <Section title="3. Tarifs et Paiement">
            <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-4">3.1 Tarifs</h3>
            <p>
              Les tarifs des services sont indiqués en euros TTC sur le site takefive.fr. TakeFive se réserve le droit de modifier ses tarifs à tout moment. Les prix applicables sont ceux en vigueur au moment de la souscription.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">3.2 Modalités de Paiement</h3>
            <p>
              Le paiement s'effectue par carte bancaire ou prélèvement SEPA via notre partenaire sécurisé LemonSqueezy. L'abonnement est renouvelé automatiquement chaque mois sauf résiliation.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">3.3 Période d'Essai</h3>
            <p>
              Une période d'essai gratuite de 14 jours est offerte, sans engagement ni saisie de carte bancaire.
            </p>
          </Section>

          <Section title="4. Durée et Résiliation">
            <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-4">4.1 Durée du Contrat</h3>
            <p>
              Le contrat est conclu pour une durée indéterminée à compter de la souscription de l'abonnement. Il se renouvelle automatiquement chaque mois.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">4.2 Résiliation</h3>
            <p>
              Le Client peut résilier son abonnement à tout moment depuis son espace personnel. La résiliation prend effet à la fin de la période en cours. Aucun remboursement au prorata n'est effectué.
            </p>
          </Section>

          <Section title="5. Obligations des Parties">
            <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-4">5.1 Obligations de TakeFive</h3>
            <BulletList items={[
              'Fournir un accès continu et sécurisé à la plateforme (99,9% de disponibilité)',
              'Assurer la maintenance et les mises à jour du service',
              'Garantir la confidentialité des données du Client',
              'Fournir un support technique de qualité'
            ]} />

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">5.2 Obligations du Client</h3>
            <BulletList items={[
              "Fournir des informations exactes lors de l'inscription",
              'Maintenir la confidentialité de ses identifiants de connexion',
              "Respecter les conditions d'utilisation de la plateforme",
              "S'acquitter des paiements dans les délais convenus"
            ]} />
          </Section>

          <Section title="6. Responsabilité et Garanties">
            <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-4">6.1 Limitation de Responsabilité</h3>
            <p>
              TakeFive s'engage à fournir un service de qualité mais ne peut garantir un résultat commercial spécifique. La responsabilité de TakeFive est limitée au montant des sommes versées par le Client au cours des 12 derniers mois.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">6.2 Force Majeure</h3>
            <p>
              TakeFive ne pourra être tenu responsable de tout retard ou inexécution de ses obligations résultant d'un cas de force majeure tel que défini par la jurisprudence française.
            </p>
          </Section>

          <Section title="7. Propriété Intellectuelle">
            <p>
              Tous les éléments de la plateforme TakeFive (logiciels, textes, images, logos, etc.) sont et demeurent la propriété exclusive de TakeFive. Toute reproduction, représentation ou utilisation non autorisée est interdite et constitue une contrefaçon.
            </p>
          </Section>

          <Section title="8. Protection des Données Personnelles">
            <p>
              TakeFive s'engage à respecter la réglementation en vigueur en matière de protection des données personnelles (RGPD). Pour plus d'informations, veuillez consulter notre{' '}
              <Link to="/confidentialite" className="text-primary font-semibold hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </Section>

          <Section title="9. Droit Applicable et Juridiction">
            <p>
              Les présentes CGV sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, compétence exclusive est attribuée aux tribunaux compétents de Nancy, France.
            </p>
          </Section>

          {/* Contact */}
          <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl">
            <p className="text-purple-300">
              <strong>📧 Questions sur nos CGV ?</strong><br/>
              Contactez-nous à : legal@takefive.fr ou via notre{' '}
              <Link to="/nous-contacter" className="text-purple-400 font-semibold hover:underline">
                formulaire de contact
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8">
    <h2 className="text-2xl font-bold mb-5 text-foreground">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-primary font-bold">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default CGV;
