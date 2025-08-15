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
import { Search } from "lucide-react";

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

export default function AgentsPage() {
  return (
    <div className="space-y-6">
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
  );
}
