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
import {
  MessageCircle,
  Mail,
  Phone,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="space-y-6">
      {/* Quick Help */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-sm text-gray-600">
              Browse our comprehensive guides and tutorials
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Video className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Video Tutorials
            </h3>
            <p className="text-sm text-gray-600">
              Watch step-by-step video guides
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600">
              Get instant help from our support team
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">
            Contact Support
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Issue</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Priority
              </label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Describe your issue or question..."
            />
          </div>
          <Button className="w-full md:w-auto">Send Message</Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Email Support</h4>
            <p className="text-sm text-gray-600">support@agentforge.com</p>
            <p className="text-xs text-gray-500 mt-1">
              Response within 24 hours
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Phone Support</h4>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Knowledge Base</h4>
            <p className="text-sm text-gray-600">help.agentforge.com</p>
            <p className="text-xs text-gray-500 mt-1">Self-service resources</p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">
            Frequently Asked Questions
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              How do I create a new AI agent?
            </h4>
            <p className="text-sm text-gray-600">
              Click the "Create New Agent" button on the home page or in the
              agents section. Follow the step-by-step wizard to configure your
              agent's capabilities and behavior.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Can I customize my agent's responses?
            </h4>
            <p className="text-sm text-gray-600">
              Yes! You can customize your agent's personality, tone, and
              response style through the agent settings panel. You can also
              provide custom training data.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              What's the difference between Active and Draft agents?
            </h4>
            <p className="text-sm text-gray-600">
              Active agents are currently running and processing tasks. Draft
              agents are saved configurations that haven't been activated yet.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">
              How do I export my agent data?
            </h4>
            <p className="text-sm text-gray-600">
              Go to the agent's settings page and look for the "Export Data"
              option. You can export conversation history, training data, and
              configuration settings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
