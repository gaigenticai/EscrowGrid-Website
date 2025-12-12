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
	    title: "Zero-Trust Security Architecture",
	    description:
	      "Role-based and scoped API key authentication, optional root IP allowlisting, distributed rate limiting, and strict input validation.",
	  },
  {
    icon: FileText,
    title: "Cryptographic Audit Trail",
    description:
      "Structured audit events for every action, stored in PostgreSQL and exportable for reviews.",
  },
  {
    icon: Eye,
    title: "Operational Monitoring",
    description:
      "Prometheus metrics, health/readiness probes, and optional webhooks for operational alerts.",
  },
  {
    icon: Server,
    title: "Production-Ready Deployment",
    description:
      "Docker/Kubernetes friendly, with safe rule evaluation, idempotent writes, and multi-tenant isolation.",
  },
];

const regions = [
  {
    code: "US",
    name: "United States",
    policies: ["Configurable policy templates", "Bring-your-own KYC/KYB attestations", "Audit exports"],
  },
  {
    code: "EU/UK",
    name: "Europe & United Kingdom",
    policies: ["Configurable policy templates", "Data residency guidance", "KYC reliance support"],
  },
  {
    code: "SG",
    name: "Singapore",
    policies: ["Configurable policy templates", "KYC reliance support", "Audit exports"],
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    policies: ["Configurable policy templates", "KYC reliance support", "Audit exports"],
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
              Enterprise-grade security with configurable policy layers. 
              EscrowGrid provides the infrastructure; your institution supplies compliance rules and KYC via existing systems.
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

      {/* Roadmap Operations */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Roadmap: Enterprise Operations & Intelligence
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Optional enterprise add-ons for deeper monitoring, recovery, and analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Performance Monitoring
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time escrow business metrics</li>
                <li>• Transaction success/failure tracking</li>
                <li>• Asset and institution monitoring</li>
                <li>• Blockchain transaction analytics</li>
                <li>• Intelligent alerting with webhooks</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Saga Compensation Patterns
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Production-grade compensation logic</li>
                <li>• Real API and database operations</li>
                <li>• File system and message queue integration</li>
                <li>• Circuit breaker and retry policies</li>
                <li>• Automatic failure recovery</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                Data Analytics Engine
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time data archiving system</li>
                <li>• Statistical analysis with percentiles</li>
                <li>• Multi-tenant database queries</li>
                <li>• Business intelligence calculations</li>
                <li>• Performance bottleneck detection</li>
              </ul>
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
                    SHA-256 cryptographic integrity verification for tamper-proof audit logs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Sequential ordering with real-time webhook integration to monitoring systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Automated log rotation with external syslog and compliance system integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Production-grade structured logging with business context and metadata preservation
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
  "timestamp": "2025-01-15T14:22:00.123Z",
  "level": "INFO",
  "context": {
    "requestId": "req_abc123def456",
    "institutionId": "inst_acme_bank",
    "userId": "user_admin_001",
    "apiKeyId": "key_prod_789",
    "ip": "203.0.113.42",
    "userAgent": "EscrowGrid-API/1.0"
  },
  "action": "UPDATE",
  "entity": "POSITION",
  "entityId": "pos_xyz789",
  "oldValues": {
    "status": "PENDING",
    "amount": 500000.00
  },
  "newValues": {
    "status": "ACTIVE",
    "amount": 500000.00,
    "approvedAt": "2025-01-15T14:22:00Z"
  },
  "message": "Position status updated from PENDING to ACTIVE",
  "sequence": 12347,
  "hash": "sha256:9f86d081884c7d659a2feaa0c55ad015..."
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
