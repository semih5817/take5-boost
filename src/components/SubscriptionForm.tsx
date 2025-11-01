import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Validation schema with strict rules
const subscriptionSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(1, "Le nom de l'entreprise est requis")
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
      "Numéro WhatsApp invalide (format international requis, ex: +33612345678)"
    ),
  address: z
    .string()
    .trim()
    .max(500, "L'adresse ne peut pas dépasser 500 caractères")
    .optional()
    .or(z.literal("")),
  sector: z
    .string()
    .trim()
    .max(100, "Le secteur ne peut pas dépasser 100 caractères")
    .optional()
    .or(z.literal("")),
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export const SubscriptionForm = () => {
  const { toast } = useToast();
  
  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      businessName: "",
      yourName: "",
      email: "",
      whatsapp: "",
      address: "",
      sector: "",
    },
  });

  const onSubmit = (data: SubscriptionFormData) => {
    // Success toast
    toast({
      title: "🎉 Bienvenue chez Take 5 !",
      description: "Votre demande a été envoyée. Nous vous contactons sous 24h pour finaliser votre abonnement.",
    });

    // Reset form
    form.reset();
  };

  return (
    <section id="subscription-form" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Prêt à dominer</span>
            <br />
            les recherches locales ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous et recevez votre plaque NFC sous 48h
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-elegant">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Nom de l'entreprise *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Restaurant Le Gourmet"
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
                      <FormLabel className="text-base">Votre nom *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Marc Dubois"
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
                          placeholder="+33612345678"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
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
                    <FormLabel className="text-base">Adresse de livraison (plaque NFC)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="123 Rue de la République, 69001 Lyon"
                        className="min-h-24 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Secteur d'activité</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Restaurant, Coiffure, Plomberie..."
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 text-lg py-6 h-auto"
              >
                S'abonner pour 9,90€/mois
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                En vous abonnant, vous acceptez nos CGV. Paiement sécurisé par carte bancaire.
              </p>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};
