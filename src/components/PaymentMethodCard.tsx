import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: "credit" | "debit" | "upi" | "wallet";
  name: string;
  lastFour?: string;
  provider: string;
  isDefault?: boolean;
  expiryDate?: string;
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
}

const getIcon = (type: string) => {
  switch (type) {
    case "credit":
    case "debit":
      return <CreditCard className="h-5 w-5" />;
    case "upi":
      return <Smartphone className="h-5 w-5" />;
    case "wallet":
      return <Wallet className="h-5 w-5" />;
    default:
      return <CreditCard className="h-5 w-5" />;
  }
};

const getGradientClass = (type: string) => {
  switch (type) {
    case "credit":
      return "bg-gradient-to-br from-fintech-primary to-fintech-secondary";
    case "debit":
      return "bg-gradient-to-br from-fintech-info to-fintech-secondary";
    case "upi":
      return "bg-gradient-to-br from-fintech-success to-fintech-info";
    case "wallet":
      return "bg-gradient-to-br from-fintech-warning to-fintech-primary";
    default:
      return "bg-gradient-primary";
  }
};

export function PaymentMethodCard({ method }: PaymentMethodCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fade-in">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${getGradientClass(method.type)} text-white`}>
            {getIcon(method.type)}
          </div>
          {method.isDefault && (
            <Badge variant="secondary" className="bg-fintech-success text-white">
              Default
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground">{method.name}</h3>
          <p className="text-sm text-muted-foreground">{method.provider}</p>
          
          {method.lastFour && (
            <p className="text-sm font-mono">•••• •••• •••• {method.lastFour}</p>
          )}
          
          {method.expiryDate && (
            <p className="text-xs text-muted-foreground">Expires {method.expiryDate}</p>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-fintech-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
}