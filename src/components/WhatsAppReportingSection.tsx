import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, TrendingUp, MessageCircle, AlertTriangle } from "lucide-react";

const WhatsAppReportingSection = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 mb-4 px-4 py-2 text-sm text-white font-bold border-2 border-white/20 shadow-lg">
            ✨ NOUVEAU
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Rapport mensuel
            </span>
            <br />
            automatique sur WhatsApp
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Chaque mois, recevez un rapport complet de votre performance Google Business 
            sans lever le petit doigt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup WhatsApp */}
          <div className="relative">

            {/* Mockup téléphone */}
            <div className="bg-slate-800 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-700 max-w-sm mx-auto">
              <div className="bg-slate-900 rounded-[2.5rem] p-6 h-[600px] overflow-hidden">
                {/* Header WhatsApp */}
                <div className="flex items-center gap-3 mb-6 bg-green-700 -mx-6 -mt-6 px-6 py-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Take 5</p>
                    <p className="text-green-200 text-xs">en ligne</p>
                  </div>
                </div>

                {/* Exemple avis négatif */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl rounded-tl-sm p-4 shadow-xl border-2 border-red-400">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <p className="text-white font-bold text-sm">Avis négatif reçu</p>
                    </div>
                    <div className="bg-red-900/50 rounded-lg p-3 mb-3">
                      <p className="text-white text-xs font-semibold mb-1">★★☆☆☆ - Marc D.</p>
                      <p className="text-red-100 text-xs italic">
                        "Service décevant, attente trop longue..."
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      <p className="text-red-100 text-xs font-medium">Il y a 3 minutes</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full mt-3 bg-white text-red-600 hover:bg-red-50 font-bold"
                    >
                      Contacter le client maintenant →
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">12:35</p>
                </div>

                {/* Rapport mensuel */}
                <div className="mb-4">
                  <div className="bg-green-700 rounded-2xl rounded-tl-sm p-4 shadow-lg">
                    <p className="text-white font-semibold mb-3 text-sm">
                      📊 Rapport Mensuel - Janvier 2025
                    </p>
                    <div className="bg-green-800 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-green-100">👁️ Vues</span>
                        <span className="text-white font-bold">10 120 <span className="text-green-300">(+30%)</span></span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-green-100">⭐ Avis</span>
                        <span className="text-white font-bold">44 <span className="text-green-300">(-28%)</span></span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-green-100">📈 Note</span>
                        <span className="text-white font-bold">4,7/5 <span className="text-green-300">(+0,2)</span></span>
                      </div>
                    </div>
                    <p className="text-green-200 text-xs mt-3 font-medium">
                      Actions : 122 appels • 450 routes • 4 857 clics
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 text-right">12:34</p>
                </div>

                {/* Dernier avis */}
                <div className="mb-4">
                  <div className="bg-green-700 rounded-2xl rounded-tl-sm p-4 shadow-lg">
                    <p className="text-white font-semibold mb-2 text-sm">Dernier avis ⭐⭐⭐⭐⭐</p>
                    <p className="text-green-100 text-xs italic mb-2">
                      "Excellent service ! Personnel très professionnel."
                    </p>
                    <p className="text-green-200 text-xs">- Marie L. il y a 2 jours</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 text-right">12:35</p>
                </div>
              </div>
            </div>
          </div>

          {/* Points clés */}
          <div className="space-y-8">
            {/* Notification instantanée */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-2 border-red-600 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">Notification instantanée</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Recevez immédiatement les nouveaux avis pour <span className="font-bold text-white">réagir rapidement</span>
                    <br />
                    <span className="text-red-400 font-semibold block mt-2">
                      → Notification WhatsApp dès qu'un avis ≤3★ est posté !
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques détaillées */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Statistiques détaillées</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Vues, avis, note moyenne et évolution mensuelle en un coup d'œil
                  </p>
                </div>
              </div>
            </div>

            {/* Actions des clients */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Actions des clients</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Appels, itinéraires et clics site web - suivez ce qui convertit
                  </p>
                </div>
              </div>
            </div>

            {/* 100% sur WhatsApp */}
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-2 border-green-600 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">100% sur WhatsApp</h3>
                  <p className="text-slate-200 leading-relaxed font-medium">
                    Pas d'app à installer, tout arrive directement sur votre téléphone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppReportingSection;
