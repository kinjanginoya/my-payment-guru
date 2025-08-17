import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentMethodCard } from "@/components/PaymentMethodCard";
import { MerchantSearch } from "@/components/MerchantSearch";
import { PaymentProviderSelector } from "@/components/PaymentProviderSelector";
import { DashboardStats } from "@/components/DashboardStats";
import { Plus, Search, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPaymentMethods = [
  {
    id: "1",
    type: "credit" as const,
    name: "Chase Sapphire Preferred",
    lastFour: "4242",
    provider: "Visa",
    isDefault: true,
    expiryDate: "12/25"
  },
  {
    id: "2",
    type: "debit" as const,
    name: "Bank of America Checking",
    lastFour: "8888",
    provider: "Mastercard",
    expiryDate: "08/26"
  },
  {
    id: "3",
    type: "upi" as const,
    name: "Google Pay UPI",
    provider: "UPI",
    isDefault: false
  },
  {
    id: "4",
    type: "wallet" as const,
    name: "PayPal Wallet",
    provider: "PayPal"
  },
  {
    id: "5",
    type: "wallet" as const,
    name: "Apple Wallet",
    provider: "Apple Pay"
  },
  {
    id: "6",
    type: "credit" as const,
    name: "American Express Gold",
    lastFour: "1005",
    provider: "Amex",
    expiryDate: "03/27"
  }
];

export default function Dashboard() {
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);

  const handleMerchantSelect = (merchant: any) => {
    setSelectedMerchant(merchant);
    setSelectedProvider(null);
  };

  const handleProviderSelect = (provider: any) => {
    setSelectedProvider(provider);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Payment Dashboard</h1>
          <p className="text-lg opacity-90">Manage your payment methods and find the best options for any merchant</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <DashboardStats />

        {/* Main Content */}
        <Tabs defaultValue="methods" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="methods" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Find Merchants
            </TabsTrigger>
            <TabsTrigger value="providers" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Providers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Payment Methods</h2>
              <Button className="bg-gradient-primary hover:opacity-90">
                <Plus className="h-4 w-4 mr-2" />
                Add New Method
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPaymentMethods.map((method) => (
                <PaymentMethodCard key={method.id} method={method} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold mb-4">Search Merchants</h2>
                <MerchantSearch onMerchantSelect={handleMerchantSelect} />
              </Card>

              {selectedMerchant && (
                <Card className="p-6 bg-gradient-card border-0 shadow-card">
                  <h2 className="text-xl font-semibold mb-4">Selected Merchant</h2>
                  <div className="p-4 bg-fintech-primary/10 rounded-lg border border-fintech-primary/20">
                    <h3 className="font-semibold text-lg">{selectedMerchant.name}</h3>
                    <p className="text-muted-foreground">{selectedMerchant.category}</p>
                    <p className="text-sm mt-2">Location: {selectedMerchant.location}</p>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Accepted Payment Methods:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedMerchant.acceptedProviders.map((provider: string) => (
                          <span 
                            key={provider}
                            className="px-2 py-1 bg-fintech-primary/20 text-fintech-primary text-xs rounded-md"
                          >
                            {provider}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="providers" className="space-y-6">
            {selectedMerchant ? (
              <PaymentProviderSelector
                merchantName={selectedMerchant.name}
                availableProviders={selectedMerchant.acceptedProviders}
                onProviderSelect={handleProviderSelect}
              />
            ) : (
              <Card className="p-8 text-center bg-gradient-card border-0 shadow-card">
                <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Select a Merchant First</h3>
                <p className="text-muted-foreground">
                  Go to the "Find Merchants" tab and select a merchant to see available payment providers.
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}