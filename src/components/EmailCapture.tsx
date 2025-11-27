import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email("Adresse email invalide").max(255, "Email trop long")
});

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholder?: string;
  type?: 'partner' | 'newsletter' | 'waitlist' | 'contact';
  onSuccess?: (email: string) => void;
}

export const EmailCapture = ({
  title = "Restez Informé",
  subtitle = "Recevez les dernières nouvelles de TakeFive",
  buttonText = "S'inscrire →",
  placeholder = "votre@email.fr",
  type = "newsletter",
  onSuccess
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      toast({
        title: "Erreur",
        description: result.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('email_captures')
        .insert({
          email: result.data.email,
          type,
          source: window.location.pathname
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email déjà inscrit",
            description: "Cet email est déjà enregistré. Merci !",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Parfait !",
          description: "Consultez votre boîte email dans quelques instants.",
        });
        setEmail('');
        onSuccess?.(result.data.email);
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 md:p-14 bg-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-3xl text-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] animate-spin" style={{ animationDuration: '15s' }} />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            className="flex-1 px-6 py-4 border-2 border-primary/30 rounded-xl bg-background/80 text-foreground text-base transition-all outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted-foreground"
            placeholder={placeholder}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi...' : buttonText}
          </button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">
          🔒 Vos données sont sécurisées. Nous ne spammons jamais.<br/>
          📧 Réponse sous 24h avec toutes les informations.
        </p>
      </div>
    </div>
  );
};

export default EmailCapture;
