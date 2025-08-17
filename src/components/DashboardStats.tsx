import { Card } from "@/components/ui/card";
import { TrendingUp, CreditCard, Smartphone, Wallet } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-card-foreground">{value}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp 
              className={`h-3 w-3 ${
                changeType === "increase" ? "text-fintech-success" : "text-destructive"
              }`} 
            />
            <span 
              className={`text-xs ${
                changeType === "increase" ? "text-fintech-success" : "text-destructive"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gradient-primary text-white">
          {icon}
        </div>
      </div>
    </Card>
  );
}

export function DashboardStats() {
  const stats = [
    {
      title: "Total Payment Methods",
      value: "8",
      change: "+2 this month",
      changeType: "increase" as const,
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "Digital Wallets",
      value: "4",
      change: "+1 this week",
      changeType: "increase" as const,
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      title: "Active Cards",
      value: "3",
      change: "No change",
      changeType: "increase" as const,
      icon: <Wallet className="h-5 w-5" />
    },
    {
      title: "Monthly Transactions",
      value: "47",
      change: "+12% vs last month",
      changeType: "increase" as const,
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}