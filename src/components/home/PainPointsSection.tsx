import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PainPointsSection = () => {
  const painPoints = [
    {
      title: "Tu perds 3 à 5 heures par semaine",
      description: "À répondre aux avis sur Google, Facebook, Trustpilot... Et tu n'as même pas le temps de tout traiter."
    },
    {
      title: "Tu ne sais jamais quoi poster",
      description: "Sur Instagram, Facebook, TikTok... Et quand tu postes, ça te prend 20 minutes à créer."
    },
    {
      title: "Tu dois te connecter partout",
      description: "5 plateformes différentes, 5 mots de passe, 5 interfaces compliquées. C'est épuisant."
    },
    {
      title: "Tu rates des avis négatifs",
      description: "Et quand tu les vois, c'est trop tard. Le mal est fait, ta réputation en prend un coup."
    },
    {
      title: "Tu aimerais publier plus souvent",
      description: "Mais entre le service, la compta, la gestion... tu n'as tout simplement pas le temps."
    },
    {
      title: "Ta visibilité en ligne est négligée",
      description: "Et ça impacte directement ton chiffre d'affaires. Tes concurrents te dépassent sur Google."
    }
  ];

  const scrollToSolution = () => {
    document.getElementById('whatsapp-solution')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu te reconnais dans ces situations ?
          </h2>
          <p className="text-xl text-gray-600">
            La visibilité en ligne, c'est <strong>chronophage</strong>, <strong>compliqué</strong>, et <strong>stressant</strong>
          </p>
        </div>

        {/* Liste des douleurs */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((pain, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{pain.title}</h4>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Et si tout ça se gérait depuis WhatsApp<br/>en quelques secondes ?
          </h3>
          <p className="text-lg text-purple-100 mb-6">
            Pas besoin de te connecter à 10 interfaces. Pas besoin d'apprendre un nouvel outil.<br/>
            Juste... envoyer un message.
          </p>
          <Button 
            onClick={scrollToSolution}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold transition-all transform hover:scale-105"
          >
            Découvrir la solution →
          </Button>
        </div>
      </div>
    </section>
  );
};
