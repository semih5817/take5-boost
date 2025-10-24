import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Award, ChevronLeft, ChevronRight } from "lucide-react";
import nfcCardsGrid from "@/assets/nfc-cards-grid.png";
import nfcCardDetail1 from "@/assets/nfc-card-detail-1.jpg";
import nfcCardDetail2 from "@/assets/nfc-card-detail-2.jpg";
import nfcCardDetail3 from "@/assets/nfc-card-detail-3.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export const NFCGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselSlides = [
    { image: nfcCardsGrid, name: "Collection complète de nos clients", featured: true },
    { image: nfcCardDetail1, name: "Plaque premium avec effet brillant" },
    { image: nfcCardDetail2, name: "Design élégant noir mat" },
    { image: nfcCardDetail3, name: "Finition transparente premium" }
  ];

  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
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

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {carouselSlides.map((slide, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 px-4"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-500 group">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ${
                        slide.featured ? '' : 'aspect-square'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white font-bold text-xl md:text-2xl">{slide.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elegant hover:shadow-primary transition-all duration-300 hover:scale-110 flex items-center justify-center z-10"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elegant hover:shadow-primary transition-all duration-300 hover:scale-110 flex items-center justify-center z-10"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
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
