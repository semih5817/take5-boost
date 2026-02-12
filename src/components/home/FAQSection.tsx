import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Est-ce que je garde le contrôle de mes réponses aux avis ?",
      answer: "Absolument. TakeFive répond automatiquement aux avis 4-5★ pour vous faire gagner du temps. Pour les avis ≤3★, vous recevez une alerte WhatsApp + proposition de réponse, et vous choisissez : \"Je réponds moi-même\" ou \"Autoriser TakeFive à répondre\". Vous gardez 100% du contrôle sur votre réputation."
    },
    {
      question: "Que se passe-t-il si je reçois un avis négatif ?",
      answer: "Vous êtes alerté instantanément sur WhatsApp (délai < 2 minutes). TakeFive vous propose une réponse adaptée et empathique que vous pouvez modifier ou valider en un clic. Si vous préférez gérer vous-même, vous cliquez simplement sur \"Je réponds moi-même\" et prenez la main."
    },
    {
      question: "L'abonnement est-il sans engagement ? Comment résilier ?",
      answer: "Oui, 100% sans engagement. Vous pouvez annuler en 1 clic depuis votre espace client ou directement via WhatsApp en écrivant \"Stop\". Résiliation immédiate, aucun frais caché, aucune relance commerciale."
    },
    {
      question: "Faut-il installer une application ?",
      answer: "Non, aucune installation nécessaire. Tout se passe sur WhatsApp, une application que vous utilisez déjà tous les jours. Vous recevez les alertes, missions et rapports directement dans une conversation."
    },
    {
      question: "Combien de temps avant de voir un impact sur mon classement local ?",
      answer: "Premiers résultats visibles : 2-4 semaines (augmentation du nombre d'avis + taux de réponse à 100%). Impact significatif sur le classement local : 1-3 mois selon votre niveau de concurrence. Notre score de santé vous montre votre progression en temps réel."
    },
    {
      question: "Je gère plusieurs établissements. TakeFive fonctionne-t-il pour moi ?",
      answer: "Oui, parfaitement. L'offre Starter couvre 1 établissement. L'offre Pro couvre jusqu'à 5 établissements (franchises, chaînes, multi-sites). Chaque fiche Google est suivie indépendamment avec son propre score de santé."
    },
    {
      question: "La plaque NFC est-elle incluse ? Quelles sont les conditions ?",
      answer: "La plaque NFC connectée (valeur 49€) est offerte avec tout abonnement annuel, Starter ou Pro. Elle est expédiée sous 3-5 jours après activation. Pour les abonnements mensuels, la plaque est disponible à l'achat séparé."
    },
    {
      question: "Quel est le délai de réponse du support ?",
      answer: "Starter : réponse garantie sous 24h (jours ouvrés). Pro : réponse garantie sous 2h, 7j/7. Support disponible via WhatsApp, email ou chat. L'onboarding est inclus : nous vous aidons à tout configurer en 2 minutes."
    },
    {
      question: "TakeFive fonctionne-t-il avec d'autres plateformes que Google ?",
      answer: "Oui, notre radar multi-plateformes surveille Google Maps, Facebook, Trustpilot et Yelp 24/7. Tous vos avis sont centralisés et gérés depuis WhatsApp. Réponses automatiques + alertes fonctionnent sur toutes les sources."
    },
    {
      question: "Puis-je tester gratuitement avant de m'abonner ?",
      answer: "Oui, 1 mois gratuit complet, sans carte bancaire. Vous testez toutes les fonctionnalités sans aucune limite. Si vous n'êtes pas convaincu, vous annulez avant la fin du mois d'essai, aucun frais."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, sécurité maximale. Connexion OAuth sécurisée (aucun mot de passe Google stocké). Données hébergées en Europe (conformité RGPD). Aucune revente de données à des tiers. Suppression totale à la résiliation."
    },
    {
      question: "J'ai une question qui n'est pas listée ici ?",
      answer: "Contactez-nous directement sur WhatsApp au +33 9 39 03 76 44 ou par email à support@takefive.fr. Réponse garantie sous 24h maximum (2h pour les clients Pro)."
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Questions{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            fréquentes
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 text-center mb-12">
          Tout ce que vous devez savoir avant de commencer
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-slate-900/50 border border-slate-700 hover:border-purple-500/30 rounded-xl p-5 md:p-6 group transition-colors"
              open={openIndex === index}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }}
            >
              <summary className="font-semibold text-white text-base md:text-lg cursor-pointer flex justify-between items-center list-none gap-4">
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </summary>
              <div className="text-slate-300 mt-4 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
