import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Documentation = () => {
  const guides = [
    {
      category: '🚀 Démarrage Rapide',
      items: [
        { title: 'Installation et Configuration', time: '5 min', difficulty: 'Facile' },
        { title: 'Connexion Google Business', time: '3 min', difficulty: 'Facile' },
        { title: 'Premier Avis Automatique', time: '10 min', difficulty: 'Moyen' }
      ]
    },
    {
      category: '🤖 Intelligence Artificielle',
      items: [
        { title: 'Configuration des Réponses IA', time: '15 min', difficulty: 'Moyen' },
        { title: 'Personnalisation du Ton', time: '10 min', difficulty: 'Moyen' },
        { title: 'Règles de Modération', time: '8 min', difficulty: 'Facile' }
      ]
    },
    {
      category: '📊 Analytics et Reporting',
      items: [
        { title: 'Comprendre le Dashboard', time: '12 min', difficulty: 'Facile' },
        { title: 'Exporter les Rapports', time: '5 min', difficulty: 'Facile' },
        { title: 'Analyses Avancées', time: '20 min', difficulty: 'Difficile' }
      ]
    },
    {
      category: '⚙️ API et Intégrations',
      items: [
        { title: 'Obtenir vos Clés API', time: '5 min', difficulty: 'Moyen' },
        { title: 'Webhooks', time: '15 min', difficulty: 'Difficile' },
        { title: 'Intégrations Tierces', time: '10 min', difficulty: 'Moyen' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto py-20 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Guides complets et tutoriels pour maîtriser TakeFive
          </p>
        </section>

        {/* Guides */}
        <div className="max-w-5xl mx-auto px-5 pb-20">
          {guides.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="group bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 flex justify-between items-center cursor-pointer transition-all hover:translate-x-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <div className="flex gap-5 text-sm text-muted-foreground">
                        <span>⏱️ {item.time}</span>
                        <span>📊 {item.difficulty}</span>
                      </div>
                    </div>
                    <span className="text-2xl text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* API Banner */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-primary/30 rounded-2xl p-10 text-center mt-16">
            <h2 className="text-3xl font-black mb-4 text-foreground">📡 Documentation API</h2>
            <p className="text-muted-foreground mb-8">Intégrez TakeFive à vos outils avec notre API RESTful</p>
            <a 
              href="/nous-contacter" 
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
            >
              Voir la documentation API →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
