import { useEffect, useState } from "react";
import { Menu, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import logoWordmark from "@/assets/take5-logo.png";

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("subscription-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAnchorNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = href;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#050714]/90 backdrop-blur-2xl border-b border-white/5 shadow-soft" : "bg-transparent border-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8EC7] to-[#766EFF] shadow-glow">
            <span className="font-heading text-lg font-semibold text-white">T5</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-semibold tracking-tight text-white">Take 5</span>
            <span className="text-xs uppercase tracking-[0.22em] text-white/60">Growth Suite</span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <Play className="mr-2 h-4 w-4" /> Voir la démo
          </Button>
          <Button
            size="sm"
            className="cta-shadow rounded-full bg-gradient-to-r from-[#766EFF] to-[#FF5CA8] px-5 font-semibold text-white hover:opacity-95"
            onClick={scrollToForm}
          >
            Essayer gratuitement
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Button
            size="sm"
            className="rounded-full bg-gradient-to-r from-[#766EFF] to-[#FF5CA8] px-4 font-semibold text-white"
            onClick={scrollToForm}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-white/10 text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs border-l border-white/10 bg-[#050714] text-white"
            >
              <div className="flex h-full flex-col gap-8 pt-10">
                <div className="flex items-center gap-3">
                  <img src={logoWordmark} alt="Take 5" className="h-6 w-auto" />
                </div>
                <nav className="flex flex-col gap-4 text-base">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-white/80"
                      onClick={(event) => {
                        if (link.href.startsWith("#")) {
                          event.preventDefault();
                          handleAnchorNavigation(link.href);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3">
                  <Button variant="ghost" className="justify-center border border-white/10 text-white hover:bg-white/10">
                    Voir la démo
                  </Button>
                  <Button className="rounded-full bg-gradient-to-r from-[#766EFF] to-[#FF5CA8] text-white" onClick={scrollToForm}>
                    Essayer gratuitement
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
