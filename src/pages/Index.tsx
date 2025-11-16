import { SiteShell } from "@/layout/SiteShell";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { PartnersStrip } from "@/features/home/sections/PartnersStrip";
import { StatsSection } from "@/features/home/sections/StatsSection";
import { ProblemSolutionSection } from "@/features/home/sections/ProblemSolutionSection";
import { WhatsAppReportingSection } from "@/features/home/sections/WhatsAppReportingSection";

const Index = () => {
  return (
    <SiteShell>
      <HeroSection />
      <PartnersStrip />
      <StatsSection />
      <ProblemSolutionSection />
      <WhatsAppReportingSection />
    </SiteShell>
  );
};

export default Index;