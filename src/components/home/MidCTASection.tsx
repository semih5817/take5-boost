import { useNavigate } from "react-router-dom";

export const MidCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-10 md:p-12 border border-purple-500/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à devenir le #1 de votre ville ?
          </h3>
          <button
            onClick={() => navigate('/tarifs')}
            className="px-8 md:px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-1 hover:from-purple-600 hover:to-pink-600"
          >
            Essayer gratuitement 1 mois
          </button>
          <p className="text-slate-400 text-sm mt-4">
            Sans carte bancaire • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};
