import { FOOTER_COLUMNS, CONTACT_ENTRIES } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  { icon: Facebook, href: "https://facebook.com/takefive", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/takefive", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/takefive", label: "LinkedIn" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030312]">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
              Take 5
            </div>
            <h3 className="mt-4 font-heading text-3xl font-semibold text-white">La suite locale qui ferme la porte à vos concurrents.</h3>
            <p className="mt-3 text-sm text-white/70">
              IA, NFC et reporting WhatsApp pour maintenir votre fiche Google au top, sans effort.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <div className="flex items-center gap-1 text-amber-300">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current text-amber-300" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-white">4.9/5 sur Google</span>
              <span className="text-xs text-white/60">127 commerces accompagnés</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <Button
                key={social.label}
                asChild
                size="icon"
                variant="ghost"
                className="h-12 w-12 rounded-2xl border border-white/10 text-white hover:bg-white/10"
              >
                <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3 text-sm text-white/70">
              <p className="font-heading text-sm font-semibold text-white">{column.title}</p>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-tight border-t border-white/5 py-8 text-xs text-white/50 md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          {CONTACT_ENTRIES.map((entry) => (
            <span key={entry.label} className="flex items-center gap-2 font-medium text-white/70">
              <span className="uppercase tracking-[0.2em] text-white/40">{entry.label}</span>
              {entry.href ? (
                <a href={entry.href} className="text-white hover:text-white/80">
                  {entry.value}
                </a>
              ) : (
                <span>{entry.value}</span>
              )}
            </span>
          ))}
        </div>
        <p className="mt-4 text-white/40 md:mt-0">© {new Date().getFullYear()} Take 5. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
