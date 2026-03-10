import { Link2, MessageSquare, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const HowItWorksNew = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: Link2,
      title: "Connectez votre fiche Google",
      description: "2 minutes chrono. Connexion sécurisée, aucune installation.",
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "TakeFive gère tout automatiquement",
      description: "L'IA répond aux avis 24/7. Alertes WhatsApp instantanées.",
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Vous dominez votre marché local",
      description: "Score de santé, missions simples, objectif : top 3 de votre zone.",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Devenez visible en 3 étapes simples
          </p>
        </div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border">
            <div 
              className="w-full bg-primary transition-all duration-[2s] ease-out"
              style={{ height: visible ? '100%' : '0%' }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative md:flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ 
                    opacity: visible ? 1 : 0, 
                    transform: visible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.6s ease-out ${i * 0.3}s`
                  }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all hover-lift">
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-primary-foreground font-extrabold text-lg items-center justify-center shrink-0 z-10 shadow-primary">
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
