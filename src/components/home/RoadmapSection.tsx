import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
export const RoadmapSection = () => {
  const features = [{
    icon: "🎮",
    title: "Jeux Concours",
    description: ["Multipliez vos avis par 5", "Tirages au sort automatiques", "Gestion des dotations", "Templates prêts à l'emploi"],
    color: "yellow",
    badge: "🔜 Bientôt",
    bgGradient: "from-yellow-900/20 to-yellow-800/20",
    borderColor: "border-yellow-500/30"
  }, {
    icon: "📧",
    title: "Campagnes SMS / Email",
    description: ["Relances automatiques", "Segmentation intelligente", "Templates personnalisables", "Suivi des conversions"],
    color: "green",
    badge: "🔜 Bientôt",
    bgGradient: "from-green-900/20 to-green-800/20",
    borderColor: "border-green-500/30"
  }, {
    icon: "📊",
    title: "Dashboard Analytics",
    description: ["Démo interactive disponible", "Toutes vos stats en temps réel", "Synchronisation complète (bientôt)", "Exports PDF personnalisés"],
    color: "purple",
    badge: "🎨 Aperçu",
    bgGradient: "from-purple-900/20 to-purple-800/20",
    borderColor: "border-purple-500"
  }];
  const handleNavigation = (title: string) => {
    if (title === "Dashboard Analytics") {
      window.location.href = "/dashboard";
    } else {
      const subscriptionForm = document.getElementById("subscription-form");
      subscriptionForm?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-20 px-4 bg-[#0A0E1A]">
      
    </section>;
};