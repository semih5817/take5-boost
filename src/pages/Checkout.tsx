import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowLeft, Loader2 } from "lucide-react";

const checkoutSchema = z.object({
  nom_etablissement: z.string().trim().min(2, "Nom trop court").max(150, "Nom trop long"),
  url_google_business: z.string().trim().url("URL invalide").optional().or(z.literal("")),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long"),
  telephone_whatsapp: z.string().trim().min(10, "Numéro trop court").max(20, "Numéro trop long")
    .regex(/^[\d\s+()-]+$/, "Format de téléphone invalide"),
  cgv_acceptees: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter les CGV" }) })
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

// TODO: Remplacer par vos vrais liens LemonSqueezy
const LEMONSQUEEZY_URLS = {
  starter: {
    monthly: 'https://takefive.lemonsqueezy.com/checkout/buy/STARTER_MONTHLY_ID',
    yearly: 'https://takefive.lemonsqueezy.com/checkout/buy/1fd4af53-9037-4ce7-a549-ea7eaf1d8462'
  },
  pro: {
    monthly: 'https://takefive.lemonsqueezy.com/checkout/buy/PRO_MONTHLY_ID',
    yearly: 'https://takefive.lemonsqueezy.com/checkout/buy/91fd5799-35df-4d8f-b2bd-fdd2d53a29bc'
  }
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
    email: '',
    telephone_whatsapp: '',
    cgv_acceptees: false
  });
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
      // Save lead to Supabase
      const { error } = await supabase
        .from('subscription_leads')
        .insert({
          nom_etablissement: formData.nom_etablissement.trim(),
          url_google_business: formData.url_google_business.trim() || null,
          email: formData.email.trim(),
          telephone_whatsapp: formData.telephone_whatsapp.trim(),
          offre,
          periode,
          cgv_acceptees: formData.cgv_acceptees
        });

      if (error) throw error;

      toast({
        title: "Informations enregistrées !",
        description: "Redirection vers le paiement...",
      });

      // Redirect to LemonSqueezy
      setTimeout(() => {
        const checkoutUrl = LEMONSQUEEZY_URLS[offre][periode];
        // Add email prefill to LemonSqueezy URL
        const urlWithEmail = `${checkoutUrl}?checkout[email]=${encodeURIComponent(formData.email.trim())}`;
        window.location.href = urlWithEmail;
      }, 1000);

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
                  URL de votre fiche Google Business
                  <span className="text-slate-500 font-normal ml-2">(optionnel)</span>
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

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email de contact <span className="text-pink-500">*</span>
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
                  placeholder="+33 6 12 34 56 78"
                  className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                    errors.telephone_whatsapp ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.telephone_whatsapp && (
                  <p className="text-red-400 text-sm mt-1">{errors.telephone_whatsapp}</p>
                )}
                <p className="text-slate-500 text-xs mt-1">
                  Pour recevoir vos alertes et rapports TakeFive
                </p>
              </div>

              {/* CGV Checkbox */}
              <div className="pt-4 border-t border-slate-700">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="cgv_acceptees"
                    checked={formData.cgv_acceptees}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-slate-600 bg-[#0f0c29]/50 text-[#667eea] focus:ring-[#667eea] focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    J'accepte les{' '}
                    <Link to="/cgv" target="_blank" className="text-[#8B9EFF] hover:underline">
                      Conditions Générales de Vente
                    </Link>
                    {' '}et la{' '}
                    <Link to="/confidentialite" target="_blank" className="text-[#8B9EFF] hover:underline">
                      Politique de Confidentialité
                    </Link>
                    {' '}<span className="text-pink-500">*</span>
                  </span>
                </label>
                {errors.cgv_acceptees && (
                  <p className="text-red-400 text-sm mt-2 ml-8">{errors.cgv_acceptees}</p>
                )}
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
                    Procéder au paiement →
                  </>
                )}
              </button>

              <p className="text-center text-slate-500 text-sm">
                🔒 Paiement sécurisé par LemonSqueezy
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