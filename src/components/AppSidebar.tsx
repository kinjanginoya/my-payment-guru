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
      ? "bg-fintech-primary text-white font-medium shadow-glow" 
      : "hover:bg-fintech-primary/10 hover:text-fintech-primary transition-colors";

  return (
    <Sidebar
      className={`${collapsed ? "w-14" : "w-60"} border-r border-border bg-gradient-card`}
    >
      <SidebarContent>
        {/* App Title */}
        {!collapsed && (
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-card-foreground">Payment Guru</h2>
                <p className="text-xs text-muted-foreground">Manage payments</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            {!collapsed ? "Navigation" : ""}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${getNavClassName({ isActive })}`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer in sidebar */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border">
            <div className="p-3 bg-fintech-primary/10 rounded-lg">
              <p className="text-xs text-fintech-primary font-medium">Payment Guru Pro</p>
              <p className="text-xs text-muted-foreground">Advanced payment management</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}