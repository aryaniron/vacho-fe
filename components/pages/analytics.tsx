import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for different agents
const agentAnalytics = {
  all: {
    name: "All Agents",
    totalTasks: 1234,
    successRate: 94.2,
    avgResponseTime: 2.3,
    activeUsers: 847,
    taskTrend: "+12%",
    successTrend: "+2.1%",
    responseTrend: "+0.5s",
    userTrend: "+8%",
  },
  "customer-support": {
    name: "Customer Support Bot",
    totalTasks: 456,
    successRate: 96.8,
    avgResponseTime: 1.8,
    activeUsers: 234,
    taskTrend: "+15%",
    successTrend: "+3.2%",
    responseTrend: "-0.2s",
    userTrend: "+12%",
  },
  "content-creator": {
    name: "Content Creator Pro",
    totalTasks: 234,
    successRate: 91.5,
    avgResponseTime: 4.2,
    activeUsers: 156,
    taskTrend: "+8%",
    successTrend: "+1.5%",
    responseTrend: "+0.8s",
    userTrend: "+5%",
  },
  "data-analyst": {
    name: "Data Analyst Helper",
    totalTasks: 189,
    successRate: 89.7,
    avgResponseTime: 3.1,
    activeUsers: 98,
    taskTrend: "+6%",
    successTrend: "+0.8%",
    responseTrend: "+0.3s",
    userTrend: "+3%",
  },
  "meeting-summarizer": {
    name: "Meeting Summarizer",
    totalTasks: 156,
    successRate: 97.3,
    avgResponseTime: 2.8,
    activeUsers: 89,
    taskTrend: "+18%",
    successTrend: "+4.1%",
    responseTrend: "-0.5s",
    userTrend: "+15%",
  },
  "learning-coach": {
    name: "Personalized Learning",
    totalTasks: 199,
    successRate: 93.1,
    avgResponseTime: 2.5,
    activeUsers: 112,
    taskTrend: "+10%",
    successTrend: "+2.8%",
    responseTrend: "+0.1s",
    userTrend: "+7%",
  },
};

export default function AnalyticsPage() {
  const [selectedAgent, setSelectedAgent] = useState("all");
  const currentData =
    agentAnalytics[selectedAgent as keyof typeof agentAnalytics];

  return (
    <div className="space-y-6">
      {/* Agent Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-card-foreground">Analytics</h2>
        <div className="flex items-center space-x-4">
          <Select value={selectedAgent} onValueChange={setSelectedAgent}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select an agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agents</SelectItem>
              <SelectItem value="customer-support">
                Customer Support Bot
              </SelectItem>
              <SelectItem value="content-creator">
                Content Creator Pro
              </SelectItem>
              <SelectItem value="data-analyst">Data Analyst Helper</SelectItem>
              <SelectItem value="meeting-summarizer">
                Meeting Summarizer
              </SelectItem>
              <SelectItem value="learning-coach">
                Personalized Learning
              </SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Tasks
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">
              {currentData.totalTasks.toLocaleString()}
            </p>
            <p
              className={`text-xs ${
                currentData.taskTrend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentData.taskTrend} from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Success Rate
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">
              {currentData.successRate}%
            </p>
            <p
              className={`text-xs ${
                currentData.successTrend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentData.successTrend} from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Avg Response Time
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">
              {currentData.avgResponseTime}s
            </p>
            <p
              className={`text-xs ${
                currentData.responseTrend.includes("-")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentData.responseTrend} from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Active Users
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">
              {currentData.activeUsers.toLocaleString()}
            </p>
            <p
              className={`text-xs ${
                currentData.userTrend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentData.userTrend} from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Task Completion Trend - {currentData.name}
            </h3>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart placeholder - Task completion over time for{" "}
                {currentData.name}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Performance Metrics - {currentData.name}
            </h3>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart placeholder - Performance comparison for{" "}
                {currentData.name}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Recent Analytics Events - {currentData.name}
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedAgent === "all" ? (
              <>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      Content Creator Pro
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Generated 5 blog posts
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      Customer Support Bot
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Resolved 23 tickets
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      Data Analyst Helper
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Processed 156 data points
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    3 days ago
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      {currentData.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Completed {Math.floor(currentData.totalTasks * 0.1)} tasks
                      today
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      {currentData.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Success rate improved to {currentData.successRate}%
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Yesterday
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">
                      {currentData.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Average response time: {currentData.avgResponseTime}s
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    This week
                  </span>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
