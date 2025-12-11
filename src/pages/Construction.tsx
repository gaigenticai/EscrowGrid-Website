import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  ArrowRight,
  ShieldCheck,
  Shield,
  CheckCircle,
  HardHat,
  FileCheck,
  DollarSign,
  Clock,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Calculator,
  Users,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";

const constructionFeatures = [
  {
    icon: FileCheck,
    title: "Template-Based Milestones",
    description: "Configurable milestone templates for common construction phases with basic payment automation."
  },
  {
    icon: ShieldCheck,
    title: "Basic Lien Tracking",
    description: "Simple lien waiver collection and digital record keeping with standard template processing."
  },
  {
    icon: Calculator,
    title: "Standard Retainage",
    description: "Basic retainage calculation (5-10%) with conditional release templates and simple approval workflows."
  },
  {
    icon: FileCheck,
    title: "Digital Payment Apps",
    description: "Digital payment application forms with template-based data capture and basic validation."
  },
  {
    icon: Shield,
    title: "Document Management",
    description: "Digital document storage, photo uploads, and basic compliance record keeping."
  },
  {
    icon: Users,
    title: "Contractor Verification",
    description: "Basic contractor verification, simple payment workflows, and standard approval chains."
  }
];

const milestoneWorkflow = [
  {
    phase: "Contract Execution & Escrow Setup",
    percentage: "1",
    description:
      "Loan agreement is finalized with escrow terms, the escrow account is opened at a neutral institution, and initial funds are deposited.",
    verification: [
      "Loan agreement with escrow terms",
      "Escrow account opened",
      "Initial funds confirmed"
    ],
    releaseConditions: [
      "Draw schedule established with milestones",
      "Escrow structure configured",
      "Stakeholders onboarded"
    ]
  },
  {
    phase: "Mobilization Payment",
    percentage: "2",
    description:
      "Contractor submits a mobilization request; lender verifies insurance and bonds before releasing the initial mobilization payment (typically 10–15%).",
    verification: [
      "Mobilization request submitted",
      "Insurance and bonds verified",
      "Site readiness confirmed"
    ],
    releaseConditions: [
      "Mobilization approval",
      "Initial payment released (10–15%)",
      "Work commences on site"
    ]
  },
  {
    phase: "Progress Payment Draws",
    percentage: "3",
    description:
      "Contractor submits draw requests with documentation; engineer/inspector verifies completion percentage, and lender reviews schedule compliance before releasing payments minus retainage.",
    verification: [
      "Draw request with documentation",
      "Completion percentage verified",
      "Schedule compliance checked"
    ],
    releaseConditions: [
      "Payment released minus retainage",
      "Retainage (5–10%) held back",
      "Cycle repeats at milestones"
    ]
  },
  {
    phase: "Retainage Holdback Management",
    percentage: "4",
    description:
      "Retainage accumulates in escrow, tracked separately per contractor and subcontractor as security for completion and warranty.",
    verification: [
      "Retainage balances tracked",
      "Contractor-level allocations",
      "Warranty obligations captured"
    ],
    releaseConditions: [
      "Retainage rules configured (5–10%)",
      "No unpaid change orders",
      "Compliance with contract terms"
    ]
  },
  {
    phase: "Substantial Completion",
    percentage: "5",
    description:
      "Final inspection is performed, punch list is created, and certificate of substantial completion is issued with partial retainage release (often 50%).",
    verification: [
      "Final inspection completed",
      "Punch list documented",
      "Substantial completion certificate"
    ],
    releaseConditions: [
      "Partial retainage release (~50%)",
      "Warranty period conditions set",
      "Stakeholder approvals recorded"
    ]
  },
  {
    phase: "Final Completion & Release",
    percentage: "6",
    description:
      "All punch list items are completed, final lien waivers are collected, and the engineer certifies final completion so remaining retainage can be released and the escrow closed.",
    verification: [
      "All punch list items cleared",
      "Final lien waivers collected",
      "Engineer completion certification"
    ],
    releaseConditions: [
      "Final retainage released",
      "Escrow account closed",
      "Full audit trail archived"
    ]
  }
];

const lienWaiverTypes = [
  {
    type: "Conditional Waiver Template",
    description: "Standard template for conditional lien waivers with digital signature capture",
    timing: "Uploaded with payment application",
    priority: "Required for milestone payments"
  },
  {
    type: "Unconditional Waiver Template",
    description: "Basic unconditional waiver template with automated data population",
    timing: "Generated upon payment confirmation",
    priority: "Required for progress payments"
  },
  {
    type: "Final Waiver Template",
    description: "Comprehensive final waiver template for project completion documentation",
    timing: "Generated for final payment processing",
    priority: "Required for project closeout"
  }
];


const projectTypes = [
  { name: "Commercial Construction", typicalValue: "$5M-50M", duration: "18-36 months", milestones: "10-15" },
  { name: "Residential Development", typicalValue: "$2M-20M", duration: "12-24 months", milestones: "8-12" },
  { name: "Industrial Facilities", typicalValue: "$10M-100M", duration: "24-48 months", milestones: "12-18" },
  { name: "Infrastructure Projects", typicalValue: "$20M-200M", duration: "36-60 months", milestones: "15-25" },
  { name: "Renovation & Remodeling", typicalValue: "$500K-10M", duration: "6-18 months", milestones: "5-10" },
  { name: "Specialty Construction", typicalValue: "$1M-25M", duration: "12-30 months", milestones: "8-15" }
];

