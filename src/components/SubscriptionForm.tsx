import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Lock, CreditCard, Package, CheckCircle2 } from "lucide-react";
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
  offer: z.string().min(1, "Vous devez choisir une offre"),
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

const pricingOffers = [
  {
    id: "free",
    name: "Free",
    badge: "1 MOIS OFFERT",
    price: 0,
    displayPrice: "Free",
    period: "",
    detail: "Pas de CB requise",
    isPopular: false,
    hasAnnual: false,
    features: [
      "1 QR Code dynamique",
      "Scans illimités",
      "Centralisation Avis Google",
      "Réponses IA (100 tokens)",
      "🚨 Alertes avis négatifs WhatsApp",
      "📊 Alertes concurrents (hebdo)",
      "💡 Opportunités IA (hebdo)",
      "🎯 Missions gamifiées",
      "📱 Rapports WhatsApp"
    ],
  },
  {
    id: "starter",
    name: "Starter",
    badge: "FLEXIBLE",
    price: 19.90,
    displayPrice: "19,90€",
    period: "HT / MOIS",
    detail: "Sans engagement",
    isPopular: false,
    hasAnnual: true,
    annualOptions: [
      {
        duration: "1 an",
        pricePerMonth: 14.90,
        totalPrice: 178.80,
        savings: 89.90,
        nfcPlates: 1
      },
      {
        duration: "2 ans",
        pricePerMonth: 13,
        totalPrice: 312,
        savings: 225.40,
        nfcPlates: 2,
        badge: "🔥 MEILLEURE OFFRE"
      },
      {
        duration: "4 ans",
        pricePerMonth: 10,
        totalPrice: 480,
        savings: 594.80,
        nfcPlates: 4,
        badge: "⚡ -50%"
      }
    ],
    features: [
      "Tout du pack FREE, en illimité",
      "Support prioritaire",
      "Plaque NFC offerte (annuel uniquement)"
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badge: "⭐ RECOMMANDÉ",
    price: 49,
    displayPrice: "49€",
    period: "HT / MOIS",
    detail: "Tout inclus",
    isPopular: true,
    hasAnnual: true,
    annualOptions: [
      {
        duration: "1 an",
        pricePerMonth: 37,
        totalPrice: 444,
        savings: 203.80,
        nfcPlates: 2,
        badge: "⭐ POPULAIRE"
      },
      {
        duration: "2 ans",
        pricePerMonth: 32,
        totalPrice: 768,
        savings: 497.70,
        nfcPlates: 3,
        badge: "🔥 MEILLEURE OFFRE"
      },
      {
        duration: "4 ans",
        pricePerMonth: 25,
        totalPrice: 1200,
        savings: 1321.60,
        nfcPlates: 5,
        nfcPremium: true,
        badge: "⚡ OFFRE ELITE"
      }
    ],
    features: [
      "Tout du Starter +",
      "Réponses IA illimitées",
      "🎨 Dashboard Analytics (démo)",
      "Alertes concurrents quotidiennes",
      "Opportunités IA quotidiennes",
      "Support prioritaire 24/7",
      "🎮 Jeux concours 🔜 T1 2026",
      "📧 Campagnes SMS/Email 🔜 T2 2026"
    ],
  },
];

export const SubscriptionForm = () => {
  const { toast } = useToast();
  const [wantsPlaque, setWantsPlaque] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedAnnualOptions, setSelectedAnnualOptions] = useState<Record<string, any>>({});
  
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
      newsletter: false,
    },
  });

  const plaquePriceHT = 29.90;
  const TVA_RATE = 0.20;
  
  const currentOffer = pricingOffers.find(o => o.id === selectedOffer);
  const offerPriceHT = currentOffer?.price || 0;
  const subtotalHT = wantsPlaque ? offerPriceHT + plaquePriceHT : offerPriceHT;
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
    setSelectedOffer("");
  };

  return (
    <section id="subscription-form" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Choisissez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">plan tarifaire</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            50% moins cher que nos concurrents • Essai gratuit 1 mois
          </p>
          <p className="text-lg text-muted-foreground/80">
            Sélectionnez votre formule et rejoignez Take 5
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-10 shadow-elegant">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                {/* Section 1: Choix de l'offre */}
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold">1. Choisissez votre offre</h3>
                    
                    {/* Toggle Mensuel/Annuel */}
                    <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1 border">
                      <button
                        type="button"
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${
                          billingCycle === "monthly"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Mensuel
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillingCycle("annual")}
                        className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                          billingCycle === "annual"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Annuel
                        <Badge className="bg-green-600 text-white text-xs">-25%</Badge>
                      </button>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="offer"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pricingOffers.map((offer) => (
                              <div
                                key={offer.id}
                                onClick={() => {
                                  field.onChange(offer.id);
                                  setSelectedOffer(offer.id);
                                }}
                                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                                  field.value === offer.id
                                    ? "border-primary shadow-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                } ${offer.isPopular ? "ring-2 ring-primary/20" : ""}`}
                              >
                                {/* Badge */}
                                {offer.badge && (
                                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge
                                      className={`px-3 py-1 text-xs font-bold ${
                                        offer.isPopular
                                          ? "bg-gradient-to-r from-primary to-secondary text-white"
                                          : "bg-muted text-foreground"
                                      }`}
                                    >
                                      {offer.badge}
                                    </Badge>
                                  </div>
                                )}

                                <div className="space-y-4">
                                  {/* Header */}
                                  <div className="text-center space-y-2">
                                    <h4 className="text-xl font-bold">{offer.name}</h4>
                                    
                                    {/* Affichage prix mensuel */}
                                    {(billingCycle === "monthly" || !offer.hasAnnual) && (
                                      <>
                                        <div>
                                          <span className="text-3xl font-bold gradient-text">
                                            {offer.displayPrice}
                                          </span>
                                          <span className="text-sm text-muted-foreground ml-1">
                                            {offer.period}
                                          </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{offer.detail}</p>
                                      </>
                                    )}

                                    {/* Sélecteur annuel */}
                                    {billingCycle === "annual" && offer.hasAnnual && offer.annualOptions && (
                                      <div className="space-y-2">
                                        {offer.annualOptions.map((option: any, idx: number) => (
                                          <button
                                            key={idx}
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedAnnualOptions({
                                                ...selectedAnnualOptions,
                                                [offer.id]: option
                                              });
                                            }}
                                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                                              selectedAnnualOptions[offer.id] === option || (!selectedAnnualOptions[offer.id] && idx === 0)
                                                ? "border-primary bg-primary/10"
                                                : "border-border hover:border-primary/50"
                                            }`}
                                          >
                                            <div className="flex justify-between items-center">
                                              <div>
                                                <div className="font-bold text-lg">
                                                  {option.pricePerMonth}€/mois
                                                </div>
                                                <div className="text-sm text-muted-foreground">{option.duration}</div>
                                              </div>
                                              {option.badge && (
                                                <Badge className="bg-red-600 text-white text-xs">
                                                  {option.badge}
                                                </Badge>
                                              )}
                                            </div>
                                            {option.savings && (
                                              <div className="mt-2 text-sm text-green-600 font-semibold">
                                                💰 Économisez {option.savings}€
                                              </div>
                                            )}
                                            {option.nfcPlates > 0 && (
                                              <div className="mt-1 text-sm text-primary">
                                                🎁 {option.nfcPlates} plaque{option.nfcPlates > 1 ? 's' : ''} NFC offerte{option.nfcPlates > 1 ? 's' : ''}
                                                {option.nfcPremium && ' (dont 1 Premium)'}
                                              </div>
                                            )}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>

                                  {/* Ligne séparatrice */}
                                  <div className="border-t border-border" />

                                  {/* Liste des fonctionnalités */}
                                  <ul className="space-y-2 text-left">
                                    {offer.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Checkmark de sélection */}
                                  {field.value === offer.id && (
                                    <div className="flex justify-center pt-2">
                                      <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Option Plaque NFC */}
                  <FormField
                    control={form.control}
                    name="wantsPlaque"
                    render={({ field }) => (
                      <FormItem>
                        <Card className="p-6 bg-gradient-to-r from-secondary/5 to-primary/5 border-2 border-primary/20">
                          <div className="flex items-start gap-4">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked);
                                  setWantsPlaque(checked);
                                }}
                                className="data-[state=checked]:bg-primary mt-1"
                              />
                            </FormControl>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                                <div className="flex-1">
                                  <FormLabel className="text-lg font-bold cursor-pointer">
                                    Ajouter la plaque NFC Google personnalisée
                                  </FormLabel>
                                  <FormDescription className="mt-2">
                                    Collectez facilement des avis en magasin. Livraison sous 48h.
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
                      </FormItem>
                    )}
                  />

                  {/* Récapitulatif du prix */}
                  {selectedOffer && (
                    <Card className="p-6 bg-muted/30">
                      <div className="space-y-3">
                        <h4 className="font-bold text-lg">Récapitulatif</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{currentOffer?.name}</span>
                            <span className="font-medium">{offerPriceHT.toFixed(2)}€ HT</span>
                          </div>
                          {wantsPlaque && (
                            <div className="flex justify-between text-sm">
                              <span>Plaque NFC personnalisée</span>
                              <span className="font-medium">{plaquePriceHT.toFixed(2)}€ HT</span>
                            </div>
                          )}
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
                    </Card>
                  )}
                </div>

                {/* Section 2: Informations de l'établissement */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">2. Informations de l'établissement</h3>
                  
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
                          <FormLabel className="text-base">WhatsApp *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+33612345678"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Format international requis pour les alertes
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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

                  {wantsPlaque && (
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Adresse de livraison *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="123 Rue de la République, 69001 Lyon"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Nécessaire pour l'envoi de votre plaque NFC
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                {/* Section 3: Conditions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">3. Conditions</h3>

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
                            <a href="#" className="text-primary underline">
                              Conditions Générales de Vente
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
                            J'accepte la{" "}
                            <a href="#" className="text-primary underline">
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
                  {selectedOffer 
                    ? `Valider ma commande - ${totalTTC.toFixed(2)}€ TTC`
                    : "Choisissez d'abord une offre"}
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
    </section>
  );
};
