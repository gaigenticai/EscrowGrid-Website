import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  ArrowRight,
  Shield,
  CheckCircle,
  Globe,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Banknote,
  FileText,
  AlertCircle,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const tradeFinanceFeatures = [
  {
    icon: FileCheck,
    title: "Canonical Asset Kinds",
    description: "invoice, purchase_order, bill_of_lading, warehouse_receipt, acceptance — with audited default gates."
  },
  {
    icon: Shield,
    title: "Bring‑Your‑Own KYC",
    description: "Integrate with your bank's existing KYC/KYB/AML stack via attestations (KYC abstraction layer on the roadmap)."
  },
  {
    icon: Globe,
    title: "Major Currency Support",
    description: "Multi‑currency assets using ISO 4217 codes; FX handled by your bank or treasury system."
  },
  {
    icon: Banknote,
    title: "API Banking Integration",
    description: "RESTful APIs for connecting to partner banking systems with idempotent retries."
  },
  {
    icon: FileText,
    title: "Document Rules",
    description: "Evidence‑based release requirements; deeper document validation available via integrations/roadmap."
  },
  {
    icon: AlertCircle,
    title: "Audit Trails",
    description: "Complete audit history with actor attribution and exportable events."
  }
];

const lcWorkflow = [
  {
    step: 1,
    title: "Order Placement",
    description:
      "Buyer and seller are onboarded as parties, and the underlying trade asset is recorded with evidence requirements and gates defined upfront.",
    documents: ["Purchase Order", "Commercial Terms", "Required Evidence Checklist"],
    processingTime: "Gate-driven workflow"
  },
  {
    step: 2,
    title: "Shipment & Documentation",
    description:
      "Seller ships goods and uploads required documents such as bill of lading, invoice, and certificates. The system validates document completeness against policy requirements.",
    documents: ["Bill of Lading", "Commercial Invoice", "Compliance Certificates"],
    processingTime: "Real-time validation"
  },
  {
    step: 3,
    title: "Inspection Period",
    description:
      "Buyer inspection window begins, with the policy engine enforcing a time-bound review period and automatic dispute escalation if issues are raised.",
    documents: ["Inspection Report", "Buyer Feedback", "Dispute Records"],
    processingTime: "Configurable inspection window"
  },
  {
    step: 4,
    title: "Payment Release",
    description:
      "Upon buyer acceptance or timeout, the lifecycle engine triggers payment release. A full event history provides an evidence trail for both counterparties and the institution.",
    documents: ["Release Instruction", "Settlement Report", "Audit Trail"],
    processingTime: "Automatic on acceptance/timeout"
  }
];

const supportedDocuments = [
  { name: "Bill of Lading", required: true, description: "Ocean, air, or multi-modal transport document" },
  { name: "Commercial Invoice", required: true, description: "Detailed commercial invoice with terms" },
  { name: "Packing List", required: true, description: "Detailed packing specifications" },
  { name: "Certificate of Origin", required: false, description: "Country of origin certification" },
  { name: "Insurance Certificate", required: false, description: "Marine insurance coverage" },
  { name: "Inspection Certificate", required: false, description: "Quality and quantity verification" },
  { name: "Consular Invoice", required: false, description: "Consular certification for certain destinations" },
  { name: "Warehouse Receipts", required: false, description: "Storage and warehousing documents" }
];

const complianceFrameworks = [
  { name: "Trade Standards", description: "Document/evidence gating aligned to your trade policies", coverage: "Configurable" },
  { name: "Bring‑Your‑Own KYC/AML", description: "Rely on your bank/provider attestations", coverage: "Integration" },
  { name: "Policy Rules", description: "Configurable release rules by region", coverage: "Configurable" },
  { name: "Audit Trail", description: "Complete transaction logging and evidence trail", coverage: "Built-in" },
  { name: "API Security", description: "API keys, rate limiting, and idempotency", coverage: "Standard" }
];

