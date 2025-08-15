"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Palette,
  MessageSquare,
  Type,
  Image,
  Save,
  Eye,
  Bot,
  User,
  Send,
  RefreshCw,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface AgentDesignPageProps {
  agentId: string;
}

export default function AgentDesignPage({ agentId }: AgentDesignPageProps) {
  const [primaryColor, setPrimaryColor] = useState("#3b82f6");
  const [secondaryColor, setSecondaryColor] = useState("#6b7280");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("inter");
  const [borderRadius, setBorderRadius] = useState("medium");
  const [showAvatar, setShowAvatar] = useState(true);
  const [showTimestamps, setShowTimestamps] = useState(false);
  const [botName, setBotName] = useState("Assistant");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Design</h2>
          <p className="text-muted-foreground mt-1">
            Customize your bot's appearance and chat interface
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Design
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Design Settings */}
        <div className="space-y-6">
          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appearance">Colors</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Color Scheme
                  </CardTitle>
                  <CardDescription>
                    Choose colors for your bot interface
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex gap-2 mt-1">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="w-10 h-9 rounded border border-input"
                        />
                        <Input
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          placeholder="#3b82f6"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Used for buttons and bot messages</p>
                    </div>
                    <div>
                      <Label htmlFor="secondary-color">Secondary Color</Label>
                      <div className="flex gap-2 mt-1">
                        <input
                          type="color"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="w-10 h-9 rounded border border-input"
                        />
                        <Input
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          placeholder="#6b7280"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Used for user messages</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="background-color">Background Color</Label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-10 h-9 rounded border border-input"
                      />
                      <Input
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        placeholder="#ffffff"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Chat window background color</p>
                  </div>

                  <div>
                    <Label htmlFor="theme-preset">Theme Preset</Label>
                    <Select defaultValue="default">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default Blue</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly Green</SelectItem>
                        <SelectItem value="modern">Modern Purple</SelectItem>
                        <SelectItem value="minimal">Minimal Gray</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Message Bubbles
                  </CardTitle>
                  <CardDescription>
                    Customize how messages appear in the chat
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="border-radius">Message Bubble Style</Label>
                    <Select value={borderRadius} onValueChange={setBorderRadius}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Square (0px)</SelectItem>
                        <SelectItem value="small">Slightly Rounded (4px)</SelectItem>
                        <SelectItem value="medium">Rounded (8px)</SelectItem>
                        <SelectItem value="large">Very Rounded (16px)</SelectItem>
                        <SelectItem value="full">Pill Shape (999px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-avatar">Show Bot Avatar</Label>
                      <p className="text-xs text-muted-foreground">Display avatar next to bot messages</p>
                    </div>
                    <Switch
                      id="show-avatar"
                      checked={showAvatar}
                      onCheckedChange={setShowAvatar}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-timestamps">Show Timestamps</Label>
                      <p className="text-xs text-muted-foreground">Display message timestamps</p>
                    </div>
                    <Switch
                      id="show-timestamps"
                      checked={showTimestamps}
                      onCheckedChange={setShowTimestamps}
                    />
                  </div>

                  <div>
                    <Label htmlFor="bot-name">Bot Display Name</Label>
                    <Input
                      id="bot-name"
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      placeholder="Assistant"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Name shown above bot messages</p>
                  </div>

                  <div>
                    <Label htmlFor="message-spacing">Message Spacing</Label>
                    <Select defaultValue="comfortable">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="buttons" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Buttons & UI Elements
                  </CardTitle>
                  <CardDescription>
                    Customize buttons and interactive elements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="button-style">Button Style</Label>
                    <Select defaultValue="filled">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="filled">Filled</SelectItem>
                        <SelectItem value="outlined">Outlined</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="button-size">Button Size</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="send-button-text">Send Button Text</Label>
                    <Input
                      id="send-button-text"
                      defaultValue="Send"
                      placeholder="Send"
                    />
                  </div>

                  <div>
                    <Label htmlFor="placeholder-text">Input Placeholder</Label>
                    <Input
                      id="placeholder-text"
                      defaultValue="Type your message..."
                      placeholder="Type your message..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="quick-replies">Quick Reply Style</Label>
                    <Select defaultValue="chips">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chips">Chips</SelectItem>
                        <SelectItem value="buttons">Buttons</SelectItem>
                        <SelectItem value="list">List</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="typography" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="w-5 h-5" />
                    Typography & Text
                  </CardTitle>
                  <CardDescription>
                    Customize fonts and text appearance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="font-family">Font Family</Label>
                    <Select value={fontFamily} onValueChange={setFontFamily}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="open-sans">Open Sans</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="nunito">Nunito</SelectItem>
                        <SelectItem value="lato">Lato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="font-size">Font Size</Label>
                    <Select defaultValue="14">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12px - Small</SelectItem>
                        <SelectItem value="14">14px - Medium</SelectItem>
                        <SelectItem value="16">16px - Large</SelectItem>
                        <SelectItem value="18">18px - Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="line-height">Line Height</Label>
                    <Select defaultValue="1.5">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1.2">1.2 - Compact</SelectItem>
                        <SelectItem value="1.4">1.4 - Normal</SelectItem>
                        <SelectItem value="1.5">1.5 - Comfortable</SelectItem>
                        <SelectItem value="1.6">1.6 - Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="color"
                        defaultValue="#000000"
                        className="w-10 h-9 rounded border border-input"
                      />
                      <Input defaultValue="#000000" placeholder="#000000" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="link-color">Link Color</Label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="color"
                        value={primaryColor}
                        className="w-10 h-9 rounded border border-input"
                      />
                      <Input value={primaryColor} placeholder={primaryColor} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Live Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>
                See how your bot will look with the current settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="border rounded-lg overflow-hidden"
                style={{ backgroundColor: backgroundColor }}
              >
                {/* Chat Header */}
                <div className="bg-card border-b px-4 py-3 flex items-center gap-3">
                  {showAvatar && (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/agent-avatar.jpg" />
                      <AvatarFallback>
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h3 className="font-medium" style={{ fontFamily }}>{botName}</h3>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-80 overflow-y-auto">
                  {/* Bot Message */}
                  <div className="flex items-start gap-3">
                    {showAvatar && (
                      <Avatar className="w-6 h-6">
                        <AvatarFallback style={{ backgroundColor: primaryColor, color: 'white' }}>
                          <Bot className="w-3 h-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex-1">
                      <div 
                        className="inline-block px-3 py-2 text-white text-sm max-w-xs"
                        style={{ 
                          backgroundColor: primaryColor,
                          borderRadius: borderRadius === 'none' ? '0px' : 
                                        borderRadius === 'small' ? '4px' :
                                        borderRadius === 'medium' ? '8px' :
                                        borderRadius === 'large' ? '16px' : '999px',
                          fontFamily
                        }}
                      >
                        Hello! How can I help you today?
                      </div>
                      {showTimestamps && (
                        <p className="text-xs text-muted-foreground mt-1">2:34 PM</p>
                      )}
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="flex-1">
                      <div 
                        className="inline-block px-3 py-2 text-sm max-w-xs ml-auto"
                        style={{ 
                          backgroundColor: secondaryColor,
                          color: 'white',
                          borderRadius: borderRadius === 'none' ? '0px' : 
                                        borderRadius === 'small' ? '4px' :
                                        borderRadius === 'medium' ? '8px' :
                                        borderRadius === 'large' ? '16px' : '999px',
                          fontFamily
                        }}
                      >
                        I need help with my order
                      </div>
                      {showTimestamps && (
                        <p className="text-xs text-muted-foreground mt-1 text-right">2:35 PM</p>
                      )}
                    </div>
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>
                        <User className="w-3 h-3" />
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Bot Response */}
                  <div className="flex items-start gap-3">
                    {showAvatar && (
                      <Avatar className="w-6 h-6">
                        <AvatarFallback style={{ backgroundColor: primaryColor, color: 'white' }}>
                          <Bot className="w-3 h-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex-1">
                      <div 
                        className="inline-block px-3 py-2 text-white text-sm max-w-xs"
                        style={{ 
                          backgroundColor: primaryColor,
                          borderRadius: borderRadius === 'none' ? '0px' : 
                                        borderRadius === 'small' ? '4px' :
                                        borderRadius === 'medium' ? '8px' :
                                        borderRadius === 'large' ? '16px' : '999px',
                          fontFamily
                        }}
                      >
                        I'd be happy to help you with your order. Can you provide your order number?
                      </div>
                      {showTimestamps && (
                        <p className="text-xs text-muted-foreground mt-1">2:35 PM</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t px-4 py-3">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..." 
                      className="flex-1"
                      style={{ fontFamily }}
                    />
                    <Button 
                      style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Elements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                Brand Elements
              </CardTitle>
              <CardDescription>
                Upload custom images and branding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bot-avatar">Bot Avatar</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/agent-avatar.jpg" />
                    <AvatarFallback>
                      <Bot className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Upload New Avatar</Button>
                </div>
              </div>

              <div>
                <Label htmlFor="chat-header-logo">Header Logo (Optional)</Label>
                <div className="mt-2">
                  <Button variant="outline" className="w-full">
                    <Image className="w-4 h-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="watermark">Powered by Vacho</Label>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-muted-foreground">Show "Powered by Vacho" link</p>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
