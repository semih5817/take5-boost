import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Download, Palette, Zap } from "lucide-react";

const GenerateurFlyers = () => {
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
            
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Générateur de Flyers IA
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Créez des visuels professionnels pour vos promotions en quelques clics. 
              Fini les logiciels compliqués et les heures perdues.
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
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Décrivez votre promo</h3>
                <p className="text-muted-foreground text-sm">
                  "Pizza 2 pour 1", "Soldes -30%", "Nouveau menu"… L'IA comprend votre besoin.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. L'IA génère le design</h3>
                <p className="text-muted-foreground text-sm">
                  Choix automatique des couleurs, polices et mise en page selon votre marque.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Personnalisez</h3>
                <p className="text-muted-foreground text-sm">
                  Ajustez les textes, couleurs et images en quelques clics. Interface simple et intuitive.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. Téléchargez</h3>
                <p className="text-muted-foreground text-sm">
                  Export en HD, prêt pour l'impression ou les réseaux sociaux. Format A4, Instagram, Story…
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi c'est révolutionnaire ?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gain de temps énorme</h3>
                  <p className="text-muted-foreground">
                    Plus besoin de Photoshop, Canva ou d'un graphiste. 5 minutes suffisent pour créer un flyer pro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Économies substantielles</h3>
                  <p className="text-muted-foreground">
                    Fini les 50-200€ par visuel chez un graphiste. Créez autant de flyers que vous voulez.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cohérence de marque</h3>
                  <p className="text-muted-foreground">
                    L'IA garde en mémoire votre charte graphique. Tous vos visuels sont cohérents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-format automatique</h3>
                  <p className="text-muted-foreground">
                    Un clic pour adapter le même design en : Post Instagram, Story, A4 impression, bannière Facebook…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
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
        <section className="py-16 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Découvrez aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/projets/publication-multiplateforme"
                className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-3xl mb-3">📱</div>
                <h4 className="text-xl font-bold mb-2">Publication Multiplateforme</h4>
                <p className="text-muted-foreground text-sm">
                  Publiez sur toutes vos plateformes en un seul clic
                </p>
              </Link>
              
              <Link 
                to="/projets/campagnes-ciblees"
                className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-all"
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

export default GenerateurFlyers;
