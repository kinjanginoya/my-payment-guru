import { Search, CreditCard, Settings, TrendingUp } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Search },
  { title: "Payment Methods", url: "/payment-methods", icon: CreditCard },
  { title: "Providers", url: "/providers", icon: Settings },
  { title: "Analytics", url: "/analytics", icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-white font-medium shadow-glow animate-scale-in" 
      : "hover:bg-fintech-primary/10 hover:text-fintech-primary transition-all duration-300 interactive-scale";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-border/50 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm`}
    >
      <SidebarContent className="overflow-hidden">
        {/* Enhanced App Title */}
        {!collapsed && (
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center gap-3 animate-slide-in">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-card-foreground text-lg gradient-text">Payment Guru</h2>
                <p className="text-xs text-muted-foreground">Smart payment management</p>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed logo */}
        {collapsed && (
          <div className="p-4 flex justify-center border-b border-border/50">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-bounce-in">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
          </div>
        )}

        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="text-muted-foreground px-4 mb-2">
            {!collapsed ? "Navigation" : ""}
          </SidebarGroupLabel>

          <SidebarGroupContent className="px-2">
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-3 mx-2 rounded-xl transition-all duration-300 touch-friendly ${getNavClassName({ isActive })}`
                      }
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="text-sm font-medium truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Enhanced Footer */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border/50">
            <div className="glass-card p-4 rounded-xl animate-slide-up">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-fintech-success rounded-full animate-pulse"></div>
                <p className="text-xs text-fintech-primary font-semibold">Payment Guru Pro</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Advanced payment analytics & insights
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}