import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, CreditCard, Activity } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <TrendingUp className="h-8 w-8 text-fintech-primary" />
        <div>
          <h1 className="text-3xl font-bold">Analytics & Insights</h1>
          <p className="text-muted-foreground">Track your payment trends and usage patterns</p>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Monthly Spending</p>
              <p className="text-2xl font-bold">$2,847</p>
              <p className="text-xs text-fintech-success">+12% from last month</p>
            </div>
            <DollarSign className="h-8 w-8 text-fintech-primary" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Transactions</p>
              <p className="text-2xl font-bold">127</p>
              <p className="text-xs text-fintech-success">+8% this month</p>
            </div>
            <Activity className="h-8 w-8 text-fintech-info" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg Transaction</p>
              <p className="text-2xl font-bold">$22.4</p>
              <p className="text-xs text-fintech-warning">+3% increase</p>
            </div>
            <CreditCard className="h-8 w-8 text-fintech-success" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
              <p className="text-2xl font-bold">98.2%</p>
              <p className="text-xs text-fintech-success">Excellent</p>
            </div>
            <TrendingUp className="h-8 w-8 text-fintech-warning" />
          </div>
        </Card>
      </div>

      {/* Payment Method Usage */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Payment Method Usage</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Credit Cards</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-muted rounded-full h-2">
                  <div className="w-3/4 bg-fintech-primary h-2 rounded-full"></div>
                </div>
                <span className="text-sm">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Digital Wallets</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-muted rounded-full h-2">
                  <div className="w-1/2 bg-fintech-info h-2 rounded-full"></div>
                </div>
                <span className="text-sm">20%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Bank Transfer</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-muted rounded-full h-2">
                  <div className="w-1/6 bg-fintech-success h-2 rounded-full"></div>
                </div>
                <span className="text-sm">5%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Top Merchants</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-fintech-primary/10 rounded">
              <span className="text-sm font-medium">Amazon</span>
              <span className="text-sm">$485</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-fintech-info/10 rounded">
              <span className="text-sm font-medium">Starbucks</span>
              <span className="text-sm">$127</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-fintech-success/10 rounded">
              <span className="text-sm font-medium">Target</span>
              <span className="text-sm">$89</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-fintech-warning/10 rounded">
              <span className="text-sm font-medium">Uber</span>
              <span className="text-sm">$56</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-fintech-success rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Payment successful at Amazon</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <span className="text-sm font-medium">$24.99</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-fintech-info rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Added new payment method</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <span className="text-sm font-medium">Apple Pay</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-fintech-warning rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Security verification completed</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
            <span className="text-sm font-medium">Verified</span>
          </div>
        </div>
      </Card>
    </div>
  );
}