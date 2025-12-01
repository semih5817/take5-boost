import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import GenerateurFlyers from "./pages/GenerateurFlyers";
import PublicationMultiplateforme from "./pages/PublicationMultiplateforme";
import CampagnesCiblees from "./pages/CampagnesCiblees";
import Concours5Minutes from "./pages/Concours5Minutes";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import NousContacter from "./pages/NousContacter";
import Tarifs from "./pages/Tarifs";
import Documentation from "./pages/Documentation";
import CentreAide from "./pages/CentreAide";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import APropos from "./pages/APropos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projets/generateur-flyers" element={<GenerateurFlyers />} />
          <Route path="/projets/publication-multiplateforme" element={<PublicationMultiplateforme />} />
          <Route path="/projets/concours-5-minutes" element={<Concours5Minutes />} />
          <Route path="/projets/campagnes-sms-email" element={<CampagnesCiblees />} />
          <Route path="/projets/campagnes-ciblees" element={<CampagnesCiblees />} />
          <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
          <Route path="/nous-contacter" element={<NousContacter />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/centre-aide" element={<CentreAide />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/a-propos" element={<APropos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
