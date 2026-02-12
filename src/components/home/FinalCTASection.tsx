import { useNavigate } from "react-router-dom";

export const FinalCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-10 md:p-14 border border-purple-500/20 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Commencez gratuitement{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              dès maintenant
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 mb-8">
            1 mois gratuit • Activation en 2 min • Sans carte bancaire
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => navigate('/tarifs')}
              className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:shadow-[0_10px_50px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-1 hover:from-purple-600 hover:to-pink-600"
            >
              Essayer gratuitement 1 mois
            </button>
            <button
              onClick={() => window.open('https://wa.me/33939037644', '_blank')}
              className="px-8 py-4 border-2 border-purple-500/40 text-purple-300 rounded-xl font-medium hover:bg-purple-500/10 transition-all"
            >
              Parler à un expert
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            ✓ Sans carte bancaire • ✓ Sans engagement • ✓ Annulation en 1 clic
          </p>
        </div>
      </div>
    </section>
  );
};
