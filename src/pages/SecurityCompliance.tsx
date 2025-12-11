import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { FeatureCard } from "@/components/ui/feature-card";
import {
  Shield,
  Lock,
  FileText,
  Globe,
  Eye,
  Server,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Multi-Tenant Isolation",
    description:
      "Each institution's data is logically isolated with strict access controls. No cross-tenant data leakage.",
  },
  {
    icon: FileText,
    title: "Complete Audit Trail",
    description:
      "Every action, state change, and decision is logged with timestamps, actor IDs, and full context.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "Continuous monitoring for anomalies, failed authentication attempts, and suspicious patterns.",
  },
  {
    icon: Server,
    title: "Encrypted at Rest & Transit",
    description:
      "AES-256 encryption for data at rest. TLS 1.3 for all API communications.",
  },
];

const regions = [
  {
    code: "US",
    name: "United States",
    policies: ["SOC 2 Type II alignment", "State escrow regulations", "UCC Article 4A"],
  },
  {
    code: "EU/UK",
    name: "Europe & United Kingdom",
    policies: ["GDPR compliance", "PSD2 considerations", "FCA guidelines"],
  },
  {
    code: "SG",
    name: "Singapore",
    policies: ["MAS guidelines", "PDPA compliance", "PSA regulations"],
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    policies: ["CBUAE regulations", "DIFC framework", "ADGM standards"],
  },
];

export default function SecurityCompliance() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <BadgePill variant="primary" className="mb-6">
              Security & Compliance
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for regulated industries
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Enterprise-grade security with region-specific compliance. 
              EscrowGrid provides the infrastructure; your institution handles licensing.
            </p>
            <Button asChild>
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss security requirements
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Security architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Region-specific policy layers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Configure policies based on your operating jurisdictions. 
              Rules are automatically enforced at the API level.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div
                key={region.code}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <BadgePill variant="muted">{region.code}</BadgePill>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.policies.map((policy) => (
                    <li
                      key={policy}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Important disclaimer
                </h3>
                <p className="text-sm text-muted-foreground">
                  EscrowGrid is infrastructure software, not a licensed escrow agent or financial 
                  institution. Your institution is responsible for obtaining and maintaining all 
                  required licenses, registrations, and regulatory approvals for operating escrow 
                  services in your jurisdictions. EscrowGrid provides technical capabilities to 
                  support compliant operations but does not provide legal, regulatory, or 
                  compliance advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit & Logging */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Audit-ready from day one
              </h2>
              <p className="text-muted-foreground mb-6">
                Every position maintains a complete, immutable history of all events, 
                state transitions, and administrative actions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Timestamped event log with actor identification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    State transition history with before/after snapshots
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Export capabilities for regulatory reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Configurable retention policies
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Sample Audit Entry
              </h3>
              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`{
  "eventId": "evt_audit_789",
  "positionId": "pos_abc123",
  "type": "STATE_TRANSITION",
  "from": "FUNDED",
  "to": "ACTIVE",
  "actor": {
    "type": "user",
    "id": "user_admin_001",
    "institution": "inst_acme"
  },
  "timestamp": "2024-01-15T14:22:00Z",
  "ip": "203.0.113.42",
  "reason": "Inspection approved"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have security questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is ready to discuss your specific security and compliance requirements.
          </p>
          <Button size="lg" asChild>
            <a
              href="https://calendly.com/krishnagai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a security review
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
