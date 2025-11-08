import { Star } from "lucide-react";

export const TestimonialsNewSection = () => {
  const testimonials = [
    {
      name: "Marie Chevalier",
      business: "Café Le Gourmet • Paris",
      initials: "MC",
      rating: 5,
      text: 'Avant Take 5, j\'avais 8 avis en 2 ans. Maintenant j\'en ai 42 en 3 mois. Les alertes WhatsApp sont géniales, je réponds aux avis négatifs en 2 minutes.',
      stats: {
        reviews: "+34 avis",
        rating: "3.9 → 4.7⭐",
      },
    },
    {
      name: "Jean Dupont",
      business: "La Bella Vita • Lyon",
      initials: "JD",
      rating: 5,
      text: "Le système d'alertes concurrents m'a fait découvrir un nouveau restaurant qui me piquait des clients. J'ai pu réagir à temps et renforcer ma communication.",
      stats: {
        reviews: "+28 avis",
        rating: "4.3 → 4.8⭐",
      },
    },
    {
      name: "Sophie Martin",
      business: "Optique Vision • Marseille",
      initials: "SM",
      rating: 5,
      text: "J'étais sceptique au début. Mais 19,90€/mois pour être #1 sur Google, c'est le meilleur investissement que j'ai fait. Mon CA a augmenté de 30%.",
      stats: {
        reviews: "+51 avis",
        rating: "4.1 → 4.9⭐",
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A0E1A] to-[#1A1F35]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Ce que disent nos <span className="text-purple-400">clients</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16">
          500+ commerces nous font confiance
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
