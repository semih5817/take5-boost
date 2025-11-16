import { PERFORMANCE_STATS } from "../data/highlights";

export const StatsSection = () => {
  return (
    <section className="section-spacing" id="results">
      <div className="container-tight">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Résultats moyens observés</p>
          <h2 className="mt-4 font-heading text-3xl text-white md:text-4xl">Des fiches Google qui passent devant, chiffres à l'appui.</h2>
          <p className="mt-3 text-white/70">Mesuré sur 127 commerces accompagnés entre janvier et octobre 2025.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PERFORMANCE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-6"
            >
              <div className="absolute inset-0 opacity-40">
                <div className="grid-overlay h-full w-full" />
              </div>
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.5em] text-white/40">{stat.label}</p>
                <p className="mt-4 font-heading text-4xl text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.subLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
