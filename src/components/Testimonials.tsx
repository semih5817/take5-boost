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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Ils ont transformé</span>
            <br />
            leur visibilité avec Take 5
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
