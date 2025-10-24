import { Star } from "lucide-react";

export const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-primary">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold">Take 5</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              La solution SaaS qui automatise et optimise votre fiche Google Business Profile avec IA, NFC et reporting WhatsApp.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToForm}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  S'abonner
                </button>
              </li>
              <li>
                <a href="mailto:contact@take5.fr" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Spydercom Branding */}
          <div>
            <p className="text-sm text-background/60 mb-3">Propulsé par</p>
            <a 
              href="https://spydercom.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-4 bg-background/10 rounded-xl hover:bg-background/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Spider Logo SVG */}
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <defs>
                  <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {/* Spider body */}
                <circle cx="20" cy="20" r="6" fill="url(#spiderGradient)" />
                {/* Spider legs */}
                <path d="M14 14 L6 6 M26 14 L34 6 M14 26 L6 34 M26 26 L34 34" 
                      stroke="url(#spiderGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 20 L2 20 M30 20 L38 20 M20 10 L20 2 M20 30 L20 38" 
                      stroke="url(#spiderGradient)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              
              <div>
                <p className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SPYDERCOM
                </p>
                <p className="text-xs text-background/60">Digital Solutions</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Take 5. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
