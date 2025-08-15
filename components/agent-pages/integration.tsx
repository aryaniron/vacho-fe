"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  MessageSquare,
  Monitor,
  ExternalLink,
  Copy,
  Eye,
  Maximize,
  Square,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

interface AgentIntegrationPageProps {
  agentId: string;
}

export default function AgentIntegrationPage({
  agentId,
}: AgentIntegrationPageProps) {
  const [embedType, setEmbedType] = useState("widget");
  const [widgetAlignment, setWidgetAlignment] = useState("bottom-right");
  const [widgetSize, setWidgetSize] = useState("medium");
  const [fullpageMaxWidth, setFullpageMaxWidth] = useState("800px");
  const [fullpageBgColor, setFullpageBgColor] = useState("#f0f0f0");
  const [embedWidth, setEmbedWidth] = useState("400");
  const [embedHeight, setEmbedHeight] = useState("600");
  const [proactiveMessage, setProactiveMessage] = useState("Hello! How can I help you today?");
  const [proactiveDelay, setProactiveDelay] = useState("5");

  const generateEmbedCode = () => {
    const baseUrl = `https://chat.vacho.com/embed/${agentId}`;
    
    switch (embedType) {
      case "widget":
        return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${baseUrl}/widget.js';
    script.setAttribute('data-agent-id', '${agentId}');
    script.setAttribute('data-alignment', '${widgetAlignment}');
    script.setAttribute('data-size', '${widgetSize}');
    document.head.appendChild(script);
  })();
</script>`;

      case "fullpage":
        return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${baseUrl}/fullpage.js';
    script.setAttribute('data-agent-id', '${agentId}');
    script.setAttribute('data-max-width', '${fullpageMaxWidth}');
    script.setAttribute('data-bg-color', '${fullpageBgColor}');
    document.head.appendChild(script);
  })();
</script>`;

      case "embed":
        return `<iframe 
  src="${baseUrl}/iframe" 
  width="${embedWidth}" 
  height="${embedHeight}"
  frameborder="0"
  title="Vacho Agent">
</iframe>`;

      case "popup":
        return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${baseUrl}/popup.js';
    script.setAttribute('data-agent-id', '${agentId}');
    script.setAttribute('data-proactive-message', '${proactiveMessage}');
    script.setAttribute('data-proactive-delay', '${proactiveDelay}');
    document.head.appendChild(script);
  })();
</script>`;

      default:
        return "";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmbedCode());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Web Integration</h2>
          <p className="text-muted-foreground mt-1">
            Embed your agent on any website with customizable options
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button>Save Configuration</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Embed Type Selection */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Embed Type
            </CardTitle>
            <CardDescription>
              Choose how you want to integrate your agent into your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={embedType} onValueChange={setEmbedType}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="widget" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Widget
                </TabsTrigger>
                <TabsTrigger value="fullpage" className="flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Fullpage
                </TabsTrigger>
                <TabsTrigger value="embed" className="flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Embed
                </TabsTrigger>
                <TabsTrigger value="popup" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Popup
                </TabsTrigger>
              </TabsList>

              <TabsContent value="widget" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="widget-alignment">Alignment</Label>
                    <Select value={widgetAlignment} onValueChange={setWidgetAlignment}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-right">Bottom Right</SelectItem>
                        <SelectItem value="bottom-left">Bottom Left</SelectItem>
                        <SelectItem value="top-right">Top Right</SelectItem>
                        <SelectItem value="top-left">Top Left</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="widget-size">Size</Label>
                    <Select value={widgetSize} onValueChange={setWidgetSize}>
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
                </div>
                <p className="text-sm text-muted-foreground">
                  The widget will appear as a floating chat button that opens a chat window when clicked.
                </p>
              </TabsContent>

              <TabsContent value="fullpage" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullpage-max-width">Max Width</Label>
                    <Input
                      id="fullpage-max-width"
                      value={fullpageMaxWidth}
                      onChange={(e) => setFullpageMaxWidth(e.target.value)}
                      placeholder="800px"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullpage-bg-color">Background Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="fullpage-bg-color"
                        value={fullpageBgColor}
                        onChange={(e) => setFullpageBgColor(e.target.value)}
                        placeholder="#f0f0f0"
                      />
                      <input
                        type="color"
                        value={fullpageBgColor}
                        onChange={(e) => setFullpageBgColor(e.target.value)}
                        className="w-10 h-9 rounded border border-input"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The agent will take up the entire page content area with the specified constraints.
                </p>
              </TabsContent>

              <TabsContent value="embed" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="embed-width">Width (px)</Label>
                    <Input
                      id="embed-width"
                      value={embedWidth}
                      onChange={(e) => setEmbedWidth(e.target.value)}
                      placeholder="400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="embed-height">Height (px)</Label>
                    <Input
                      id="embed-height"
                      value={embedHeight}
                      onChange={(e) => setEmbedHeight(e.target.value)}
                      placeholder="600"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The agent will be embedded as an iframe with the specified dimensions.
                </p>
              </TabsContent>

              <TabsContent value="popup" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="proactive-message">Proactive Message</Label>
                    <Textarea
                      id="proactive-message"
                      value={proactiveMessage}
                      onChange={(e) => setProactiveMessage(e.target.value)}
                      placeholder="Hello! How can I help you today?"
                      className="min-h-[60px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="proactive-delay">Show After (seconds)</Label>
                    <Input
                      id="proactive-delay"
                      value={proactiveDelay}
                      onChange={(e) => setProactiveDelay(e.target.value)}
                      placeholder="5"
                      type="number"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  A popup will appear automatically after the specified delay with your proactive message.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Generated Code */}
        <Card>
          <CardHeader>
            <CardTitle>Embed Code</CardTitle>
            <CardDescription>
              Copy this code and paste it into your website's HTML
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Textarea
                value={generateEmbedCode()}
                readOnly
                className="min-h-[200px] font-mono text-sm"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-2 right-2"
                onClick={copyToClipboard}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview & Testing */}
        <Card>
          <CardHeader>
            <CardTitle>Preview & Testing</CardTitle>
            <CardDescription>
              Test your integration before deploying
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Preview will show here based on your selected embed type
                </p>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Open Preview
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Test in New Window
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Test your agent integration in a separate window
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
