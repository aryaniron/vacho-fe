"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Overview from "@/components/pages/overview";
import AgentsPage from "@/components/pages/agents";
import AnalyticsPage from "@/components/pages/analytics";
import ChatPage from "@/components/pages/chat";
import SettingsPage from "@/components/pages/settings";
import { ThemeSwitcher } from "@/components/theme-switcher";

const pageTitles = {
  overview: "Overview",
  agents: "My Agents",
  analytics: "Analytics",
  chat: "Live Chat",
  settings: "My Account",
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("overview");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <Overview />;
      case "agents":
        return <AgentsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "chat":
        return <ChatPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 relative z-10">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={toggleSidebar}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-lg font-semibold text-foreground">
                {pageTitles[currentPage as keyof typeof pageTitles]}
              </h1>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Q Search" className="pl-10 w-48" />
              </div>
              <ThemeSwitcher />
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
