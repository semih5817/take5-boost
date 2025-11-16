import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingCTA } from "./FloatingCTA";

type SiteShellProps = {
  children: ReactNode;
};

export const SiteShell = ({ children }: SiteShellProps) => {
  return (
    <div className="relative min-h-screen bg-[#030312]">
      <SiteHeader />
      <main className="pt-[calc(var(--header-height)+1.5rem)]">{children}</main>
      <SiteFooter />
      <FloatingCTA />
    </div>
  );
};
