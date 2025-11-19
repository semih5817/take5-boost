import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MultiPublicationSection } from "@/components/home/MultiPublicationSection";
import { ProjectLeadCapture } from "@/components/ProjectLeadCapture";
import { Link } from "react-router-dom";

const PublicationMultiplateforme = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header avec breadcrumb */}
      <header className="bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-purple-400">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/#projets" className="hover:text-purple-400">Projets</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Publication Multiplateforme</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Publication Multiplateforme
            </span>
          </h1>
        </div>
      </header>

      {/* Section complète récupérée */}
      <MultiPublicationSection />

      {/* CTA Lead Capture */}
      <ProjectLeadCapture projectName="publication-multiplateforme" />

      {/* Maillage interne - Autres projets */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Découvrez aussi nos autres projets
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Mini-carte Générateur Flyers */}
            <Link 
              to="/projets/generateur-flyers"
              className="bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Générateur de Flyers IA
              </h3>
              <p className="text-gray-400 text-sm">
                Créez des visuels pros en moins d'une minute
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

export default PublicationMultiplateforme;
