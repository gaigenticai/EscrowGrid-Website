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
    description: "Tokenize regulated assets without rebuilding the control plane.",
  },
  {
    icon: Building2,
    title: "Construction Lenders",
    description: "Tokenize pay apps and retainage with evidence and approval gates.",
  },
  {
    icon: BarChart3,
    title: "Trade Finance Desks",
    description: "Tokenize invoices, POs, and documents with anti-double-finance controls.",
  },
  {
    icon: Layers,
    title: "Fintech Platforms",
    description: "Embed tokenization into your product with an API-first platform.",
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
    description:
      "Gate-enforced lifecycle transitions and policy checks designed to integrate with your compliance stack.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant",
    description: "Isolated tenants, keys, and data boundaries by design.",
  },
];

// Hover Image Component
function HoverImage() {
  return (
    <div className="relative w-full h-full">
      <div className="group relative overflow-hidden rounded-lg border-2 border-dashed-monochrome">
        {/* Mono image (default) */}
        <img
          src="/assets/images/mono_image.png"
          alt="Tokenization Infrastructure - Monochrome"
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0 lg:block hidden"
        />
        {/* Mobile: Show static mono image */}
        <img
          src="/assets/images/mono_image.png"
          alt="Tokenization Infrastructure - Monochrome"
          className="w-full h-auto object-contain block lg:hidden"
        />
        {/* Color image (on hover - desktop only) */}
        <img
          src="/assets/images/color_image.png"
          alt="Tokenization Infrastructure - Color"
          className="absolute inset-0 w-full h-auto object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 lg:block hidden"
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
      description: "Rebuilding token issuance, gating, and audit plumbing per product",
      icon: <ThumbsDown className="h-5 w-5 text-destructive" />
    },
    after: {
      title: "Canonical Gates + Overrides",
      description: "Start with audited defaults, then tune requirements per tenant",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  },
  {
    before: {
      title: "Manual Compliance Reviews",
      description: "Ad-hoc approvals with no standardized evidence trail",
      icon: <ThumbsDown className="h-5 w-5 text-destructive" />
    },
    after: {
      title: "Automated Policy Enforcement",
      description: "Gate every lifecycle step with attestations and immutable audit events",
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
      description: "Every asset and token op tracked with complete audit trails",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  }
];

// Enhanced features with research-backed metrics
const enhancedCoreComponents = [
  {
    icon: Layers,
    title: "Lifecycle Engine",
    description: "Manages asset lifecycles with gate-enforced transitions and immutable audit events.",
    metrics: ["Canonical lifecycle states", "Gate-enforced transitions", "Idempotent writes"],
    outcomes: ["Standardize workflows", "Reduce manual exceptions", "Make audits repeatable"]
  },
  {
    icon: FileText,
    title: "Schema + Gate Registry",
    description:
      "Audited schemas and canonical gate configs for trade finance, construction, and lending asset kinds.",
    metrics: ["12+ asset kinds", "Tenant overrides", "Evidence + attestations"],
    outcomes: ["Launch faster", "Reduce legal review loops", "Keep controls consistent"]
  },
  {
    icon: Settings,
    title: "Policy Layer",
    description:
      "Enforce policy requirements at transitions and token ops; integrate approvals/KYC/AML as attestations.",
    metrics: ["Attestation-first", "Least-privilege keys", "Tenant boundaries"],
    outcomes: ["Separate duties cleanly", "Integrate existing systems", "Reduce manual checks"]
  },
  {
    icon: Database,
    title: "Event-Sourced Backbone",
    description:
      "Append-only event store in PostgreSQL to make invariants enforceable and audit exports simple.",
    metrics: ["Immutable audit log", "Actor attribution", "Exportable events"],
    outcomes: ["Prove who did what", "Reconstruct state", "Support external audits"]
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Scoped API keys and tenant isolation designed for regulated environments.",
    metrics: ["Admin / writer / read-only", "Audit-ready metadata", "Tenant isolation"],
    outcomes: ["Least-privilege access", "Segregation of duties", "Operational control"]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Operational metrics and export-ready audit trails for reviews and investigations.",
    metrics: ["Structured audit events", "Queryable history", "Health/ready probes"],
    outcomes: ["Simplify ops reporting", "Speed up audits", "Support integrations"]
  }
];

// Interactive demo sections
const interactiveDemoSections = [
  {
    title: "See State Transitions in Action",
    description: "Watch assets move through lifecycle steps with evidence + gate enforcement.",
    type: "transitions",
    buttonText: "Try Interactive Demo"
  },
  {
    title: "Explore Canonical Gates",
    description: "See default gates per asset kind and how tenant overrides tighten/loosen requirements.",
    type: "gates",
    buttonText: "Explore Gates"
  },
  {
    title: "Test Policy Engine",
    description: "See how policy checks and attestations protect token ops and transitions.",
    type: "compliance",
    buttonText: "Test Policy Rules"
  }
];

// Real-world social proof metrics
const socialProofMetrics = [
  {
    value: "5-10%",
    label: "Typical retainage in construction finance",
    change: "Modelled as asset kinds + gates"
  },
  {
    value: "12+",
    label: "Canonical asset kinds shipped",
    change: "Trade finance + construction + lending"
  },
  {
    value: "7-14",
    label: "Typical construction milestones",
    change: "Serviced via lifecycle transitions"
  },
  {
    value: "Trial → Paid",
    label: "License upgrades without reinstall",
    change: "Tenant entitlements are event-sourced"
  }
];

// Competitive comparison based on market research
const competitiveComparison = [
  {
    feature: "API-First Design",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "RESTful APIs with OpenAPI spec and idempotent writes"
  },
  {
    feature: "Attestation-First Compliance",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "Integrate KYC/AML/approvals as attestations; gates enforce them"
  },
  {
    feature: "Canonical Gates",
    escrowgrid: true,
    custom: false,
    legacy: false,
    description: "Default gate configs per asset kind with tenant overrides"
  },
  {
    feature: "Time to Market",
    escrowgrid: "Weeks",
    custom: "6-12 months",
    legacy: "12+ months",
    description: "From integration to first issuance"
  },
  {
    feature: "Regulatory Updates",
    escrowgrid: "Automatic",
    custom: "Manual",
    legacy: "Manual",
    description: "Update gate/policy configs without rewriting core logic"
  },
  {
    feature: "Execution Flexibility",
    escrowgrid: "Pluggable",
    custom: "Single rail",
    legacy: "Rigid",
    description: "Off-chain, permissioned, EVM, or custodian rails via adapters"
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
        title: "Gate Enforcement",
        description: "Evidence and attestations required for each lifecycle transition and token op.",
      },
      {
        title: "Multi-tenant Isolation",
        description: "Tenant data is logically isolated with strict access controls.",
      },
    ],
  },
  {
    id: "ops",
    label: "Product & Ops",
    icon: Settings,
    features: [
      {
        title: "Canonical Defaults",
        description: "Start with canonical gates for each asset kind and evolve safely over time.",
      },
      {
        title: "Approvals as Attestations",
        description: "Internal approvers or external systems can issue attestations for gates.",
      },
      {
        title: "Configurable Workflows",
        description: "Apply tenant overrides to tighten/loosen requirements without forking core logic.",
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
        description: "Clean, predictable endpoints with an OpenAPI spec and strong invariants.",
      },
      {
        title: "Audit Stream",
        description: "Queryable audit events for integrations and reporting.",
      },
      {
        title: "Deploy Anywhere",
        description: "Run SaaS or on-prem via Docker Compose or Helm with trial-to-paid licensing.",
      },
    ],
  },
];


