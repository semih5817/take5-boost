import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Play, MessageSquare, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-extrabold text-foreground">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const WhatsAppNotification = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1500);
    const t2 = setTimeout(() => setStep(1), 3000);
    const t3 = setTimeout(() => setStep(2), 5000);
    const t4 = setTimeout(() => {
      setShow(false);
      setStep(0);
      setTimeout(() => setShow(true), 1000);
      setTimeout(() => setStep(1), 2500);
      setTimeout(() => setStep(2), 4500);
    }, 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto lg:mx-0">
      {/* Phone frame */}
      <div className="bg-card rounded-[2rem] p-3 border border-border shadow-2xl">
        <div className="bg-muted rounded-[1.5rem] overflow-hidden">
          {/* WhatsApp header */}
          <div className="bg-secondary/20 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-secondary-foreground" />
            </div>
            <div>
              <p className="text-foreground text-sm font-bold">TakeFive Bot</p>
              <p className="text-muted-foreground text-xs">En ligne</p>
            </div>
          </div>
          {/* Messages */}
          <div className="p-4 space-y-3 min-h-[220px]">
            {show && (
              <div className="animate-whatsapp-notif bg-primary/10 border border-primary/20 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary">Nouvel avis !</span>
                </div>
                <p className="text-foreground text-sm">⭐⭐⭐⭐⭐ "Excellent service, je recommande !"</p>
                <p className="text-muted-foreground text-xs mt-1">— Marie L. • Il y a 2 min</p>
              </div>
            )}
            {step >= 1 && (
              <div className="animate-whatsapp-notif bg-secondary/10 border border-secondary/20 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="text-xs font-bold text-secondary">Réponse IA envoyée</span>
                </div>
                <p className="text-muted-foreground text-sm">"Merci Marie pour votre retour..."</p>
              </div>
            )}
            {step >= 2 && (
              <div className="animate-whatsapp-notif bg-card border border-border rounded-xl p-3">
                <p className="text-foreground text-sm font-medium">📊 Score TakeFive : 87/100</p>
                <p className="text-muted-foreground text-xs">+3 points cette semaine</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] scroll-fade-in visible" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Devenez le{" "}
            <span className="gradient-text">#1 sur Google</span>
            {" "}dans votre ville
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            TakeFive collecte et gère vos avis Google automatiquement.
            <br />
            <strong className="text-foreground">IA incluse • Alertes WhatsApp • 19,90€/mois</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button
              onClick={() => navigate('/tarifs')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 px-10 text-lg transition-all transform hover:scale-105 shadow-primary"
            >
              Essayer 1 mois gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 font-medium py-6 px-8 text-base transition-all"
            >
              <Play className="mr-2 w-5 h-5" />
              Voir la démo
            </Button>
          </div>

          {/* Micro-réassurances */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start mb-8">
            {["✓ Sans carte bancaire", "✓ Sans engagement", "✓ Activation en 2 min"].map((item, i) => (
              <span key={i} className="text-muted-foreground text-sm">{item}</span>
            ))}
          </div>

          {/* Animated counters */}
          <div className="flex gap-8 justify-center lg:justify-start">
            <AnimatedCounter end={200} label="commerces" suffix="+" />
            <AnimatedCounter end={48} label="sur 5" suffix="/5" />
            <AnimatedCounter end={2} label="min d'activation" suffix=" min" />
          </div>
        </div>

        {/* Right: WhatsApp Demo */}
        <div className="hidden lg:flex justify-center">
          <WhatsAppNotification />
        </div>
      </div>
    </section>
  );
};
