import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Prêt à devenir le commerce{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            #1 de votre ville
          </span>{" "}
          ?
        </h2>

        <p className="text-xl text-slate-300 mb-8">
          Rejoignez 500+ commerces qui dominent Google grâce à Take 5
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-12 text-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            Essayer gratuitement 1 mois
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-5 px-12 text-xl border-2 border-slate-700 transition-all"
          >
            Discuter avec un expert
          </Button>
        </div>

        <p className="text-slate-400 text-sm">
          ✓ Sans engagement • ✓ Pas de CB requise • ✓ Support 7j/7
        </p>
      </div>
    </section>
  );
};
