import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { FeatureCard } from "@/components/ui/feature-card";
import { EscrowFlowDiagram } from "@/components/diagrams/EscrowFlowDiagram";
import {
  Building2,
  Landmark,
  BarChart3,
  Layers,
  Shield,
  Code2,
  ArrowRight,
  Play,
  Star,
  Calculator,
  CheckCircle,
  Clock,
} from "lucide-react";

const audiences = [
  {
    icon: Landmark,
    title: "Banks & NBFCs",
    description: "Launch escrow products without building infrastructure from scratch.",
  },
  {
    icon: Building2,
    title: "Construction Lenders",
    description: "Automate draw schedules, inspections, and retainage releases.",
  },
  {
    icon: BarChart3,
    title: "Trade Finance Desks",
    description: "Secure invoice and LC-backed flows with policy-driven releases.",
  },
  {
    icon: Layers,
    title: "Fintech Platforms",
    description: "Embed escrow into your product with our multi-tenant API.",
  },
];

const features = [
  {
    icon: Code2,
    title: "API-First",
    description: "RESTful APIs with TypeScript SDK. Get started in 10 minutes.",
  },
  {
    icon: Shield,
    title: "Policy Engine",
    description: "Region-specific rules for US, EU/UK, Singapore, and UAE compliance.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant",
    description: "Isolated institutions, templates, and positions by design.",
  },
];

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BadgePill variant="primary" className="mb-6">
              Institutional Escrow Infrastructure
            </BadgePill>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Escrow that keeps deals moving
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              API-first escrow infrastructure for construction draws, trade finance, and
              complex multi-party settlements. Built for institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/architecture">
                  <Play className="mr-2 h-4 w-4" />
                  Try Live Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/roi-calculator">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate ROI
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10 border-y border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <BadgePill variant="primary" className="mb-4">
                <Play className="w-3 h-3 mr-1" />
                Try it now
              </BadgePill>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                See it in action. No setup required.
              </h2>
              <p className="text-muted-foreground mb-6">
                Create your first escrow position right now. Configure policies, set up workflows,
                and watch the compliance engine work — all in your browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/architecture">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interactive Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Sandbox Environment
                </Button>
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-sm">Position created: pos_3fn8a2b9c1d0e7f5</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-sm">Policy rules applied: 4 active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-warning animate-pulse" />
                  </div>
                  <span className="font-mono text-sm">Status: Pending compliance review</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Demo completed by 1,247+ financial professionals this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Diagram Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lifecycle-driven escrow management
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every position flows through defined states with policy-enforced transitions.
            </p>
          </div>
          <EscrowFlowDiagram />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Who we serve
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Purpose-built for institutions that need reliable, compliant escrow infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <FeatureCard
                key={audience.title}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
              />
            ))}
          </div>
        </div>
      </section>

  
      {/* Platform Overview */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BadgePill variant="muted" className="mb-4">
                Platform
              </BadgePill>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Infrastructure, not marketplace
              </h2>
              <p className="text-muted-foreground mb-6">
                EscrowGrid provides the rails for escrow operations. You maintain 
                relationships with your clients. We handle the complexity of state 
                management, audit trails, and policy enforcement.
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-8" asChild>
                <Link to="/platform">
                  Explore the platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`// Open a new escrow position
const position = await escrowgrid.positions.create({
  institutionId: "inst_abc123",
  templateId: "CONSTR_ESCROW",
  assetId: "asset_project_456",
  amount: 1500000,
  currency: "USD",
  metadata: {
    projectName: "Tower Heights",
    contractor: "BuildCo Inc"
  }
});

// Position created in PENDING state
console.log(position.state); // "PENDING"`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to modernize your escrow operations?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule a 30-minute demo to see how EscrowGrid can power your next escrow product.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
