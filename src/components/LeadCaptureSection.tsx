import { useState } from 'react';

export const LeadCaptureSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connecter à Brevo/Google Sheets/Autre
    console.log('Lead capturé:', formData);
    
    // Simulation envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {!submitted ? (
          <>
            {/* Titre + sous-titre */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ces fonctionnalités vous intéressent ?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Laissez votre email pour être parmi les premiers informés du lancement et bénéficier d'un accès prioritaire.
              </p>
            </div>

            {/* Bouton principal OU Formulaire */}
            {!showForm ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg"
                >
                  🔔 Prévenez-moi quand c'est disponible
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Téléphone (optionnel) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
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

                <p className="text-xs text-gray-500 text-center mt-4">
                  Vos données sont sécurisées. Nous ne les partagerons jamais avec des tiers.
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
            <p className="text-gray-300 mb-6">
              Nous vous préviendrons dès que ces fonctionnalités seront disponibles.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setShowForm(false);
                setFormData({email: '', phone: ''});
              }}
              className="text-purple-400 hover:text-purple-300 text-sm underline"
            >
              Ajouter une autre adresse
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
