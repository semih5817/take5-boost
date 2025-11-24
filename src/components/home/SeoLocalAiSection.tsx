import { SeoLocalWhatsAppPhone } from '../animations/SeoLocalWhatsAppPhone';

export const SeoLocalAiSection = () => {

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="seo-local">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Optimisation SEO Local & IA :
            </span>
            <br />
            <span className="text-white">
              devenez n°1 dans votre ville
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nous optimisons votre fiche Google et votre présence en ligne pour remonter dans les résultats locaux... et dans les recommandations des IA (ChatGPT, Claude, etc.).
          </p>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : Arguments */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Argument 1 - Audit complet */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Audit complet de la fiche Google
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyse approfondie : catégories, titre, description, photos, posts, NAP (nom, adresse, téléphone). On identifie tous les points à optimiser.
                </p>
              </div>
            </div>

            {/* Argument 2 - Optimisation SEO local */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Optimisation SEO local
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Réécriture des textes avec les bons mots-clés locaux (ville, quartier, spécialité). Ajustement des catégories et attributs. Plan de contenu : types de photos, idées de posts, fréquence de publication.
                </p>
              </div>
            </div>

            {/* Argument 3 - Visibilité IA (GEO) */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Visibilité dans les IA (GEO)
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Les IA (ChatGPT, Claude, Perplexity) se basent sur la qualité de vos données en ligne. Objectif : être cité quand un utilisateur demande "Quel est le meilleur [type de commerce] à [Ville] ?"
                </p>
              </div>
            </div>

            {/* Argument 4 - Suivi & ajustements */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Suivi & ajustements réguliers
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Suivi de votre rang dans Google Maps, de votre note moyenne, du nombre d'avis. Ajustements progressifs pour atteindre et maintenir le top 3 local.
                </p>
              </div>
            </div>

          </div>

          {/* Droite : Animation iPhone WhatsApp */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-fast" />
            <div className="relative">
              <SeoLocalWhatsAppPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
