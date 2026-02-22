import { useState, useEffect, useRef } from "react";
import { CheckCircle, Star, Zap, Bell, MapPin, BarChart3, ArrowDown } from "lucide-react";
import EarningsSimulator from "@/components/partner/EarningsSimulator";
import RealisticScenarios from "@/components/partner/RealisticScenarios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    ville: "",
    terrain: "",
    disponibilite: "",
  });

  useEffect(() => {
    if (!formRef.current) return;
    const obs = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.2 });
    obs.observe(formRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone) {
      toast({ title: "Champs requis", description: "Nom et téléphone sont obligatoires.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("email_captures").insert({
      email: form.telephone,
      type: "partner",
      source: `${form.nom} | ${form.ville} | terrain:${form.terrain} | dispo:${form.disponibilite}`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue.", variant: "destructive" });
    } else {
      toast({ title: "Demande envoyée ✅", description: "Tu recevras ton code partenaire très vite." });
      setForm({ nom: "", telephone: "", ville: "", terrain: "", disponibilite: "" });
    }
  };

  const steps = [
    { n: "1", title: "Tu rejoins le réseau", desc: "On te donne un code partenaire personnel." },
    { n: "2", title: "Tu proposes TakeFive", desc: "Pitch simple, 2 minutes chrono." },
    { n: "3", title: "On signe et on onboard", desc: "TakeFive gère tout le processus client." },
    { n: "4", title: "Tu touches ta commission", desc: "Chaque mois, tant que le client paie." },
  ];

  const selling = [
    { icon: Zap, text: "Réponses IA 24/7 aux avis Google" },
    { icon: Bell, text: "Alertes instantanées si avis < 3 étoiles" },
    { icon: MapPin, text: "SEO local + GEO" },
    { icon: BarChart3, text: "Radar multi-plateformes + score de santé + rapport WhatsApp mensuel" },
  ];

  const tiers = [
    { name: "STARTER", months: 3, highlight: false, gold: false },
    { name: "ACTIVE", months: 4, highlight: false, gold: false },
    { name: "PRO", months: 5, highlight: true, gold: false },
    { name: "ELITE", months: 6, highlight: false, gold: true },
  ];

  const faqs = [
    { q: "Je dois faire du support client ?", a: "Non. TakeFive gère l'onboarding et le suivi." },
    { q: "Je dois gérer le client au quotidien ?", a: "Non. Ton rôle, c'est l'apport. On s'occupe du reste." },
    { q: "Quand suis-je payé ?", a: "Mensuellement, tant que le client reste actif, dans la limite des mois de ton palier." },
    { q: "Je suis débutant en vente, c'est possible ?", a: "Oui. Le pitch est simple et tout se passe sur WhatsApp." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* HERO */}
      <section className="min-h-[100svh] flex items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Réseau de commerciaux{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              partout en France
            </span>{" "}
            via WhatsApp
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Monétise tes passages en commerces. Tu proposes TakeFive. On s'occupe du reste.
          </p>
          <div className="flex flex-col items-start gap-3 max-w-md mx-auto mb-10 text-left">
            {["Code partenaire personnel", "Suivi & reporting sur WhatsApp", "Commission mensuelle (jusqu'à 6 mois selon ton palier)"].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-200">{t}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#formulaire">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
                Recevoir mon code partenaire
              </Button>
            </a>
            <a href="#paliers">
              <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
                Voir les paliers
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Comment ça marche</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((s) => (
              <Card key={s.n} className="bg-slate-800/50 border-slate-700 rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300">
                <span className="text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{s.n}</span>
                <h3 className="text-white font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI LES COMMERCES DISENT OUI */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Pourquoi les commerces disent oui</h2>
          <Card className="bg-slate-800 border-blue-500/30 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                "Les avis Google font souvent la différence sur le volume d'appels : urgence, proximité, confiance",
                "Réponses IA 24/7 + alerte immédiate si avis négatif",
                "Le patron gagne du temps et protège sa réputation sans rien faire",
              ].map((t) => (
                <div key={t} className="flex items-start gap-4">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-200 text-lg">{t}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CE QUE TU VAS VENDRE */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Ce que tu vas vendre — en 15 secondes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {selling.map((s) => (
              <Card key={s.text} className="bg-slate-800/50 border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors">
                <s.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="text-slate-200 text-sm font-medium">{s.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT TU ES PAYÉ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Comment tu es payé</h2>
          <Card className="bg-slate-800/50 border-l-4 border-l-blue-500 border-slate-700 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <ul className="space-y-5 text-lg text-slate-200">
              <li>💰 1 client signé = commission mensuelle récurrente</li>
              <li>📆 Tu es payé pendant X mois selon ton palier (de 3 à 6 mois)</li>
              <li>🔁 Paiement mensuel tant que le client reste actif</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* PALIERS */}
      <section id="paliers" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Les paliers de commission</h2>
          <p className="text-slate-400 text-center mb-14 max-w-2xl mx-auto">
            La seule différence entre les paliers : la durée pendant laquelle tu touches la commission par client.
          </p>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {tiers.map((t) => (
              <Card
                key={t.name}
                className={`min-w-[220px] md:min-w-0 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.03] ${
                  t.highlight
                    ? "bg-slate-800 border-2 border-blue-500/60 scale-[1.02]"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 ${
                    t.gold
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  }`}
                >
                  {t.name}
                </span>
                <p className="text-4xl font-black text-white mb-1">{t.months} mois</p>
                <p className="text-slate-400 text-sm">par client apporté</p>
                <p className="text-slate-500 text-xs mt-2">tant que le client paie</p>
              </Card>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-10 max-w-2xl mx-auto text-sm">
            Tu choisis ton palier. Plus ton palier est élevé, plus longtemps tu touches ta commission sur chaque client apporté.
            <br />
            <strong className="text-slate-300">Exemple : Palier ELITE = jusqu'à 6 mois de commission par client actif.</strong>
          </p>
          <div className="text-center mt-8">
            <a href="#formulaire">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg">
                Recevoir mon code partenaire
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SIMULATEUR */}
      <EarningsSimulator />

      {/* SCÉNARIOS */}
      <RealisticScenarios />

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-slate-800/50 border-slate-700 rounded-xl px-6 border">
                <AccordionTrigger className="text-white hover:no-underline text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-400">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire" className="py-20 px-4 scroll-mt-20" ref={formRef}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Rejoins le réseau</h2>
          <p className="text-slate-400 text-center mb-10">
            Récupère ton code partenaire et commence à proposer TakeFive dès aujourd'hui.
          </p>
          <Card className="bg-slate-800 border-slate-700 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-slate-300 mb-1 block">Nom complet *</label>
                <Input
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  placeholder="Jean Dupont"
                  className="bg-slate-900 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1 block">Téléphone *</label>
                <Input
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  placeholder="06 12 34 56 78"
                  className="bg-slate-900 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1 block">Ville / Département</label>
                <Input
                  value={form.ville}
                  onChange={(e) => setForm({ ...form, ville: e.target.value })}
                  placeholder="Paris, 75"
                  className="bg-slate-900 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1 block">As-tu déjà fait du terrain ?</label>
                <Select value={form.terrain} onValueChange={(v) => setForm({ ...form, terrain: v })}>
                  <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oui">Oui</SelectItem>
                    <SelectItem value="non">Non</SelectItem>
                    <SelectItem value="un-peu">Un peu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1 block">Disponibilité</label>
                <Select value={form.disponibilite} onValueChange={(v) => setForm({ ...form, disponibilite: v })}>
                  <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">1h / jour</SelectItem>
                    <SelectItem value="2h">2h / jour</SelectItem>
                    <SelectItem value="weekend">Week-end uniquement</SelectItem>
                    <SelectItem value="plein">Temps plein</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg rounded-xl"
              >
                {loading ? "Envoi en cours..." : "Recevoir mon code partenaire"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* STICKY CTA MOBILE */}
      {isMobile && !formVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3">
          <a href="#formulaire" className="block">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 text-lg rounded-xl shadow-2xl">
              Recevoir mon code partenaire
            </Button>
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Partner;
