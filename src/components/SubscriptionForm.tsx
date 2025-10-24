import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

export const SubscriptionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    email: "",
    whatsapp: "",
    address: "",
    sector: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.yourName || !formData.email || !formData.whatsapp) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // Success toast
    toast({
      title: "🎉 Bienvenue chez Take 5 !",
      description: "Votre demande a été envoyée. Nous vous contactons sous 24h pour finaliser votre abonnement.",
    });

    // Reset form
    setFormData({
      businessName: "",
      yourName: "",
      email: "",
      whatsapp: "",
      address: "",
      sector: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-base mb-2 block">
                  Nom de l'entreprise *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Restaurant Le Gourmet"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="yourName" className="text-base mb-2 block">
                  Votre nom *
                </Label>
                <Input
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Marc Dubois"
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-base mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="marc@restaurant.fr"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-base mb-2 block">
                  Numéro WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address" className="text-base mb-2 block">
                Adresse de livraison (plaque NFC)
              </Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Rue de la République, 69001 Lyon"
                className="min-h-24 resize-none"
              />
            </div>

            <div>
              <Label htmlFor="sector" className="text-base mb-2 block">
                Secteur d'activité
              </Label>
              <Input
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                placeholder="Restaurant, Coiffure, Plomberie..."
                className="h-12"
              />
            </div>

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
        </Card>
      </div>
    </section>
  );
};
