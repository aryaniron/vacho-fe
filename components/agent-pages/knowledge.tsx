"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  Link,
  Database,
  Trash2,
  Download,
  Plus,
  HelpCircle,
  FileSpreadsheet,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

interface AgentKnowledgePageProps {
  agentId: string;
}

const premadeInstructions = [
  {
    id: "no-data-divulge",
    title: "No Data Divulge",

    description: "Do not mention or imply access to knowledge sources",
    content:
      "**No Data Divulge**: Do not mention or imply to users that you have access to a knowledge source.",
  },
  {
    id: "maintaining-focus",
    title: "Maintaining Focus",
    description: "Keep conversations on relevant topics",
    content:
      "**Maintaining Focus**: Should users attempt to discuss unrelated topics, politely steer the conversation back to relevant customer support issues.",
  },
  {
    id: "exclusive-reliance",
    title: "Exclusive Reliance on Retrieved Data",
    description: "Only use information from knowledge base",
    content:
      "**Exclusive Reliance on Retrieved Data**: Only provide answers that can be directly supported by the retrieved information. Use the fallback response if the data doesn't cover the inquiry.",
  },
  {
    id: "restrictive-role",
    title: "Restrictive Role Focus",
    description: "Avoid answering off-topic questions",
    content:
      "**Restrictive Role Focus**: Avoid answering questions unrelated to your role or the retrieved data, including coding, personal advice, and other non-relevant activities.",
  },
  {
    id: "language-adaptability",
    title: "Language Adaptability",
    description: "Respond in user's language",
    content:
      "**Language Adaptability**: Ensure responses are in the same language as the user's messages, regardless of the original language of the retrieved data.",
  },
  {
    id: "fallback-response",
    title: "Fallback Response",
    description: "Standard response when unable to help",
    content:
      "**Fallback Response**: If unable to answer, respond with: \"Hmm, I'm not sure how to respond to that. Let me know if I can help with something else!\" Ensure that this response is always in the same language as the user's messages.",
  },
];

export default function AgentKnowledgePage({
  agentId,
}: AgentKnowledgePageProps) {
  const [selectedInstructions, setSelectedInstructions] = useState<string[]>(
    []
  );
  const [customInstructions, setCustomInstructions] = useState("");

  const handleInstructionToggle = (instructionId: string) => {
    setSelectedInstructions((prev) =>
      prev.includes(instructionId)
        ? prev.filter((id) => id !== instructionId)
        : [...prev, instructionId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Knowledge Base</h2>
        <p className="text-muted-foreground mt-1">
          Configure your agent's knowledge sources and instructions
        </p>
      </div>

      <Tabs defaultValue="sources" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-6 mt-6">
          {/* Text Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Text
              </CardTitle>
              <CardDescription>
                Add custom text information for your agent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-title">Title</Label>
                <Input id="text-title" placeholder="Enter text title..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="text-content">Content</Label>
                <Textarea
                  id="text-content"
                  placeholder="Enter text content..."
                  className="min-h-[100px]"
                />
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Text
              </Button>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Files
              </CardTitle>
              <CardDescription>
                Upload documents (DOC, PDF, CSV, XLSX) for your agent to
                reference
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Supported formats: DOC, DOCX, PDF, CSV, XLSX
                </p>
                <Button variant="outline">Choose Files</Button>
              </div>

              {/* Previously Uploaded Files */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">
                  Previously Uploaded Files
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Company_Policy.pdf</p>
                        <p className="text-sm text-muted-foreground">
                          Uploaded 2 days ago
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="w-5 h-5" />
                Links
              </CardTitle>
              <CardDescription>
                Add website links and document URLs as knowledge sources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter website URL or document link..."
                  className="flex-1"
                />
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                FAQs
              </CardTitle>
              <CardDescription>
                Manually add FAQs or import from Excel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Manual FAQ Entry */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="faq-question">Question</Label>
                  <Input
                    id="faq-question"
                    placeholder="Enter frequently asked question..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faq-answer">Answer</Label>
                  <Textarea
                    id="faq-answer"
                    placeholder="Enter the answer..."
                    className="min-h-[80px]"
                  />
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add FAQ
                </Button>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Excel Template
                  </Button>
                  <Button variant="outline">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    Import from Excel
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Download the template to see the required format for bulk FAQ
                  import
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Current Sources List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Current Sources
              </CardTitle>
              <CardDescription>
                Manage your agent's knowledge sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Company Guidelines</p>
                      <p className="text-sm text-muted-foreground">
                        Text source
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Link className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Product Documentation</p>
                      <p className="text-sm text-muted-foreground">
                        https://docs.example.com
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Common FAQs</p>
                      <p className="text-sm text-muted-foreground">
                        15 questions
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructions" className="space-y-6 mt-6">
          {/* Premade Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Premade Instructions</CardTitle>
              <CardDescription>
                Select from common instruction templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {premadeInstructions.map((instruction) => (
                <div
                  key={instruction.id}
                  className="flex items-start space-x-3 p-4 border border-border rounded-lg"
                >
                  <Checkbox
                    id={instruction.id}
                    checked={selectedInstructions.includes(instruction.id)}
                    onCheckedChange={() =>
                      handleInstructionToggle(instruction.id)
                    }
                  />
                  <div className="flex-1">
                    <Label
                      htmlFor={instruction.id}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {instruction.title}
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      {instruction.description}
                    </p>
                    <div className="mt-2 p-3 bg-muted rounded-md">
                      <p className="text-xs text-muted-foreground">
                        {instruction.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Instructions</CardTitle>
              <CardDescription>
                Add your own specific instructions for the agent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="custom-instructions">Instructions</Label>
                <Textarea
                  id="custom-instructions"
                  placeholder="Enter custom instructions for your agent..."
                  className="min-h-[150px]"
                  value={customInstructions}
                  onChange={(e) => setCustomInstructions(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Preview Selected Instructions */}
          {selectedInstructions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Preview: Selected Instructions</CardTitle>
                <CardDescription>
                  These instructions will be applied to your agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">### Constraints</h4>
                  {selectedInstructions.map((id) => {
                    const instruction = premadeInstructions.find(
                      (i) => i.id === id
                    );
                    return instruction ? (
                      <p key={id} className="text-sm text-muted-foreground">
                        - {instruction.content}
                      </p>
                    ) : null;
                  })}

                  {customInstructions && (
                    <>
                      <h4 className="font-medium mt-4">
                        ### Custom Instructions
                      </h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {customInstructions}
                      </p>
                    </>
                  )}

                  <div className="mt-4">
                    <h4 className="font-medium">### Steps</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        1. Retrieve and analyze the relevant data to formulate
                        an informed response.
                      </p>
                      <p>
                        2. Answer user queries based strictly on the retrieved
                        information.
                      </p>
                      <p>
                        3. Redirect any off-topic inquiries back to relevant
                        support topics.
                      </p>
                      <p>
                        4. Apply fallback responses as necessary if the question
                        cannot be answered with the available data.
                      </p>
                      <p>
                        5. Maintain language consistency with the user's
                        messages.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end">
        <div className="flex space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
