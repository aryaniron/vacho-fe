import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AgentGeneralPageProps {
  agentId: string;
}

export default function AgentGeneralPage({ agentId }: AgentGeneralPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">General Settings</h2>
          <p className="text-muted-foreground mt-1">Configure your agent's basic information and behavior</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Profile</CardTitle>
            <CardDescription>Define your agent's identity and appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/agent-avatar.jpg" />
                <AvatarFallback>A{agentId}</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline">Change Avatar</Button>
                <p className="text-sm text-muted-foreground mt-1">Upload an image for your agent</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="agent-name">Agent Name</Label>
                <Input id="agent-name" placeholder="Enter agent name..." />
              </div>
              <div>
                <Label htmlFor="brand-name">Brand Name</Label>
                <Input id="brand-name" placeholder="Enter brand name..." />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="customer-support">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-support">Customer Support</SelectItem>
                    <SelectItem value="sales">Sales Assistant</SelectItem>
                    <SelectItem value="technical-support">Technical Support</SelectItem>
                    <SelectItem value="general-assistant">General Assistant</SelectItem>
                    <SelectItem value="educational">Educational Tutor</SelectItem>
                    <SelectItem value="healthcare">Healthcare Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Select defaultValue="gpt-4">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input 
                  id="api-key" 
                  type="password"
                  placeholder="Enter your API key..." 
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your API key is encrypted and stored securely
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Behavior Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Behavior & Personality</CardTitle>
            <CardDescription>Configure how your agent interacts with users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="personality">Personality</Label>
                <Select defaultValue="friendly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="empathetic">Empathetic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="response-style">Response Style</Label>
                <Select defaultValue="concise">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concise">Concise</SelectItem>
                    <SelectItem value="detailed">Detailed</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                    <SelectItem value="step-by-step">Step-by-step</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="second-visits">On Second Visits</Label>
                <Select defaultValue="remember-context">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remember-context">Remember Context</SelectItem>
                    <SelectItem value="fresh-start">Fresh Start</SelectItem>
                    <SelectItem value="acknowledge-return">Acknowledge Return</SelectItem>
                    <SelectItem value="personalized-greeting">Personalized Greeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Configure default messages for your agent</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="welcome-message">Welcome Message</Label>
              <Textarea
                id="welcome-message"
                placeholder="Enter the welcome message users see when they first interact with your agent..."
                className="min-h-[80px]"
              />
            </div>
            <div>
              <Label htmlFor="fallback-message">General Fallback Message</Label>
              <Textarea
                id="fallback-message"
                placeholder="Enter the message shown when the agent can't understand or help with a request..."
                className="min-h-[80px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
