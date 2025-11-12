interface MissionsAnimationProps {
  step: number;
}

export const MissionsAnimation = ({ step }: MissionsAnimationProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-[400px]">
        {/* Phone mockup */}
        <div className="relative bg-card border-2 border-border rounded-[40px] p-4 shadow-elegant">
          <div className="bg-background rounded-[32px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Step 0: Dashboard initial */}
            {step === 0 && (
              <div className="h-full flex flex-col p-6 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-foreground font-bold text-xl mb-2">Score de Santé</h3>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="hsl(var(--muted))"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="hsl(var(--primary))"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="352"
                        strokeDashoffset="88"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">75</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground text-sm">📸 Photos récentes</span>
                      <span className="text-primary font-semibold">✓</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground text-sm">📱 Posts actifs</span>
                      <span className="text-destructive font-semibold">!</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground text-sm">⭐ Avis répondus</span>
                      <span className="text-primary font-semibold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Score display */}
            {step === 1 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <h3 className="text-foreground font-bold text-xl mb-6">Votre Score</h3>
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="hsl(var(--muted))"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="hsl(var(--primary))"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold gradient-text">75</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-center mt-4">Bon score ! Mais vous pouvez mieux faire</p>
              </div>
            )}

            {/* Step 2: Mission sent */}
            {step === 2 && (
              <div className="h-full flex flex-col justify-end p-4 space-y-4 animate-fade-in">
                <div className="bg-primary/20 border border-primary rounded-2xl p-4 max-w-[85%]">
                  <p className="text-foreground font-semibold mb-2">🎯 Nouvelle Mission</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Votre dernier post date de 8 jours. Publiez une photo de votre nouvelle carte pour maintenir votre visibilité !
                  </p>
                  <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
                    Accepter la mission
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Action done */}
            {step === 3 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <div className="text-7xl mb-4 animate-bounce-subtle">✓</div>
                <h3 className="text-foreground font-bold text-2xl text-center mb-2">
                  Mission accomplie !
                </h3>
                <p className="text-muted-foreground text-center">
                  Photo publiée sur Instagram et Google
                </p>
              </div>
            )}

            {/* Step 4: Score increases */}
            {step === 4 && (
              <div className="h-full flex flex-col items-center justify-center p-6 animate-fade-in">
                <h3 className="text-foreground font-bold text-xl mb-6">Score mis à jour</h3>
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="hsl(var(--muted))"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset="44"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-5xl font-bold gradient-text">85</span>
                    <span className="text-secondary text-sm font-semibold mt-1">+10</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-center mt-4">Excellent travail ! Continuez comme ça</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
