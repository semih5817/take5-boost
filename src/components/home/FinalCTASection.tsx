import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Prêt à devenir le commerce{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            n°1 de ta ville sur Google
          </span>{" "}
          ?
        </h2>

        <p className="text-xl text-slate-300 mb-8">
          Essaie TakeFive gratuitement pendant 7 jours.<br />
          Sans carte bancaire, sans engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-5 px-12 text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            Commencer mon essai gratuit
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
          ✓ Déjà 237 commerces qui nous font confiance • ✓ Note moyenne : 4,8/5 • ✓ Configuration en 2 minutes
        </p>
      </div>
    </section>
  );
};
