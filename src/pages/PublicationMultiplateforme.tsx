import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Clock, CheckCircle, Calendar } from "lucide-react";

const PublicationMultiplateforme = () => {
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
            
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Publication Multiplateforme
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Publiez sur Google, Facebook et Instagram depuis une seule interface. 
              Un seul message, toutes vos plateformes à jour automatiquement.
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
                  <Share2 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Écrivez une fois</h3>
                <p className="text-muted-foreground text-sm">
                  Rédigez votre message, ajoutez vos photos, choisissez vos hashtags.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Sélectionnez vos réseaux</h3>
                <p className="text-muted-foreground text-sm">
                  Google, Facebook, Instagram… Cochez les plateformes ciblées.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Programmez (optionnel)</h3>
                <p className="text-muted-foreground text-sm">
                  Publiez maintenant ou planifiez pour plus tard. Calendrier intégré.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. C'est publié !</h3>
                <p className="text-muted-foreground text-sm">
                  Votre contenu apparaît simultanément sur toutes les plateformes choisies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Plateformes supportées</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">Google My Business</h3>
                <p className="text-muted-foreground text-sm">
                  Posts, photos, événements et offres spéciales
                </p>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="text-5xl mb-4">📘</div>
                <h3 className="text-xl font-bold mb-2">Facebook Pages</h3>
                <p className="text-muted-foreground text-sm">
                  Publications, stories et événements Facebook
                </p>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-2">Instagram Business</h3>
                <p className="text-muted-foreground text-sm">
                  Posts, carrousels, stories et reels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi c'est indispensable ?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gain de temps massif</h3>
                  <p className="text-muted-foreground">
                    Plus besoin de publier 3 fois le même contenu. 2 minutes au lieu de 15 minutes par publication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cohérence garantie</h3>
                  <p className="text-muted-foreground">
                    Le même message partout. Évitez les oublis et les doublons.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📅</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Planification intelligente</h3>
                  <p className="text-muted-foreground">
                    Préparez vos publications à l'avance. Calendrier éditorial intégré. Suggestions de meilleurs horaires.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Statistiques unifiées</h3>
                  <p className="text-muted-foreground">
                    Visualisez les performances de chaque publication sur toutes les plateformes. Comparez et ajustez.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adaptation automatique</h3>
                  <p className="text-muted-foreground">
                    Le format s'adapte aux contraintes de chaque réseau : hashtags Instagram, liens Facebook, posts Google…
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
                to="/projets/campagnes-ciblees"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-3xl mb-3">📧</div>
                <h4 className="text-xl font-bold mb-2">Campagnes Ciblées</h4>
                <p className="text-muted-foreground text-sm">
                  Relancez vos clients automatiquement
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

export default PublicationMultiplateforme;
