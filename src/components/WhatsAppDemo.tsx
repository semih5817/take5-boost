import { MessageCircle, TrendingUp, Star, Phone, Navigation, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhatsAppDemo = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Rapport mensuel automatique</span>
            <br />
            directement sur WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque mois, recevez un rapport complet de votre performance Google Business sans lever le petit doigt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-elegant p-4 md:p-6 max-w-md mx-auto border-4 md:border-8 border-foreground">
              {/* iPhone Status Bar */}
              <div className="flex items-center justify-between mb-3 md:mb-4 text-xs">
                <span className="font-semibold">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 md:w-4 h-2 md:h-3 bg-foreground rounded-sm" />
                  <div className="w-3 md:w-4 h-2 md:h-3 bg-foreground rounded-sm" />
                  <div className="w-3 md:w-4 h-2 md:h-3 bg-foreground rounded-sm" />
                </div>
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-3 md:p-4 rounded-t-xl -mx-4 md:-mx-6 -mt-2 mb-3 md:mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-4 md:w-6 h-4 md:h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Take 5 Bot</p>
                    <p className="text-xs opacity-80">en ligne</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 md:space-y-3">
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-none p-3 md:p-4">
                  <p className="font-semibold text-sm md:text-base mb-2">📊 Rapport Mensuel - Janvier 2025</p>
                  <p className="text-xs md:text-sm mb-2 md:mb-3">Voici vos statistiques Google Business :</p>
                  
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center justify-between">
                      <span>👀 Vues</span>
                      <span className="font-bold">10 120 <span className="text-green-600">(+30%)</span></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>⭐ Avis</span>
                      <span className="font-bold">44 <span className="text-red-600">(-28%)</span></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📈 Note moyenne</span>
                      <span className="font-bold">4,7/5 <span className="text-green-600">(+0,2)</span></span>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-black/10">
                    <p className="text-xs font-semibold mb-1.5 md:mb-2">Actions des clients :</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>122 appels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="w-3 h-3" />
                        <span>450 itinéraires</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        <span>4 857 clics site web</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E8E8E8] rounded-2xl rounded-tr-none p-2.5 md:p-3 text-xs md:text-sm">
                  <p className="font-semibold mb-1">Dernier avis client ⭐⭐⭐⭐⭐</p>
                  <p className="text-xs italic">"Excellent service ! Personnel très accueillant et professionnel."</p>
                  <p className="text-xs text-muted-foreground mt-1">- Marie L. il y a 2 jours</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-3 md:mt-4">12:34</p>
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
                icon: MessageCircle,
                title: "Actions des clients",
                description: "Appels, itinéraires et clics site web - suivez ce qui convertit"
              },
              {
                icon: Star,
                title: "Derniers avis",
                description: "Recevez immédiatement les nouveaux avis pour réagir rapidement"
              },
              {
                icon: Phone,
                title: "100% sur WhatsApp",
                description: "Pas d'app à installer, tout arrive directement sur votre téléphone"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-primary transition-all duration-300 hover:-translate-y-1 border-2">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-primary">
                    <feature.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
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
