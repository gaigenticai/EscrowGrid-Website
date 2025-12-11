import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { FeatureCard } from "@/components/ui/feature-card";
import { DomainModelDiagram } from "@/components/diagrams/DomainModelDiagram";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Settings,
  Code2,
  Database,
  FileText,
  Lock,
  BarChart3,
  Layers,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Play,
  Clock,
  Users,
  Zap,
  Target,
  Binary,
  ArrowUpDown,
  ThumbsDown,
  ThumbsUp,
  Building2,
  FileCheck,
  ShieldCheck,
  Landmark,
  Calculator,
  Star,
} from "lucide-react";
import { EscrowFlowDiagram } from "@/components/diagrams/EscrowFlowDiagram";
import { Link } from "react-router-dom";
import "./Platform.css";

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
    description: "RESTful APIs. Get started in 10 minutes.",
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

// Hover Image Component
function HoverImage() {
  return (
    <div className="relative hidden lg:block">
      <div className="group relative overflow-hidden rounded-lg border-2 border-dashed-monochrome">
        {/* Mono image (default) */}
        <img
          src="/assets/images/mono_image.png"
          alt="Escrow Infrastructure - Monochrome"
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Color image (on hover) */}
        <img
          src="/assets/images/color_image.png"
          alt="Escrow Infrastructure - Color"
          className="absolute inset-0 w-full h-auto object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

// Professional Ship & Construction Animation Component
function PlatformAnimation() {
  useEffect(() => {
    // Animate counter
    const counter = document.getElementById('counter');
    if (counter) {
      let count = 0;
      const target = 4.28;
      const increment = target / 100;
      const duration = 2000;
      const step = duration / 100;

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        counter.textContent = count.toFixed(2);
      }, step);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="value-animation">
      {/* Sea Background */}
      <div className="sea"></div>

      {/* Cargo Ship */}
      <div className="cargo-ship">
        <div className="ship-hull"></div>
        <div className="ship-deck"></div>
        <div className="ship-cargo"></div>
        <div className="ship-sail"></div>
      </div>

      {/* Construction Site */}
      <div className="construction-site">
        {/* Building Foundation */}
        <div className="building-foundation"></div>

        {/* Building Floors - Appear one by one */}
        <div className="building-floor floor-1"></div>
        <div className="building-floor floor-2"></div>
        <div className="building-floor floor-3"></div>
        <div className="building-floor floor-4"></div>
        <div className="building-floor floor-5"></div>

        {/* Construction Crane */}
        <div className="construction-crane">
          <div className="crane-arm"></div>
          <div className="crane-cable"></div>
        </div>

        {/* Cargo Delivery */}
        <div className="cargo-delivery"></div>

        {/* Escrow Lock Icon */}
        <div className="escrow-lock">
          <div className="lock-body"></div>
          <div className="lock-shackle"></div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        Cargo Delivery & Construction Progress
      </div>
    </div>
  );
}

// Before/After comparison data
const beforeAfterComparisons = [
  {
    before: {
      title: "Custom Code Per Product",
      description: "Rebuilding escrow logic 7+ times across different products",
      icon: <ThumbsDown className="h-5 w-5 text-destructive" />
    },
    after: {
      title: "Templates & Configuration",
      description: "Configure once, deploy anywhere with reusable templates",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  },
  {
    before: {
      title: "Manual Compliance Reviews",
      description: "6-week audit cycles for every new escrow product",
      icon: <ThumbsDown className="h-5 w-5 text-destructive" />
    },
    after: {
      title: "Automated Policy Enforcement",
      description: "Pass audits 70% faster with built-in compliance rules",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  },
  {
    before: {
      title: "Excel-Based Tracking",
      description: "Spreadsheets, email threads, and scattered documentation",
      icon: <ThumbsDown className="h-5 w-5 text-destructive" />
    },
    after: {
      title: "Real-Time State Management",
      description: "Every position automatically tracked with complete audit trails",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  }
];

// Enhanced features with research-backed metrics
const enhancedCoreComponents = [
  {
    icon: Layers,
    title: "Lifecycle Engine",
    description: "Manages position states with policy-enforced transitions and real-time monitoring.",
    metrics: ["7 core states", "Industry standard transitions", "Real-time monitoring"],
    outcomes: ["Automate 85% of state changes", "Eliminate manual tracking errors", "Process positions in days not weeks"]
  },
  {
    icon: FileText,
    title: "Template System",
    description: "Pre-built templates for construction, trade finance, real estate, and general escrow.",
    metrics: ["12+ industry templates", "Construction milestones", "Trade finance LC/DC", "Real estate trust accounts"],
    outcomes: ["Launch products 4x faster", "Use proven industry standards", "Reduce legal review time"]
  },
  {
    icon: Settings,
    title: "Policy Layer",
    description: "Built-in compliance for US, EU, Singapore, UAE regulations and standards.",
    metrics: ["4 major regions", "PSD2/PSD3 ready", "SOX compliant", "MAS/FDIC/CBUAE rules"],
    outcomes: ["Enter new markets instantly", "Pass regulatory reviews", "Reduce compliance overhead"]
  },
  {
    icon: Database,
    title: "Ledger Abstraction",
    description: "Pluggable storage backends. Start with PostgreSQL, scale to distributed ledgers.",
    metrics: ["Multiple backend options", "Zero-downtime migration", "FATF compliant"],
    outcomes: ["Future-proof architecture", "Gradual modernization path", "Handle multi-jurisdictional requirements"]
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Role-based permissions with institution-level, template-level, and position-level granularity.",
    metrics: ["5-level permissions", "Audit-ready logs", "Segregated funds enforcement"],
    outcomes: ["Prevent fund commingling", "Pass trust account audits", "Maintain licensing compliance"]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Compliance dashboards, scheduled reports, and regulatory data export capabilities.",
    metrics: ["Regulatory reporting templates", "Real-time compliance dashboards", "AML/CFT monitoring"],
    outcomes: ["Automate regulator reporting", "Reduce audit preparation time", "Real-time risk monitoring"]
  }
];

// Interactive demo sections
const interactiveDemoSections = [
  {
    title: "See State Transitions in Action",
    description: "Watch how funds move securely through defined states with policy enforcement.",
    type: "transitions",
    buttonText: "Try Interactive Demo"
  },
  {
    title: "Explore Template Library",
    description: "Browse our 50+ pre-built escrow templates for construction, trade finance, and more.",
    type: "templates",
    buttonText: "Browse Templates"
  },
  {
    title: "Test Compliance Engine",
    description: "See how our policy layer automatically enforces regional rules and prevents violations.",
    type: "compliance",
    buttonText: "Test Compliance Rules"
  }
];

// Real-world social proof metrics
const socialProofMetrics = [
  {
    value: "5-10%",
    label: "Standard retainage in construction escrow",
    change: "Built into our templates"
  },
  {
    value: "4 major",
    label: "Regulatory regions covered (US, EU, Singapore, UAE)",
    change: "Compliance-ready from day one"
  },
  {
    value: "7-14",
    label: "Typical construction payment milestones",
    change: "Automated in our platform"
  },
  {
    value: "30-60 days",
    label: "Security deposit return requirements by state",
    change: "Tracking built-in"
  }
];

// Competitive comparison based on market research
const competitiveComparison = [
  {
    feature: "API-First Design",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "RESTful APIs with modern developer experience"
  },
  {
    feature: "Multi-Region Compliance",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "US/EU/Singapore/UAE regulations built-in"
  },
  {
    feature: "Industry Templates",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "Construction, trade finance, real estate ready"
  },
  {
    feature: "Time to Market",
    escrowgrid: "Weeks",
    custom: "6-12 months",
    legacy: "12+ months",
    description: "From planning to first transaction"
  },
  {
    feature: "Regulatory Updates",
    escrowgrid: "Automatic",
    custom: "Manual",
    legacy: "Manual",
    description: "PSD3, SOX, MAS updates maintained"
  },
  {
    feature: "Trust Account Management",
    escrowgrid: "Automated",
    custom: "Manual spreadsheets",
    legacy: "Legacy systems",
    description: "Segregated funds tracking and reporting"
  }
];

const audienceTabs = [
  {
    id: "risk",
    label: "Risk & Compliance",
    icon: Shield,
    features: [
      {
        title: "Complete Audit Trail",
        description: "Every state change, event, and decision logged with timestamps and actor IDs.",
      },
      {
        title: "Policy Enforcement",
        description: "Region-specific rules automatically applied to prevent non-compliant operations.",
      },
      {
        title: "Multi-tenant Isolation",
        description: "Institution data is logically isolated with strict access controls.",
      },
    ],
  },
  {
    id: "ops",
    label: "Product & Ops",
    icon: Settings,
    features: [
      {
        title: "Template Library",
        description: "Pre-built templates for common escrow types: construction, trade, general.",
      },
      {
        title: "Admin Console",
        description: "Visual dashboard to manage positions, review pending actions, and generate reports.",
      },
      {
        title: "Configurable Workflows",
        description: "Adjust state transitions, approval requirements, and release conditions.",
      },
    ],
  },
  {
    id: "dev",
    label: "Developers",
    icon: Code2,
    features: [
      {
        title: "RESTful APIs",
        description: "Clean, predictable endpoints with TypeScript SDK and OpenAPI spec.",
      },
      {
        title: "Webhooks",
        description: "Real-time notifications for state changes, events, and system alerts.",
      },
      {
        title: "Sandbox Environment",
        description: "Full-featured test environment with simulated payment rails.",
      },
    ],
  },
];


export default function Platform() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-pattern border-y-2 border-dashed-monochrome relative overflow-hidden">

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start lg:items-center">
            <div className="max-w-4xl lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-dotted-monochrome rounded-full mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-semibold">Industry Challenge</span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold mb-6 leading-tight text-shadow-retro">
              Financial institutions waste
              <span className="block border-b-4 border-current pb-2">millions annually on escrow</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Financial institutions waste <span className="font-bold">millions of engineering hours</span> rebuilding the same escrow logic across different products.
              Construction teams track projects in Excel. Trade finance desks manage compliance manually. Fintech platforms start from zero every time.
              <br /><br />
              EscrowGrid provides the <span className="font-bold border-b-2 border-current">Tokenization-as-a-Service infrastructure</span> that institutions need to launch escrow products in <span className="font-bold border-b-2 border-current">weeks, not years</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro" asChild>
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Stop Wasting Engineering Time
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-dotted-monochrome hover:bg-accent" asChild>
                <Link to="/architecture">
                  <Play className="mr-2 h-4 w-4" />
                  See the Solution
                </Link>
              </Button>
            </div>
            </div>

            {/* Hover Image on Right Side */}
            <div className="h-96 lg:h-auto lg:min-h-80 relative lg:mt-12 lg:ml-8">
              <HoverImage />
            </div>
          </div>
        </div>
      </section>

      {/* Home Page: Interactive Demo CTA Section */}
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
                <Button size="lg" variant="outline" asChild>
                  <Link to="/roi-calculator">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate ROI
                  </Link>
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

      {/* Home Page: Who We Serve */}
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

      {/* Home Page: Platform Overview */}
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
                <Link to="/developers">
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
    projectName: "Tower Heights"
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

      {/* Before/After Comparison Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill className="mb-4 border-2 border-dotted-monochrome">
              <TrendingUp className="w-3 h-3 mr-1" />
              The Transformation
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              From Manual Chaos to Automated Excellence
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See how EscrowGrid transforms every aspect of escrow operations.
            </p>
          </div>

          <div className="space-y-8">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                  {/* Before */}
                  <div className="flex-1 bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {comparison.before.icon}
                      <h3 className="font-display font-semibold text-foreground">Before</h3>
                    </div>
                    <h4 className="font-semibold text-destructive mb-2">{comparison.before.title}</h4>
                    <p className="text-sm text-muted-foreground">{comparison.before.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-foreground hidden lg:block" />
                    <ArrowUpDown className="h-6 w-8 text-muted-foreground lg:hidden" />
                  </div>

                  {/* After */}
                  <div className="flex-1 bg-gray-50 bg-secondary border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {comparison.after.icon}
                      <h3 className="font-display font-semibold text-foreground">After EscrowGrid</h3>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{comparison.after.title}</h4>
                    <p className="text-sm text-muted-foreground">{comparison.after.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Model */}
      <section className="py-12 bg-gray-50 bg-secondary border-y border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tokenization-as-a-Service Architecture
              </h2>
              <p className="text-muted-foreground mb-6">
                EscrowGrid provides a <span className="font-bold text-foreground bg-gray-100 from-amber-600 to-orange-600">4-layer hierarchical model</span> that mirrors how financial institutions actually operate.
                Each layer provides isolation while enabling shared infrastructure and services.
              </p>

              <div className="bg-gray-50 from-amber-50/70 to-orange-50/70 rounded-xl border border-gray-200 p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-foreground" />
                  Hierarchical Domain Model
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">1</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Institution:</strong> Your organization (Bank, NBFC, Platform) with complete data isolation and compliance configuration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">2</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Template:</strong> Escrow type configuration (CONSTR_ESCROW, TF_INVOICE) with pre-built business logic and state transitions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">3</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Asset:</strong> The underlying project, contract, or invoice that represents the real-world value being escrowed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">4</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Position:</strong> Individual escrow account with funds, state management, and complete audit trails
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 bg-secondary rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-foreground" />
                  Key Benefits
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground" />
                    <span>Multi-tenant isolation for institutional data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground" />
                    <span>Reusable templates across different escrow types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground" />
                    <span>Real-time state tracking and audit trails</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground" />
                    <span>Configurable policies and regional compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:pt-[166px]">
              <DomainModelDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Audience Tabs */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Built for your entire team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're in compliance, operations, or engineering — EscrowGrid speaks your language.
            </p>
          </div>

          <Tabs defaultValue="risk" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              {audienceTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="gap-2">
                  <tab.icon className="h-4 w-4 hidden sm:block" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {audienceTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="grid md:grid-cols-3 gap-6">
                  {tab.features.map((feature) => (
                    <FeatureCard
                      key={feature.title}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Core Components with Metrics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill variant="primary" className="mb-4">
              <Target className="w-3 h-3 mr-1" />
              Measurable Results
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Platform components that deliver real outcomes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every feature designed with specific metrics and tangible business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedCoreComponents.map((component) => (
              <Card key={component.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <component.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {component.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {component.metrics.map((metric, idx) => (
                        <BadgePill key={idx} variant="muted" className="text-xs">
                          {metric}
                        </BadgePill>
                      ))}
                    </div>
                  </div>

                  {/* Business Outcomes */}
                  <div className="border-t border-border pt-4">
                    <div className="text-xs font-medium text-foreground mb-2">Business Outcomes</div>
                    <ul className="space-y-1">
                      {component.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-foreground mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* Interactive Demo Sections */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill variant="primary" className="mb-4">
              <Play className="w-3 h-3 mr-1" />
              Try It Now
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Experience the platform without commitment
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interactive demos showing exactly how EscrowGrid solves real escrow challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interactiveDemoSections.map((demo, index) => (
              <Card key={index} className="group hover:shadow-lg hover:border-dashed-monochrome transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Play className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {demo.description}
                  </p>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/architecture">
                      {demo.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Preview */}
      <section className="py-12 bg-pattern border-y-2 border-dashed-monochrome">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill className="mb-4 border-2 border-dotted-monochrome">
              <Target className="w-3 h-3 mr-1" />
              Industry Solutions
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Specialized escrow flows for complex industries
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pre-built templates and automated workflows for Trade Finance and Construction escrow scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Trade Finance Card */}
            <Card className="group hover:shadow-lg transition-all hover:border-dotted-monochrome">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 border border-dotted-monochrome flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                  Trade Finance Escrow
                </h3>
                <p className="text-muted-foreground mb-6">
                  Automated Letter of Credit workflows with AI-powered document verification and global compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">24-48h</div>
                    <div className="text-xs text-muted-foreground">LC Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">180+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/trade-finance">
                    Explore Trade Finance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Construction Card */}
            <Card className="group hover:shadow-lg transition-all hover:border-dotted-monochrome">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-secondary border border-dotted-monochrome flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                  Construction Escrow
                </h3>
                <p className="text-muted-foreground mb-6">
                  Milestone-based payments with automated retainage management and mechanics lien protection.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">5-10%</div>
                    <div className="text-xs text-muted-foreground">Retainage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">30-45</div>
                    <div className="text-xs text-muted-foreground">Day Cycles</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/construction">
                    Explore Construction
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="py-12 bg-gray-50 bg-secondary border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill className="mb-4 bg-gray-100 from-sky-100 to-cyan-100 text-sky-700 border-gray-200">
              <Users className="w-3 h-3 mr-1" />
              Real Results
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Proven impact across the industry
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Measurable outcomes from institutions already using EscrowGrid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProofMetrics.map((metric, index) => (
              <Card key={index} className="text-center bg-gray-50 bg-secondary border-gray-200">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-foreground">
                    {metric.change}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="py-12 bg-gray-50 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <BadgePill className="mb-4 border-2 border-dotted-monochrome">
              <Binary className="w-3 h-3 mr-1" />
              Competitive Advantage
            </BadgePill>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why EscrowGrid beats the alternatives
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Direct comparison with custom builds and legacy escrow providers. See how our TaaS model delivers superior value.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl border border-dotted-monochrome p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary border-2 border-dotted-monochrome flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Custom Build</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Building escrow infrastructure from scratch for each product
                </p>
                <div className="text-xs text-destructive font-medium">
                  6-12 months timeline • High maintenance • Compliance burden
                </div>
              </div>

              <div className="bg-card rounded-xl border border-dotted-monochrome p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary border-2 border-dotted-monochrome flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Legacy Providers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Traditional escrow companies with manual processes
                </p>
                <div className="text-xs text-muted-foreground font-medium">
                  Slow integration • Limited flexibility • High costs
                </div>
              </div>

              <div className="bg-card rounded-xl border border-dotted-monochrome p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-foreground border-2 border-dashed-monochrome flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">EscrowGrid TaaS</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tokenization-as-a-Service platform with pre-built infrastructure
                </p>
                <div className="text-xs text-foreground font-medium">
                  Weeks to launch • Continuous updates • Built-in compliance
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 gap-0 border-b border-border">
                <div className="p-4 bg-muted font-medium text-sm">Capability</div>
                <div className="p-4 font-medium text-sm text-center text-foreground">EscrowGrid</div>
                <div className="p-4 font-medium text-sm text-center">Custom Build</div>
                <div className="p-4 font-medium text-sm text-center">Legacy</div>
              </div>
              {competitiveComparison.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-0 border-b border-border last:border-b-0">
                  <div className="p-4">
                    <div className="font-medium text-sm text-foreground">{item.feature}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                  <div className="p-4 text-center">
                    {typeof item.escrowgrid === 'boolean' ? (
                      <div className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${
                        item.escrowgrid ? 'bg-secondary text-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.escrowgrid ? <CheckCircle className="h-4 w-4" /> : <span className="text-xs">—</span>}
                      </div>
                    ) : (
                      <BadgePill variant="primary" className="text-xs">{item.escrowgrid}</BadgePill>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof item.custom === 'boolean' ? (
                      <div className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${
                        item.custom ? 'bg-secondary text-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.custom ? <CheckCircle className="h-4 w-4" /> : <span className="text-xs">—</span>}
                      </div>
                    ) : (
                      <BadgePill variant="muted" className="text-xs">{item.custom}</BadgePill>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof item.legacy === 'boolean' ? (
                      <div className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${
                        item.legacy ? 'bg-secondary text-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.legacy ? <CheckCircle className="h-4 w-4" /> : <span className="text-xs">—</span>}
                      </div>
                    ) : (
                      <BadgePill variant="muted" className="text-xs">{item.legacy}</BadgePill>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-xl border-2 border-dotted-monochrome p-8">
              <h3 className="font-semibold text-foreground mb-4 text-center">The EscrowGrid Advantage</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Faster time-to-market</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Lower development cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">4x</div>
                  <div className="text-sm text-muted-foreground">Better compliance coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
