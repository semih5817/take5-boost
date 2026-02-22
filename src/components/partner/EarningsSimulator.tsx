import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const COMMISSION = 20;
const DURATION_MONTHS = 6;

const EarningsSimulator = () => {
  const [clientsPerWeek, setClientsPerWeek] = useState(3);
  const [weeksPerMonth, setWeeksPerMonth] = useState(3);

  const clientsPerMonth = clientsPerWeek * weeksPerMonth;
  const totalMonths = DURATION_MONTHS;

  const monthlyData = useMemo(() => {
    const data: { month: number; activeClients: number; revenue: number }[] = [];
    for (let m = 1; m <= totalMonths; m++) {
      let activeClients = 0;
      for (let signedMonth = 1; signedMonth <= m; signedMonth++) {
        const monthsActive = m - signedMonth;
        if (monthsActive < DURATION_MONTHS) {
          activeClients += clientsPerMonth;
        }
      }
      data.push({ month: m, activeClients, revenue: activeClients * COMMISSION });
    }
    return data;
  }, [clientsPerMonth, totalMonths]);

  const totalRevenue = monthlyData.reduce((sum, d) => sum + d.revenue, 0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Calculez vos gains potentiels
        </h2>

        <Card className="bg-slate-800/50 border-slate-700 rounded-2xl p-6 md:p-10">
          {/* Commission info */}
          <div className="mb-8">
            <p className="text-slate-400 text-sm">
              Commission par client signé : <span className="text-cyan-400 font-semibold">~{COMMISSION}€/mois pendant {DURATION_MONTHS} mois</span>
            </p>
          </div>

          {/* Sliders */}
          <div className="space-y-8 mb-10">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-slate-300 text-sm font-medium">Clients signés par semaine</label>
                <span className="text-cyan-400 font-bold text-lg">{clientsPerWeek}</span>
              </div>
              <Slider
                value={[clientsPerWeek]}
                onValueChange={(v) => setClientsPerWeek(v[0])}
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
                <label className="text-slate-300 text-sm font-medium">Semaines actives par mois</label>
                <span className="text-cyan-400 font-bold text-lg">{weeksPerMonth}</span>
              </div>
              <Slider
                value={[weeksPerMonth]}
                onValueChange={(v) => setWeeksPerMonth(v[0])}
                min={1}
                max={4}
                step={1}
                className="[&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400 [&_span[data-orientation=horizontal]>span]:bg-purple-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1</span>
                <span>4</span>
              </div>
            </div>
          </div>

          {/* Monthly results */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {monthlyData.map((d) => (
              <Card
                key={d.month}
                className="bg-slate-900/60 border-slate-700 rounded-xl p-4 text-center"
              >
                <p className="text-slate-400 text-xs font-medium mb-1">Mois {d.month}</p>
                <p className="text-cyan-400 text-2xl font-black">{d.revenue}€</p>
                <p className="text-slate-500 text-xs mt-1">
                  {d.month === 1 ? `${d.activeClients} clients (1er paiement)` : `${d.activeClients} clients actifs`}
                </p>
              </Card>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white/80 text-sm mb-1">Revenu total sur {totalMonths} mois</p>
            <p className="text-white text-4xl md:text-5xl font-black">{totalRevenue.toLocaleString("fr-FR")}€</p>
            <p className="text-white/60 text-sm mt-3">
              Après 6 mois, continuez à prospecter pour maintenir vos revenus !
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EarningsSimulator;