export default function Construction() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-card border-y-2 border-dashed-monochrome">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <BadgePill className="mb-4 sm:mb-6 border-2 border-dotted-monochrome">
                <Building2 className="w-3 h-3 mr-1" />
                Construction Escrow Solution
              </BadgePill>
              <h1 className="font-display text-3xl sm:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-shadow-retro">
                Construction Payment
                <span className="block border-b-2 sm:border-b-4 border-current pb-1 sm:pb-2">Security & Control</span>
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Protect your construction projects with milestone-based escrow that ensures
                fair payments, automated retainage management, and complete lien waiver compliance.
                Reduce payment cycles from <span className="font-semibold border-b-2 border-current">60-90 days to 30-45 days</span>
                while maintaining full audit trails.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button size="lg" className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro" asChild>
                  <Link to="/architecture" className="text-background">
                    <Building2 className="mr-2 h-4 w-4" />
                    Try Construction Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-dotted-monochrome hover:bg-accent" asChild>
                  <a
                    href="https://calendly.com/krishnagai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Construction Call
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-xl border-2 border-dotted-monochrome p-8">
              <h3 className="font-semibold text-xl text-foreground mb-6 text-center">Project Types Supported</h3>
              <div className="grid grid-cols-1 gap-3">
                {projectTypes.slice(0, 5).map((project, index) => (
                  <div key={index} className="bg-card rounded-lg border border-dotted-monochrome p-3">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-foreground text-sm">{project.name}</h4>
                      <BadgePill variant="muted" className="text-xs">{project.milestones} milestones</BadgePill>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {project.typicalValue} • {project.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">5-10%</div>
              <div className="text-sm font-medium text-foreground">Standard Retainage</div>
              <div className="text-xs text-muted-foreground mt-1">Automatically managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">60%</div>
              <div className="text-sm font-medium text-foreground">Release Delay Reduction</div>
              <div className="text-xs text-muted-foreground mt-1">From manual to automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">30-60</div>
              <div className="text-sm font-medium text-foreground">Day Payment Cycles</div>
              <div className="text-xs text-muted-foreground mt-1">Automated processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm font-medium text-foreground">Audit Trail Coverage</div>
              <div className="text-xs text-muted-foreground mt-1">Complete documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Workflow */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Construction Escrow Lifecycle
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From contract execution to final retainage release, EscrowGrid automates each stage of the construction escrow lifecycle with policy-driven controls, immutable audit trails, and real-time visibility for all stakeholders.
            </p>
          </div>

          <div className="space-y-6">
            {milestoneWorkflow.map((milestone, index) => (
              <Card key={index} className="border-dotted-monochrome bg-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-foreground text-white flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">{milestone.percentage}</span>
                        <span className="text-xs">Stage</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-semibold text-foreground text-xl">{milestone.phase}</h3>
                        <BadgePill variant="muted" className="border-2 border-dotted-monochrome">
                          Stage {milestone.percentage} of 6
                        </BadgePill>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{milestone.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-foreground" />
                            Verification Required:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {milestone.verification.map((item, idx) => (
                              <BadgePill key={idx} variant="outline" className="text-xs border-dotted-monochrome">
                                {item}
                              </BadgePill>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-foreground" />
                            Release Conditions:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {milestone.releaseConditions.map((item, idx) => (
                              <BadgePill key={idx} variant="outline" className="text-xs border-dotted-monochrome">
                                {item}
                              </BadgePill>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lien Protection */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mechanics Lien Protection System
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Automated lien waiver collection and tracking to protect all project stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {lienWaiverTypes.map((waiver, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <ShieldCheck className="h-12 w-12 text-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-2">{waiver.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{waiver.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <Clock className="h-3 w-3 text-foreground" />
                      <span>{waiver.timing}</span>
                    </div>
                    <BadgePill variant="primary" className="text-xs bg-secondary text-foreground border-dotted-monochrome">
                      {waiver.priority}
                    </BadgePill>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-pattern border-2 border-dashed-monochrome">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-foreground" />
                <h4 className="font-semibold text-foreground">Automated Lien Waiver Workflow</h4>
              </div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. System generates appropriate waiver forms based on payment application</li>
                <li>2. Automated distribution to all contractors and subcontractors</li>
                <li>3. Digital signature collection with audit trail</li>
                <li>4. Verification of waiver completeness before payment release</li>
                <li>5. Secure storage and retrieval for project documentation</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

  
      {/* Project Types */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Supported Project Types
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Scalable escrow solutions for all types of construction projects and contract values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <HardHat className="h-8 w-8 text-foreground mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">{project.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Typical Value:</span>
                      <span className="font-medium text-foreground">{project.typicalValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium text-foreground">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Milestones:</span>
                      <span className="font-medium text-foreground">{project.milestones}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Advanced Construction Escrow Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive tools for managing complex construction payment workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all hover:border-dotted-monochrome">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-secondary border border-dotted-monochrome flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to streamline your construction payments?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join leading construction companies using EscrowGrid for automated milestone payments and compliance management.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro" asChild>
              <Link to="/architecture" className="text-background">
                <Building2 className="mr-2 h-4 w-4" />
                Try Construction Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
