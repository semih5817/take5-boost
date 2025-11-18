import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const UpcomingProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      icon: "🎨",
      title: "Générateur de Flyers IA",
      description: "Créez des visuels professionnels pour vos promotions en quelques clics. L'IA génère le design, vous personnalisez, vous téléchargez. Fini les logiciels compliqués.",
      link: "/projets/generateur-flyers"
    },
    {
      icon: "📱",
      title: "Publication Multiplateforme",
      description: "Publiez sur Google, Facebook et Instagram depuis une seule interface. Un seul message, toutes vos plateformes à jour automatiquement.",
      link: "/projets/publication-multiplateforme"
    },
    {
      icon: "📧",
      title: "Campagnes SMS & Email Ciblées",
      description: "Relancez vos clients automatiquement avec des campagnes ciblées. Promotions, nouveautés, événements… L'outil s'occupe de tout.",
      link: "/projets/campagnes-ciblees"
    }
  ];

  // Auto-scroll toutes les 10 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🚀 Bientôt disponible
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Nous développons de nouvelles fonctionnalités pour vous aider à aller encore plus loin.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-600 w-2'
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
