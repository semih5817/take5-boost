export const ContestSection = () => {
  return <section className="relative py-24 px-6 overflow-hidden">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* GAUCHE : Texte + arguments */}
          

          {/* DROITE : Mockup roue de la chance */}
          <div className="relative lg:pl-8">
            {/* Effet halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl" />
            
            {/* Placeholder mockup - Roue */}
            
          </div>
        </div>
      </div>
    </section>;
};