import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "C'est quoi TakeFive exactement ?",
      answer:
        "TakeFive, c'est ton community manager IA qui gère ta visibilité en ligne DEPUIS WHATSAPP. Tu réponds aux avis, tu publies du contenu, tu suis tes stats — tout en envoyant un simple message. Plus besoin de 10 interfaces différentes.",
    },
    {
      question: "Comment ça marche concrètement ?",
      answer:
        "Tu reçois des alertes WhatsApp dès qu'il se passe quelque chose (nouvel avis, concurrent qui te dépasse...). Tu réponds en 2 mots, et l'IA fait le reste. Tu peux aussi publier sur Insta + Google + Facebook d'un coup en envoyant une photo depuis WhatsApp. C'est aussi simple qu'envoyer un texto.",
    },
    {
      question: "L'IA répond-elle automatiquement aux avis ?",
      answer: (
        <>
          <strong className="text-green-400">Avis positifs (4-5⭐)</strong> : Oui, l'IA publie automatiquement une réponse de remerciement pro.
          <br />
          <br />
          <strong className="text-red-400">Avis négatifs (1-3⭐)</strong> : Non ! Tu reçois une alerte + une proposition de réponse. TU décides si tu la publies ou la modifies. Tu gardes 100% du contrôle.
        </>
      ),
    },
    {
      question: "Que se passe-t-il si je reçois un avis négatif ?",
      answer:
        "Tu reçois une alerte WhatsApp instantanée avec l'avis + une proposition de réponse générée par l'IA. Tu peux la publier en 1 clic ou la modifier. Temps moyen de réponse de nos clients : moins de 2 minutes.",
    },
    {
      question: "Combien ça coûte ?",
      answer: (
        <>
          On a 4 formules :
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Gratuit</strong> : pour tester les fonctionnalités (avec limitations)</li>
            <li><strong>Starter (14,90€/mois)</strong> : essentiel pour les petits commerces</li>
            <li><strong>Pro (29,90€/mois)</strong> : pour dominer localement</li>
            <li><strong>Pro Plus (45€/mois)</strong> : tout inclus + fonctionnalités avancées</li>
          </ul>
          <p className="mt-2">Essai gratuit de 7 jours sur toutes les formules. Sans carte bancaire.</p>
        </>
      ),
    },
    {
      question: "Je peux annuler quand je veux ?",
      answer:
        "Oui, à tout moment. Sans frais, sans justification. On ne retient personne en otage. Si TakeFive ne te convient pas, tu annules en 2 clics. (Mais honnêtement, une fois que tu as goûté à la simplicité WhatsApp, tu ne pourras plus revenir en arrière.)",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">fréquentes</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12">
          Tout ce que tu dois savoir sur TakeFive
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
