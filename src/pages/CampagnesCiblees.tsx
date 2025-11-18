import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Zap, BarChart3, Users } from "lucide-react";

const CampagnesCiblees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            
            <div className="text-6xl mb-6">📧</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Campagnes SMS & Email Ciblées
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Relancez vos clients automatiquement avec des campagnes ciblées. 
              Promotions, nouveautés, événements… L'outil s'occupe de tout.
            </p>
            
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold">
              🚀 Bientôt disponible
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Segmentez votre base</h3>
                <p className="text-muted-foreground text-sm">
                  Clients fidèles, nouveaux, inactifs… Ciblez précisément vos audiences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Créez votre message</h3>
                <p className="text-muted-foreground text-sm">
                  Template pré-rempli ou personnalisé. L'IA suggère des améliorations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Programmez l'envoi</h3>
                <p className="text-muted-foreground text-sm">
                  Envoi immédiat ou planifié. Meilleurs jours et heures suggérés.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. Analysez les résultats</h3>
                <p className="text-muted-foreground text-sm">
                  Taux d'ouverture, clics, conversions. Optimisez vos prochaines campagnes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Types de campagnes</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="text-xl font-bold mb-2">Promotions & Soldes</h3>
                <p className="text-muted-foreground text-sm">
                  Annoncez vos offres spéciales à vos clients. Codes promo exclusifs. Ventes flash.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">🆕</div>
                <h3 className="text-xl font-bold mb-2">Nouveautés & Lancements</h3>
                <p className="text-muted-foreground text-sm">
                  Informez en avant-première de vos nouveaux produits ou services.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">🎂</div>
                <h3 className="text-xl font-bold mb-2">Anniversaires & Fidélité</h3>
                <p className="text-muted-foreground text-sm">
                  Messages personnalisés pour les anniversaires. Récompenses fidélité automatiques.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">😴</div>
                <h3 className="text-xl font-bold mb-2">Réactivation Clients Inactifs</h3>
                <p className="text-muted-foreground text-sm">
                  Relancez automatiquement les clients qui ne sont pas venus depuis X jours.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-xl font-bold mb-2">Événements Spéciaux</h3>
                <p className="text-muted-foreground text-sm">
                  Soirées à thème, concerts, vernissages… Invitations personnalisées.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl mb-3">⭐</div>
                <h3 className="text-xl font-bold mb-2">Demande d'Avis</h3>
                <p className="text-muted-foreground text-sm">
                  Relance automatique pour demander un avis Google après visite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi c'est efficace ?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ciblage précis</h3>
                  <p className="text-muted-foreground">
                    Segmentez par ancienneté, fréquence de visite, panier moyen, localisation… Ne spammez plus tout le monde.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automatisation totale</h3>
                  <p className="text-muted-foreground">
                    Scénarios pré-configurés : "Anniversaire client", "Absence 30 jours", "Nouvelle promo"… Tout se fait seul.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">✍️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personnalisation IA</h3>
                  <p className="text-muted-foreground">
                    Prénom, historique, préférences… Chaque message est unique. L'IA suggère le ton et le contenu optimal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ROI mesurable</h3>
                  <p className="text-muted-foreground">
                    Combien de clients sont revenus ? Quel CA généré ? Taux de conversion par campagne. Tout est tracké.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SMS + Email + WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Choisissez le canal le plus adapté à votre cible. Ou combinez-les pour un meilleur taux d'ouverture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Intéressé ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Inscrivez-vous à la liste d'attente pour être notifié du lancement
            </p>
            <Link 
              to="/#subscription-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg"
            >
              Je m'inscris gratuitement
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Découvrez aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/projets/generateur-flyers"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="text-xl font-bold mb-2">Générateur de Flyers IA</h4>
                <p className="text-muted-foreground text-sm">
                  Créez des visuels pros en quelques clics
                </p>
              </Link>
              
              <Link 
                to="/projets/publication-multiplateforme"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-3xl mb-3">📱</div>
                <h4 className="text-xl font-bold mb-2">Publication Multiplateforme</h4>
                <p className="text-muted-foreground text-sm">
                  Publiez sur toutes vos plateformes en un seul clic
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CampagnesCiblees;
