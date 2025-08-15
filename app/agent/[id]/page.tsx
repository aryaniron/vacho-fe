"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, ArrowLeft, TestTube, Upload } from "lucide-react";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import AgentGeneralPage from "@/components/agent-pages/general";
import AgentTrainingPage from "@/components/agent-pages/training";
import AgentDesignPage from "@/components/agent-pages/design";
import AgentIntegrationPage from "@/components/agent-pages/integration";
import AgentKnowledgePage from "@/components/agent-pages/knowledge";
import { ThemeSwitcher } from "@/components/theme-switcher";

const agentPageTitles = {
  general: "General",
  training: "Training",
  design: "Design",
  integration: "Integration",
  knowledge: "Knowledge",
};

export default function AgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("general");

  // Unwrap the params Promise using React.use()
  const { id } = use(params);

  const renderPage = () => {
    switch (currentPage) {
      case "general":
        return <AgentGeneralPage agentId={id} />;
      case "training":
        return <AgentTrainingPage agentId={id} />;
      case "design":
        return <AgentDesignPage agentId={id} />;
      case "integration":
        return <AgentIntegrationPage agentId={id} />;
      case "knowledge":
        return <AgentKnowledgePage agentId={id} />;
      default:
        return <AgentGeneralPage agentId={id} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border">
        {/* Top Header */}
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="text-xl font-bold text-primary">Vacho</div>
                <div className="w-px h-6 bg-border"></div>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/agent-avatar.jpg" />
                  <AvatarFallback>A{id}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">
                    Agent #{id}
                  </h1>
                  <p className="text-sm text-muted-foreground">Workflow Editor</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search..." className="pl-10 w-48" />
              </div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Publish
              </Button>
              <Button variant="ghost" size="icon">
                <TestTube className="w-5 h-5" />
              </Button>
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
        </div>

        {/* Tabs */}
        <div className="px-4 lg:px-6 border-t border-border">
          <nav className="flex space-x-8">
            {Object.entries(agentPageTitles).map(([key, title]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  currentPage === key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-6">{renderPage()}</main>
    </div>
  );
}
