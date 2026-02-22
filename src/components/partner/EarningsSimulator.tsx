import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const COMMISSION = 20;

const TIERS = [
  { name: "STARTER", months: 3 },
  { name: "ACTIVE", months: 4 },
  { name: "PRO", months: 5 },
  { name: "ELITE", months: 6 },
];

const EarningsSimulator = () => {
  const [tierIndex, setTierIndex] = useState(2); // PRO default
  const [salesPerDay, setSalesPerDay] = useState(3);
  const [daysPerMonth, setDaysPerMonth] = useState(20);

  const selectedTier = TIERS[tierIndex];
  const clientsPerMonth = salesPerDay * daysPerMonth;
  const dureeMois = selectedTier.months;
  const displayMonths = dureeMois + 1;

  const monthlyData = useMemo(() => {
    const data: { month: number; activeClients: number; revenue: number }[] = [];
    for (let m = 1; m <= displayMonths; m++) {
      const activeClients = Math.min(m, dureeMois) * clientsPerMonth;
      data.push({ month: m, activeClients, revenue: activeClients * COMMISSION });
    }
    return data;
  }, [clientsPerMonth, dureeMois, displayMonths]);

  const totalRevenue = monthlyData
    .filter((d) => d.month <= dureeMois)
    .reduce((sum, d) => sum + d.revenue, 0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          🧮 Calculez vos gains potentiels
        </h2>

        <Card className="bg-slate-800/50 border-slate-700 rounded-2xl p-6 md:p-10">
          {/* Tier selection */}
          <div className="mb-8">
            <p className="text-slate-300 text-sm font-medium mb-3">Votre palier :</p>
            <div className="flex flex-wrap gap-2">
              {TIERS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setTierIndex(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    tierIndex === i
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-slate-700 border border-slate-600 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-3">
              Commission fixe : <span className="text-cyan-400 font-semibold">20€/mois par client actif</span>
            </p>
          </div>

          {/* Sliders */}
          <div className="space-y-8 mb-10">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-slate-300 text-sm font-medium">Ventes par jour</label>
                <span className="text-cyan-400 font-bold text-lg">{salesPerDay}</span>
              </div>
              <Slider
                value={[salesPerDay]}
                onValueChange={(v) => setSalesPerDay(v[0])}
                min={1}
                max={10}
                step={1}
                className="[&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400 [&_span[data-orientation=horizontal]>span]:bg-purple-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-slate-300 text-sm font-medium">Jours travaillés par mois</label>
                <span className="text-cyan-400 font-bold text-lg">{daysPerMonth}</span>
              </div>
              <Slider
                value={[daysPerMonth]}
                onValueChange={(v) => setDaysPerMonth(v[0])}
                min={5}
                max={25}
                step={1}
                className="[&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400 [&_span[data-orientation=horizontal]>span]:bg-purple-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>5</span>
                <span>25</span>
              </div>
            </div>
          </div>

          {/* Monthly results */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {monthlyData.map((d) => (
              <Card
                key={d.month}
                className="bg-slate-900/60 border-slate-700 rounded-xl p-4 text-center"
              >
                <p className="text-slate-400 text-xs font-medium mb-1">Mois {d.month}</p>
                <p className="text-cyan-400 text-2xl font-black">
                  {d.revenue.toLocaleString("fr-FR")}€
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {d.month === 1
                    ? `${d.activeClients} clients (1er paiement)`
                    : `${d.activeClients} clients actifs`}
                </p>
              </Card>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white/80 text-sm mb-1">Revenu total sur {dureeMois} mois</p>
            <p className="text-white text-4xl md:text-5xl font-black">
              {totalRevenue.toLocaleString("fr-FR")}€
            </p>
            <p className="text-white/60 text-sm mt-3">
              💡 En continuant à prospecter, vos revenus se maintiennent après {dureeMois} mois !
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EarningsSimulator;
