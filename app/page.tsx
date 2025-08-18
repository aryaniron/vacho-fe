import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Brain,
  Sparkles,
  Zap,
  Upload,
  Settings,
  Share2,
  Image,
  FileText,
  Palette,
  Target,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Layers,
  Globe,
  Shield,
  Play,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import knowledgeIntegration from "@/assets/knowledge-integration.jpg";
import conversationFlow from "@/assets/conversation-flow.jpg";
import Link from "next/link";
import logo from "@/public/logos/black.png";

const Landing = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div
          className="absolute w-96 h-96 rounded-full bg-primary/10 animate-pulse blur-3xl"
          style={
            {
              // left: `${mousePosition.x * 0.02}px`,
              // top: `${mousePosition.y * 0.02}px`,
              // transform: "translate(-50%, -50%)",
            }
          }
        />
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-primary/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 relative z-50 sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                <img
                  src={logo.src}
                  className="w-5 h-5 text-primary-foreground group-hover:animate-pulse"
                />
                {/* <MessageCircle className="w-5 h-5 text-primary-foreground group-hover:animate-pulse" /> */}
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Vaacho
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button
                  variant="ghost"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 group">
                  Get Started{" "}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg.src}
            alt="AI Interface Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Now in Beta - Build Your AI Agent Today!
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent animate-fade-in leading-tight">
              AI That Speaks
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Your Language
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Stop settling for generic chatbots. Create AI agents that
              understand your business, speak your brand voice, and deliver
              experiences your customers will love.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href={"/signup"}>
                <Button
                  size="lg"
                  className="gap-2 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl bg-gradient-to-r from-primary to-primary/90 group text-lg px-8 py-4 rounded-full"
                >
                  Start Building for Free{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 group text-lg px-8 py-4 rounded-full"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Trusted by 1000+ creators</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Everything You Need to Build Amazing AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From knowledge management to conversation design, we've built the
              complete toolkit for creating AI agents that truly understand your
              business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Smart Knowledge
              </h3>
              <p className="text-muted-foreground">
                Train your AI with PDFs, URLs, databases, and live APIs for
                contextual responses.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Visual Builder
              </h3>
              <p className="text-muted-foreground">
                Design conversations with our intuitive drag-and-drop flow
                editor.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Rich Media
              </h3>
              <p className="text-muted-foreground">
                Add images, videos, forms, and interactive elements to
                conversations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Deploy Anywhere
              </h3>
              <p className="text-muted-foreground">
                Integrate with websites, apps, or use our embeddable widgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Showcase */}
      <section className="py-24 px-6 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <img
                src={dashboardPreview.src}
                alt="Vaacho Dashboard Preview"
                className="rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Visual Flow Builder
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Design Conversations, Not Just Responses
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop thinking in Q&A format. Start building conversation
                experiences that guide users through complex journeys with
                interactive elements, smart branching, and rich media.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Drag & Drop Interface
                    </h4>
                    <p className="text-muted-foreground">
                      Build complex flows visually without any coding required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Interactive Elements</h4>
                    <p className="text-muted-foreground">
                      Add buttons, forms, carousels, and media to create
                      engaging experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Smart Branching</h4>
                    <p className="text-muted-foreground">
                      Create dynamic paths based on user input and behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Knowledge Integration
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Your Knowledge, Powered by AI
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Upload documents, connect APIs, or integrate databases. Our AI
                doesn't just store your content—it understands context,
                relationships, and delivers precise answers every time.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border/50">
                  <FileText className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Document Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    PDFs, Word docs, spreadsheets, and more
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border/50">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Live Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time API integrations and databases
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={knowledgeIntegration.src}
                alt="Knowledge Integration Visualization"
                className="rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Features for Power Users
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Go beyond basic chatbots with enterprise-grade features that scale
              with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Smart Triggers
                </CardTitle>
                <CardDescription className="text-base">
                  Auto-detect user intents and trigger relevant flows. Our AI
                  learns from conversations to suggest new triggers
                  automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Custom Personalities
                </CardTitle>
                <CardDescription className="text-base">
                  Define tone, style, and behavior patterns. Your AI can be
                  professional, friendly, technical, or match any brand voice.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Analytics & Insights
                </CardTitle>
                <CardDescription className="text-base">
                  Track performance, user satisfaction, and conversation flows.
                  Optimize your AI based on real usage data.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-base">
                  SOC 2 compliant with end-to-end encryption. Your data stays
                  secure and private at all times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Multi-Platform
                </CardTitle>
                <CardDescription className="text-base">
                  Deploy on websites, mobile apps, Slack, Discord, or use our
                  API to integrate anywhere.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Lightning Fast
                </CardTitle>
                <CardDescription className="text-base">
                  Sub-second response times with global CDN. Your users get
                  instant answers, anywhere in the world.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See how teams are transforming their customer interactions with
              Vaacho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-gradient-to-br from-card to-card/80 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "Vaacho helped us create an AI that actually understands our
                product documentation. Customer support tickets dropped by 60%!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">SJ</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Product Manager, TechCorp
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 bg-gradient-to-br from-card to-card/80 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "The visual flow builder is incredible. We built complex
                conversation paths in hours, not weeks. Game changer!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">MC</span>
                </div>
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Founder, StartupAI
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 bg-gradient-to-br from-card to-card/80 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "Finally, an AI platform that doesn't feel like a black box. We
                have complete control over our agent's personality and
                responses."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">AL</span>
                </div>
                <div>
                  <p className="font-semibold">Alex Liu</p>
                  <p className="text-sm text-muted-foreground">
                    CTO, InnovateLabs
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join thousands of creators building smarter AI experiences. No
              credit card required to get started.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Free Forever</h3>
                <p className="text-muted-foreground">
                  Perfect for trying out Vaacho
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Pro Features</h3>
                <p className="text-muted-foreground">
                  Advanced tools for growing teams
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground">
                  Custom solutions for large organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Build the Future of AI?
            </h2>
            <p className="text-2xl text-muted-foreground mb-12">
              Join the revolution. Create AI agents that understand, engage, and
              deliver results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="gap-2 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl bg-gradient-to-r from-primary to-primary/90 group text-xl px-12 py-6 rounded-full"
                >
                  Start Building for Free{" "}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="text-muted-foreground">
                ✨ No credit card • 5-minute setup • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Vaacho
              </span>
            </div>
            <p className="text-muted-foreground">
              &copy; 2025 Vaacho. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
