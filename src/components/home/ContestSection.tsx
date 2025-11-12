import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { ContestAnimation } from '@/components/animations/ContestAnimation';
import { Badge } from '@/components/ui/badge';
export const ContestSection = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timers = [setTimeout(() => setStep(1), 1500), setTimeout(() => setStep(2), 3000), setTimeout(() => setStep(3), 5000), setTimeout(() => setStep(4), 7000), setTimeout(() => setStep(5), 9000), setTimeout(() => setStep(0), 11500)];
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);
  return <Section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🎁 Lancez un Concours en 5 Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            QR Code → Roue de la chance → Gain automatique. Collectez des contacts qualifiés 
            et fidélisez vos clients avec un jeu simple et viral.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Animation */}
          <div className="order-2 lg:order-1">
            <ContestAnimation step={step} />
          </div>

          {/* Feature Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-secondary">
                🎰
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Roue de la chance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Interface engageante et virale. Chaque client scanne votre QR Code 
                et tente sa chance pour gagner une réduction.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center text-3xl mb-4">
                📧
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                SMS & Email automatiques
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Collectez téléphones et emails avec consentement RGPD. Le gain est 
                envoyé automatiquement par SMS.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-3xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Base client qualifiée
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Relancez vos clients pour vos prochaines promotions via SMS ou WhatsApp. 
                Data stockée et exploitable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Badge variant="secondary" className="text-lg px-8 py-3 shadow-secondary">
            À venir - Inclus dans Pro Plus
          </Badge>
        </div>
      </div>
    </Section>;
};