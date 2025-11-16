import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  const scrollToForm = () => {
    const form = document.getElementById("subscription-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="rounded-2xl border border-white/10 bg-[#08091C]/95 p-3 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Take 5</p>
            <p className="text-sm font-semibold text-white">Passez 1ᵉʳ sur Google</p>
          </div>
          <Button
            size="sm"
            className="rounded-full bg-gradient-to-r from-[#766EFF] to-[#FF5CA8] text-sm font-semibold text-white"
            onClick={scrollToForm}
          >
            Go <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
