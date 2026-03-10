import { Button } from "@/components/ui/button";
import { Menu, Zap, Users, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import takefiveLogo from "@/assets/takefive-logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToTarifs = () => {
    navigate('/tarifs');
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { title: "Accueil", href: "/#top" },
    {
      title: "Automatisations",
      submenu: [
        { title: "Gamification & Score de santé", href: "/gamification" },
        { title: "Analyse concurrentielle", href: "/analyse-concurrentielle" },
        { title: "Radar multi-plateformes", href: "/radar-multi-plateformes" },
        { title: "SEO Local & IA", href: "/seo-local-ia" },
        { title: "Réponses IA + Alertes avis", href: "/reponses-ia-alertes-avis", isNew: true },
        { title: "Score de santé", href: "/score-de-sante", isNew: true },
      ]
    },
    { title: "Projets à venir", href: "/#projets-avenir" },
    { title: "À propos", href: "/a-propos" },
    { title: "Tarifs", href: "/tarifs" },
    { title: "Devenir apporteur", href: "/prestataire" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Burger Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[101] group lg:hidden"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <img src={takefiveLogo} alt="TakeFive" className="w-8 md:w-9 h-8 md:h-9 rounded-lg object-cover" />
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                TakeFive
              </span>
            </Link>

            {/* Desktop Nav Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost"
                onClick={() => { document.getElementById('fonctionnalites')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                <Zap className="w-4 h-4 mr-1.5" />
                Fonctionnalités
              </Button>
              <Button 
                onClick={() => navigate('/prestataire')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-5"
              >
                <Users className="w-4 h-4 mr-1.5" />
                Devenir Apporteur
              </Button>
              <Button 
                onClick={goToTarifs}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5"
              >
                <CreditCard className="w-4 h-4 mr-1.5" />
                S'abonner
              </Button>
            </div>

            {/* Mobile S'abonner */}
            <Button 
              onClick={goToTarifs}
              size="sm"
              className="lg:hidden bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-4 rounded-lg font-bold"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav 
        className={`fixed top-0 left-0 w-[85%] max-w-[400px] h-screen bg-background border-r border-border z-50 transition-transform duration-300 overflow-y-auto lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-8">
          <div className="px-6 pb-6 mb-6 border-b border-border">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img src={takefiveLogo} alt="TakeFive" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>TakeFive</span>
            </Link>
          </div>

          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div>
                  <div className="px-6 py-2 text-primary text-xs font-bold uppercase tracking-wider">
                    {item.title}
                  </div>
                  <div>
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        onClick={closeMenu}
                        className={`block px-6 pl-10 py-3 text-sm hover:text-foreground hover:bg-primary/10 hover:pl-12 transition-all ${
                          location.pathname === subItem.href 
                            ? 'text-foreground border-l-2 border-primary bg-primary/5' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-6 py-4 text-muted-foreground font-medium hover:text-foreground hover:bg-primary/10 hover:pl-8 transition-all border-b border-border"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}

          <div className="px-6 pt-6 space-y-3">
            <button
              onClick={() => { navigate('/prestataire'); closeMenu(); }}
              className="w-full py-3 bg-secondary rounded-lg text-secondary-foreground font-bold hover:bg-secondary/90 transition-all"
            >
              Devenir Apporteur
            </button>
            <button
              onClick={goToTarifs}
              className="w-full py-3 bg-primary rounded-lg text-primary-foreground font-bold hover:bg-primary/90 transition-all"
            >
              S'abonner
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
