import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { MissionsAnimation } from '@/components/animations/MissionsAnimation';
import { Badge } from '@/components/ui/badge';

export const MissionsSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => setStep(4), 8000),
      setTimeout(() => setStep(0), 10500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-card via-background to-card">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
            Module n°3 · Proactivité IA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🎮 Score de Santé Locale : Restez Toujours Visible</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TakeFive surveille votre présence en ligne et vous envoie des missions intelligentes 
            sur WhatsApp pour maintenir vos fiches Google et réseaux sociaux toujours actifs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Animation */}
          <div>
            <MissionsAnimation step={step} />
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-primary">
                📊
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Score de santé 0-100
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                TakeFive calcule automatiquement la santé de votre présence locale : 
                photos récentes, posts actifs, horaires à jour, taux de réponse aux avis.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-secondary">
                🎯
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Missions automatiques
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Recevez 1-2 rappels par semaine sur WhatsApp : "Ajoutez une photo", 
                "Répondez à cet avis", "Mettez à jour vos horaires de Noël".
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover-lift">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-3xl mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Progression gamifiée
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Suivez l'évolution de votre score et débloquez des badges. 
                Votre présence locale devient un jeu où vous gagnez en visibilité.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Badge variant="secondary" className="text-lg px-8 py-3 shadow-secondary">
            À venir - Inclus dans tous les plans
          </Badge>
        </div>
      </div>
    </Section>
  );
};
