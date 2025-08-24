import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-background overflow-hidden">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Enhanced mobile-friendly header */}
          <header className="h-14 sm:h-16 flex items-center justify-between border-b border-border bg-card/95 backdrop-blur-sm px-4 sm:px-6 sticky top-0 z-40">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="touch-friendly lg:mr-2">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-card-foreground text-lg">Payment Dashboard</h1>
                <p className="text-xs text-muted-foreground hidden md:block">Manage your payments efficiently</p>
              </div>
              <h1 className="font-semibold text-card-foreground sm:hidden">Payments</h1>
            </div>
            
            {/* Mobile status indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fintech-success rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground hidden sm:inline">Online</span>
            </div>
          </header>

          {/* Enhanced main content with mobile optimizations */}
          <main className="flex-1 p-4 sm:p-6 overflow-auto bg-gradient-to-br from-background to-muted/20">
            <div className="w-full max-w-7xl mx-auto animate-fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}