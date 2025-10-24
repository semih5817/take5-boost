import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment fonctionne la plaque NFC ?",
      answer: "La plaque NFC se place à votre accueil ou caisse. Quand un client approche son smartphone, elle ouvre automatiquement votre fiche Google pour laisser un avis. C'est compatible avec tous les smartphones sans app à installer. Un QR code est également intégré pour les téléphones plus anciens."
    },
    {
      question: "Puis-je résilier à tout moment après les 12 mois ?",
      answer: "Oui, absolument ! L'engagement de 12 mois permet de bénéficier du tarif préférentiel de 9,90€/mois. Après cette période, vous pouvez résilier en 1 clic depuis votre espace client, sans frais ni pénalités."
    },
    {
      question: "Comment l'IA répond-elle aux avis ?",
      answer: "Notre IA analyse chaque avis en temps réel et génère une réponse personnalisée en fonction du ton, du contenu et de votre activité. Elle sait gérer les avis positifs (remerciements authentiques) et négatifs (réponses professionnelles et constructives). Vous gardez toujours le contrôle avec possibilité de validation manuelle si vous le souhaitez."
    },
    {
      question: "Que contient le reporting mensuel sur WhatsApp ?",
      answer: "Chaque mois, vous recevez un rapport complet avec : vues de votre fiche, nombre d'avis collectés, évolution de votre note, actions des clients (appels, itinéraires, clics site web), vos derniers avis avec leur note, et des recommandations personnalisées pour améliorer votre visibilité."
    },
    {
      question: "Le setup est-il compliqué ?",
      answer: "Pas du tout ! En 5 minutes chrono : 1) Vous connectez votre fiche Google Business (un simple clic), 2) Vous personnalisez votre plaque NFC, 3) Vous recevez votre plaque sous 48h, 4) Vous la placez à l'accueil. Notre IA s'occupe du reste automatiquement. Un tutoriel vidéo et notre support sont là si besoin."
    },
    {
      question: "Puis-je gérer plusieurs établissements ?",
      answer: "Oui ! Pour les franchises et enseignes, nous proposons une offre spéciale multi-sites avec tableau de bord centralisé, reporting consolidé et tarifs dégressifs. Contactez-nous pour un devis personnalisé adapté à votre nombre d'établissements."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Vos données sont cryptées, hébergées en France (RGPD compliant) et jamais partagées avec des tiers. Nous utilisons uniquement les APIs officielles Google avec votre autorisation explicite. Vous pouvez révoquer l'accès à tout moment."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Questions fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir sur Take 5
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-2"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 group"
              >
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <Plus 
                  className={`w-6 h-6 flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
