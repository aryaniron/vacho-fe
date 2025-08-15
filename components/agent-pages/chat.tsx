import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  User,
  Bot,
  AlertCircle,
  MessageCircle,
  Filter,
} from "lucide-react";

// Mock data for agent-specific conversations
const agentConversations = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "SJ",
      status: "online",
    },
    lastMessage: "I need help with my order #12345",
    timestamp: "2 min ago",
    unreadCount: 2,
    isEscalated: true,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hi, I have an issue with my order",
        timestamp: "10:30 AM",
      },
      {
        id: 2,
        sender: "agent",
        text: "Hello! I'm here to help. What's your order number?",
        timestamp: "10:31 AM",
      },
      { id: 3, sender: "user", text: "It's #12345", timestamp: "10:32 AM" },
      {
        id: 4,
        sender: "agent",
        text: "Let me check that for you...",
        timestamp: "10:33 AM",
      },
      {
        id: 5,
        sender: "user",
        text: "I need help with my order #12345",
        timestamp: "10:35 AM",
      },
      {
        id: 6,
        sender: "system",
        text: "Conversation escalated to human support",
        timestamp: "10:36 AM",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      email: "mike.chen@example.com",
      avatar: "MC",
      status: "offline",
    },
    lastMessage: "Can you help me write a blog post?",
    timestamp: "1 hour ago",
    unreadCount: 0,
    isEscalated: false,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Can you help me write a blog post?",
        timestamp: "9:15 AM",
      },
      {
        id: 2,
        sender: "agent",
        text: "Absolutely! What topic would you like to write about?",
        timestamp: "9:16 AM",
      },
      {
        id: 3,
        sender: "user",
        text: "I want to write about AI in healthcare",
        timestamp: "9:17 AM",
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Emily Davis",
      email: "emily.d@example.com",
      avatar: "ED",
      status: "online",
    },
    lastMessage: "The chart isn't showing correctly",
    timestamp: "3 hours ago",
    unreadCount: 1,
    isEscalated: true,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "The chart isn't showing correctly",
        timestamp: "7:45 AM",
      },
      {
        id: 2,
        sender: "agent",
        text: "I can help you fix that. Can you share the data?",
        timestamp: "7:46 AM",
      },
      {
        id: 3,
        sender: "system",
        text: "Conversation escalated to human support",
        timestamp: "7:50 AM",
      },
    ],
  },
];

interface AgentChatPageProps {
  agentId: string;
}

export default function AgentChatPage({ agentId }: AgentChatPageProps) {
  const [selectedConversation, setSelectedConversation] = useState(
    agentConversations[0]
  );
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = agentConversations.filter(
    (conv) =>
      conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex">
      {/* Conversation List */}
      <div className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">
            Agent #{agentId} Conversations
          </h2>
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Filter className="w-3 h-3 mr-1" />
              All
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Escalated
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                selectedConversation?.id === conversation.id ? "bg-muted" : ""
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage />
                    <AvatarFallback>{conversation.user.avatar}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                      conversation.user.status === "online"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-card-foreground truncate">
                      {conversation.user.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      {conversation.isEscalated && (
                        <Badge variant="destructive" className="text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Escalated
                        </Badge>
                      )}
                    </div>
                    {conversation.unreadCount > 0 && (
                      <Badge className="bg-blue-500 text-white text-xs">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage />
                  <AvatarFallback>
                    {selectedConversation.user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-card-foreground">
                    {selectedConversation.user.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Agent #{agentId} - Customer Support
                  </p>
                </div>
                {selectedConversation.isEscalated && (
                  <Badge variant="destructive">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Escalated
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : msg.sender === "system"
                        ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                        : "bg-muted text-card-foreground"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {msg.sender === "user" ? (
                        <User className="w-3 h-3" />
                      ) : msg.sender === "system" ? (
                        <AlertCircle className="w-3 h-3" />
                      ) : (
                        <Bot className="w-3 h-3" />
                      )}
                      <span className="text-xs opacity-70">
                        {msg.sender === "user"
                          ? selectedConversation.user.name
                          : msg.sender === "system"
                          ? "System"
                          : `Agent #${agentId}`}
                      </span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!message.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                Select a conversation
              </h3>
              <p className="text-muted-foreground">
                Choose a conversation from the list to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
