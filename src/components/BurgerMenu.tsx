import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Accueil",
      href: "/#top"
    },
    {
      title: "Automatisations",
      submenu: [
        { title: "Rapport mensuel WhatsApp", href: "/#rapport-whatsapp" },
        { title: "Gamification & Score de santé", href: "/#gamification" },
        { title: "Radar multi-plateformes", href: "/#radar-avis" },
        { title: "Concours en 5 minutes", href: "/#concours" },
        { title: "SEO Local & IA", href: "/#seo-local" }
      ]
    },
    {
      title: "Projets à venir",
      href: "/#projets-avenir"
    },
    {
      title: "Tarifs",
      href: "/#pricing"
    },
    {
      title: "S'abonner",
      href: "/#subscription-form",
      highlight: true
    }
  ];

  return (
    <>
      {/* Bouton burger - TOUT À GAUCHE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-6 z-50 p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg hover:scale-105 transition-all"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu panel - SLIDE DEPUIS LA GAUCHE */}
      <aside 
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539] shadow-2xl z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          {/* Logo */}
          <div className="mb-8 mt-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>⭐</span> Take 5
            </h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-semibold mb-2">
                      {item.title}
                    </div>
                    <div className="space-y-2 pl-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all ${
                      item.highlight
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
                    }`}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
