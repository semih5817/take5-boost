import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Lock, CreditCard, Package, CheckCircle2, Copy, Check as CheckIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

// Validation schema with strict rules and conditional validation
const subscriptionSchema = z.object({
  offer: z.string().min(1, "Vous devez choisir une offre"),
  businessName: z.string().trim().min(1, "Le nom de l'établissement est requis").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  yourName: z.string().trim().min(1, "Votre nom est requis").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
  whatsapp: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/, "Format international requis (ex: +33612345678)"),
  address: z.string().trim().max(500, "L'adresse ne peut pas dépasser 500 caractères"),
  sector: z.string().min(1, "Le secteur d'activité est requis"),
  wantsPlaque: z.boolean().default(false),
  acceptCGV: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les CGV"
  }),
  acceptRGPD: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter la politique de confidentialité"
  }),
  newsletter: z.boolean().default(false)
}).refine(data => {
  // Si plaque commandée, l'adresse est requise
  if (data.wantsPlaque && (!data.address || data.address.trim().length === 0)) {
    return false;
  }
  return true;
}, {
  message: "L'adresse de livraison est requise pour la plaque NFC",
  path: ["address"]
});
type SubscriptionFormData = z.infer<typeof subscriptionSchema>;
const SECTORS = ["Restaurant", "Café / Bar", "Salon de coiffure / Beauté", "Commerce de proximité", "Artisan (plomberie, électricité, etc.)", "Salle de sport / Bien-être", "Hôtel / Hébergement", "Service B2B", "Autre"];
const pricingOffers = [{
  id: "starter",
  name: "Starter",
  badge: "⚡ POPULAIRE",
  monthlyPrice: 19.90,
  annualPrice: 14.93,
  detail: "Essentiel pour petits commerces",
  isPopular: true,
  features: ["QR Code dynamique", "Collecte avis Google (2x/jour) + Facebook", "Réponses IA illimitées 24/7", "Alertes WhatsApp instantanées (avis négatifs en 2 min)", "Rapport mensuel sur WhatsApp", "Reporting hebdomadaire détaillé", "Plaque NFC offerte (offre annuelle)"]
}, {
  id: "pro",
  name: "Pro",
  badge: "🎯 RECOMMANDÉ",
  monthlyPrice: 29.90,
  annualPrice: 22.43,
  detail: "Pour dominer localement",
  isPopular: false,
  features: ["Tout Starter +", "Radar multi-plateformes (Google, Facebook, Trustpilot, Yelp)", "Analyse concurrentielle quotidienne", "Collecte avis 4x/jour (toutes les 6h)", "SEO local optimisé avec IA", "Gamification", "Opportunités IA quotidiennes", "Support prioritaire", "Plaque NFC offerte (offre annuelle)"]
}];
export const SubscriptionForm = () => {
  const {
    toast
  } = useToast();
  const [wantsPlaque, setWantsPlaque] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [selectedOffer, setSelectedOffer] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [copiedCode, setCopiedCode] = useState(false);
  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      offer: "",
      businessName: "",
      yourName: "",
      email: "",
      whatsapp: "",
      address: "",
      sector: "",
      wantsPlaque: false,
      acceptCGV: false,
      acceptRGPD: false,
      newsletter: false
    }
  });
  const plaquePriceHT = 39.90;
  const TVA_RATE = 0.20;
  const currentOffer = pricingOffers.find(o => o.id === selectedOffer);
  const offerPriceHT = currentOffer ? billingCycle === "monthly" ? currentOffer.monthlyPrice : currentOffer.annualPrice : 0;
  const subtotalHT = wantsPlaque ? offerPriceHT + plaquePriceHT : offerPriceHT;
  const tvaAmount = subtotalHT * TVA_RATE;
  const totalTTC = subtotalHT + tvaAmount;
  const copyPromoCode = () => {
    navigator.clipboard.writeText('DECOUVERTE');
    setCopiedCode(true);
    toast({
      title: "Code copié !",
      description: "Le code promo DECOUVERTE a été copié dans votre presse-papiers."
    });
    setTimeout(() => setCopiedCode(false), 2000);
  };
  const onSubmit = async (data: SubscriptionFormData) => {
    if (honeypot) return;
    console.log("Subscription submitted for offer:", data.offer);
    try {
      // Save email to database with type 'trial'
      const {
        error
      } = await supabase.from('email_captures').insert({
        email: data.email,
        type: 'trial',
        source: window.location.pathname
      });
      if (error && error.code !== '23505') {
        console.error('Error saving email:', error);
      }
      toast({
        title: "🎉 Bienvenue chez Take 5 !",
        description: "Votre demande a été envoyée. Nous vous contactons sous 24h pour finaliser votre abonnement."
      });
      form.reset();
      setWantsPlaque(false);
      setSelectedOffer("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "🎉 Bienvenue chez Take 5 !",
        description: "Votre demande a été envoyée. Nous vous contactons sous 24h pour finaliser votre abonnement."
      });
      form.reset();
      setWantsPlaque(false);
      setSelectedOffer("");
    }
  };
  return <section id="subscription-form" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Choisissez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">plan tarifaire</span>
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-8">
            Propulsez votre visibilité locale et dominez Google Maps
          </p>
          
          {/* Toggle Mensuel/Annuel */}
          <div className="inline-flex items-center gap-4 bg-card/60 p-2 rounded-full border border-primary/30 mb-8">
            <button type="button" onClick={() => setBillingCycle("monthly")} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${billingCycle === "monthly" ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/40' : 'text-muted-foreground'}`}>
              Mensuel
            </button>
            <button type="button" onClick={() => setBillingCycle("annual")} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${billingCycle === "annual" ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/40' : 'text-muted-foreground'}`}>
              Annuel
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs">
                -25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Bannière Promo */}
        <Card className="mb-12 p-6 md:p-8 text-center bg-gradient-to-r from-primary to-secondary relative overflow-hidden animate-pulse-slow max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          <div className="relative z-10">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="text-2xl font-bold text-white mb-2">CODE PROMO : 1 MOIS GRATUIT</h3>
            <p className="text-white/90 mb-4">Utilisez ce code sur l'offre Starter pour tester gratuitement</p>
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-xl">
              <span className="text-xl font-bold text-white tracking-wider">SEMIH</span>
              <Button onClick={copyPromoCode} size="sm" type="button" className={`${copiedCode ? 'bg-green-500 hover:bg-green-600' : 'bg-white text-primary hover:bg-white/90'} transition-all`}>
                {copiedCode ? <>
                    <CheckIcon className="w-4 h-4 mr-1" />
                    Copié
                  </> : <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copier
                  </>}
              </Button>
            </div>
          </div>
        </Card>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-10 shadow-elegant">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute opacity-0 h-0 w-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {/* Section 1: Choix de l'offre */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">1. Choisissez votre offre</h3>
                  
                  <FormField control={form.control} name="offer" render={({
                  field
                }) => <FormItem>
                        <FormControl>
                          <div className="grid md:grid-cols-2 gap-8">
                            {pricingOffers.map(offer => {
                        const price = billingCycle === "monthly" ? offer.monthlyPrice : offer.annualPrice;
                        return <div key={offer.id} onClick={() => {
                          field.onChange(offer.id);
                          setSelectedOffer(offer.id);
                        }} className={`relative p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${field.value === offer.id ? "border-primary shadow-lg shadow-primary/20 bg-primary/5" : "border-border hover:border-primary/50"} ${offer.id === "starter" ? "border-primary/50 shadow-lg shadow-primary/20" : "border-secondary/50 shadow-lg shadow-secondary/20"}`}>
                                  {/* Badge */}
                                  <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1.5 ${offer.id === "starter" ? "bg-gradient-to-r from-primary to-primary/80 text-white" : "bg-gradient-to-r from-secondary to-secondary/80 text-white"}`}>
                                    {offer.badge}
                                  </Badge>

                                  <div className="text-center mb-8 mt-2">
                                    <h3 className="text-2xl font-bold mb-4">{offer.name}</h3>
                                    <div className="mb-2">
                                      <span className="text-5xl font-bold gradient-text">
                                        {price.toFixed(2)}€
                                      </span>
                                      <span className="text-lg text-muted-foreground"> HT / mois</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{offer.detail}</p>
                                  </div>
                                  
                                  <ul className="space-y-3 mb-8">
                                    {offer.features.map((feature, index) => <li key={index} className="flex items-start gap-2">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                                          <CheckCircle2 className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-sm text-foreground">{feature}</span>
                                      </li>)}
                                  </ul>

                                  {/* Checkmark de sélection */}
                                  {field.value === offer.id && <div className="flex justify-center pt-4">
                                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                      </div>
                                    </div>}
                                </div>;
                      })}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  {/* Option Plaque NFC */}
                  <FormField control={form.control} name="wantsPlaque" render={({
                  field
                }) => <FormItem>
                        <Card className="p-6 bg-gradient-to-r from-secondary/5 to-primary/5 border-2 border-primary/20">
                          <div className="flex items-start gap-4">
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={checked => {
                          field.onChange(checked);
                          setWantsPlaque(checked);
                        }} className="data-[state=checked]:bg-primary mt-1" />
                            </FormControl>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                                <div className="flex-1">
                                  <FormLabel className="text-lg font-bold cursor-pointer">
                                    Ajouter la plaque NFC Google personnalisée
                                  </FormLabel>
                                  <FormDescription className="mt-2">
                                    Collectez facilement des avis en magasin.
                                  </FormDescription>
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-primary" />
                                      <span>Design personnalisé</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-primary" />
                                      <span>Compatible tous smartphones</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-primary" />
                                      <span>Installation facile</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <div className="text-2xl font-bold text-primary">
                                    {plaquePriceHT.toFixed(2)}€ HT
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {(plaquePriceHT * 1.20).toFixed(2)}€ TTC
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Paiement unique
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </FormItem>} />

                  {/* Récapitulatif du prix */}
                  {selectedOffer && <Card className="p-6 bg-muted/30">
                      <div className="space-y-3">
                        <h4 className="font-bold text-lg">Récapitulatif</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{currentOffer?.name}</span>
                            <span className="font-medium">{offerPriceHT.toFixed(2)}€ HT</span>
                          </div>
                          {wantsPlaque && <div className="flex justify-between text-sm">
                              <span>Plaque NFC personnalisée</span>
                              <span className="font-medium">{plaquePriceHT.toFixed(2)}€ HT</span>
                            </div>}
                          <div className="flex justify-between text-sm pt-2 border-t">
                            <span>TVA (20%)</span>
                            <span className="font-medium">{tvaAmount.toFixed(2)}€</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold pt-2 border-t">
                            <span>Total TTC</span>
                            <span className="gradient-text text-2xl">{totalTTC.toFixed(2)}€</span>
                          </div>
                        </div>
                      </div>
                    </Card>}
                </div>

                {/* Section 2: Informations de l'établissement */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">2. Informations de l'établissement</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="businessName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base">Nom de l'établissement *</FormLabel>
                          <FormControl>
                            <Input placeholder="Restaurant Le Petit Zinc" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="yourName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base">Nom & Prénom du gérant *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="marc@restaurant.fr" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="whatsapp" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base">WhatsApp *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+33612345678" className="h-12" {...field} />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Format international requis pour les alertes
                          </FormDescription>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <FormField control={form.control} name="sector" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-base">Secteur d'activité *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Sélectionnez votre secteur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SECTORS.map(sector => <SelectItem key={sector} value={sector}>
                                {sector}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />

                  {wantsPlaque && <FormField control={form.control} name="address" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-base">Adresse de livraison *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="123 Rue de la République, 69001 Lyon" className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Nécessaire pour l'envoi de votre plaque NFC
                          </FormDescription>
                          <FormMessage />
                        </FormItem>} />}
                </div>

                {/* Section 3: Conditions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">3. Conditions</h3>

                  <FormField control={form.control} name="acceptCGV" render={({
                  field
                }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            J'accepte les{" "}
                            <a href="#" className="text-primary underline">
                              Conditions Générales de Vente
                            </a>{" "}
                            *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>} />

                  <FormField control={form.control} name="acceptRGPD" render={({
                  field
                }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            J'accepte la{" "}
                            <a href="#" className="text-primary underline">
                              Politique de Confidentialité
                            </a>{" "}
                            *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>} />

                  <FormField control={form.control} name="newsletter" render={({
                  field
                }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Je souhaite recevoir des conseils pour optimiser ma visibilité Google
                          </FormLabel>
                        </div>
                      </FormItem>} />
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
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-lg py-6 h-auto font-bold">
                  {selectedOffer ? `Valider ma commande - ${totalTTC.toFixed(2)}€ TTC` : "Choisissez d'abord une offre"}
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
    </section>;
};