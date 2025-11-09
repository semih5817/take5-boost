import { TrendingUp, Star, Phone, Globe } from "lucide-react";

export const WhatsAppReportingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F35] to-[#0A0E1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Rapport mensuel
            </span>
            <br />
            automatique sur WhatsApp
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Chaque mois, recevez un rapport complet de votre performance Google Business sans lever le petit doigt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup avec animation */}
          <div className="relative flex justify-center">
            <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl z-10"></div>
              
              {/* Screen Content - Animated */}
              <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 p-4 overflow-hidden">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-3 mb-4 bg-slate-700/50 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                    T5
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Take 5</div>
                    <div className="text-slate-400 text-xs">en ligne</div>
                  </div>
                </div>

                {/* Messages - Animation de défilement */}
                <div className="space-y-3 animate-scroll">
                  {/* Message 1 - Rapport */}
                  <div className="bg-green-700 p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    <div className="text-white font-bold mb-2 flex items-center gap-2">
                      📊 Rapport Mensuel - Janvier 2025
                    </div>
                    <div className="text-sm text-white/90">
                      Voici vos statistiques Google Business :
                    </div>
                  </div>

                  {/* Message 2 - Stats */}
                  <div className="bg-green-700 p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    <div className="space-y-2 text-white text-sm">
                      <div className="flex justify-between">
                        <span>👁️ Vues</span>
                        <span className="font-bold">10 120 <span className="text-green-300">(+30%)</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span>⭐ Avis</span>
                        <span className="font-bold">44 <span className="text-red-300">(-28%)</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span>📝 Note</span>
                        <span className="font-bold">4,7/5 <span className="text-green-300">(+0,2)</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Message 3 - Actions clients */}
                  <div className="bg-green-700 p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    <div className="text-white text-sm mb-2 font-semibold">
                      Actions des clients :
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-white text-xs text-center">
                      <div>
                        <div className="font-bold">122</div>
                        <div className="text-white/80">appels</div>
                      </div>
                      <div>
                        <div className="font-bold">450</div>
                        <div className="text-white/80">routes</div>
                      </div>
                      <div>
                        <div className="font-bold">4 857</div>
                        <div className="text-white/80">clics</div>
                      </div>
                    </div>
                  </div>

                  {/* Message 4 - Dernier avis */}
                  <div className="bg-green-700 p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    <div className="text-white text-sm">
                      <div className="font-semibold mb-1">Dernier avis ⭐⭐⭐⭐⭐</div>
                      <div className="italic text-white/90">"Excellent service ! Personnel très professionnel."</div>
                    </div>
                  </div>

                  {/* Dupliquer pour l'effet de boucle */}
                  <div className="bg-green-700 p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    <div className="text-white font-bold mb-2 flex items-center gap-2">
                      📊 Rapport Mensuel - Janvier 2025
                    </div>
                    <div className="text-sm text-white/90">
                      Voici vos statistiques Google Business :
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="text-green-400 text-xs flex items-center justify-center gap-1">
                    <span className="animate-pulse">✓✓</span>
                    <span>1234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Statistiques détaillées</h3>
                <p className="text-slate-300">
                  Vues, avis, note moyenne et évolution mensuelle en un coup d'œil
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Derniers avis</h3>
                <p className="text-slate-300">
                  Recevez immédiatement les nouveaux avis pour réagir rapidement
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Actions des clients</h3>
                <p className="text-slate-300">
                  Appels, itinéraires et clics site web - suivez ce qui convertit
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">100% sur WhatsApp</h3>
                <p className="text-slate-300">
                  Pas d'app à installer, tout arrive directement sur votre téléphone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
