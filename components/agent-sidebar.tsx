"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Settings,
  FileText,
  GraduationCap,
  Play,
  Link,
  BarChart3,
  MessageCircle,
  Star,
  X,
  Plus,
  HelpCircle,
} from "lucide-react";

interface AgentSidebarProps {
  sidebarOpen: boolean;
  closeSidebar: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  agentId: string;
}

const navigationItems = [
  { id: "general", label: "General", icon: Settings },
  { id: "instructions", label: "Instructions", icon: FileText },
  { id: "training", label: "Training", icon: GraduationCap },
  { id: "test", label: "Test", icon: Play },
  { id: "integration", label: "Integration", icon: Link },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "chat", label: "Live Chat", icon: MessageCircle },
];

export default function AgentSidebar({
  sidebarOpen,
  closeSidebar,
  currentPage,
  setCurrentPage,
  agentId,
}: AgentSidebarProps) {
  return (
    <div
      className={`
      fixed lg:static inset-y-0 left-0 z-30 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">
            FlowForge
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

      {/* Agent Info */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">
              Agent #{agentId}
            </p>
            <p className="text-xs text-muted-foreground">Workflow Editor</p>
          </div>
        </div>
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

      {/* Action Buttons */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Button className="w-full bg-sidebar-primary text-sidebar-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          New Agent
        </Button>
        <Button variant="outline" className="w-full">
          <HelpCircle className="w-4 h-4 mr-2" />
          Help & Support
        </Button>
      </div>
    </div>
  );
}
