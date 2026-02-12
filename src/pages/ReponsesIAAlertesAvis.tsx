import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, AlertTriangle, MessageSquare, Shield, Zap, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReponsesIAAlertesAvis = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const runAnimation = () => {
      if (cancelled) return;
      setAnimationStep(0);
      setTimeout(() => { if (!cancelled) setAnimationStep(1); }, 1000);
      setTimeout(() => { if (!cancelled) setAnimationStep(2); }, 3000);
      setTimeout(() => { if (!cancelled) setAnimationStep(3); }, 5000);
      setTimeout(() => { if (!cancelled) setAnimationStep(4); }, 7000);
      setTimeout(() => { if (!cancelled) runAnimation(); }, 11000);
    };

    runAnimation();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                <span className="text-purple-400 text-sm font-medium">IA + Alertes en temps réel</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Réponses IA 24/7 +
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Alertes avis négatifs</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                TakeFive répond automatiquement aux avis positifs et vous alerte instantanément sur WhatsApp
                en cas d'avis négatif. <span className="text-purple-400 font-semibold">Vous gardez le contrôle total.</span>
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Réponse en 2 secondes</h3>
                    <p className="text-slate-400">L'IA génère et envoie une réponse personnalisée aux avis 4-5★ automatiquement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Alerte instantanée avis négatif</h3>
                    <p className="text-slate-400">Notification WhatsApp immédiate pour tout avis ≤ 3★ avec proposition de réponse</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Vous gardez le contrôle</h3>
                    <p className="text-slate-400">Choix simple : "Je réponds moi-même" ou "Autoriser TakeFive à répondre"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - iPhone Mockup with Animation */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />

                {/* iPhone Container */}
                <div className="relative w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-gradient-to-b from-gray-900 to-black rounded-[50px] p-3 shadow-2xl border-4 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-b from-[#1a1d3a] to-[#0f1123] rounded-[42px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-8 pt-2 text-white text-sm">
                      <span>12:34</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-white" />
                        <div className="w-1 h-3 bg-white" />
                        <div className="w-1 h-3 bg-white opacity-50" />
                      </div>
                    </div>

                    {/* WhatsApp Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-3 flex items-center gap-3 mt-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">T5</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">TakeFive Assistant</div>
                        <div className="text-teal-100 text-xs">en ligne</div>
                      </div>
                    </div>

                    {/* Messages Container */}
                    <div className="p-3 md:p-4 space-y-3 h-[calc(100%-120px)] overflow-hidden">
                      {/* Message 1 - Positive Review */}
                      {animationStep >= 1 && (
                        <div className="animate-fade-in-up">
                          <div className="bg-[#1f2937] rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
                              <span className="text-yellow-400 text-xs font-semibold">Nouvel avis Google reçu</span>
                            </div>
                            <div className="flex gap-0.5 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-sm">⭐</span>
                              ))}
                            </div>
                            <p className="text-slate-300 text-xs mb-2">"Excellent service, très réactif !"</p>
                            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-1.5">
                              <div className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                                <span className="text-green-400 text-xs font-medium">Réponse automatique envoyée ✅</span>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-500 mt-1">12:18</div>
                          </div>
                        </div>
                      )}

                      {/* Message 2 - Show AI Response */}
                      {animationStep >= 2 && (
                        <div className="animate-fade-in-up flex justify-end">
                          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-lg">
                            <p className="text-white text-xs">
                              "Merci beaucoup pour votre retour ! Nous sommes ravis de vous avoir satisfait.
                              À très bientôt ! 🙏"
                            </p>
                            <div className="text-[10px] text-purple-200 mt-1">12:18</div>
                          </div>
                        </div>
                      )}

                      {/* Message 3 - Negative Review Alert */}
                      {animationStep >= 3 && (
                        <div className="animate-fade-in-up">
                          <div className="bg-red-900/30 border-2 border-red-500/50 rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-lg animate-pulse-subtle">
                            <div className="flex items-center gap-1.5 mb-1">
                              <AlertTriangle className="w-4 h-4 text-red-400" />
                              <span className="text-red-400 text-xs font-bold">⚠️ Alerte avis négatif</span>
                            </div>
                            <div className="flex gap-0.5 mb-1">
                              <span className="text-red-400 text-sm">⭐⭐</span>
                              <span className="text-slate-500 text-sm">☆☆☆</span>
                              <span className="text-xs text-slate-400 ml-1">(2/5)</span>
                            </div>
                            <p className="text-slate-300 text-xs mb-2">
                              "Déçu du temps d'attente, service pas à la hauteur."
                            </p>
                            <div className="text-[10px] text-slate-500">12:24</div>
                          </div>
                        </div>
                      )}

                      {/* Message 4 - AI Suggestion with Choice */}
                      {animationStep >= 4 && (
                        <div className="animate-fade-in-up">
                          <div className="bg-[#1f2937] rounded-2xl rounded-tl-sm p-3 max-w-[95%] shadow-lg">
                            <div className="text-purple-400 text-xs font-semibold mb-2">
                              💡 Proposition de réponse :
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-2 mb-3 border border-slate-700">
                              <p className="text-slate-300 text-xs italic">
                                "Nous sommes sincèrement désolés pour cette expérience.
                                Nous prenons vos remarques très au sérieux..."
                              </p>
                            </div>

                            {/* Choice Buttons */}
                            <div className="space-y-1.5">
                              <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-xl font-medium text-xs text-center shadow-lg shadow-purple-500/30">
                                ✅ Autoriser TakeFive à répondre
                              </div>
                              <div className="w-full border-2 border-slate-600 text-slate-300 py-2 px-3 rounded-xl font-medium text-xs text-center">
                                ✍️ Je réponds moi-même
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-500 mt-2">12:24</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Input Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#1f2937] p-2.5 flex items-center gap-2">
                      <div className="flex-1 bg-slate-800 text-slate-500 px-3 py-1.5 rounded-full text-xs">
                        Message
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Control Section */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-8 md:p-10 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Contrôle total sur vos réponses</h2>
              </div>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Avec TakeFive, vous décidez comment gérer chaque avis. Pour les avis positifs (4-5★),
                l'IA répond automatiquement pour vous faire gagner du temps. Pour les avis négatifs ou neutres,
                <span className="text-purple-400 font-semibold"> vous choisissez</span> : soit vous prenez la main,
                soit vous autorisez TakeFive à envoyer la réponse proposée.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Avis positifs (4-5★)</h3>
                  <p className="text-slate-400">Réponse automatique immédiate. Gain de temps maximal.</p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Avis négatifs (≤3★)</h3>
                  <p className="text-slate-400">Alerte + proposition. Vous validez ou répondez vous-même.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-slate-400 text-center text-lg mb-16">
              Tout se passe sur WhatsApp, en temps réel
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="text-purple-400 font-bold text-lg mb-2">Étape 1</div>
                <h3 className="text-white font-semibold text-xl mb-3">Surveillance 24/7</h3>
                <p className="text-slate-400">
                  TakeFive surveille Google, Facebook, Trustpilot et Yelp en temps réel
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="text-purple-400 font-bold text-lg mb-2">Étape 2</div>
                <h3 className="text-white font-semibold text-xl mb-3">Réponse intelligente</h3>
                <p className="text-slate-400">
                  L'IA génère une réponse personnalisée et cohérente en 2 secondes
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div className="text-purple-400 font-bold text-lg mb-2">Étape 3</div>
                <h3 className="text-white font-semibold text-xl mb-3">Notification WhatsApp</h3>
                <p className="text-slate-400">
                  Vous êtes notifié et gardez le contrôle sur les avis critiques
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-10 md:p-12 border border-purple-500/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à automatiser vos réponses aux avis ?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10">
                Gagnez du temps tout en gardant le contrôle sur votre réputation en ligne
              </p>
              <button
                onClick={() => navigate('/tarifs')}
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                S'abonner
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReponsesIAAlertesAvis;
