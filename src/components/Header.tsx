import { Button } from "@/components/ui/button";
import { Star, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        { title: "Gamification & Score de santé", href: "/#gamification" },
        { title: "Analyse concurrentielle", href: "/#analyse-concurrentielle" },
        { title: "Radar multi-plateformes", href: "/#radar-avis" },
        { title: "SEO Local & IA", href: "/#seo-local" },
      ]
    },
    { title: "Projets à venir", href: "/#projets-avenir" },
    { title: "À propos", href: "/a-propos" },
    { title: "Tarifs", href: "/tarifs" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Burger Icon - Gauche */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[101] group"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Logo - Centre */}
            <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2" onClick={closeMenu}>
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl bg-[#4361ee] flex items-center justify-center">
                <Star className="w-5 md:w-6 h-5 md:h-6 text-white fill-white" />
              </div>
              <span className="text-lg md:text-2xl font-bold text-white">Take 5</span>
            </Link>

            {/* Bouton S'abonner - Droite */}
            <Button 
              onClick={goToTarifs}
              size="default"
              className="bg-gradient-to-r from-[#4361ee] to-purple-600 hover:from-[#3651de] hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 text-xs md:text-sm px-3 md:px-6 rounded-xl"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menu Déroulant */}
      <nav 
        className={`fixed top-0 left-0 w-[85%] max-w-[400px] h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] border-r border-primary/30 z-50 transition-transform duration-300 overflow-y-auto ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-8">
          {/* Logo dans le menu */}
          <div className="px-6 pb-6 mb-6 border-b border-primary/20">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="w-10 h-10 rounded-xl bg-[#4361ee] flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-white">Take 5</span>
            </Link>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div>
                  <div className="px-6 py-2 text-purple-500 text-xs font-bold uppercase tracking-wider">
                    {item.title}
                  </div>
                  <div>
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        onClick={closeMenu}
                        className="block px-6 pl-10 py-3 text-slate-400 text-sm hover:text-white hover:bg-primary/10 hover:pl-12 transition-all"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-300 font-medium hover:text-white hover:bg-primary/10 hover:pl-8 transition-all border-b border-primary/10"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}

          {/* Bouton S'abonner dans le menu */}
          <div className="px-6 pt-6">
            <button
              onClick={goToTarifs}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all hover:-translate-y-1 shadow-lg"
            >
              S'abonner
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
