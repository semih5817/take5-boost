import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROBLEM_POINTS, SOLUTION_PILLARS } from "../data/operations";

export const ProblemSolutionSection = () => {
  const handleScrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="problem" className="section-spacing bg-[#03030f]">
      <div className="container-tight grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/50">
            <AlertTriangle className="h-4 w-4 text-amber-300" />
            Le problème
          </div>
          <div>
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Vos clients vous aiment. Mais votre fiche Google raconte une autre histoire.
            </h2>
            <p className="mt-4 text-white/70">
              Take 5 audite chaque établissement avant l’onboarding : mêmes causes, mêmes effets.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PROBLEM_POINTS.map((point) => (
              <div key={point.label} className="glass-panel rounded-3xl border-white/5 p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/40">
                  <span>{point.badge}</span>
                </div>
                <p className="mt-3 font-heading text-3xl text-white">{point.value}</p>
                <p className="mt-1 text-sm font-semibold text-white/80">{point.label}</p>
                <p className="mt-1 text-sm text-white/60">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-emerald-300/80">
            <CheckCircle2 className="h-5 w-5" />
            La solution Take 5
          </div>
          <p className="text-lg text-white">
            Opérations automatisées, contrôlées depuis un seul dashboard, avec reporting WhatsApp pour l’équipe terrain.
          </p>
          <div className="space-y-5">
            {SOLUTION_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
                  <span>{pillar.tag}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-white">{pillar.title}</p>
                <p className="text-sm text-white/70">{pillar.description}</p>
              </div>
            ))}
          </div>
          <Button
            className="w-full rounded-full bg-gradient-to-r from-[#6D7CFF] to-[#FF5CA8] text-white"
            onClick={handleScrollToForm}
          >
            Voir comment Take 5 corrige ça
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
