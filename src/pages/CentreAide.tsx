import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CentreAide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: '🚀',
      title: 'Démarrage',
      description: 'Configuration initiale et premiers pas',
      articles: 12
    },
    {
      icon: '🤖',
      title: 'Intelligence Artificielle',
      description: 'Réponses automatiques et personnalisation',
      articles: 8
    },
    {
      icon: '💳',
      title: 'Facturation',
      description: 'Paiements, abonnements et factures',
      articles: 6
    },
    {
      icon: '🔧',
      title: 'Paramètres',
      description: 'Configuration avancée du compte',
      articles: 10
    }
  ];

  const faqItems = [
    {
      question: 'Comment configurer mon compte TakeFive ?',
      answer: 'La configuration est simple : 1) Créez votre compte, 2) Connectez votre fiche Google Business, 3) Configurez les réponses automatiques. Le tout prend moins de 5 minutes !'
    },
    {
      question: "L'IA peut-elle vraiment répondre à tous mes avis ?",
      answer: "Oui ! Notre IA analyse le sentiment, le contexte et les mots-clés de chaque avis pour générer une réponse personnalisée et pertinente. Vous pouvez relire et modifier avant publication."
    },
    {
      question: 'Puis-je essayer gratuitement ?',
      answer: "Absolument ! Nous offrons 14 jours d'essai gratuit sans carte bancaire. Testez toutes les fonctionnalités premium sans engagement."
    },
    {
      question: 'Comment fonctionne la surveillance multi-plateformes ?',
      answer: 'TakeFive surveille automatiquement Google, Facebook, Trustpilot et autres plateformes. Vous recevez des notifications en temps réel pour chaque nouvel avis.'
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Vos données sont chiffrées (AES-256), hébergées en Europe (RGPD compliant) et jamais partagées avec des tiers. Nous prenons la sécurité très au sérieux.'
    },
    {
      question: "Puis-je changer d'offre à tout moment ?",
      answer: 'Oui, vous pouvez upgrader ou downgrader à tout moment. Les changements sont effectifs immédiatement et calculés au prorata.'
    },
    {
      question: 'Comment annuler mon abonnement ?',
      answer: 'Vous pouvez annuler à tout moment depuis votre dashboard, section Paramètres > Abonnement. Aucune question posée, annulation immédiate.'
    },
    {
      question: 'Quel est le délai de réponse du support ?',
      answer: 'Email : sous 24h en semaine. Chat : immédiat de 9h à 18h. Clients Premium : support prioritaire sous 2h.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto py-20 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Centre d'Aide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Trouvez rapidement les réponses à vos questions
          </p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              className="w-full px-6 py-5 pr-16 border-2 border-primary/30 rounded-2xl bg-card/60 backdrop-blur-xl text-foreground text-lg transition-all outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground"
              placeholder="Rechercher dans l'aide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-primary">🔍</span>
          </div>
        </section>

        {/* Categories */}
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="text-5xl block mb-5">{category.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <span className="text-sm text-primary font-semibold">{category.articles} articles →</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-5 mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-card/60 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all ${
                  openFaq === index ? 'border-primary/50' : 'border-primary/20'
                }`}
              >
                <button 
                  className="w-full p-6 flex justify-between items-center gap-5 text-left text-lg font-semibold text-foreground transition-all hover:bg-primary/5"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-6 h-6 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Banner */}
        <div className="max-w-3xl mx-auto px-5 mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-black mb-4 text-white">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-lg text-white/90 mb-8">Notre équipe est là pour vous aider</p>
            <Link 
              to="/nous-contacter" 
              className="inline-block px-10 py-4 bg-white text-primary rounded-xl font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30"
            >
              Contactez-nous →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CentreAide;
