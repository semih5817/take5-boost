import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface PackCardProps {
  name: string;
  badge: string;
  price: string;
  period: string;
  detail: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

export const PackCard = ({
  name,
  badge,
  price,
  period,
  detail,
  features,
  isPopular = false,
  onSelect
}: PackCardProps) => {
  return (
    <Card
      className={`p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isPopular
          ? "border-4 border-primary shadow-primary scale-105"
          : "border-2"
      }`}
    >
      <Badge
        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs ${
          isPopular
            ? "bg-gradient-to-r from-primary to-secondary text-white"
            : "bg-muted text-foreground"
        }`}
      >
        {badge}
      </Badge>

      <div className="text-center mb-6 mt-2">
        <h3 className="text-xl md:text-2xl font-bold mb-4">{name}</h3>
        
        <div className="mb-2">
          <span className="text-4xl md:text-5xl font-bold gradient-text">
            {price}
          </span>
          <span className="text-lg text-muted-foreground"> {period}</span>
        </div>
        
        <p className="text-sm text-muted-foreground">{detail}</p>
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        onClick={onSelect}
        size="lg"
        className={`w-full transition-all duration-300 hover:-translate-y-1 ${
          isPopular
            ? "bg-gradient-to-r from-primary to-secondary hover:shadow-primary"
            : ""
        }`}
      >
        Je choisis cette offre
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Card>
  );
};
