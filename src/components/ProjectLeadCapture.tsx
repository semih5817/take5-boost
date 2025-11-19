import { useState } from 'react';

interface ProjectLeadCaptureProps {
  projectName: 'generateur-flyers' | 'publication-multiplateforme' | 'concours' | 'campagnes-sms-email';
}

export const ProjectLeadCapture = ({ projectName }: ProjectLeadCaptureProps) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    project: projectName
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connecter à Brevo/Google Sheets avec tag du projet
    console.log('Lead capturé pour:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const subtitles = {
    'generateur-flyers': 'Laissez votre email pour être prévenu dès que le Générateur de Flyers IA sera disponible.',
    'publication-multiplateforme': 'Laissez votre email pour être prévenu dès que la Publication Multiplateforme sera disponible.',
    'concours': 'Laissez votre email pour être prévenu dès que les Jeux Concours seront disponibles.',
    'campagnes-sms-email': 'Laissez votre email pour être prévenu dès que les Campagnes SMS & Email seront disponibles.'
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-3xl mx-auto">
        
        {!submitted ? (
          <>
            {/* Titre + sous-titre */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Intéressé par cette fonctionnalité ?
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                {subtitles[projectName]}
              </p>
            </div>

            {/* Bouton principal OU Formulaire */}
            {!showForm ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg"
                >
                  Prévenez-moi au lancement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="project-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="project-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Téléphone (optionnel) */}
                <div>
                  <label htmlFor="project-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="project-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Je veux être prévenu'}
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Vos données sont sécurisées et ne seront utilisées que pour vous informer du lancement.
                </p>
              </form>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Parfait ! Vous êtes sur la liste 🎉
            </h3>
            <p className="text-gray-300">
              Nous vous préviendrons dès que cette fonctionnalité sera disponible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
