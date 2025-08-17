import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star } from "lucide-react";

interface Merchant {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  acceptedProviders: string[];
}

interface MerchantSearchProps {
  onMerchantSelect: (merchant: Merchant) => void;
}

const mockMerchants: Merchant[] = [
  {
    id: "1",
    name: "Starbucks Coffee",
    category: "Food & Beverage",
    location: "Downtown",
    rating: 4.5,
    acceptedProviders: ["Visa", "Mastercard", "Google Pay", "Apple Pay", "PayPal"]
  },
  {
    id: "2",
    name: "Amazon Online",
    category: "E-commerce",
    location: "Online",
    rating: 4.8,
    acceptedProviders: ["Visa", "Mastercard", "PayPal", "Amazon Pay", "UPI"]
  },
  {
    id: "3",
    name: "Target Store",
    category: "Retail",
    location: "Mall District",
    rating: 4.3,
    acceptedProviders: ["Visa", "Mastercard", "Apple Pay", "Google Pay"]
  },
  {
    id: "4",
    name: "Uber Rides",
    category: "Transportation",
    location: "Mobile App",
    rating: 4.2,
    acceptedProviders: ["Visa", "Mastercard", "PayPal", "Google Pay", "Apple Pay"]
  }
];

export function MerchantSearch({ onMerchantSelect }: MerchantSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMerchants, setFilteredMerchants] = useState(mockMerchants);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = mockMerchants.filter(merchant =>
      merchant.name.toLowerCase().includes(term.toLowerCase()) ||
      merchant.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMerchants(filtered);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search merchants..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 bg-card border-border focus:ring-fintech-primary focus:border-fintech-primary"
        />
      </div>

      <div className="grid gap-3 max-h-96 overflow-y-auto">
        {filteredMerchants.map((merchant) => (
          <Card
            key={merchant.id}
            className="p-4 cursor-pointer hover:shadow-lg-custom transition-all duration-300 bg-gradient-card border-0 animate-slide-in"
            onClick={() => onMerchantSelect(merchant)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground mb-1">{merchant.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{merchant.location}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-fintech-warning text-fintech-warning" />
                    <span>{merchant.rating}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {merchant.category}
                </Badge>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Accepts</p>
                <div className="flex flex-wrap gap-1 justify-end">
                  {merchant.acceptedProviders.slice(0, 3).map((provider) => (
                    <Badge key={provider} variant="outline" className="text-xs">
                      {provider}
                    </Badge>
                  ))}
                  {merchant.acceptedProviders.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{merchant.acceptedProviders.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}