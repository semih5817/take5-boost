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
    clientsDesc: "2 clients/semaine × 2 semaines = 4 clients/mois",
    months: [
      { label: "Mois 1", amount: 80, clients: 4 },
      { label: "Mois 2", amount: 160, clients: 8 },
      { label: "Mois 3", amount: 240, clients: 12 },
      { label: "Mois 4", amount: 320, clients: 16 },
      { label: "Mois 5", amount: 400, clients: 20 },
      { label: "Mois 6", amount: 480, clients: 24 },
    ],
    total: 1680,
  },
  {
    emoji: "⚡",
    title: "Mi-Temps",
    badge: "~5h/semaine",
    clientsDesc: "3 clients/semaine × 3 semaines = 9 clients/mois",
    months: [
      { label: "Mois 1", amount: 180, clients: 9 },
      { label: "Mois 2", amount: 360, clients: 18 },
      { label: "Mois 3", amount: 540, clients: 27 },
      { label: "Mois 4", amount: 720, clients: 36 },
      { label: "Mois 5", amount: 900, clients: 45 },
      { label: "Mois 6", amount: 1080, clients: 54 },
    ],
    total: 3780,
    highlight: true,
  },
  {
    emoji: "🚀",
    title: "Temps Plein",
    badge: "Temps plein",
    clientsDesc: "5 clients/semaine × 4 semaines = 20 clients/mois",
    months: [
      { label: "Mois 1", amount: 400, clients: 20 },
      { label: "Mois 2", amount: 800, clients: 40 },
      { label: "Mois 3", amount: 1200, clients: 60 },
      { label: "Mois 4", amount: 1600, clients: 80 },
      { label: "Mois 5", amount: 2000, clients: 100 },
      { label: "Mois 6", amount: 2400, clients: 120 },
    ],
    total: 8400,
  },
];

const RealisticScenarios = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          📊 Scénarios réalistes — 6 mois de commission
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
                    <span className="text-green-400 font-bold">{m.amount}€</span>
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
          * Calcul basé sur 6 mois de commission à 20€/client/mois. Revenus conditionnés au maintien de l'abonnement client.
        </p>
      </div>
    </section>
  );
};

export default RealisticScenarios;
