import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowLeft, Loader2, Plus, Minus } from "lucide-react";
import plaqueNfcImage from "@/assets/plaque-personnalisee-take5.jpg";

const checkoutSchema = z.object({
  nom_etablissement: z.string().trim().min(2, "Nom trop court").max(150, "Nom trop long"),
  url_google_business: z.string().trim().url("URL invalide"),
  telephone_whatsapp: z.string().trim()
    .regex(/^\+33[0-9]{9}$/, "Format requis : +33XXXXXXXXX (ex: +33612345678)"),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long").optional().or(z.literal(""))
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const WEBHOOK_URL = 'https://n8n.takefive.fr/webhook-test/9b9558e3-e91f-4bcc-9f7b-ba05af301a20';

const STRIPE_URLS = {
  starter: 'https://buy.stripe.com/00wdRb9hd6bP1gG0U89k406',
  pro: 'https://buy.stripe.com/00waEZ6516bP5wWdGU9k405',
  plaque: 'https://buy.stripe.com/14A14palh9o13oO46k9k403'
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const offre = searchParams.get('offre') as 'starter' | 'pro' | null;
  const periode = searchParams.get('periode') as 'monthly' | 'yearly' | null;

  const [formData, setFormData] = useState({
    nom_etablissement: '',
    url_google_business: '',
    telephone_whatsapp: '',
    email: ''
  });
  const [wantsPlaque, setWantsPlaque] = useState(false);
  const [plaqueQuantity, setPlaqueQuantity] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!offre || !periode || !['starter', 'pro'].includes(offre) || !['monthly', 'yearly'].includes(periode)) {
      navigate('/tarifs');
    }
  }, [offre, periode, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const result = checkoutSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (!offre || !periode) return;

    setIsSubmitting(true);

    try {
      // Send data to webhook
      const webhookPayload = {
        nom_etablissement: formData.nom_etablissement.trim(),
        url_google_business: formData.url_google_business.trim(),
        telephone_whatsapp: formData.telephone_whatsapp.trim(),
        email: formData.email.trim() || null,
        offre,
        periode,
        plaque_nfc: wantsPlaque,
        plaque_quantity: wantsPlaque ? plaqueQuantity : 0
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload)
      });

      toast({
        title: "Informations enregistrées !",
        description: "Redirection vers le paiement...",
      });

      // Build Stripe URLs - if plaque is selected, we could redirect to both or handle differently
      // For now, redirect to the plan checkout first
      const checkoutUrl = STRIPE_URLS[offre];
      const emailParam = formData.email.trim() ? `?prefilled_email=${encodeURIComponent(formData.email.trim())}` : '';
      window.location.href = `${checkoutUrl}${emailParam}`;

    } catch (error) {
      console.error('Checkout error');
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const planDetails = {
    starter: { name: 'Starter', price: { monthly: '19,90€', yearly: '199€' } },
    pro: { name: 'Pro', price: { monthly: '29,90€', yearly: '299€' } }
  };

  if (!offre || !periode) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-5">
        <div className="max-w-[700px] mx-auto">
          
          {/* Back Button */}
          <Link 
            to="/tarifs" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux offres
          </Link>

          {/* Selected Plan Summary */}
          <div className="bg-[#161b34]/80 border border-[#4F5EFF]/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-slate-400">Offre sélectionnée</span>
                <h2 className="text-2xl font-bold text-white">{planDetails[offre].name}</h2>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#8B9EFF]">
                  {planDetails[offre].price[periode]}
                </div>
                <span className="text-sm text-slate-400">
                  HT / {periode === 'monthly' ? 'mois' : 'an'}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#161b34]/80 border border-[#4F5EFF]/30 rounded-2xl p-8">
            <h1 className="text-2xl font-semibold mb-2">2. Informations de votre établissement</h1>
            <p className="text-slate-400 mb-8">
              Ces informations nous permettent de configurer TakeFive pour votre business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom établissement */}
              <div>
                <label htmlFor="nom_etablissement" className="block text-sm font-medium mb-2">
                  Nom de l'établissement <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom_etablissement"
                  name="nom_etablissement"
                  value={formData.nom_etablissement}
                  onChange={handleChange}
                  placeholder="Ex: Pizzeria Bella Vita"
                  className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                    errors.nom_etablissement ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.nom_etablissement && (
                  <p className="text-red-400 text-sm mt-1">{errors.nom_etablissement}</p>
                )}
              </div>

              {/* URL Google Business */}
              <div>
                <label htmlFor="url_google_business" className="block text-sm font-medium mb-2">
                  URL de votre fiche Google Business <span className="text-pink-500">*</span>
                </label>
                <input
                  type="url"
                  id="url_google_business"
                  name="url_google_business"
                  value={formData.url_google_business}
                  onChange={handleChange}
                  placeholder="https://g.page/votre-etablissement"
                  className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                    errors.url_google_business ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.url_google_business && (
                  <p className="text-red-400 text-sm mt-1">{errors.url_google_business}</p>
                )}
                <p className="text-slate-500 text-xs mt-1">
                  Nous l'utiliserons pour connecter vos avis Google
                </p>
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="telephone_whatsapp" className="block text-sm font-medium mb-2">
                  Numéro WhatsApp <span className="text-pink-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone_whatsapp"
                  name="telephone_whatsapp"
                  value={formData.telephone_whatsapp}
                  onChange={handleChange}
                  placeholder="+33612345678"
                  className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                    errors.telephone_whatsapp ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.telephone_whatsapp && (
                  <p className="text-red-400 text-sm mt-1">{errors.telephone_whatsapp}</p>
                )}
                <p className="text-slate-500 text-xs mt-1">
                  Format : +33XXXXXXXXX (ex: +33612345678)
                </p>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email de contact
                  <span className="text-slate-500 font-normal ml-2">(facultatif)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@votre-etablissement.fr"
                  className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                    errors.email ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Option Plaque NFC */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-5">
                <div className="flex gap-4">
                  {/* Image de la plaque */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <img 
                      src={plaqueNfcImage} 
                      alt="Plaque NFC Google" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contenu */}
                  <div className="flex-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wantsPlaque}
                        onChange={(e) => setWantsPlaque(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-800 text-amber-500 focus:ring-amber-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white">Ajouter une Plaque NFC Google</span>
                          <span className="text-amber-400 font-bold">39,90€ / unité</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          Plaque personnalisée avec votre logo • Vos clients scannent, vous récoltez des avis 5★
                        </p>
                      </div>
                    </label>
                    
                    {/* Sélecteur de quantité */}
                    {wantsPlaque && (
                      <div className="mt-4 flex items-center gap-4">
                        <span className="text-sm text-slate-300">Quantité :</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setPlaqueQuantity(q => Math.max(1, q - 1))}
                            className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{plaqueQuantity}</span>
                          <button
                            type="button"
                            onClick={() => setPlaqueQuantity(q => Math.min(10, q + 1))}
                            className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-amber-400 font-bold ml-auto">
                          +{(plaqueQuantity * 39.90).toFixed(2).replace('.', ',')}€
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#667eea] to-[#4F5EFF] text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#4F5EFF]/30 hover:shadow-xl hover:shadow-[#4F5EFF]/40 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  <>
                    Démarrer mon essai →
                  </>
                )}
              </button>

              <p className="text-center text-slate-500 text-sm">
                🔒 Paiement sécurisé par Stripe
              </p>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;