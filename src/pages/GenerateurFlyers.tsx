import { useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FlyerGeneratorSection } from "@/components/home/FlyerGeneratorSection";
import { ProjectLeadCapture } from "@/components/ProjectLeadCapture";
import { Link } from "react-router-dom";

const GenerateurFlyers = () => {
  // Forcer le scroll en haut au montage de la page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb discret */}
      <nav className="fixed top-24 left-6 z-10 text-sm text-gray-400 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg">
        <Link to="/" className="hover:text-purple-400">Accueil</Link>
        <span className="mx-2">/</span>
        <Link to="/#projets-avenir" className="hover:text-purple-400">Projets</Link>
        <span className="mx-2">/</span>
        <span className="text-white">Générateur de Flyers</span>
      </nav>

      {/* Section complète récupérée */}
      <FlyerGeneratorSection />

      {/* CTA Lead Capture */}
      <ProjectLeadCapture projectName="generateur-flyers" />

      {/* Maillage interne - Autres projets */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Découvrez aussi nos autres projets
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Mini-carte Publication Multiplateforme */}
            <Link 
              to="/projets/publication-multiplateforme"
              className="bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Publication Multiplateforme
              </h3>
              <p className="text-gray-400 text-sm">
                Un seul message, toutes vos plateformes à jour
              </p>
            </Link>

            {/* Mini-carte Concours */}
            <Link 
              to="/projets/concours-5-minutes"
              className="bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Jeux Concours
              </h3>
              <p className="text-gray-400 text-sm">
                Collectez des contacts qualifiés en 5 minutes
              </p>
            </Link>

            {/* Mini-carte Campagnes SMS & Email */}
            <Link 
              to="/projets/campagnes-sms-email"
              className="bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Campagnes Ciblées
              </h3>
              <p className="text-gray-400 text-sm">
                Relancez vos clients automatiquement
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerateurFlyers;
