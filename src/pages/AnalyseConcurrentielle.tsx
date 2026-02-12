import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompetitiveAnalysisSection } from "@/components/home/CompetitiveAnalysisSection";
import { useNavigate } from "react-router-dom";

const AnalyseConcurrentielle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />
      <div className="pt-16">
        <CompetitiveAnalysisSection />
        
        {/* CTA */}
        <div className="text-center mt-4 mb-20">
          <button
            onClick={() => navigate('/tarifs')}
            className="px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            S'abonner
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyseConcurrentielle;
