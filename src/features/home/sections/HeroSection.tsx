import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.png";
import { HERO_HIGHLIGHTS } from "../data/highlights";

export const HeroSection = () => {
  const handleScrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="hero-backdrop overflow-hidden pt-12 pb-20 md:pt-20">
      <div className="container-tight grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
            <Sparkles className="h-4 w-4 text-white" />
            <span>IA locale</span>
            <span className="text-white/40">2025</span>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Passez 1er sur Google</p>
            <h1 className="mt-4 font-heading text-4xl leading-tight text-white md:text-6xl md:leading-[1.1]">
              Votre fiche Google optimisée en automatique.
            </h1>
            <p className="mt-6 text-lg text-white/70 md:text-xl">
              Take 5 collecte les avis, répond via IA, relance vos clients et vous envoie un reporting WhatsApp chaque mois.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="cta-shadow w-full rounded-full bg-gradient-to-r from-[#766EFF] via-[#9F6BFF] to-[#FF5CA8] px-8 text-base font-semibold text-white shadow-glow transition hover:opacity-90"
              onClick={handleScrollToForm}
            >
              Essayer gratuitement 1 mois
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              Voir la démo
            </Button>
          </div>

          <p className="text-sm text-white/60">
            ✓ Aucun engagement • ✓ Alertes négatives en 30s • ✓ Plaque NFC incluse
          </p>

          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-3">
            {HERO_HIGHLIGHTS.map((highlight) => (
              <div key={highlight.label}>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{highlight.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hero-spotlight absolute inset-x-0 top-0 h-64 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[32px] border-white/10 bg-gradient-to-br from-[#0E1024] to-[#040512]/80 p-6 shadow-soft">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Tableau de bord Take 5</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-white">Live</span>
            </div>
            <div className="mt-4 rounded-3xl border border-white/5 bg-[#050714] p-3">
              <img src={heroProduct} alt="Aperçu dashboard Take 5" className="w-full rounded-2xl object-cover" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-emerald-200">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/70">Avis positifs</p>
                <p className="mt-2 text-3xl font-semibold text-white">94%</p>
                <p className="text-xs text-white/60">vs 78% avant Take 5</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-white" />
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Alertes</p>
                </div>
                <p className="mt-2 text-lg font-semibold">WhatsApp + Email</p>
                <p className="text-xs text-white/60">Alertes en 30 secondes en cas d'avis négatif.</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current text-amber-300" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">4.9/5 note moyenne</p>
                <p className="text-xs text-white/60">127 commerces déjà boostés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
