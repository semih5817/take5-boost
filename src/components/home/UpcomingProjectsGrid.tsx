import { Link } from "react-router-dom";

export const UpcomingProjectsGrid = () => {
  const projects = [
    {
      icon: "🎨",
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
      gradient: "from-orange-400 to-pink-400"
    },
    {
      icon: "📱",
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
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: "🎁",
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
      gradient: "from-yellow-400 to-red-400"
    },
    {
      icon: "📧",
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
      gradient: "from-green-400 to-teal-400"
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
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🚀 Bientôt disponible
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Nous développons de nouvelles fonctionnalités pour vous aider à aller encore plus loin.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="relative bg-gradient-to-br from-[#1e2a4a] to-[#2d1b4e] rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:scale-105 cursor-pointer"
            >
              {/* Badges en haut */}
              <div className="flex gap-2 mb-4">
                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${
                      badge === "Nouveau" ? "bg-red-500" : "bg-purple-500"
                    } text-white text-xs font-semibold rounded-full uppercase`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Icône/Image du projet - CENTRÉ */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-6xl">{project.icon}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${getTagColorClass(tag.color)} text-xs font-medium rounded-lg`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Métriques */}
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

              {/* Bouton CTA */}
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