export default function Platform() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-pattern border-y-2 border-dashed-monochrome relative overflow-hidden">

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">
            <div className="max-w-4xl lg:pr-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary border-2 border-dotted-monochrome rounded-full mb-4 sm:mb-6">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-semibold text-sm sm:text-base">Industry Challenge</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-shadow-retro">
              Financial institutions waste
              <span className="block border-b-2 sm:border-b-4 border-current pb-1 sm:pb-2">
                millions annually on bespoke infrastructure
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              Financial institutions waste <span className="font-bold">millions of engineering hours</span>{" "}
              rebuilding the same primitives: asset registries, evidence capture, lifecycle enforcement, audit trails, and token
              issuance/transfer.
              Construction teams track pay apps in Excel. Trade finance desks chase documents manually. Lending desks stitch
              together servicing systems.
              <br /><br />
              EscrowGrid provides the{" "}
              <span className="font-bold border-b-2 border-current">Tokenization-as-a-Service control plane</span>{" "}
              that institutions need to ship regulated workflows in{" "}
              <span className="font-bold border-b-2 border-current">weeks, not years</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
            <div className="h-64 sm:h-80 lg:h-auto lg:min-h-80 relative lg:mt-12 lg:ml-8 order-1 lg:order-2">
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
	                Create your first tokenized asset right now. Attach evidence, request lifecycle transitions,
	                and watch gates and attestations enforce policy — all in your browser.
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
                  <span className="font-mono text-sm">Asset created: ast_3fn8a2b9c1d0e7f5</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-sm">Canonical gates loaded: 12+ asset kinds</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-warning animate-pulse" />
                  </div>
	                  <span className="font-mono text-sm">Status: Awaiting attestations</span>
	                </div>
                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Demo runs in-browser. No setup required.
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
	              Purpose-built for institutions that need reliable tokenization infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                EscrowGrid provides the control plane for asset tokenization. You maintain
                relationships with your clients and your preferred settlement rails. We handle the
                complexity of evidence, lifecycle enforcement, audit trails, and policy-gated token
                operations.
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
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Production Analytics Now Available</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Health/readiness probes for orchestrators</li>
                    <li>• Queryable audit events with actor attribution</li>
                    <li>• Prometheus-friendly operational metrics</li>
                  </ul>
                </div>
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
{`# Create an asset (tenant inferred from API key)
curl -X POST "https://api.escrowgrid.com/assets" \\
  -H "Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "assetClass": "trade_finance",
    "assetKind": "invoice",
    "schemaVersion": "v1",
    "data": { "invoiceNumber": "INV-1001", "amount": 250000, "currency": "USD" }
  }'

# Create a token series for that asset (execution is pluggable)
curl -X POST "https://api.escrowgrid.com/token-series" \\
  -H "Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{ "assetId": "ast_...", "symbol": "INV1001", "decimals": 0 }'`}
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
              See how EscrowGrid transforms every aspect of asset tokenization operations.
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
                EscrowGrid uses a <span className="font-bold text-foreground bg-gray-100 from-amber-600 to-orange-600">tenant-first model</span>{" "}
                that isolates data while keeping integrations and execution rails composable.
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
	                      <strong className="text-foreground">Tenant:</strong> Your organization (bank, lender, platform) with isolated data and API keys
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">2</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Parties:</strong> Borrower/buyer/seller/SPV/custodian identities used for gating and balances
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">3</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Asset:</strong> The underlying invoice/pay app/loan note + evidence and lifecycle state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-gray-100 from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-foreground">4</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Token Series:</strong> Issuance and transfers through off-chain, permissioned, EVM, or custodian adapters
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
                    <span>Canonical gates across asset kinds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground" />
                    <span>Real-time state tracking and audit trails</span>
                  </li>
	                  <li className="flex items-center gap-2">
	                    <CheckCircle className="h-4 w-4 text-foreground" />
	                    <span>Configurable policies per region</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              Interactive demos showing exactly how EscrowGrid solves real tokenization challenges.
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
              Specialized tokenization slices for complex industries
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Canonical gates and lifecycle defaults for trade finance, construction, and lending — with safe tenant overrides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trade Finance Card */}
            <Card className="group hover:shadow-lg transition-all hover:border-dotted-monochrome">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 border border-dotted-monochrome flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                  Trade Finance
                </h3>
	                <p className="text-muted-foreground mb-6">
	                  Tokenize invoices and trade documents with evidence requirements and anti-double-finance gates.
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
                  Construction Finance
                </h3>
	                <p className="text-muted-foreground mb-6">
	                  Tokenize pay apps, milestones, and retainage with lien/inspection attestations and gates.
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

            {/* Lending Card */}
            <Card className="group hover:shadow-lg transition-all hover:border-dotted-monochrome">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gray-100 border border-dotted-monochrome flex items-center justify-center mb-4">
                  <Landmark className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                  Lending
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tokenize loan notes and pools with servicing lifecycles and pluggable execution rails.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">Off-chain</div>
                    <div className="text-xs text-muted-foreground">Ledger option</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">Custodian</div>
                    <div className="text-xs text-muted-foreground">Instruction rails</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/lending">
                    Explore Lending
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
              Designed for measurable impact
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Outcomes vary by institution, but the primitives are universal: fewer bespoke workflows, stronger controls, and faster integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              Compare EscrowGrid to custom builds and rigid tokenization stacks. See how a clean control plane delivers durable value.
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
                  Building tokenization infrastructure from scratch for each product
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
                  Rigid tokenization stacks with limited integrations
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
	                  Weeks to launch • Continuous updates • Policy layers & audit trails
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
                  <div className="text-2xl font-bold text-foreground mb-2">Weeks</div>
                  <div className="text-sm text-muted-foreground">Integration to first issuance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">Lower</div>
                  <div className="text-sm text-muted-foreground">Engineering and maintenance load</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">Audit‑ready</div>
                  <div className="text-sm text-muted-foreground">Controls and evidence trails</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
