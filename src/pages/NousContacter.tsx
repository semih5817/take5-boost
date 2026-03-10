import { useState } from 'react';
import { z } from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';

const contactSchema = z.object({
  nom: z.string().trim().min(1, { message: "Le nom est requis" }).max(100, { message: "Le nom est trop long" }),
  email: z.string().trim().email({ message: "Email invalide" }).max(255, { message: "Email trop long" }),
  sujet: z.enum(['question', 'demo', 'support', 'partenariat', 'autre'], { message: "Sujet invalide" }),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères" }).max(2000, { message: "Le message est trop long (max 2000 caractères)" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function NousContacter() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    sujet: 'question',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

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
                  <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" className={`w-full px-4 py-3 bg-slate-800/80 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${errors.nom ? 'border-red-500 focus:border-red-500' : 'border-primary/30 focus:border-primary'}`} />
                  {errors.nom && <p className="mt-1 text-sm text-red-400">{errors.nom}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jean.dupont@example.com" className={`w-full px-4 py-3 bg-slate-800/80 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-primary/30 focus:border-primary'}`} />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-white mb-2">
                    Sujet *
                  </label>
                  <select id="sujet" name="sujet" value={formData.sujet} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-800/80 border-2 rounded-xl text-white focus:outline-none transition-colors cursor-pointer ${errors.sujet ? 'border-red-500 focus:border-red-500' : 'border-primary/30 focus:border-primary'}`}>
                    <option value="question">Question générale</option>
                    <option value="demo">Demande de démo</option>
                    <option value="support">Support technique</option>
                    <option value="partenariat">Opportunité de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.sujet && <p className="mt-1 text-sm text-red-400">{errors.sujet}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez votre demande en détail..." rows={6} className={`w-full px-4 py-3 bg-slate-800/80 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors resize-vertical ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-primary/30 focus:border-primary'}`} />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
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

            {/* WhatsApp Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-slate-400 mb-3">
                Ou sinon contactez-nous directement sur WhatsApp au <span className="font-semibold text-white">07 78 56 59 17</span>
              </p>
              <a 
                href="https://wa.me/33778565917" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Démarrer sur WhatsApp
              </a>
            </div>
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
