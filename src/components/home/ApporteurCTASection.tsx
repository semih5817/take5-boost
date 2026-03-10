import { useNavigate } from "react-router-dom";
import { Users, ArrowRight, DollarSign, Infinity, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ApporteurCTASection = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const perks = [
    { icon: DollarSign, text: "0€ d'investissement" },
    { icon: Infinity, text: "Commission à vie" },
    { icon: Rocket, text: "Démarrage immédiat" },
  ];

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 border border-border"
          style={{ background: 'linear-gradient(135deg, hsl(263 84% 58% / 0.15), hsl(160 59% 40% / 0.15))' }}
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <div 
            className="text-center relative z-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-bold">Programme Apporteur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Devenez Apporteur{" "}
              <span className="gradient-text">TakeFive</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gagnez des commissions en recommandant TakeFive à des commerces.
              0€ d'investissement. Commission à vie.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium text-sm">{perk.text}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => navigate('/prestataire')}
              className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold rounded-xl transition-all hover:scale-105 shadow-secondary"
            >
              Rejoindre le programme
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
