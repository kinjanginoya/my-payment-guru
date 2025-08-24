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
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search merchants (e.g., Amazon, Apple, etc.)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 h-12 sm:h-14 text-base rounded-xl border-2 border-border/50 focus:border-fintech-primary/50 transition-all duration-300"
        />
      </div>
      
      {searchTerm && (
        <div className="space-y-2 max-h-60 sm:max-h-80 overflow-y-auto custom-scrollbar">
          {filteredMerchants.length > 0 ? (
            filteredMerchants.map((merchant, index) => (
              <div
                key={merchant.id}
                onClick={() => onMerchantSelect(merchant)}
                className="mobile-card cursor-pointer hover:shadow-interactive transition-all duration-300 interactive-scale animate-slide-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-card-foreground truncate">{merchant.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{merchant.category}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <span className="w-1 h-1 bg-fintech-info rounded-full"></span>
                      {merchant.location}
                    </p>
                  </div>
                  <div className="ml-3 text-center">
                    <div className="px-3 py-1 bg-fintech-primary/10 rounded-full">
                      <span className="text-xs font-semibold text-fintech-primary">
                        {merchant.acceptedProviders.length}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">methods</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 sm:py-12 animate-fade-in">
              <div className="p-4 bg-muted/50 rounded-full w-fit mx-auto mb-4">
                <Search className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">No merchants found matching your search</p>
              <p className="text-xs text-muted-foreground mt-1">Try searching for popular brands like Amazon, Apple, or McDonald's</p>
            </div>
          )}
        </div>
      )}
      
      {!searchTerm && (
        <div className="text-center py-6 sm:py-8 animate-fade-in">
          <div className="p-3 bg-fintech-primary/10 rounded-full w-fit mx-auto mb-3">
            <Search className="h-5 w-5 text-fintech-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Start typing to search for merchants</p>
        </div>
      )}
    </div>
  );
}