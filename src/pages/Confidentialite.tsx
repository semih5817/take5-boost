import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto py-16 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
          <p className="text-sm text-muted-foreground">Dernière mise à jour : 27 novembre 2024</p>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-5 pb-20 space-y-6">
          {/* Highlight */}
          <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-5 rounded-r-xl">
            <p className="text-emerald-300">
              <strong>🔒 Votre vie privée nous tient à cœur.</strong><br/>
              Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.
            </p>
          </div>

          {/* Section 1 */}
          <Section title="1. Responsable du Traitement">
            <p>
              <strong>TakeFive</strong><br/>
              Email : privacy@takefive.fr
            </p>
            <p>
              TakeFive est le responsable du traitement de vos données personnelles collectées via la plateforme takefive.fr.
            </p>
          </Section>

          {/* Section 2 */}
          <Section title="2. Données Collectées">
            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">2.1 Données d'Identification</h3>
            <CheckList items={['Nom et prénom', 'Adresse email', 'Numéro de téléphone (optionnel)', "Nom de l'entreprise", 'Adresse de facturation']} />

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">2.2 Données de Connexion</h3>
            <CheckList items={['Adresse IP', 'Type de navigateur', 'Pages visitées et temps passé', 'Date et heure de connexion']} />

            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-4">2.3 Données Google Business</h3>
            <CheckList items={['Avis clients et réponses', 'Photos et informations de votre établissement', 'Statistiques de performance']} />
          </Section>

          {/* Section 3 */}
          <Section title="3. Finalités du Traitement">
            <p>Nous utilisons vos données pour :</p>
            <CheckList items={[
              'Fournir et améliorer nos services',
              'Gérer votre compte et votre abonnement',
              'Traiter vos paiements et générer vos factures',
              'Vous envoyer des notifications importantes',
              'Répondre à vos demandes de support',
              "Améliorer l'expérience utilisateur",
              'Respecter nos obligations légales'
            ]} />
          </Section>

          {/* Section 4 */}
          <Section title="4. Partage des Données">
            <p>Nous partageons vos données avec des partenaires de confiance :</p>
            <CheckList items={[
              'LemonSqueezy : Traitement des paiements',
              'Hébergement sécurisé en Europe',
              'Envoi des emails transactionnels'
            ]} />
            
            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-5 rounded-r-xl mt-6">
              <p className="text-orange-300">
                <strong>⚠️ Important :</strong> Nous ne vendons jamais vos données à des tiers. Tous nos partenaires sont soumis à des accords de confidentialité stricts et conformes au RGPD.
              </p>
            </div>
          </Section>

          {/* Section 5 */}
          <Section title="5. Sécurité des Données">
            <p>Nous mettons en œuvre des mesures de sécurité strictes :</p>
            <CheckList items={[
              'Chiffrement AES-256 pour les données au repos',
              'Protocole HTTPS/TLS pour les transmissions',
              'Authentification à deux facteurs (2FA) disponible',
              'Sauvegardes quotidiennes chiffrées',
              'Audits de sécurité réguliers',
              'Hébergement en Europe (conformité RGPD)'
            ]} />
          </Section>

          {/* Section 6 */}
          <Section title="6. Vos Droits">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <CheckList items={[
              "Droit d'accès : Obtenir une copie de vos données",
              'Droit de rectification : Corriger vos données inexactes',
              "Droit à l'effacement : Supprimer vos données",
              'Droit à la portabilité : Récupérer vos données',
              "Droit d'opposition : Vous opposer à certains traitements"
            ]} />
            
            <p className="mt-6">
              Pour exercer vos droits, contactez-nous à : <strong className="text-primary">privacy@takefive.fr</strong>
            </p>
          </Section>

          {/* Contact */}
          <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-5 rounded-r-xl">
            <p className="text-emerald-300">
              <strong>📧 Questions sur vos données ?</strong><br/>
              Notre équipe est à votre disposition : privacy@takefive.fr
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

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-emerald-500 font-bold">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default Confidentialite;
