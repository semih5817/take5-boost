import { Card } from "@/components/ui/card";

interface Scenario {
  emoji: string;
  title: string;
  badge: string;
  clientsDesc: string;
  months: { label: string; amount: number; clients: number }[];
  total: number;
  highlight?: boolean;
}

const scenarios: Scenario[] = [
  {
    emoji: "⏰",
    title: "Temps Partiel",
    badge: "~2h/semaine",
    clientsDesc: "1 vente/jour • 15 jours/mois = 15 clients/mois",
    months: [
      { label: "Mois 1", amount: 300, clients: 15 },
      { label: "Mois 2", amount: 600, clients: 30 },
      { label: "Mois 3", amount: 900, clients: 45 },
      { label: "Mois 4", amount: 1200, clients: 60 },
      { label: "Mois 5", amount: 1500, clients: 75 },
    ],
    total: 4500,
  },
  {
    emoji: "⚡",
    title: "Mi-Temps",
    badge: "~5h/semaine",
    clientsDesc: "2 ventes/jour • 20 jours/mois = 40 clients/mois",
    months: [
      { label: "Mois 1", amount: 800, clients: 40 },
      { label: "Mois 2", amount: 1600, clients: 80 },
      { label: "Mois 3", amount: 2400, clients: 120 },
      { label: "Mois 4", amount: 3200, clients: 160 },
      { label: "Mois 5", amount: 4000, clients: 200 },
    ],
    total: 12000,
    highlight: true,
  },
  {
    emoji: "🚀",
    title: "Temps Plein",
    badge: "Temps plein",
    clientsDesc: "3 ventes/jour • 22 jours/mois = 66 clients/mois",
    months: [
      { label: "Mois 1", amount: 1320, clients: 66 },
      { label: "Mois 2", amount: 2640, clients: 132 },
      { label: "Mois 3", amount: 3960, clients: 198 },
      { label: "Mois 4", amount: 5280, clients: 264 },
      { label: "Mois 5", amount: 6600, clients: 330 },
    ],
    total: 19800,
  },
];

const RealisticScenarios = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          📊 Scénarios réalistes — Palier PRO (5 mois)
        </h2>
        <p className="text-slate-400 text-center mb-14">
          Exemples concrets selon votre rythme de prospection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {scenarios.map((s) => (
            <Card
              key={s.title}
              className={`bg-slate-800 rounded-2xl p-6 ${
                s.highlight
                  ? "border-2 border-blue-500/60"
                  : "border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">
                  {s.emoji} {s.title}
                </h3>
                <span className="text-xs text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-5">{s.clientsDesc}</p>

              <div className="space-y-2 mb-5">
                {s.months.map((m) => (
                  <div key={m.label} className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">{m.label}</span>
                    <span className="text-green-400 font-bold">
                      {m.amount.toLocaleString("fr-FR")}€
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-slate-700 mb-4" />

              <div className="flex justify-between items-center">
                <span className="text-slate-300 font-medium">Total perçu</span>
                <span className="text-green-400 text-2xl font-black">
                  {s.total.toLocaleString("fr-FR")}€
                </span>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-slate-400 text-center mt-10 text-sm italic">
          * Calcul basé sur Palier PRO (5 mois) à 20€/client/mois. Revenus conditionnés au maintien de l'abonnement client.
        </p>
      </div>
    </section>
  );
};

export default RealisticScenarios;
