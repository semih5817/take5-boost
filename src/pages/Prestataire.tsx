import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { externalSupabase } from "@/integrations/supabase/external-client";
import { Loader2, Link2, Users, Banknote, CheckCircle } from "lucide-react";
import { z } from "zod";

const candidatureSchema = z.object({
  prenom: z.string().trim().min(2, "Prénom trop court").max(50, "Prénom trop long"),
  nom: z.string().trim().min(2, "Nom trop court").max(50, "Nom trop long"),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long"),
  whatsapp: z.string().trim().regex(/^\+33[0-9]{9}$/, "Format requis : +33XXXXXXXXX"),
});

const steps = [
  {
    icon: Link2,
    title: "Vous recevez votre lien unique",
    description: "Après validation de votre candidature, vous recevez un lien de parrainage personnel à partager.",
  },
  {
    icon: Users,
    title: "Vous le partagez à vos contacts commerçants",
    description: "Recommandez TakeFive aux commerçants, restaurateurs et professionnels de votre réseau.",
  },
  {
    icon: Banknote,
    title: "Vous gagnez 3,98€ récurrents par mois par client actif",
    description: "Tant que vos filleuls restent abonnés, vous touchez une commission récurrente chaque mois.",
  },
];

const Prestataire = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = candidatureSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await externalSupabase.from("apporteurs").insert({
        prenom: formData.prenom.trim(),
        nom: formData.nom.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        statut: "en_attente",
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Candidature envoyée ! 🎉",
        description: "Nous vous recontacterons très rapidement par WhatsApp.",
      });
    } catch (error) {
      console.error("Submission error");
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-4 text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            💰 Programme Apporteur d'Affaires
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Gagnez{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-purple-500 bg-clip-text text-transparent">
              3,98€/mois
            </span>{" "}
            pour chaque client que vous apportez à TakeFive
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et générez des revenus récurrents
            en recommandant TakeFive aux commerçants de votre réseau.
          </p>
        </section>

        {/* Comment ça marche */}
        <section className="px-4 max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-[#161b34]/80 border border-[#4F5EFF]/30 rounded-2xl p-6 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#667eea] to-purple-600 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="w-14 h-14 mx-auto mt-4 mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formulaire */}
        <section className="px-4 max-w-lg mx-auto">
          <div className="bg-[#161b34]/80 border border-[#4F5EFF]/30 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Candidature reçue !</h3>
                <p className="text-slate-400">
                  Notre équipe va examiner votre candidature et vous recontacter par WhatsApp sous 24h.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Devenez apporteur d'affaires
                </h2>
                <p className="text-slate-400 text-center mb-8">
                  Remplissez ce formulaire pour rejoindre le programme.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Prénom <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Jean"
                        className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                          errors.prenom ? "border-red-500" : "border-slate-600"
                        }`}
                      />
                      {errors.prenom && (
                        <p className="text-red-400 text-sm mt-1">{errors.prenom}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Dupont"
                        className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                          errors.nom ? "border-red-500" : "border-slate-600"
                        }`}
                      />
                      {errors.nom && (
                        <p className="text-red-400 text-sm mt-1">{errors.nom}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                        errors.email ? "border-red-500" : "border-slate-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      WhatsApp <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+33612345678"
                      className={`w-full px-4 py-3 bg-[#0f0c29]/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#667eea] transition-all ${
                        errors.whatsapp ? "border-red-500" : "border-slate-600"
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>
                    )}
                    <p className="text-slate-500 text-xs mt-1">
                      Format : +33XXXXXXXXX
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#667eea] to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Je candidate"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prestataire;
