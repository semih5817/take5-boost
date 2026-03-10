import { Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="text-xl font-extrabold text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>TakeFive</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              La plateforme #1 pour gérer vos avis Google avec l'IA
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all">
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all">
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="https://www.instagram.com/takefive.fr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all">
                <img src="/logos/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@takefive.fr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all">
                <img src="/logos/tiktok.svg" alt="TikTok" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#fonctionnalites" className="text-muted-foreground hover:text-primary transition-all">Fonctionnalités</a></li>
              <li><a href="/tarifs" className="text-muted-foreground hover:text-primary transition-all">Tarifs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/a-propos" className="text-muted-foreground hover:text-primary transition-all">À propos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all">Blog</a></li>
              <li><a href="/nous-contacter" className="text-muted-foreground hover:text-primary transition-all">Nous contacter</a></li>
              <li><a href="/devenir-partenaire" className="text-muted-foreground hover:text-primary transition-all">Devenir partenaire</a></li>
              <li><a href="/prestataire" className="text-muted-foreground hover:text-primary transition-all">Devenir apporteur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/centre-aide" className="text-muted-foreground hover:text-primary transition-all">Centre d'aide</a></li>
              <li><a href="/documentation" className="text-muted-foreground hover:text-primary transition-all">Documentation</a></li>
              <li><a href="/cgv" className="text-muted-foreground hover:text-primary transition-all">CGV</a></li>
              <li><a href="/confidentialite" className="text-muted-foreground hover:text-primary transition-all">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 TakeFive. Tous droits réservés.</p>
          <a href="https://tuna-agency.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all">
            <span className="text-sm">Propulsé par</span>
            <span className="text-foreground group-hover:text-muted-foreground transition-all text-lg tracking-wide" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>TUNA</span>
          </a>
          <p className="text-muted-foreground text-sm">Fait avec 💜 en France</p>
        </div>
      </div>
    </footer>
  );
};
