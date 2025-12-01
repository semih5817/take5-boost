import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Star, 
  Zap, 
  MessageCircle, 
  Brain,
  Bell,
  FileText,
  CheckCircle,
  ThumbsUp,
  Globe,
  Smartphone,
  Mail,
  Users,
  Target
} from "lucide-react";

const APropos = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Pourquoi TakeFive existe ?
          </h1>
          <p className="text-xl md:text-2xl text-[#4F46E5] font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            L'histoire d'une solution née d'une frustration quotidienne
          </p>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            En 2024, nous avons constaté que des milliers d'entreprises locales perdaient des clients chaque jour à cause d'une simple mauvaise gestion de leur présence en ligne. TakeFive est notre réponse à ce problème.
          </p>
        </div>
      </section>

      {/* Section 1: Le Problème Identifié */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0f1f35]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Le constat qui a tout déclenché
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-[#4F46E5] mb-2">87%</div>
              <p className="text-slate-400">des consommateurs consultent Google avant de choisir une entreprise locale</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-[#4F46E5] mb-2">6/10</div>
              <p className="text-slate-400">entreprises ne répondent jamais aux avis clients</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-[#4F46E5] mb-2">-40%</div>
              <p className="text-slate-400">de clients potentiels perdus avec des fiches Google Business obsolètes</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-[#4F46E5] mb-2">5-10h</div>
              <p className="text-slate-400">par semaine perdues sur la gestion de la présence en ligne</p>
            </div>
          </div>

          <blockquote className="bg-gradient-to-r from-[#4F46E5]/20 to-purple-600/20 border-l-4 border-[#4F46E5] rounded-r-2xl p-6 md:p-8">
            <p className="text-lg md:text-xl text-white italic">
              "Nous avons rencontré des dizaines d'entrepreneurs qui nous disaient : 'Je n'ai pas le temps de gérer tout ça, mais je sais que ça me coûte des clients.'"
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 2: Notre Solution */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            TakeFive : 5 minutes pour une présence en ligne optimale
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Une solution pensée pour les entrepreneurs qui n'ont pas de temps à perdre
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Automatisation Intelligente */}
            <div className="bg-[#0f1f35] border border-[#1e293b] rounded-2xl p-6 md:p-8 hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#4F46E5]/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#4F46E5]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automatisation Intelligente</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <span>Réponses aux avis Google automatiques et personnalisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <span>Publication automatique de posts optimisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <span>Mise à jour en temps réel de vos informations</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#0f1f35] border border-[#1e293b] rounded-2xl p-6 md:p-8 hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp : La Simplicité</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>L'app que vous utilisez déjà 50 fois par jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Pas besoin d'apprendre un nouvel outil complexe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Notifications instantanées sur votre téléphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Contrôle total depuis votre poche</span>
                </li>
              </ul>
            </div>

            {/* IA sur Mesure */}
            <div className="bg-[#0f1f35] border border-[#1e293b] rounded-2xl p-6 md:p-8 hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligence Artificielle sur Mesure</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span>IA entraînée spécifiquement pour votre secteur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span>Ton de voix qui respecte votre identité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span>Apprentissage continu de votre style</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Le ROI Concret */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0f1f35]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Des résultats mesurables dès le premier mois
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 text-center hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <TrendingUp className="w-8 h-8 text-[#4F46E5] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] mb-2">+45%</div>
              <p className="text-sm text-slate-400">Augmentation moyenne de la visibilité en ligne</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 text-center hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <Clock className="w-8 h-8 text-[#4F46E5] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] mb-2">8h/sem</div>
              <p className="text-sm text-slate-400">Temps économisé sur la gestion manuelle</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 text-center hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <DollarSign className="w-8 h-8 text-[#4F46E5] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] mb-2">3x à 5x</div>
              <p className="text-sm text-slate-400">ROI moyen sur les 6 premiers mois</p>
            </div>
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 text-center hover:border-[#4F46E5]/50 transition-all duration-300 hover:-translate-y-1">
              <Star className="w-8 h-8 text-[#4F46E5] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] mb-2">4.8/5</div>
              <p className="text-sm text-slate-400">Note moyenne des fiches Google de nos clients</p>
            </div>
          </div>

          <blockquote className="bg-gradient-to-r from-[#4F46E5]/10 to-purple-600/10 border border-[#4F46E5]/30 rounded-2xl p-6 md:p-8">
            <p className="text-lg text-white italic mb-4">
              "Avant TakeFive, je passais mes soirées à gérer mes avis. Maintenant, je reçois juste une notification WhatsApp, je valide en 30 secondes, et c'est fait. J'ai récupéré mes soirées et mes clients sont plus satisfaits."
            </p>
            <footer className="text-slate-400">
              — <span className="text-[#4F46E5] font-semibold">Marie L.</span>, Restauratrice à Nancy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Section 4: Gain de Temps Détaillé */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Combien de temps TakeFive vous fait vraiment gagner ?
          </h2>

          <div className="bg-[#0f1f35] border border-[#1e293b] rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-[#1e293b] p-4">
              <div className="text-slate-400 font-semibold text-sm md:text-base">Tâche</div>
              <div className="text-red-400 font-semibold text-sm md:text-base text-center">Sans TakeFive</div>
              <div className="text-green-400 font-semibold text-sm md:text-base text-center">Avec TakeFive</div>
            </div>
            
            {[
              { task: "Répondre aux avis", without: "2-3h/semaine", with: "15 min/semaine" },
              { task: "Créer des posts", without: "2h/semaine", with: "5 min/semaine" },
              { task: "Mettre à jour les infos", without: "1h/mois", with: "2 min/mois" },
              { task: "Analyser les performances", without: "1h/semaine", with: "Automatique" },
              { task: "Se former aux outils", without: "10-20h", with: "0h" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-[#0a1628]/50' : ''}`}>
                <div className="text-white text-sm md:text-base">{row.task}</div>
                <div className="text-red-400 text-center text-sm md:text-base">{row.without}</div>
                <div className="text-green-400 text-center text-sm md:text-base">{row.with}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#4F46E5] to-purple-600 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white text-lg md:text-xl mb-2">
              <span className="font-bold">Total économisé :</span> 8 à 10 heures par semaine
            </p>
            <p className="text-white/80">
              = 40 heures par mois = 480 heures par an = <span className="font-bold text-white">12 semaines de travail récupérées !</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Facilité d'Utilisation */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0f1f35]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Si simple que votre grand-mère pourrait l'utiliser
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            3 étapes pour gérer votre présence en ligne
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 md:p-8 text-center hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#4F46E5]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-[#4F46E5]" />
              </div>
              <div className="text-[#4F46E5] font-bold text-sm mb-2">ÉTAPE 1</div>
              <h3 className="text-xl font-bold text-white mb-3">Vous recevez</h3>
              <p className="text-slate-400">Un message WhatsApp : "Nouveau commentaire sur votre fiche Google"</p>
            </div>

            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 md:p-8 text-center hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#4F46E5]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#4F46E5]" />
              </div>
              <div className="text-[#4F46E5] font-bold text-sm mb-2">ÉTAPE 2</div>
              <h3 className="text-xl font-bold text-white mb-3">Vous lisez</h3>
              <p className="text-slate-400">Notre IA vous propose une réponse adaptée et dans votre style</p>
            </div>

            <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 md:p-8 text-center hover:border-[#4F46E5]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-green-500 font-bold text-sm mb-2">ÉTAPE 3</div>
              <h3 className="text-xl font-bold text-white mb-3">Vous validez</h3>
              <p className="text-slate-400">Un simple 👍 et c'est publié. Ou modifiez en 2 clics.</p>
            </div>
          </div>

          <div className="bg-[#0a1628] border border-[#4F46E5]/30 rounded-2xl p-6 text-center">
            <p className="text-white">
              <span className="text-[#4F46E5] font-bold">Pas d'application à télécharger.</span> Pas de tableau de bord complexe. Pas de formation nécessaire. <span className="text-[#4F46E5] font-bold">Juste WhatsApp</span>, que vous maîtrisez déjà.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Pourquoi WhatsApp ? */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            WhatsApp : Le choix évident qu'on est les seuls à avoir fait
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {[
                "2,5 milliards d'utilisateurs dans le monde",
                "Application la plus utilisée en France",
                "Taux d'ouverture de 98% (vs 20% pour les emails)",
                "Temps de réponse moyen : 90 secondes",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0f1f35] border border-[#1e293b] rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Interface familière = zéro courbe d'apprentissage",
                "Notifications push natives",
                "Accessible partout, tout le temps",
                'Pas de "encore un compte à créer"',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0f1f35] border border-[#1e293b] rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="bg-gradient-to-r from-green-500/10 to-[#4F46E5]/10 border border-green-500/30 rounded-2xl p-6 md:p-8">
            <p className="text-lg text-white italic">
              "Nous aurions pu créer une belle application avec un tableau de bord sophistiqué. Mais honnêtement ? Vous auriez ouvert l'app 2 fois puis oublié. Avec WhatsApp, vous êtes déjà dessus 50 fois par jour."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 7: Notre Vision */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0f1f35]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            L'avenir de la gestion de présence en ligne
          </h2>
          
          <p className="text-slate-400 text-lg mb-8">
            Nous croyons que la technologie doit s'adapter aux humains, pas l'inverse. Les entrepreneurs ont déjà 1000 choses à gérer. Ils n'ont pas besoin d'un outil de plus à maîtriser.
          </p>

          <div className="bg-[#0a1628] border border-[#1e293b] rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-white font-semibold mb-4">TakeFive, c'est notre vision d'un monde où :</p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                { icon: Zap, text: "La technologie est invisible mais puissante" },
                { icon: Smartphone, text: "Les outils s'intègrent dans vos habitudes existantes" },
                { icon: Brain, text: "L'IA travaille pour vous, pas contre vous" },
                { icon: Users, text: "Chaque entrepreneur peut avoir une présence en ligne professionnelle" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#4F46E5] shrink-0" />
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4F46E5]/20 to-purple-600/20 border border-[#4F46E5]/30 rounded-2xl p-6">
            <Target className="w-10 h-10 text-[#4F46E5] mx-auto mb-4" />
            <p className="text-white font-bold text-lg">Notre mission :</p>
            <p className="text-[#4F46E5] font-bold text-xl">
              Faire gagner 1 million d'heures aux entrepreneurs français d'ici 2027.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#4F46E5] to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à reprendre le contrôle de votre temps ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Rejoignez les centaines d'entrepreneurs qui ont déjà repris 8h par semaine
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/#subscription-form">
              <Button className="bg-white text-[#4F46E5] hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-xl">
                Essayer TakeFive gratuitement
              </Button>
            </Link>
            <Link to="/nous-contacter">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl">
                Parler à un conseiller
              </Button>
            </Link>
          </div>
          
          <p className="text-white/60 text-sm">
            Sans engagement • Gratuit pendant 14 jours • Annulation en 1 clic
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
