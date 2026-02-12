import { Star } from "lucide-react";

export const TestimonialsNewSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      business: "Pizzeria La Bella • Lyon",
      initials: "SM",
      rating: 5,
      text: 'Avant TakeFive, je perdais 4h par semaine à répondre aux avis et à poster sur Instagram. Maintenant, tout se fait en 30 secondes depuis WhatsApp. C\'est magique.',
      stats: {
        reviews: "+47 avis en 3 mois",
        rating: "4.2 → 4.8⭐",
      },
    },
    {
      name: "Julien D.",
      business: "Café Le Central • Paris",
      initials: "JD",
      rating: 5,
      text: "Je reçois une alerte WhatsApp dès qu'un concurrent me dépasse. Ça m'a permis de réagir vite et de reprendre ma place de n°1 dans ma rue. Génial !",
      stats: {
        reviews: "+38 avis",
        rating: "4.0 → 4.6⭐",
      },
    },
    {
      name: "Marie L.",
      business: "Salon Beauté & Vous • Marseille",
      initials: "ML",
      rating: 5,
      text: "Publier sur Insta + Google + Facebook en même temps depuis WhatsApp ? Je gagne 2h par semaine, et ma visibilité a explosé. Best décision 2024.",
      stats: {
        reviews: "+62 avis",
        rating: "3.9 → 4.7⭐",
      },
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Ce que nos clients{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            obtiennent
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 text-center mb-16">
          Ils ont retrouvé du temps, amélioré leur note Google, et explosé leur visibilité locale
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:scale-105 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.business}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">↗️ {testimonial.stats.reviews}</span>
                <span>•</span>
                <span>Note : {testimonial.stats.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
