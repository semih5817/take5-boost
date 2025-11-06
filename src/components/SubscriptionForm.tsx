import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Lock, CreditCard, Package, CheckCircle2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

// Validation schema with strict rules and conditional validation
const subscriptionSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(1, "Le nom de l'établissement est requis")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  yourName: z
    .string()
    .trim()
    .min(1, "Votre nom est requis")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .trim()
    .email("Email invalide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  whatsapp: z
    .string()
    .trim()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Format international requis (ex: +33612345678)"
    ),
  address: z
    .string()
    .trim()
    .max(500, "L'adresse ne peut pas dépasser 500 caractères"),
  sector: z
    .string()
    .min(1, "Le secteur d'activité est requis"),
  wantsPlaque: z.boolean().default(false),
  acceptCGV: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les CGV",
  }),
  acceptRGPD: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  newsletter: z.boolean().default(false),
}).refine((data) => {
  // Si plaque commandée, l'adresse est requise
  if (data.wantsPlaque && (!data.address || data.address.trim().length === 0)) {
    return false;
  }
  return true;
}, {
  message: "L'adresse de livraison est requise pour la plaque NFC",
  path: ["address"],
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

const SECTORS = [
  "Restaurant",
  "Café / Bar",
  "Salon de coiffure / Beauté",
  "Commerce de proximité",
  "Artisan (plomberie, électricité, etc.)",
  "Salle de sport / Bien-être",
  "Hôtel / Hébergement",
  "Service B2B",
  "Autre",
];

export const SubscriptionForm = () => {
  const { toast } = useToast();
  const [wantsPlaque, setWantsPlaque] = useState(false);
  
  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      businessName: "",
      yourName: "",
      email: "",
      whatsapp: "",
      address: "",
      sector: "",
      wantsPlaque: false,
      acceptCGV: false,
      acceptRGPD: false,
      newsletter: false,
    },
  });

  const subscriptionPriceHT = 9.90;
  const plaquePriceHT = 19.90;
  const TVA_RATE = 0.20;
  
  const subtotalHT = wantsPlaque ? subscriptionPriceHT + plaquePriceHT : subscriptionPriceHT;
  const tvaAmount = subtotalHT * TVA_RATE;
  const totalTTC = subtotalHT + tvaAmount;

  const onSubmit = (data: SubscriptionFormData) => {
    console.log("Form submitted:", data);
    
    toast({
      title: "🎉 Bienvenue chez Take 5 !",
      description: "Votre demande a été envoyée. Nous vous contactons sous 24h pour finaliser votre abonnement.",
    });

    form.reset();
    setWantsPlaque(false);
  };

  return (
    <section id="subscription-form" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Prêt à dominer</span>
            <br />
            les recherches locales ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Abonnez-vous dès maintenant sans engagement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Form - Full width */}
          <div>
            <Card className="p-8 md:p-10 shadow-elegant">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Section 1: Informations de l'établissement */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Informations de l'établissement</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Nom de l'établissement *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Restaurant Le Petit Zinc"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="yourName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Nom & Prénom du gérant *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jean Dupont"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="marc@restaurant.fr"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Numéro WhatsApp *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+33 6 12 34 56 78"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Format international (ex: +33...)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            Adresse de livraison {wantsPlaque && "*"}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="123 Rue de la République, 69001 Lyon"
                              className="min-h-24 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            {wantsPlaque 
                              ? "Adresse où recevoir votre plaque NFC"
                              : "Optionnel - requis uniquement si vous commandez la plaque NFC"
                            }
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sector"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Secteur d'activité *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Sélectionnez votre secteur" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SECTORS.map((sector) => (
                                <SelectItem key={sector} value={sector}>
                                  {sector}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Section 2: Option Plaque NFC */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Option : Plaque NFC Google Personnalisée
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="wantsPlaque"
                      render={({ field }) => (
                        <FormItem>
                          <Card className={`p-6 transition-all duration-300 ${
                            wantsPlaque 
                              ? 'border-2 border-primary shadow-primary' 
                              : 'border-border'
                          }`}>
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Left column: Info */}
                              <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                  <Package className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-bold text-lg mb-2">
                                      Plaque NFC + QR Code Personnalisée
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                      Placez cette plaque à l'entrée de votre établissement. Vos clients scannent et laissent un avis Google en 3 secondes !
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Plus d'avis Google facilement</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Scan NFC ou QR code</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Design professionnel personnalisé</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Résistante aux intempéries</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Installation facile (adhésif inclus)</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Boost votre visibilité locale</span>
                                  </div>
                                </div>
                              </div>

                              {/* Right column: Pricing & Toggle */}
                              <div className="flex flex-col justify-between">
                                <div className="space-y-4">
                                   <div className="bg-primary/10 rounded-lg p-4 text-center">
                                    <div className="text-sm text-muted-foreground line-through">
                                      29,90€ HT
                                    </div>
                                    <div className="text-3xl font-bold text-primary">
                                      19,90€ HT
                                    </div>
                                    <div className="text-xs font-semibold text-primary">
                                      ÉCONOMIE 10€
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      23,88€ TTC • Paiement unique
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                                    <span className="font-medium">
                                      Ajouter la plaque NFC
                                    </span>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={(checked) => {
                                          field.onChange(checked);
                                          setWantsPlaque(checked);
                                        }}
                                        className="data-[state=checked]:bg-primary"
                                      />
                                    </FormControl>
                                  </div>

                                  {wantsPlaque && (
                                    <div className="text-center text-sm text-primary animate-in fade-in-50 slide-in-from-top-2">
                                      🎉 Super choix ! Votre plaque sera expédiée sous 48h
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Section 4: CGV/RGPD */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <FormField
                      control={form.control}
                      name="acceptCGV"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              J'accepte les{" "}
                              <a href="#" className="text-primary hover:underline">
                                Conditions Générales de Vente
                              </a>{" "}
                              et les{" "}
                              <a href="#" className="text-primary hover:underline">
                                Conditions d'Utilisation
                              </a>{" "}
                              *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="acceptRGPD"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              J'accepte que mes données soient utilisées conformément à la{" "}
                              <a href="#" className="text-primary hover:underline">
                                Politique de Confidentialité
                              </a>{" "}
                              *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newsletter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Je souhaite recevoir des conseils pour optimiser ma visibilité Google
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Badges de réassurance */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border">
                    <div className="flex items-center gap-2 text-xs">
                      <Lock className="w-4 h-4 text-primary" />
                      <span>Paiement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Sans engagement</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Package className="w-4 h-4 text-primary" />
                      <span>Livraison 48h</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>CB acceptée</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-lg py-6 h-auto font-bold"
                  >
                    {wantsPlaque 
                      ? "S'abonner et commander ma plaque" 
                      : "S'abonner pour 19,90€ HT/mois"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    🔒 Paiement 100% sécurisé • Résiliable à tout moment
                  </p>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
