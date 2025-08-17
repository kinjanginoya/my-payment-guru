import { Card } from "@/components/ui/card";
import { MerchantSearch } from "@/components/MerchantSearch";
import { DashboardStats } from "@/components/DashboardStats";
import { PaymentProviderSelector } from "@/components/PaymentProviderSelector";
import { useState } from "react";
import { Search, TrendingUp, Zap } from "lucide-react";

export default function HomePage() {
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);

  const handleMerchantSelect = (merchant: any) => {
    setSelectedMerchant(merchant);
  };

  const handleProviderSelect = (provider: any) => {
    console.log("Selected provider:", provider);
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white p-8 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Search className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Find Payment Options</h1>
        </div>
        <p className="text-lg opacity-90">
          Search for merchants and discover the best payment methods for your transactions
        </p>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Search Interface */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Merchant Search */}
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-fintech-primary" />
            <h2 className="text-xl font-semibold">Search Merchants</h2>
          </div>
          <MerchantSearch onMerchantSelect={handleMerchantSelect} />
        </Card>

        {/* Selected Merchant Info */}
        {selectedMerchant ? (
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-fintech-success" />
              <h2 className="text-xl font-semibold">Merchant Details</h2>
            </div>
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
        ) : (
          <Card className="p-8 text-center bg-gradient-card border-0 shadow-card">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Select a Merchant</h3>
            <p className="text-muted-foreground">
              Search and select a merchant to see their accepted payment methods and options.
            </p>
          </Card>
        )}
      </div>

      {/* Payment Provider Selection */}
      {selectedMerchant && (
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-fintech-warning" />
            <h2 className="text-xl font-semibold">Choose Payment Method</h2>
          </div>
          <PaymentProviderSelector
            merchantName={selectedMerchant.name}
            availableProviders={selectedMerchant.acceptedProviders}
            onProviderSelect={handleProviderSelect}
          />
        </Card>
      )}
    </div>
  );
}