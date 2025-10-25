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
            <div className="bg-[#0B141A] rounded-3xl shadow-glow p-4 md:p-6 max-w-md mx-auto border border-primary/20">
              {/* iPhone Status Bar */}
              <div className="flex items-center justify-between mb-3 md:mb-4 text-xs text-white/60">
                <span className="font-semibold">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white" opacity="0.6">
                    <path d="M1 4.5C1 2.567 2.567 1 4.5 1s3.5 1.567 3.5 3.5S6.433 8 4.5 8 1 6.433 1 4.5zM9 4.5C9 2.567 10.567 1 12.5 1S16 2.567 16 4.5 14.433 8 12.5 8 9 6.433 9 4.5z"/>
                  </svg>
                  <svg className="w-4 h-3 ml-1" viewBox="0 0 16 12" fill="white" opacity="0.6">
                    <rect width="1.5" height="5" x="1" y="7" rx="0.5"/>
                    <rect width="1.5" height="7" x="4" y="5" rx="0.5"/>
                    <rect width="1.5" height="9" x="7" y="3" rx="0.5"/>
                    <rect width="1.5" height="11" x="10" y="1" rx="0.5"/>
                  </svg>
                  <svg className="w-6 h-3 ml-1" viewBox="0 0 24 12" fill="white" opacity="0.6">
                    <rect width="18" height="11" x="1" y="0.5" rx="2.5" stroke="white" strokeWidth="1" fill="none"/>
                    <path d="M20 4v4" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                  </svg>
                </div>
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#202C33] text-white p-3 md:p-4 rounded-xl mb-3 md:mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white p-1.5 md:p-2 flex items-center justify-center">
                    <img src={take5Logo} alt="Take 5" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Take 5</p>
                    <p className="text-xs text-white/60">en ligne</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#00A884]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 8l-8 8M8 8l8 8"/>
                  </svg>
                </div>
              </div>

              {/* WhatsApp Background Pattern */}
              <div className="bg-[#0B141A] rounded-xl p-4 min-h-[400px]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}>
                {/* Message */}
                <div className="space-y-2 md:space-y-3">
                  <div className="bg-[#005C4B] text-white rounded-lg rounded-tl-sm p-3 md:p-4 shadow-lg">
                    <p className="font-semibold text-sm md:text-base mb-2">📊 Rapport Mensuel - Janvier 2025</p>
                    <p className="text-xs md:text-sm mb-2 md:mb-3 opacity-90">Voici vos statistiques Google Business :</p>
                    
                    <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                      <div className="flex items-center justify-between bg-white/10 rounded p-2">
                        <span>👀 Vues</span>
                        <span className="font-bold">10 120 <span className="text-green-300">(+30%)</span></span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded p-2">
                        <span>⭐ Avis</span>
                        <span className="font-bold">44 <span className="text-red-300">(-28%)</span></span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded p-2">
                        <span>📈 Note moyenne</span>
                        <span className="font-bold">4,7/5 <span className="text-green-300">(+0,2)</span></span>
                      </div>
                    </div>

                    <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-white/20">
                      <p className="text-xs font-semibold mb-1.5 md:mb-2">Actions des clients :</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2 bg-white/10 rounded p-1.5">
                          <Phone className="w-3 h-3" />
                          <span>122 appels</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded p-1.5">
                          <Navigation className="w-3 h-3" />
                          <span>450 itinéraires</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded p-1.5">
                          <Globe className="w-3 h-3" />
                          <span>4 857 clics site web</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end gap-1 mt-2 text-xs opacity-70">
                      <span>12:34</span>
                      <Check className="w-3 h-3" />
                      <Check className="w-3 h-3 -ml-2 text-[#53BDEB]" />
                    </div>
                  </div>

                  <div className="bg-[#202C33] text-white rounded-lg rounded-tr-sm p-2.5 md:p-3 text-xs md:text-sm shadow-lg max-w-[85%]">
                    <p className="font-semibold mb-1">Dernier avis client ⭐⭐⭐⭐⭐</p>
                    <p className="text-xs opacity-90 italic">"Excellent service ! Personnel très accueillant et professionnel."</p>
                    <p className="text-xs opacity-60 mt-1">- Marie L. il y a 2 jours</p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-xs opacity-70">
                      <span>12:35</span>
                    </div>
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
