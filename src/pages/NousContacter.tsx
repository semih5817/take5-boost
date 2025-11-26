import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';
export default function NousContacter() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: 'question',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connecter à un service d'envoi d'emails
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      setFormData({
        nom: '',
        email: '',
        sujet: 'question',
        message: ''
      });
      toast.success('Message envoyé avec succès !');
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      console.log('Form submitted:', formData);
    }, 1500);
  };
  return <div className="min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#1a1a2e] to-[#0A0E1A]">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16 text-center">
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
          Contactez-Nous
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
          Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-black mb-4 gradient-text">
              Envoyez-nous un message
            </h2>
            <p className="text-slate-400 mb-8">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
            </p>

            {!showSuccess ? <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-white mb-2">
                    Nom complet *
                  </label>
                  <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" className="w-full px-4 py-3 bg-slate-800/80 border-2 border-primary/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jean.dupont@example.com" className="w-full px-4 py-3 bg-slate-800/80 border-2 border-primary/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors" />
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-white mb-2">
                    Sujet *
                  </label>
                  <select id="sujet" name="sujet" required value={formData.sujet} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/80 border-2 border-primary/30 rounded-xl text-white focus:outline-none focus:border-primary transition-colors cursor-pointer">
                    <option value="question">Question générale</option>
                    <option value="demo">Demande de démo</option>
                    <option value="support">Support technique</option>
                    <option value="partenariat">Opportunité de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Décrivez votre demande en détail..." rows={6} className="w-full px-4 py-3 bg-slate-800/80 border-2 border-primary/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-vertical" />
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form> : <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Message envoyé ! 🎉
                </h3>
                <p className="text-slate-400">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
              <p className="text-slate-400 mb-3">
                Envoyez-nous un email et nous vous répondrons rapidement
              </p>
              <a href="mailto:contact@takefive.fr" className="text-primary hover:text-pink-500 font-semibold transition-colors">
                contact@takefive.fr
              </a>
            </div>

            {/* Phone Card */}
            

            {/* Location Card */}
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-slate-400">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">❓</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Comment fonctionne Take 5 ?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Take 5 est une plateforme tout-en-un qui vous aide à gérer vos avis Google grâce à l'intelligence artificielle. 
                  Nous automatisons la gestion des avis, générons des réponses personnalisées et vous aidons à améliorer votre réputation en ligne.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">💰</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quels sont vos tarifs ?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Nous proposons plusieurs formules adaptées à vos besoins, du starter au pro. 
                  Visitez notre page tarifs pour découvrir nos offres et trouver celle qui vous convient le mieux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Mes données sont-elles sécurisées ?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Absolument. Nous utilisons les meilleures pratiques de sécurité pour protéger vos données. 
                  Toutes les informations sont chiffrées et nous ne partageons jamais vos données avec des tiers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quel est le délai de réponse ?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées. 
                  Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}