import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Send, Play, RotateCcw, Download } from "lucide-react";

interface AgentTestPageProps {
  agentId: string;
}

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: Date;
}

export default function AgentTestPage({ agentId }: AgentTestPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "agent",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "agent",
        text: "Thank you for your message. I'm processing your request and will respond shortly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        sender: "agent",
        text: "Hello! I'm your AI assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-card-foreground">Test Agent</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={clearChat}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear Chat
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Chat
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            Start Test
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">
                Chat Interface
              </h3>
              <p className="text-sm text-muted-foreground">
                Test your agent's responses in real-time
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-card-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Configuration */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">
                Test Settings
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="test-scenario">Test Scenario</Label>
                <Textarea
                  id="test-scenario"
                  placeholder="Describe the test scenario..."
                  className="min-h-20"
                  defaultValue="Test customer support interactions with common queries about orders, refunds, and product information."
                />
              </div>

              <div>
                <Label htmlFor="user-persona">User Persona</Label>
                <Textarea
                  id="user-persona"
                  placeholder="Define the user persona..."
                  className="min-h-20"
                  defaultValue="A frustrated customer who has been waiting for their order for over a week and wants to know the status."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">
                Test Results
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Response Time
                </span>
                <span className="text-sm font-medium">1.2s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Accuracy</span>
                <span className="text-sm font-medium text-green-600">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Satisfaction
                </span>
                <span className="text-sm font-medium text-blue-600">4.2/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Messages</span>
                <span className="text-sm font-medium">{messages.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">
                Quick Tests
              </h3>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-left"
              >
                "I need help with my order"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left"
              >
                "What are your business hours?"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left"
              >
                "I want to cancel my subscription"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left"
              >
                "How do I reset my password?"
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
