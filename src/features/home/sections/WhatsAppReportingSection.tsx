import { MessageCircle, PhoneCall, Shield, Star } from "lucide-react";
import { WHATSAPP_FEATURES, WHATSAPP_METRICS } from "../data/operations";

export const WhatsAppReportingSection = () => {
  return (
    <section id="whatsapp" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#101238] to-transparent opacity-60" />
      <div className="container-tight relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200">
            WhatsApp
          </div>
          <h2 className="font-heading text-3xl text-white md:text-4xl">
            Reporting WhatsApp + alertes négatives pour réagir en -30 secondes.
          </h2>
          <p className="text-lg text-white/70">
            Chaque responsable reçoit une synthèse actionable : top avis, avis à risque, KPI et actions à mener cette semaine.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {WHATSAPP_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                <p className="text-sm text-emerald-300">{metric.trend}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {WHATSAPP_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="mt-1 h-10 w-10 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{feature.title}</p>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hero-spotlight absolute inset-x-0 top-0 h-64 blur-3xl" />
          <div className="glass-panel relative rounded-[36px] border-white/10 p-6">
            <div className="flex items-center justify-between text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Take 5 Ops</p>
                  <p className="text-xs text-white/60">il y a 2 min</p>
                </div>
              </div>
              <PhoneCall className="h-5 w-5 text-white/40" />
            </div>
            <div className="mt-6 space-y-3 text-sm text-white">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">Alerte négative</p>
                <p className="mt-1 text-white">
                  ⭐ 2/5 - “Temps d’attente trop long” <span className="text-white/60">• Take 5 Marseille</span>
                </p>
                <p className="text-white/70">Action : répondre dans les 30 prochaines minutes. Message IA généré ci-dessous.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Réponse IA proposée</p>
                <p className="mt-2 text-white/90">
                  Bonjour Julien, merci d’avoir pris le temps... (tap pour publier). Notre manager vous contacte dans l’heure.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Star className="h-4 w-4 text-amber-400" />
                  <p>+12 avis 5★ ajoutés cette semaine via plaque NFC.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Rapport mensuel</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Volume : +178% vs le mois dernier</li>
                <li>• Notoriété : 4.9/5</li>
                <li>• Actions : lancer relance NFC sur spot “déjeuner”.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
