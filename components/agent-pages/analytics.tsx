import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

interface AgentAnalyticsPageProps {
  agentId: string;
}

export default function AgentAnalyticsPage({
  agentId,
}: AgentAnalyticsPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-card-foreground">
          Agent Analytics
        </h2>
        <div className="flex space-x-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Total Conversations
              </h3>
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">1,247</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <p className="text-xs text-green-600">+12.5%</p>
              <p className="text-xs text-muted-foreground">from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Active Users
              </h3>
              <Users className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">342</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <p className="text-xs text-green-600">+8.2%</p>
              <p className="text-xs text-muted-foreground">from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Avg Response Time
              </h3>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">1.8s</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingDown className="w-3 h-3 text-green-600" />
              <p className="text-xs text-green-600">-0.3s</p>
              <p className="text-xs text-muted-foreground">from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Success Rate
              </h3>
              <CheckCircle className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">96.8%</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <p className="text-xs text-green-600">+2.1%</p>
              <p className="text-xs text-muted-foreground">from last period</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Conversation Trends
            </h3>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart placeholder - Conversation volume over time
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Response Time Distribution
            </h3>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart placeholder - Response time distribution
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Top User Queries
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    "I need help with my order"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Order assistance
                  </p>
                </div>
                <Badge variant="secondary">156</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    "What are your business hours?"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    General inquiry
                  </p>
                </div>
                <Badge variant="secondary">89</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    "I want to cancel my subscription"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Account management
                  </p>
                </div>
                <Badge variant="secondary">67</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    "How do I reset my password?"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Technical support
                  </p>
                </div>
                <Badge variant="secondary">45</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Performance Metrics
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Resolution Rate
                </span>
                <span className="text-sm font-medium">94.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Escalation Rate
                </span>
                <span className="text-sm font-medium">5.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  User Satisfaction
                </span>
                <span className="text-sm font-medium">4.6/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  First Response Time
                </span>
                <span className="text-sm font-medium">0.8s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Conversation Length
                </span>
                <span className="text-sm font-medium">4.2 messages</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Peak Usage Time
                </span>
                <span className="text-sm font-medium">2-4 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-card-foreground">
              Recent Activity
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    High volume period
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    Model update completed
                  </p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    Performance alert
                  </p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    Training completed
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
