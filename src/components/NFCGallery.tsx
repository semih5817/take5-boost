import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Award } from "lucide-react";
import nfcCardsGrid from "@/assets/nfc-cards-grid.png";
import nfcCardDetail1 from "@/assets/nfc-card-detail-1.jpg";
import nfcCardDetail2 from "@/assets/nfc-card-detail-2.jpg";
import nfcCardDetail3 from "@/assets/nfc-card-detail-3.jpg";

export const NFCGallery = () => {
  const detailCards = [
    { image: nfcCardDetail1, name: "Plaque premium avec effet brillant" },
    { image: nfcCardDetail2, name: "Design élégant noir mat" },
    { image: nfcCardDetail3, name: "Finition transparente premium" }
  ];

  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Plaques NFC personnalisées</span>
            <br />
            pour nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les designs uniques créés pour des commerces comme le vôtre
          </p>
        </div>

        {/* Main Grid Photo */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-elegant">
          <img
            src={nfcCardsGrid}
            alt="Collection de plaques NFC personnalisées Take5 pour différents commerces"
            className="w-full h-auto"
          />
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {detailCards.map((card, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{card.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center shadow-primary">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6 h-auto"
          >
            Commander ma plaque personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};
