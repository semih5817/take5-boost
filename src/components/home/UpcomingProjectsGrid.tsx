import { Link } from "react-router-dom";
import generatorMockup from "@/assets/generateur-flyers-mockup.png";
import publicationMockup from "@/assets/publication-multiplateforme-mockup.png";
import concoursMockup from "@/assets/concours-mockup.png";
import campaignsMockup from "@/assets/campagnes-sms-email-mockup.png";

export const UpcomingProjectsGrid = () => {
  const projects = [
    {
      image: generatorMockup,
      title: "Générateur de Flyers IA",
      description: "Créez des visuels professionnels pour vos promotions en quelques clics. L'IA génère le design, vous personnalisez, vous téléchargez. Fini les logiciels compliqués.",
      badges: ["Nouveau", "À venir"],
      tags: [
        { label: "Restauration", color: "orange" },
        { label: "Communication", color: "pink" }
      ],
      metrics: [
        { icon: "⏱️", label: "Temps", value: "<1 minute" },
        { icon: "💰", label: "Économie", value: "0€ graphiste" }
      ],
      link: "/projets/generateur-flyers",
      bgGradient: "from-orange-400/20 to-pink-400/20"
    },
    {
      image: publicationMockup,
      title: "Publication Multiplateforme",
      description: "Publiez sur Google, Facebook et Instagram depuis une seule interface. Un seul message, toutes vos plateformes à jour automatiquement.",
      badges: ["Nouveau", "À venir"],
      tags: [
        { label: "Automatisation", color: "blue" },
        { label: "Réseaux sociaux", color: "cyan" }
      ],
      metrics: [
        { icon: "⏱️", label: "Temps gagné", value: "45 min → 30 sec ⚡" },
        { icon: "📊", label: "Plateformes", value: "5 réseaux" }
      ],
      link: "/projets/publication-multiplateforme",
      bgGradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      image: concoursMockup,
      title: "Jeux Concours en 5 Minutes",
      description: "QR Code → Roue de la chance → Gain automatique. Collectez des contacts qualifiés et fidélisez vos clients avec un jeu simple et viral.",
      badges: ["Nouveau", "À venir"],
      tags: [
        { label: "Gamification", color: "yellow" },
        { label: "Fidélisation", color: "red" }
      ],
      metrics: [
        { icon: "⏱️", label: "Setup", value: "5 minutes" },
        { icon: "📊", label: "Résultat", value: "Base clients" }
      ],
      link: "/projets/concours-5-minutes",
      bgGradient: "from-yellow-400/20 to-red-400/20"
    },
    {
      image: campaignsMockup,
      title: "Campagnes SMS & Email Ciblées",
      description: "Relancez vos clients automatiquement avec des campagnes ciblées. Promotions, nouveautés, événements… L'outil s'occupe de tout.",
      badges: ["Nouveau", "À venir"],
      tags: [
        { label: "Marketing", color: "green" },
        { label: "Automation", color: "teal" }
      ],
      metrics: [
        { icon: "⏱️", label: "Automation", value: "100% auto" },
        { icon: "🔒", label: "Conformité", value: "RGPD" }
      ],
      link: "/projets/campagnes-sms-email",
      bgGradient: "from-green-400/20 to-teal-400/20"
    }
  ];

  const getTagColorClass = (color: string) => {
    const colors: Record<string, string> = {
      orange: "bg-orange-500/20 text-orange-400",
      pink: "bg-pink-500/20 text-pink-400",
      blue: "bg-blue-500/20 text-blue-400",
      cyan: "bg-cyan-500/20 text-cyan-400",
      yellow: "bg-yellow-500/20 text-yellow-400",
      red: "bg-red-500/20 text-red-400",
      green: "bg-green-500/20 text-green-400",
      teal: "bg-teal-500/20 text-teal-400"
    };
    return colors[color] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section className="py-24 px-6" id="projets-avenir">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🚀 Bientôt disponible
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nous développons de nouvelles fonctionnalités pour vous aider à aller encore plus loin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="relative bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105 hover:rotate-1 hover:shadow-2xl group"
            >
              <div className="flex gap-2 mb-4">
                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${badge === "Nouveau" ? "bg-red-500" : "bg-purple-500"} text-white text-xs font-semibold rounded-full uppercase`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gradient-to-br ${project.bgGradient}`}>
                <img 
                  src={project.image}
                  alt={`${project.title} - Interface TakeFive`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(30, 27, 75, 0.3) 50%, rgba(30, 27, 75, 0.9) 100%)'
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className={`px-3 py-1 ${getTagColorClass(tag.color)} text-xs font-medium rounded-lg`}>
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex items-center justify-between mb-6 text-sm">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-2xl">{metric.icon}</span>
                    <div>
                      <div className="text-gray-500 text-xs">{metric.label}</div>
                      <div className="text-white font-semibold">{metric.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                Voir le projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
