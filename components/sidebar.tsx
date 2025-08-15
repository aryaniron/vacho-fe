"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Briefcase,
  BarChart3,
  Settings,
  X,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/logos/black.png";

interface SidebarProps {
  sidebarOpen: boolean;
  closeSidebar: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "agents", label: "My Agents", icon: Briefcase },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "chat", label: "Live Chat", icon: MessageCircle },
  { id: "settings", label: "My Account", icon: Settings },
];

export default function Sidebar({
  sidebarOpen,
  closeSidebar,
  currentPage,
  setCurrentPage,
}: SidebarProps) {
  return (
    <div
      className={`
      fixed lg:static inset-y-0 left-0 z-30 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      {/* Logo */}
      <div className="px-6 py-[18px] border-b border-sidebar-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center p-1">
            <Image src={logo} alt="" />
          </div>
          <span className="font-bold text-2xl text-sidebar-foreground">
            Vacho
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={closeSidebar}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                closeSidebar();
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">
              Jane Doe
            </p>
            <p className="text-xs text-muted-foreground">Premium User</p>
          </div>
        </div>
      </div>
    </div>
  );
}
