import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const DevenirPartenaire = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with your actual endpoint)
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      setEmail('');

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      console.log('Email submitted:', email);
    }, 1500);
  };

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const advantages = [
    {
      icon: '💸',
      title: 'Revenus Récurrents',
      description: 'Commissions mensuelles sur tous vos clients, aussi longtemps qu\'ils restent abonnés. Créez une source de revenus passive et prévisible.'
    },
    {
      icon: '🎯',
      title: 'Cible Qualifiée',
      description: 'Commerçants locaux, restaurants, artisans... Une clientèle facile à prospecter et à convaincre avec un besoin réel.'
    },
    {
      icon: '🚀',
      title: 'Produit qui Vend',
      description: 'TakeFive résout un vrai problème : la gestion chronophage des avis Google. Taux de conversion élevé et satisfaction client garantie.'
    },
    {
      icon: '📚',
      title: 'Formation Complète',
      description: 'Scripts de vente, objections courantes, emails de prospection... Tout le matériel nécessaire pour réussir dès le premier jour.'
    },
    {
      icon: '🤝',
      title: 'Support Dédié',
      description: 'Une équipe à votre écoute pour répondre à toutes vos questions et celles de vos clients. Chat, email et visio disponibles.'
    },
    {
      icon: '📊',
      title: 'Tracking en Temps Réel',
      description: 'Suivez vos prospects, ventes et commissions en direct depuis votre dashboard personnel. Transparence totale garantie.'
    },
    {
      icon: '🎁',
      title: 'Bonus & Rewards',
      description: 'Challenges mensuels avec cash prizes, trips exclusifs et cadeaux pour les meilleurs partenaires. Soyez récompensé pour vos efforts.'
    },
    {
      icon: '⚡',
      title: 'Paiements Rapides',
      description: 'Virements automatiques tous les 15 du mois. Pas d\'attente interminable ni de paperasse compliquée.'
    },
    {
      icon: '🌍',
      title: 'Territoire Exclusif',
      description: 'Développez votre zone géographique sans concurrence interne. Vos clients = vos revenus, personne ne vous les prendra.'
    }
  ];

  const dashboardFeatures = [
    {
      icon: '📊',
      title: 'KPIs en Temps Réel',
      description: 'Clients du mois, MRR généré, commissions en attente, total versé... Tout sous les yeux.'
    },
    {
      icon: '🏆',
      title: 'Challenges Mensuels',
      description: 'Objectifs progressifs avec récompenses de 100€ à 600€. Atteignez les paliers et gagnez gros.'
    },
    {
      icon: '🥇',
      title: 'Classement National',
      description: 'Comparez-vous aux autres partenaires. Top 3 mensuel = bonus exclusif + reconnaissance publique.'
    },
    {
      icon: '👥',
      title: 'Gestion Prospects',
      description: 'CRM intégré pour suivre vos leads, relances automatiques et pipeline de vente optimisé.'
    },
    {
      icon: '📈',
      title: 'Stats Détaillées',
      description: 'Graphiques d\'évolution, taux de conversion, MRR par client... Analysez et optimisez.'
    },
    {
      icon: '🎓',
      title: 'Formation Continue',
      description: 'Modules vidéo, scripts actualisés, webinaires exclusifs... Montez en compétence en continu.'
    },
    {
      icon: '💬',
      title: 'Communauté Active',
      description: 'Échangez avec les autres partenaires, tips de la semaine, célébrations des succès.'
    },
    {
      icon: '⭐',
      title: 'Système de Niveaux',
      description: 'Bronze → Silver → Gold → Platinum. Plus vous vendez, plus vos avantages augmentent.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16 text-center">
        <div className="inline-block bg-primary/15 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
          🚀 Programme Partenaires 2024
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
          Devenez Partenaire<br/>TakeFive
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Gagnez des revenus récurrents en recommandant la plateforme #1 de gestion d'avis Google avec l'IA
        </p>
      </section>

      {/* Commission Banner */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 pb-16">
        <div className="bg-gradient-to-r from-primary to-pink-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              💰 Commission Récurrente à Vie
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Jusqu'à <strong>50%</strong> de commission sur chaque vente + bonus mensuels et challenges exclusifs<br/>
              <small className="text-sm opacity-80 block mt-2">Les détails complets de rémunération seront envoyés par email après inscription</small>
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section id="avantages" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 gradient-text">
          Pourquoi Devenir Partenaire ?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Des avantages incomparables pour développer votre activité
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-10px] hover:border-primary/50 hover:shadow-glow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <span className="text-5xl block mb-5">{advantage.icon}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 gradient-text">
            🎮 Votre Dashboard Partenaire
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Une plateforme intuitive pour gérer votre activité et maximiser vos revenus
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {dashboardFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-5 bg-background/60 rounded-2xl border border-primary/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
              >
                <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center p-6 bg-primary/10 rounded-2xl border border-dashed border-primary/30">
            <p className="text-primary font-semibold">
              🚧 Dashboard en développement - Disponible dès Janvier 2025<br/>
              <small className="text-muted-foreground font-normal block mt-2">Les premiers partenaires auront un accès anticipé en Beta</small>
            </p>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section id="contact" className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="bg-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
              Prêt à Démarrer ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Recevez immédiatement toutes les informations sur le programme et la grille de rémunération
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                className="flex-1 px-6 py-4 border-2 border-primary/30 rounded-xl bg-background/80 text-foreground text-base transition-all outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground"
                placeholder="votre@email.fr" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-6 text-base font-bold bg-gradient-to-r from-primary to-pink-500 hover:shadow-glow transition-all"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Recevoir les Détails →'}
              </Button>
            </form>

            {showSuccess && (
              <div className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 px-6 rounded-xl font-semibold animate-fade-in">
                ✓ Merci ! Consultez votre boîte email dans quelques instants.
              </div>
            )}

            <p className="text-sm text-muted-foreground mt-5">
              🔒 Vos données sont sécurisées. Nous ne spammons jamais.<br/>
              📧 Réponse sous 24h avec documentation complète et grille de commission.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevenirPartenaire;
