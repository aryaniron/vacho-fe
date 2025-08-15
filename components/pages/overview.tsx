import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const agents = [
  {
    id: 1,
    title: "Content Creator Pro",
    description:
      "Generates engaging blog posts, social media captions, and marketing copy",
    status: "Active",
    statusColor: "bg-blue-500",
    time: "2 hours ago",
    image: "🤖",
  },
  {
    id: 2,
    title: "Customer Support Bot",
    description:
      "Handles common customer queries and provides instant assistance",
    status: "Active",
    statusColor: "bg-blue-500",
    time: "1 day ago",
    image: "💬",
  },
  {
    id: 3,
    title: "Data Analyst Helper",
    description:
      "Assists with data interpretation, visualization, and report generation",
    status: "Draft",
    statusColor: "bg-gray-500",
    time: "3 days ago",
    image: "📊",
  },
  {
    id: 4,
    title: "Meeting Summarizer",
    description:
      "Transcribes and summarizes meeting discussions into concise notes",
    status: "Active",
    statusColor: "bg-blue-500",
    time: "1 week ago",
    image: "🎤",
  },
  {
    id: 5,
    title: "Personalized Learning",
    description: "Adapts learning paths based on user progress and preferences",
    status: "Active",
    statusColor: "bg-blue-500",
    time: "2 weeks ago",
    image: "📚",
  },
  {
    id: 6,
    title: "Virtual Interview Coach",
    description:
      "Provides mock interview practice and feedback for job seekers",
    status: "Archived",
    statusColor: "bg-red-500",
    time: "1 month ago",
    image: "🎯",
  },
];

export default function Overview() {
  const router = useRouter();

  const handleAgentClick = (agentId: number) => {
    router.push(`/agent/${agentId}`);
  };

  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
              Welcome to AgentForge, Jane!
            </h2>
            <p className="text-muted-foreground mb-4">
              Manage your AI agents or create new ones to empower your workflows
              and boost productivity.
            </p>
            <Button className="w-full lg:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create New Agent
            </Button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
              <div className="text-4xl">🤖</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Agents
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Conversations
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">1,247</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Current Subscription
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">Premium</p>
            <p className="text-xs text-muted-foreground">
              Valid until Dec 2024
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Agents Section */}
      <div className="space-y-6">
        <h3 className="text-lg lg:text-xl font-semibold text-card-foreground">
          Your AI Agents
        </h3>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search agents..." className="pl-10" />
          </div>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Name (A-Z)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="date-asc">Date (Oldest)</SelectItem>
                <SelectItem value="date-desc">Date (Newest)</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full lg:w-24">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleAgentClick(agent.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{agent.image}</div>
                  <Badge
                    variant="secondary"
                    className={`${agent.statusColor} text-white border-0`}
                  >
                    {agent.status}
                  </Badge>
                </div>
                <h4 className="font-semibold text-card-foreground">
                  {agent.title}
                </h4>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {agent.description}
                </p>
                <p className="text-xs text-muted-foreground">{agent.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
