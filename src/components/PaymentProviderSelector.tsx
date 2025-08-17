import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Smartphone, Wallet, Globe } from "lucide-react";

interface PaymentProvider {
  id: string;
  name: string;
  type: "card" | "digital_wallet" | "bank_transfer" | "crypto";
  fee: string;
  processingTime: string;
  icon: string;
  description: string;
}

interface PaymentProviderSelectorProps {
  merchantName: string;
  availableProviders: string[];
  onProviderSelect: (provider: PaymentProvider) => void;
}

const providerData: Record<string, PaymentProvider> = {
  "Visa": {
    id: "visa",
    name: "Visa",
    type: "card",
    fee: "2.9% + $0.30",
    processingTime: "Instant",
    icon: "credit-card",
    description: "Widely accepted credit/debit card payments"
  },
  "Mastercard": {
    id: "mastercard",
    name: "Mastercard",
    type: "card",
    fee: "2.9% + $0.30",
    processingTime: "Instant",
    icon: "credit-card",
    description: "Global card payment solution"
  },
  "PayPal": {
    id: "paypal",
    name: "PayPal",
    type: "digital_wallet",
    fee: "3.49% + $0.49",
    processingTime: "Instant",
    icon: "wallet",
    description: "Secure digital wallet payments"
  },
  "Google Pay": {
    id: "google-pay",
    name: "Google Pay",
    type: "digital_wallet",
    fee: "Free",
    processingTime: "Instant",
    icon: "smartphone",
    description: "Fast mobile payments with Google"
  },
  "Apple Pay": {
    id: "apple-pay",
    name: "Apple Pay",
    type: "digital_wallet",
    fee: "Free",
    processingTime: "Instant",
    icon: "smartphone",
    description: "Secure payments using Touch ID or Face ID"
  },
  "UPI": {
    id: "upi",
    name: "UPI",
    type: "bank_transfer",
    fee: "Free",
    processingTime: "Instant",
    icon: "smartphone",
    description: "Unified Payments Interface for India"
  },
  "Amazon Pay": {
    id: "amazon-pay",
    name: "Amazon Pay",
    type: "digital_wallet",
    fee: "2.9% + $0.30",
    processingTime: "Instant",
    icon: "wallet",
    description: "Shop with your Amazon account"
  }
};

const getProviderIcon = (iconType: string) => {
  switch (iconType) {
    case "credit-card":
      return <CreditCard className="h-5 w-5" />;
    case "smartphone":
      return <Smartphone className="h-5 w-5" />;
    case "wallet":
      return <Wallet className="h-5 w-5" />;
    default:
      return <Globe className="h-5 w-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "card":
      return "bg-fintech-primary";
    case "digital_wallet":
      return "bg-fintech-info";
    case "bank_transfer":
      return "bg-fintech-success";
    case "crypto":
      return "bg-fintech-warning";
    default:
      return "bg-fintech-primary";
  }
};

export function PaymentProviderSelector({ 
  merchantName, 
  availableProviders, 
  onProviderSelect 
}: PaymentProviderSelectorProps) {
  const [selectedProvider, setSelectedProvider] = useState<PaymentProvider | null>(null);

  const handleProviderSelect = (providerName: string) => {
    const provider = providerData[providerName];
    if (provider) {
      setSelectedProvider(provider);
      onProviderSelect(provider);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
        <h3 className="font-semibold mb-1">Payment Options for</h3>
        <p className="text-lg font-bold">{merchantName}</p>
      </div>

      <div className="grid gap-3">
        {availableProviders.map((providerName) => {
          const provider = providerData[providerName];
          if (!provider) return null;

          const isSelected = selectedProvider?.id === provider.id;

          return (
            <Card
              key={provider.id}
              className={`p-4 cursor-pointer transition-all duration-300 animate-fade-in ${
                isSelected 
                  ? "ring-2 ring-fintech-primary bg-fintech-primary/5 shadow-glow" 
                  : "hover:shadow-lg-custom bg-gradient-card"
              }`}
              onClick={() => handleProviderSelect(providerName)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(provider.type)} text-white`}>
                    {getProviderIcon(provider.icon)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{provider.name}</h4>
                    <p className="text-sm text-muted-foreground">{provider.description}</p>
                  </div>
                </div>
                
                <div className="text-right flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {provider.fee}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {provider.processingTime}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground capitalize">
                      {provider.type.replace('_', ' ')}
                    </p>
                  </div>
                  
                  {isSelected && (
                    <div className="p-1 rounded-full bg-fintech-success text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedProvider && (
        <div className="mt-6">
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            Proceed with {selectedProvider.name}
          </Button>
        </div>
      )}
    </div>
  );
}