export default function TradeFinance() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-card border-y-2 border-dashed-monochrome">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <BadgePill className="mb-4 sm:mb-6 border-2 border-dotted-monochrome">
                <Globe className="w-3 h-3 mr-1" />
                International Trade Finance
              </BadgePill>
              <h1 className="font-display text-3xl sm:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-shadow-retro">
                Global Trade Meets
                <span className="block border-b-2 sm:border-b-4 border-current pb-1 sm:pb-2">
                  Tokenization Infrastructure
                </span>
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Tokenize invoices and trade documents with evidence requirements, anti-double-finance gates,
                and an immutable audit trail. Keep settlement on your preferred rails (banking, custodial, or ledger),
                while relying on your institution’s KYC/AML and jurisdictional rules via attestations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro" asChild>
                  <Link to="/architecture" className="text-background">
                    <FileCheck className="mr-2 h-4 w-4" />
                    Try Trade Finance Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-dotted-monochrome hover:bg-accent" asChild>
                  <a
                    href="https://calendly.com/krishnagai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Trade Finance Call
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl border-2 border-dotted-monochrome p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Supported Documents
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {supportedDocuments.slice(0, 6).map((doc, index) => (
                    <div key={index} className="bg-card rounded-lg border border-dotted-monochrome p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4 text-foreground flex-shrink-0" />
                        <span className="text-xs font-medium text-foreground">{doc.name}</span>
                      </div>
                      {doc.required && (
                        <BadgePill variant="muted" className="text-xs">Required</BadgePill>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-xl border-2 border-dotted-monochrome p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Global Compliance
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-card rounded-lg border border-dotted-monochrome p-3">
                    <div className="text-lg font-bold text-foreground">180+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                  <div className="bg-card rounded-lg border border-dotted-monochrome p-3">
                    <div className="text-lg font-bold text-foreground">UCP 600</div>
                    <div className="text-xs text-muted-foreground">Compliant</div>
                  </div>
                  <div className="bg-card rounded-lg border border-dotted-monochrome p-3">
                    <div className="text-lg font-bold text-foreground">USD/EUR</div>
                    <div className="text-xs text-muted-foreground">Currencies</div>
                  </div>
                </div>
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
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24-48h</div>
              <div className="text-sm font-medium text-foreground">LC Processing Time</div>
              <div className="text-xs text-muted-foreground mt-1">From weeks to hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">95%+</div>
              <div className="text-sm font-medium text-foreground">Document Accuracy</div>
              <div className="text-xs text-muted-foreground mt-1">Template-based validation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">USD/EUR</div>
              <div className="text-sm font-medium text-foreground">Core Currencies</div>
              <div className="text-xs text-muted-foreground mt-1">Available today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">US/EU</div>
              <div className="text-sm font-medium text-foreground">Compliance Regions</div>
              <div className="text-xs text-muted-foreground mt-1">Currently supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* LC Workflow */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trade Finance Tokenization: Invoices & Documents
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cross-border trade finance requires evidence, precise document handling, and timeline enforcement. EscrowGrid coordinates buyers, sellers, and institutions with canonical gates (including anti-double-finance) and an immutable audit trail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lcWorkflow.map((step) => (
              <Card key={step.step} className="border-dotted-monochrome bg-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-foreground text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-foreground mb-2">Required Documents:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.documents.map((doc, idx) => (
                            <BadgePill key={idx} variant="muted" className="text-xs">
                              {doc}
                            </BadgePill>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <Clock className="h-3 w-3 text-foreground" />
                        <span className="font-medium text-foreground">{step.processingTime}</span>
                        <span className="text-muted-foreground">processing time</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Documents */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Comprehensive Document Support
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Configurable document requirements for evidence‑based releases. Automated verification available via integrations/roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground text-sm">{doc.name}</h4>
                        {doc.required && (
                          <BadgePill variant="primary" className="text-xs">Required</BadgePill>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Policy & Compliance (Bring‑Your‑Own)
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              EscrowGrid enforces gates and records attestations; your institution supplies KYC/AML and jurisdiction-specific rules via existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-8 w-8 text-foreground mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">{framework.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{framework.description}</p>
                  <BadgePill variant="muted" className="text-xs">{framework.coverage}</BadgePill>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Advanced Trade Finance Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive automation and risk management capabilities for modern trade finance operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeFinanceFeatures.map((feature, index) => (
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
            Ready to modernize your trade finance operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Define your asset kinds and evidence requirements, integrate your approvals/KYC/AML, and let EscrowGrid enforce the workflow end-to-end.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro" asChild>
              <Link to="/architecture" className="text-background">
                <FileCheck className="mr-2 h-4 w-4" />
                Try Trade Finance Demo
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
