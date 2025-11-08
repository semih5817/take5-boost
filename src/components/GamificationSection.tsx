import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Zap, Award } from "lucide-react";

export const GamificationSection = () => {
  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transformez votre e-réputation
            <br />
            <span className="gradient-text">en jeu... et gagnez des récompenses</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Progressez niveau par niveau et débloquez des fonctionnalités premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Progression card */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Niveau : Expert 🥇</h3>
                <p className="text-sm text-muted-foreground">67/100 points</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold gradient-text">67</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>

            <Progress value={67} className="h-3 mb-6" />

            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Mission en cours</span>
                  <Badge className="bg-primary/20 text-primary">+50 pts</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Collectez 10 avis cette semaine</p>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">6/10 avis collectés</p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <Zap className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="font-medium text-sm">Série active 🔥</p>
                  <p className="text-xs text-muted-foreground">5 jours consécutifs</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Levels card */}
          <div className="space-y-4">
            <Card className="p-4 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-900/20 flex items-center justify-center">
                  <span className="text-2xl">🥉</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Débutant</h4>
                  <p className="text-sm text-muted-foreground">0-15 avis</p>
                </div>
                <Badge variant="outline">Complété</Badge>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300/20 flex items-center justify-center">
                  <span className="text-2xl">🥈</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Actif</h4>
                  <p className="text-sm text-muted-foreground">16-50 avis</p>
                </div>
                <Badge variant="outline">Complété</Badge>
              </div>
            </Card>

            <Card className="p-4 border-2 border-primary shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-2xl">🥇</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Expert</h4>
                  <p className="text-sm text-muted-foreground">50-100 avis</p>
                </div>
                <Badge className="bg-primary">Actuel</Badge>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all opacity-60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Légende locale</h4>
                  <p className="text-sm text-muted-foreground">100+ avis</p>
                </div>
                <Badge variant="outline">Bloqué</Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Missions quotidiennes</h4>
            <p className="text-sm text-muted-foreground">
              Débloquez des missions chaque jour pour gagner des points bonus
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Badges exclusifs</h4>
            <p className="text-sm text-muted-foreground">
              Collectionnez des badges rares en accomplissant des défis spéciaux
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Récompenses concrètes</h4>
            <p className="text-sm text-muted-foreground">
              Les points débloquent des fonctionnalités premium et des avantages
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
