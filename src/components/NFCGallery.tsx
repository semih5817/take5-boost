import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import nfcCardsGrid from "@/assets/nfc-cards-grid.png";
import nfcCardDetail1 from "@/assets/nfc-card-detail-1.jpg";
import nfcCardDetail2 from "@/assets/nfc-card-detail-2.jpg";
import nfcCardDetail3 from "@/assets/nfc-card-detail-3.jpg";

export const NFCGallery = () => {
  const navigate = useNavigate();
  
  const goToTarifs = () => {
    navigate('/tarifs');
  };

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Plaques NFC personnalisées</span>
            <br />
            pour nos clients
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les designs uniques créés pour des commerces comme le vôtre
          </p>
        </div>

        {/* Main Grid Photo */}
        <div className="mb-8 md:mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-elegant">
          <img
            src={nfcCardsGrid}
            alt="Collection de plaques NFC personnalisées Take5 pour différents commerces"
            className="w-full h-auto"
          />
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { image: nfcCardDetail1, name: "Plaque premium avec effet brillant" },
            { image: nfcCardDetail2, name: "Design élégant noir mat" },
            { image: nfcCardDetail3, name: "Finition transparente premium" }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <p className="text-white font-semibold text-sm md:text-lg">{card.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            {
              icon: Sparkles,
              title: "Design 100% personnalisable",
              description: "Votre logo, vos couleurs, votre identité"
            },
            {
              icon: Zap,
              title: "Technologie NFC + QR Code",
              description: "Compatible avec tous les smartphones"
            },
            {
              icon: Award,
              title: "Qualité premium",
              description: "Carte PVC résistante et élégante"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-primary">
                <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={goToTarifs}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full md:w-auto"
          >
            Commander ma plaque personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};
