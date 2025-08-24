
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Clock, TrendingUp, Zap } from "lucide-react";

interface Merchant {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  acceptedProviders: string[];
  isPopular?: boolean;
  processingTime?: string;
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
    acceptedProviders: ["Visa", "Mastercard", "Google Pay", "Apple Pay", "PayPal"],
    isPopular: true,
    processingTime: "Instant"
  },
  {
    id: "2",
    name: "Amazon Online",
    category: "E-commerce",
    location: "Online",
    rating: 4.8,
    acceptedProviders: ["Visa", "Mastercard", "PayPal", "Amazon Pay", "UPI"],
    isPopular: true,
    processingTime: "1-2 days"
  },
  {
    id: "3",
    name: "Target Store",
    category: "Retail",
    location: "Mall District",
    rating: 4.3,
    acceptedProviders: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    processingTime: "Instant"
  },
  {
    id: "4",
    name: "Uber Rides",
    category: "Transportation",
    location: "Mobile App",
    rating: 4.2,
    acceptedProviders: ["Visa", "Mastercard", "PayPal", "Google Pay", "Apple Pay"],
    isPopular: true,
    processingTime: "Instant"
  },
  {
    id: "5",
    name: "Netflix",
    category: "Entertainment",
    location: "Online",
    rating: 4.6,
    acceptedProviders: ["Visa", "Mastercard", "PayPal"],
    processingTime: "Instant"
  },
  {
    id: "6",
    name: "McDonald's",
    category: "Food & Beverage",
    location: "Multiple Locations",
    rating: 4.1,
    acceptedProviders: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    processingTime: "Instant"
  }
];

const popularSearches = ["Amazon", "Starbucks", "Netflix", "Uber"];

export function MerchantSearch({ onMerchantSelect }: MerchantSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMerchants, setFilteredMerchants] = useState<Merchant[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = mockMerchants.filter(merchant =>
          merchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          merchant.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMerchants(filtered);
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setFilteredMerchants([]);
      setIsSearching(false);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handlePopularSearch = (term: string) => {
    setSearchTerm(term);
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-3 w-3 fill-fintech-warning text-fintech-warning" />
        <span className="text-xs font-medium text-muted-foreground">{rating}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Search Input */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
            searchTerm ? 'text-fintech-primary' : 'text-muted-foreground'
          }`} />
          <Input
            type="text"
            placeholder="Search merchants (e.g., Amazon, Apple, Starbucks...)"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 pr-4 h-14 text-base rounded-xl border-2 border-border/50 focus:border-fintech-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 focus:bg-card"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Popular Searches */}
      {!searchTerm && (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-fintech-primary" />
            <span className="text-sm font-medium text-foreground">Popular searches</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term, index) => (
              <button
                key={term}
                onClick={() => handlePopularSearch(term)}
                className="px-4 py-2 bg-fintech-primary/10 hover:bg-fintech-primary/20 text-fintech-primary rounded-lg text-sm font-medium transition-all duration-200 interactive-scale animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchTerm && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {isSearching ? "Searching..." : `Found ${filteredMerchants.length} merchants`}
            </p>
            {filteredMerchants.length > 0 && (
              <span className="text-xs text-fintech-primary font-medium">
                Tap to select
              </span>
            )}
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
            {isSearching ? (
              // Loading State
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="mobile-card animate-pulse">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                      </div>
                      <div className="w-12 h-8 bg-muted rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredMerchants.length > 0 ? (
              filteredMerchants.map((merchant, index) => (
                <div
                  key={merchant.id}
                  onClick={() => onMerchantSelect(merchant)}
                  className="group mobile-card cursor-pointer hover:shadow-interactive transition-all duration-300 interactive-scale border border-transparent hover:border-fintech-primary/20 animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-card-foreground truncate group-hover:text-fintech-primary transition-colors duration-200">
                          {merchant.name}
                        </h3>
                        {merchant.isPopular && (
                          <Badge variant="secondary" className="text-xs bg-fintech-warning/10 text-fintech-warning border-fintech-warning/20">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{merchant.category}</p>
                      
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{merchant.location}</span>
                        </div>
                        {renderRating(merchant.rating)}
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{merchant.processingTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4 text-center">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <span className="text-white font-bold text-sm">
                            {merchant.acceptedProviders.length}
                          </span>
                        </div>
                        <Zap className="absolute -bottom-1 -right-1 h-4 w-4 bg-fintech-success text-white rounded-full p-0.5" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">methods</p>
                    </div>
                  </div>

                  {/* Payment Methods Preview */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-border/50">
                    {merchant.acceptedProviders.slice(0, 3).map((provider, idx) => (
                      <span 
                        key={provider}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                      >
                        {provider}
                      </span>
                    ))}
                    {merchant.acceptedProviders.length > 3 && (
                      <span className="px-2 py-1 bg-fintech-primary/10 text-fintech-primary text-xs rounded-md font-medium">
                        +{merchant.acceptedProviders.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              // No Results State
              <div className="text-center py-12 animate-fade-in">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-muted/30 rounded-full mx-auto flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-fintech-primary/20 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">No merchants found</h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
                  We couldn't find any merchants matching "{searchTerm}". Try searching for popular brands or check your spelling.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handlePopularSearch(term)}
                      className="px-3 py-1 text-xs bg-fintech-primary/10 text-fintech-primary rounded-md hover:bg-fintech-primary/20 transition-colors duration-200"
                    >
                      Try "{term}"
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {!searchTerm && (
        <div className="text-center py-8 animate-fade-in">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-fintech-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
              <Search className="h-7 w-7 text-fintech-primary" />
            </div>
            <div className="absolute inset-0 bg-fintech-primary/5 rounded-2xl animate-pulse"></div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Discover Payment Options</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            Start typing to search thousands of merchants and discover their accepted payment methods.
          </p>
        </div>
      )}
    </div>
  );
}
