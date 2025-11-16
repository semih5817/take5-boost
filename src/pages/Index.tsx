import { SiteShell } from "@/layout/SiteShell";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { PartnersStrip } from "@/features/home/sections/PartnersStrip";
import { StatsSection } from "@/features/home/sections/StatsSection";

const Index = () => {
  return (
    <SiteShell>
      <HeroSection />
      <PartnersStrip />
      <StatsSection />
    </SiteShell>
  );
};

export default Index;