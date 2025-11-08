import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer:
        "L'essai gratuit dure 1 mois complet et inclut TOUTES les fonctionnalités du pack Pro (100 tokens IA, alertes, rapports, etc.). Aucune carte bancaire n'est requise. Vous pouvez annuler à tout moment en 1 clic.",
    },
    {
      question: "L'IA publie-t-elle mes réponses automatiquement ?",
      answer: (
        <>
          <strong className="text-green-400">Pour les avis positifs (4-5⭐)</strong> : Oui, l'IA
          publie automatiquement une réponse de remerciement professionnelle.
          <br />
          <br />
          <strong className="text-red-400">Pour les avis négatifs (1-3⭐)</strong> : Non ! L'IA
          génère une proposition de réponse, mais VOUS décidez de la publier ou de la modifier.
          Vous gardez le contrôle total.
        </>
      ),
    },
    {
      question: "Que se passe-t-il si je reçois un avis négatif ?",
      answer:
        "Vous recevez une alerte WhatsApp instantanée avec l'avis + une proposition de réponse générée par l'IA. Vous pouvez la publier en 1 clic ou la modifier selon vos besoins. En moyenne, nos clients répondent en moins de 2 minutes.",
    },
    {
      question: "Les alertes concurrents, c'est légal ?",
      answer:
        "Oui, 100% légal ! Nous surveillons uniquement les informations publiques disponibles sur Google My Business (nombre d'avis, note moyenne, etc.). Aucune donnée privée n'est collectée.",
    },
    {
      question: "Puis-je changer de pack en cours d'année ?",
      answer:
        "Oui ! Vous pouvez upgrader à tout moment (de Starter vers Pro par exemple). Le montant déjà payé est déduit au prorata. Pour un downgrade, cela sera effectif à la fin de votre période d'engagement.",
    },
    {
      question: "Que contient le rapport WhatsApp mensuel ?",
      answer:
        "Le rapport mensuel inclut : vos stats complètes (vues fiche, avis collectés, évolution note), actions clients (appels, itinéraires, clics site), détail de vos derniers avis, réponses IA publiées, avis négatifs traités (temps moyen), et des recommandations personnalisées pour améliorer votre visibilité.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#1A1F35]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Questions <span className="text-purple-400">fréquentes</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12">
          Tout ce que vous devez savoir sur Take 5
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 group"
              open={openIndex === index}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }}
            >
              <summary className="font-bold text-white text-lg cursor-pointer flex justify-between items-center list-none">
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </summary>
              <div className="text-slate-300 mt-4 leading-relaxed">
                {typeof faq.answer === "string" ? faq.answer : faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
