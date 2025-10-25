import { TrendingUp, Star, Phone, Navigation, Globe, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import take5Logo from "@/assets/take5-logo.png";

export const WhatsAppDemo = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="highlight-box text-white">Rapport mensuel</span>
            <br />
            <span className="text-foreground mt-4 block">automatique sur WhatsApp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque mois, recevez un rapport complet de votre performance Google Business sans lever le petit doigt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#0B141A] rounded-3xl shadow-glow p-6 max-w-md mx-auto border border-primary/30">
              {/* WhatsApp Header */}
              <div className="bg-[#1F2C34] text-white p-4 rounded-xl mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white p-2">
                    <img src={take5Logo} alt="Take 5" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold">Take 5</p>
                    <p className="text-xs text-white/60">en ligne</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 bg-[#0B141A] rounded-xl p-4" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.01) 10px, rgba(255,255,255,0.01) 20px)`
              }}>
                {/* Message 1 - Rapport */}
                <div className="bg-[#005C4B] text-white rounded-lg rounded-tl-sm p-4 shadow-lg">
                  <p className="font-semibold mb-2">📊 Rapport Mensuel - Janvier 2025</p>
                  <p className="text-sm mb-3 opacity-90">Voici vos statistiques Google Business :</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                      <span>👀 Vues</span>
                      <span className="font-bold">10 120 <span className="text-green-300">(+30%)</span></span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                      <span>⭐ Avis</span>
                      <span className="font-bold">44 <span className="text-red-300">(-28%)</span></span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                      <span>📈 Note</span>
                      <span className="font-bold">4,7/5 <span className="text-green-300">(+0,2)</span></span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/20">
                    <p className="text-xs font-semibold mb-2">Actions des clients :</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <Phone className="w-3 h-3 mx-auto mb-1" />
                        <div className="font-bold">122</div>
                        <div className="opacity-70">appels</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <Navigation className="w-3 h-3 mx-auto mb-1" />
                        <div className="font-bold">450</div>
                        <div className="opacity-70">routes</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <Globe className="w-3 h-3 mx-auto mb-1" />
                        <div className="font-bold">4 857</div>
                        <div className="opacity-70">clics</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-1 mt-2 text-xs opacity-70">
                    <span>12:34</span>
                    <Check className="w-3 h-3 text-[#53BDEB]" />
                    <Check className="w-3 h-3 -ml-2 text-[#53BDEB]" />
                  </div>
                </div>

                {/* Message 2 - Avis */}
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tr-sm p-3 shadow-lg max-w-[85%]">
                  <p className="font-semibold text-sm mb-1">Dernier avis ⭐⭐⭐⭐⭐</p>
                  <p className="text-xs opacity-90 italic">"Excellent service ! Personnel très professionnel."</p>
                  <p className="text-xs opacity-60 mt-1">- Marie L. il y a 2 jours</p>
                  <div className="flex items-center justify-end text-xs opacity-70 mt-1">
                    <span>12:35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {[
              {
                icon: TrendingUp,
                title: "Statistiques détaillées",
                description: "Vues, avis, note moyenne et évolution mensuelle en un coup d'œil"
              },
              {
                icon: Star,
                title: "Derniers avis",
                description: "Recevez immédiatement les nouveaux avis pour réagir rapidement"
              },
              {
                icon: Phone,
                title: "Actions des clients",
                description: "Appels, itinéraires et clics site web - suivez ce qui convertit"
              },
              {
                icon: Globe,
                title: "100% sur WhatsApp",
                description: "Pas d'app à installer, tout arrive directement sur votre téléphone"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-4 md:p-6 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-primary/20 hover:border-primary/50">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                    <feature.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
