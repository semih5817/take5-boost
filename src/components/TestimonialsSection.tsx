import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marc Dubois",
      business: "Restaurateur, Lyon",
      rating: 5,
      text: "Take 5 a transformé mon restaurant. En 3 mois, je suis passé de 18 à 96 avis avec une note de 4,8/5. Les réservations ont explosé et je n'ai rien eu à faire !",
      highlight: false,
      image: "🍽️"
    },
    {
      name: "Sophie Martin",
      business: "Coiffeuse, Paris",
      rating: 5,
      text: "Avant Take 5, je répondais manuellement aux avis le soir. Maintenant tout est automatique et mes clientes adorent la plaque NFC à l'accueil. Je recommande à 100% !",
      highlight: false,
      image: "💇"
    },
    {
      name: "Thomas Leroy",
      business: "Plombier, Marseille",
      rating: 5,
      text: "Le reporting WhatsApp est génial, je vois mes stats tous les mois sans me connecter nulle part. Ma note est passée de 4,1 à 4,9 et j'ai 3x plus de demandes de devis.",
      highlight: false,
      image: "🔧"
    },
    {
      name: "Julie Bernard",
      business: "Propriétaire Salon de beauté, Toulouse",
      rating: 5,
      text: "La notification instantanée sur WhatsApp m'a permis de contacter une cliente mécontente en 10 minutes, elle a modifié son avis 1★ en 5★. Sans Take 5, je n'aurais jamais su.",
      highlight: false,
      image: "💅"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Titre */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 mb-4 px-4 py-2">
            Avis Client
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ils ont{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              transformé leur visibilité
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Des résultats concrets pour tous les types d'activités locales
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-slate-600 mb-4" />

              {/* Logo Google */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#4285F4"/>
                  <path d="M6.3 14.7l7.5 5.5C15.2 16.7 19.3 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 7.1 29.6 5 24 5 16.3 5 9.7 9.5 6.3 14.7z" fill="#EA4335"/>
                  <path d="M24 43c5.4 0 10.4-2 14.4-5.3l-6.7-5.7c-2 1.4-4.5 2.2-7.7 2.2-5.8 0-10.7-3.9-12.5-9.2l-7.4 5.7C8.1 37.8 15.3 43 24 43z" fill="#34A853"/>
                  <path d="M43.6 20H24v8.5h11.8c-.8 2.4-2.2 4.4-4.1 5.8l6.7 5.7c3.9-3.6 6.6-8.8 6.6-15 0-1.3-.1-2.6-.4-3.9z" fill="#FBBC05"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Témoignage */}
              <p className="text-lg leading-relaxed mb-6 text-slate-300">
                "{testimonial.text}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistique globale */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 text-center">
          <p className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text mb-4">
            "En 2 mois, je suis passé de 15 avis à 87 avis, et ma note est montée de 3,9 à 4,7. Take 5 a complètement transformé ma présence en ligne !"
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-xl">
              🍕
            </div>
            <div className="text-left">
              <p className="font-bold text-white text-xl">Marc D.</p>
              <p className="text-slate-400">Restaurant Le Gourmet, Lyon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
