import { Clock, AlertTriangle, TrendingDown, XCircle, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProblemAwareness = () => {
  const problems = [
    {
      icon: Clock,
      gradient: "from-red-500 to-orange-500",
      title: "Vous perdez 3h par semaine",
      description:
        "À lire, trier et répondre manuellement à chaque avis Google. Du temps que vous pourriez consacrer à votre cœur de métier.",
      stat: "📊 3h/semaine perdues",
    },
    {
      icon: AlertTriangle,
      gradient: "from-orange-500 to-yellow-500",
      title: "Les avis négatifs s'accumulent",
      description:
        "Un avis 1★ ignoré peut décourager jusqu'à 22 clients potentiels. Sans alerte immédiate, vous réagissez trop tard.",
      stat: "📊 73% d'avis non répondus",
    },
    {
      icon: TrendingDown,
      gradient: "from-yellow-500 to-red-500",
      title: "Votre visibilité chute",
      description:
        "Google favorise les fiches actives. Sans réponses régulières, vous perdez des positions face à vos concurrents.",
      stat: "📊 -35% de visibilité",
    },
    {
      icon: XCircle,
      gradient: "from-red-600 to-pink-600",
      title: "Vous manquez des opportunités",
      description:
        "Chaque avis non traité est un client insatisfait qui ne reviendra pas... et qui le dira autour de lui.",
      stat: "📊 10 clients perdus/mois",
    },
  ];

  const lossStats = [
    {
      icon: DollarSign,
      value: "2 400€",
      label: "Revenus perdus par manque de réactivité",
    },
    {
      icon: TrendingDown,
      value: "-40%",
      label: "Baisse de visibilité vs concurrents actifs",
    },
    {
      icon: XCircle,
      value: "87 clients",
      label: "Découragés par vos avis non traités",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-destructive/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Titre de section */}
        <div className="text-center mb-16 space-y-6">
          <Badge className="bg-destructive/10 border-destructive/20 text-destructive">
            ⚠️ La réalité des entreprises locales
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Le{" "}
            <span className="text-destructive">problème caché</span> qui vous fait{" "}
            <span className="line-through opacity-50">perdre des clients</span> chaque jour
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="font-bold">73%</span> des entreprises locales ne répondent jamais à leurs avis Google.
            Résultat ? Elles perdent en moyenne{" "}
            <span className="font-bold text-destructive">30%</span> de clients potentiels sans même le
            savoir.
          </p>
        </div>

        {/* 4 Cartes de problèmes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-destructive/30 transition-all duration-300 bg-card/50 backdrop-blur"
            >
              <div className="space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center`}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold">{problem.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                
                <Badge variant="outline" className="border-destructive/30 text-destructive">
                  {problem.stat}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Bloc statistiques choc */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/20">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              💔 Ce que vous{" "}
              <span className="text-destructive">perdez réellement</span> chaque mois
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {lossStats.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-destructive" />
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-destructive">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Transition */}
        <p className="text-center text-lg md:text-xl mt-12 max-w-4xl mx-auto">
          Bonne nouvelle : il existe une solution simple, automatisée et{" "}
          <span className="text-primary font-bold">10x moins chère</span> qu'embaucher quelqu'un pour
          gérer vos avis.
        </p>
      </div>
    </section>
  );
};
