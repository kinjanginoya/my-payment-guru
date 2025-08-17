import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, CreditCard, Smartphone, Wallet, Globe, Star } from "lucide-react";

const allProviders = [
  {
    id: "visa",
    name: "Visa",
    type: "card",
    fee: "2.9% + $0.30",
    processingTime: "Instant",
    description: "Widely accepted credit/debit card payments",
    rating: 4.8,
    features: ["Global acceptance", "Fraud protection", "Instant processing"]
  },
  {
    id: "mastercard",
    name: "Mastercard",
    type: "card",
    fee: "2.9% + $0.30",
    processingTime: "Instant",
    description: "Global card payment solution",
    rating: 4.7,
    features: ["Worldwide coverage", "Secure payments", "Contactless support"]
  },
  {
    id: "paypal",
    name: "PayPal",
    type: "digital_wallet",
    fee: "3.49% + $0.49",
    processingTime: "Instant",
    description: "Secure digital wallet payments",
    rating: 4.5,
    features: ["Buyer protection", "Easy refunds", "International support"]
  },
  {
    id: "google-pay",
    name: "Google Pay",
    type: "digital_wallet",
    fee: "Free",
    processingTime: "Instant",
    description: "Fast mobile payments with Google",
    rating: 4.6,
    features: ["Contactless payments", "Security tokens", "Loyalty integration"]
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    type: "digital_wallet",
    fee: "Free",
    processingTime: "Instant",
    description: "Secure payments using Touch ID or Face ID",
    rating: 4.8,
    features: ["Biometric security", "Privacy focused", "Easy setup"]
  },
  {
    id: "stripe",
    name: "Stripe",
    type: "payment_gateway",
    fee: "2.9% + $0.30",
    processingTime: "1-2 days",
    description: "Complete payment infrastructure",
    rating: 4.9,
    features: ["Developer friendly", "Global coverage", "Advanced analytics"]
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "card":
      return <CreditCard className="h-5 w-5" />;
    case "digital_wallet":
      return <Smartphone className="h-5 w-5" />;
    case "payment_gateway":
      return <Globe className="h-5 w-5" />;
    default:
      return <Wallet className="h-5 w-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "card":
      return "bg-fintech-primary";
    case "digital_wallet":
      return "bg-fintech-info";
    case "payment_gateway":
      return "bg-fintech-success";
    default:
      return "bg-fintech-warning";
  }
};

export default function ProvidersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-8 w-8 text-fintech-primary" />
          <div>
            <h1 className="text-3xl font-bold">Payment Providers</h1>
            <p className="text-muted-foreground">Explore all available payment providers and their features</p>
          </div>
        </div>
      </div>

      {/* Provider Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center bg-gradient-card border-0 shadow-card">
          <CreditCard className="h-8 w-8 mx-auto mb-2 text-fintech-primary" />
          <h3 className="font-semibold">Credit Cards</h3>
          <p className="text-sm text-muted-foreground">2 providers</p>
        </Card>
        <Card className="p-4 text-center bg-gradient-card border-0 shadow-card">
          <Smartphone className="h-8 w-8 mx-auto mb-2 text-fintech-info" />
          <h3 className="font-semibold">Digital Wallets</h3>
          <p className="text-sm text-muted-foreground">3 providers</p>
        </Card>
        <Card className="p-4 text-center bg-gradient-card border-0 shadow-card">
          <Globe className="h-8 w-8 mx-auto mb-2 text-fintech-success" />
          <h3 className="font-semibold">Payment Gateways</h3>
          <p className="text-sm text-muted-foreground">1 provider</p>
        </Card>
        <Card className="p-4 text-center bg-gradient-card border-0 shadow-card">
          <Wallet className="h-8 w-8 mx-auto mb-2 text-fintech-warning" />
          <h3 className="font-semibold">All Providers</h3>
          <p className="text-sm text-muted-foreground">6 total</p>
        </Card>
      </div>

      {/* All Providers */}
      <div className="grid gap-4">
        {allProviders.map((provider) => (
          <Card key={provider.id} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-lg-custom transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`p-3 rounded-lg ${getTypeColor(provider.type)} text-white`}>
                  {getTypeIcon(provider.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{provider.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-fintech-warning text-fintech-warning" />
                      <span className="text-sm">{provider.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{provider.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {provider.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex flex-col gap-1 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Fee: {provider.fee}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {provider.processingTime}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground capitalize">
                  {provider.type.replace('_', ' ')}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}