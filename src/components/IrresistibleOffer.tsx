import { useState, useEffect } from "react";
import {
  Zap,
  Users,
  Shield,
  TrendingUp,
  Lock,
  RefreshCw,
  Sparkles,
  Award,
  Gift,
  HeadphonesIcon,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const IrresistibleOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const guarantees = [
    {
      icon: Shield,
      title: "Satisfait ou remboursé 30 jours",
      badge: "100% garanti",
      description:
        "Vous n'êtes pas convaincu ? On vous rembourse intégralement, sans question.",
    },
    {
      icon: TrendingUp,
      title: "Résultats garantis sous 7 jours",
      badge: "Résultats mesurables",
      description:
        "Votre premier rapport WhatsApp prouvera les gains d'avis et de visibilité. Ou remboursé.",
    },
    {
      icon: Lock,
      title: "Sécurité & confidentialité",
      badge: "Certifié Google",
      description:
        "Connexion 100% via API Google officielle. Vos données sont protégées et cryptées.",
    },
    {
      icon: RefreshCw,
      title: "Sans engagement",
      badge: "Liberté totale",
      description:
        "Annulez en 1 clic à tout moment depuis votre tableau de bord. Pas de frais cachés.",
    },
  ];

  const bonuses = [
    {
      icon: Sparkles,
      title: "Audit IA personnalisé",
      description:
        "Analyse complète de votre fiche Google avec recommandations d'optimisation",
      originalPrice: "197€",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      icon: Award,
      title: "Réécriture description SEO",
      description:
        "Notre IA réécrit votre description Google Business pour maximiser votre visibilité",
      originalPrice: "147€",
      gradient: "from-primary/20 to-purple-500/20",
    },
    {
      icon: Gift,
      title: "Pack Réputation",
      description: "10 modèles de réponses IA personnalisés selon votre secteur d'activité",
      originalPrice: "97€",
      gradient: "from-purple-500/20 to-blue-500/20",
    },
    {
      icon: HeadphonesIcon,
      title: "Formation express",
      description:
        "'Répondre comme un pro aux avis Google' - Vidéo de 20min avec conseils d'experts",
      originalPrice: "67€",
      gradient: "from-blue-500/20 to-green-500/20",
    },
  ];

  const faqs = [
    {
      icon: AlertCircle,
      color: "text-blue-500",
      question: "Et si l'IA se trompe dans ses réponses ?",
      answer:
        "Chaque réponse générée est corrigible manuellement avant publication. Vous gardez le contrôle total. De plus, vous pouvez activer le mode 'validation manuelle' pour approuver chaque réponse avant envoi.",
    },
    {
      icon: AlertCircle,
      color: "text-purple-500",
      question: "Et si je veux arrêter le service ?",
      answer:
        "Vous pouvez annuler en 1 clic depuis votre tableau de bord. Si vous avez souscrit une offre longue durée, nous proposons un remboursement proratisé sur les mois non utilisés (sous 30 jours).",
    },
    {
      icon: AlertCircle,
      color: "text-green-500",
      question: "Est-ce vraiment sécurisé ?",
      answer:
        "Absolument ! La connexion se fait 100% via l'API Google officielle. Nous ne stockons jamais vos identifiants. Vos données sont cryptées et hébergées en Europe (RGPD compliant).",
    },
    {
      icon: AlertCircle,
      color: "text-orange-500",
      question: "Ça marche pour tous les secteurs ?",
      answer:
        "Oui ! Take Five fonctionne pour restaurants, coiffeurs, garages, hôtels, boutiques, cabinets médicaux, services B2B... Toute entreprise avec une fiche Google Business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-16">
        {/* Titre principal */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-white animate-pulse px-6 py-2">
            🎁 UNE OFFRE QUI DÉFIE TOUTE CONCURRENCE
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold">
            Pourquoi Take Five est une offre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              irrésistible
            </span>
          </h2>
        </div>

        {/* SECTION 1 : Timer d'urgence */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/30">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-destructive animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold text-destructive">
                  🔥 OFFRE À DURÉE LIMITÉE
                </h3>
                <Zap className="w-6 h-6 text-destructive animate-pulse" />
              </div>
              <p className="text-lg">
                -25% de réduction valable pour les 50 premiers abonnements Pro
              </p>
            </div>

            {/* Timer */}
            <div className="flex justify-center gap-4">
              {[
                { label: "Heures", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Secondes", value: timeLeft.seconds },
              ].map((unit, index) => (
                <div
                  key={index}
                  className="bg-background border-2 border-destructive/30 rounded-xl p-4 min-w-[80px]"
                >
                  <p className="text-3xl font-bold text-destructive text-center">
                    {unit.value.toString().padStart(2, "0")}
                  </p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{unit.label}</p>
                </div>
              ))}
            </div>

            {/* Badge places restantes */}
            <div className="flex justify-center">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2">
                <Users className="w-4 h-4 mr-2" />
                👥 37/50 places restantes
              </Badge>
            </div>
          </div>
        </Card>

        {/* SECTION 2 : 4 Garanties béton */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            💎 Des{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              garanties béton
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <guarantee.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      {guarantee.badge}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold">{guarantee.title}</h4>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION 3 : 4 Bonus exclusifs */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              🎁 Des bonus exclusifs d'une valeur de 508€
            </h3>
            <p className="text-lg text-muted-foreground">
              Offerts avec les formules 1 an, 2 ans et 4 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="relative p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  OFFERT
                </Badge>

                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bonus.gradient} flex items-center justify-center`}
                  >
                    <bonus.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h4 className="text-lg font-bold">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>

                  <div className="space-y-1">
                    <p className="text-2xl line-through text-muted-foreground">
                      {bonus.originalPrice}
                    </p>
                    <p className="text-sm font-bold text-green-500">GRATUIT</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            = 508€ de valeur ajoutée OFFERTE 🎉
          </p>
        </div>

        {/* SECTION 4 : Réponses aux objections */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            ❓ Vos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              questions légitimes
            </span>
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <faq.icon className={`w-6 h-6 ${faq.color} shrink-0 mt-1`} />
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION 5 : Comparaison Avant/Après */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            📊 Avant VS Après Take Five
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte AVANT */}
            <Card className="p-8 bg-gradient-to-br from-destructive/5 to-orange-500/5 border-destructive/20">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-6xl mb-4">😰</p>
                  <h4 className="text-2xl font-bold text-destructive">AVANT Take Five</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "3h/semaine perdues à gérer les avis",
                    "Avis négatifs ignorés pendant des jours",
                    "Pas de suivi de la performance",
                    "Visibilité qui chute face aux concurrents",
                    "Stress permanent sur la réputation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-destructive">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Carte APRÈS */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-6xl mb-4">🚀</p>
                  <h4 className="text-2xl font-bold text-primary">APRÈS Take Five</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "100% automatisé, zéro temps perdu",
                    "Alerte WhatsApp en <2min sur avis négatif",
                    "Rapport mensuel détaillé automatique",
                    "+64% de visibilité garantie",
                    "Sérénité totale 24/7",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* SECTION 6 : CTA final puissant */}
        <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-4 border-primary text-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                révolutionner
              </span>{" "}
              votre fiche Google ?
            </h3>

            <p className="text-lg text-muted-foreground">
              Rejoignez les <span className="text-primary font-bold">247 entreprises</span> qui ont
              déjà automatisé leur réputation en ligne.
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 text-xl px-12 py-8 group"
            >
              🎁 J'essaie 1 mois GRATUIT
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground">
              ✓ Aucune carte bancaire requise • ✓ Sans engagement • ✓ Installation en 5 min
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
