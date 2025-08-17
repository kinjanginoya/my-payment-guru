import { PaymentMethodCard } from "@/components/PaymentMethodCard";
import { Button } from "@/components/ui/button";
import { Plus, CreditCard } from "lucide-react";

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

export default function PaymentMethodsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="h-8 w-8 text-fintech-primary" />
          <div>
            <h1 className="text-3xl font-bold">Payment Methods</h1>
            <p className="text-muted-foreground">Manage your credit cards, debit cards, and digital wallets</p>
          </div>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Method
        </Button>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPaymentMethods.map((method) => (
          <PaymentMethodCard key={method.id} method={method} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gradient-card rounded-lg border-0 shadow-card">
          <h3 className="font-semibold mb-2">Set Default Payment</h3>
          <p className="text-sm text-muted-foreground">Choose your preferred payment method for quick transactions</p>
        </div>
        <div className="p-4 bg-gradient-card rounded-lg border-0 shadow-card">
          <h3 className="font-semibold mb-2">Security Settings</h3>
          <p className="text-sm text-muted-foreground">Manage two-factor authentication and payment verification</p>
        </div>
        <div className="p-4 bg-gradient-card rounded-lg border-0 shadow-card">
          <h3 className="font-semibold mb-2">Transaction Limits</h3>
          <p className="text-sm text-muted-foreground">Set daily and monthly spending limits for each payment method</p>
        </div>
      </div>
    </div>
  );
}