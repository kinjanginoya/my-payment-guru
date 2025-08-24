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
    <div className="space-y-4 sm:space-y-6">
      {/* Enhanced Hero Section - Mobile First */}
      <div className="bg-gradient-hero text-white p-6 sm:p-8 rounded-2xl shadow-lg animate-slide-up">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Search className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Find Payment Options</h1>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed">
              Search merchants and discover the best payment methods for your transactions
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Overview */}
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <DashboardStats />
      </div>

      {/* Mobile-Optimized Search Interface */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Enhanced Merchant Search */}
        <Card className="mobile-card lg:col-span-1 animate-slide-in" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 bg-fintech-primary/10 rounded-lg">
              <Search className="h-5 w-5 text-fintech-primary" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Search Merchants</h2>
              <p className="text-sm text-muted-foreground hidden sm:block">Find and select a merchant</p>
            </div>
          </div>
          <MerchantSearch onMerchantSelect={handleMerchantSelect} />
        </Card>

        {/* Enhanced Selected Merchant Info */}
        {selectedMerchant ? (
          <Card className="mobile-card lg:col-span-1 animate-bounce-in">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-fintech-success/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-fintech-success" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Merchant Details</h2>
                <p className="text-sm text-muted-foreground hidden sm:block">Selected merchant information</p>
              </div>
            </div>
            <div className="glass-card p-4 sm:p-6 rounded-xl border border-fintech-primary/20">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-fintech-primary">{selectedMerchant.name}</h3>
                  <p className="text-muted-foreground text-sm">{selectedMerchant.category}</p>
                </div>
                <div className="w-2 h-2 bg-fintech-success rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                Location: {selectedMerchant.location}
              </p>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-card-foreground">Accepted Payment Methods:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedMerchant.acceptedProviders.map((provider: string, index: number) => (
                    <span 
                      key={provider}
                      className="px-3 py-2 bg-gradient-primary text-white text-xs rounded-lg font-medium shadow-sm interactive-scale"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="mobile-card lg:col-span-1 text-center py-8 sm:py-12 animate-fade-in">
            <div className="p-4 bg-muted/50 rounded-full w-fit mx-auto mb-4">
              <Search className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Select a Merchant</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              Search and select a merchant to view their accepted payment methods and available options.
            </p>
          </Card>
        )}
      </div>

      {/* Enhanced Payment Provider Selection */}
      {selectedMerchant && (
        <Card className="mobile-card animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 bg-fintech-warning/10 rounded-lg">
              <Zap className="h-5 w-5 text-fintech-warning" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Choose Payment Method</h2>
              <p className="text-sm text-muted-foreground hidden sm:block">Select your preferred payment option</p>
            </div>
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