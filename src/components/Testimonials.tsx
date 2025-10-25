import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marc Dubois",
      business: "Restaurateur",
      location: "Lyon",
      rating: 5,
      quote: "Take 5 a transformé mon restaurant. En 3 mois, je suis passé de 18 à 96 avis avec une note de 4,8/5. Les réservations ont explosé et je n'ai rien eu à faire !",
      avatar: "M"
    },
    {
      name: "Sophie Martin",
      business: "Coiffeuse",
      location: "Paris",
      rating: 5,
      quote: "Avant Take 5, je répondais manuellement aux avis le soir. Maintenant tout est automatique et mes clientes adorent la plaque NFC à l'accueil. Je recommande à 100% !",
      avatar: "S"
    },
    {
      name: "Thomas Leroy",
      business: "Plombier",
      location: "Marseille",
      rating: 5,
      quote: "Le reporting WhatsApp est génial, je vois mes stats tous les mois sans me connecter nulle part. Ma note est passée de 4,1 à 4,9 et j'ai 3x plus de demandes de devis.",
      avatar: "T"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="highlight-box text-white">Avis Client</span>
            <br />
            <span className="text-foreground mt-4 block">Ils ont transformé leur visibilité</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-primary/20 hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-4 border-t border-border">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.business}, {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
