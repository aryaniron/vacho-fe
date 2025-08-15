import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AgentInstructionsPageProps {
  agentId: string;
}

export default function AgentInstructionsPage({
  agentId,
}: AgentInstructionsPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-card-foreground">
          Instructions
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            System Instructions
          </h3>
          <p className="text-sm text-muted-foreground">
            Define the core behavior and capabilities of your agent
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="system-prompt">System Prompt</Label>
            <Textarea
              id="system-prompt"
              placeholder="You are a helpful customer support agent..."
              className="min-h-32"
              defaultValue="You are a helpful customer support agent for our company. Your role is to assist customers with their inquiries, resolve issues, and provide accurate information about our products and services. Always be polite, professional, and empathetic in your responses."
            />
          </div>

          <div>
            <Label htmlFor="behavior-rules">Behavior Rules</Label>
            <Textarea
              id="behavior-rules"
              placeholder="List specific rules for the agent's behavior..."
              className="min-h-24"
              defaultValue="1. Always greet customers warmly\n2. Ask clarifying questions when needed\n3. Provide step-by-step solutions\n4. Escalate complex issues to human support\n5. Never share sensitive information"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Context & Knowledge
          </h3>
          <p className="text-sm text-muted-foreground">
            Provide additional context and knowledge for the agent
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="company-info">Company Information</Label>
            <Textarea
              id="company-info"
              placeholder="Information about your company..."
              className="min-h-24"
              defaultValue="Our company specializes in AI-powered solutions for businesses. We offer customer support automation, data analysis tools, and workflow optimization services."
            />
          </div>

          <div>
            <Label htmlFor="product-knowledge">Product Knowledge</Label>
            <Textarea
              id="product-knowledge"
              placeholder="Information about your products/services..."
              className="min-h-24"
              defaultValue="Our main products include:\n- AI Chatbot Platform\n- Data Analytics Suite\n- Workflow Automation Tools\n- Customer Support Solutions"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
