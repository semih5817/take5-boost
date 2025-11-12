import { useState, useEffect } from 'react';

interface ContestAnimationProps {
  step: number;
}

export const ContestAnimation = ({ step }: ContestAnimationProps) => {
  const [wheelRotation, setWheelRotation] = useState(0);

  useEffect(() => {
    if (step === 3) {
      const targetRotation = 1080 + Math.random() * 360;
      setWheelRotation(targetRotation);
    } else {
      setWheelRotation(0);
    }
  }, [step]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-[400px]">
        {/* Phone mockup */}
        <div className="relative bg-card border-2 border-border rounded-[40px] p-4 shadow-elegant">
          <div className="bg-background rounded-[32px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Step 0: QR Code initial */}
            {step === 0 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <div className="w-48 h-48 bg-card border-2 border-primary rounded-2xl flex items-center justify-center mb-4 shadow-primary">
                  <div className="text-6xl">📱</div>
                </div>
                <p className="text-foreground text-center font-semibold text-lg">
                  Scannez le QR Code
                </p>
                <p className="text-muted-foreground text-center text-sm mt-2">
                  Tentez votre chance !
                </p>
              </div>
            )}

            {/* Step 1: QR scan */}
            {step === 1 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <div className="w-48 h-48 bg-primary/20 border-2 border-primary rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                  <div className="text-6xl">✓</div>
                </div>
                <p className="text-foreground text-center font-semibold text-lg">
                  QR Code scanné !
                </p>
              </div>
            )}

            {/* Step 2: Form */}
            {step === 2 && (
              <div className="h-full flex flex-col justify-center p-6 space-y-4 animate-fade-in">
                <h3 className="text-foreground font-bold text-xl text-center mb-2">
                  Tentez votre chance
                </h3>
                <input 
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground"
                  placeholder="Prénom"
                  readOnly
                />
                <input 
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground"
                  placeholder="06 12 34 56 78"
                  readOnly
                />
                <input 
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground"
                  placeholder="email@exemple.fr"
                  readOnly
                />
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" className="mt-1" checked readOnly />
                  <span>J'accepte de recevoir des offres par SMS</span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-lg shadow-primary">
                  Tourner la roue 🎰
                </button>
              </div>
            )}

            {/* Step 3: Wheel spinning */}
            {step === 3 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <div 
                  className="w-56 h-56 rounded-full border-8 border-primary shadow-glow transition-transform duration-[2000ms] ease-out"
                  style={{ 
                    transform: `rotate(${wheelRotation}deg)`,
                    background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))'
                  }}
                />
                <p className="text-foreground text-center font-semibold text-lg mt-6">
                  La roue tourne...
                </p>
              </div>
            )}

            {/* Step 4: Win */}
            {step === 4 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <div className="text-8xl mb-4 animate-bounce-subtle">🎉</div>
                <h3 className="text-foreground font-bold text-2xl text-center mb-2">
                  Félicitations !
                </h3>
                <div className="bg-primary/20 border-2 border-primary rounded-xl p-6 text-center">
                  <p className="text-foreground font-bold text-3xl mb-2">-20%</p>
                  <p className="text-muted-foreground text-sm">sur votre prochaine commande</p>
                </div>
              </div>
            )}

            {/* Step 5: SMS sent */}
            {step === 5 && (
              <div className="h-full flex flex-col justify-center p-4 space-y-4 animate-fade-in">
                <div className="bg-muted rounded-2xl p-4 max-w-[85%] self-end">
                  <p className="text-foreground text-sm font-semibold mb-1">📱 SMS reçu</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    🎉 Votre code promo : <strong className="text-foreground">TAKE20</strong><br/>
                    Valable jusqu'au 30/11<br/>
                    À bientôt !
                  </p>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  ✓ SMS envoyé automatiquement
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
