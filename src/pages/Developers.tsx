import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { FeatureCard } from "@/components/ui/feature-card";
import { Code2, Terminal, TestTube, ArrowRight, Repeat, Database } from "lucide-react";

const codeExamples = [
  {
    title: "1. Create a tenant + API key",
    code: `# Create a tenant (control-plane root)
curl -X POST "https://api.escrowgrid.com/tenants" \\
  -H "Content-Type: application/json" \\
  -d '{ "name": "Acme Bank" }'

# Create an API key (secret shown once)
curl -X POST "https://api.escrowgrid.com/tenants/ten_.../api-keys" \\
  -H "Idempotency-Key: api-key-001" \\
  -H "Content-Type: application/json" \\
  -d '{ "label": "dev", "scopes": ["writer"] }'`,
  },
  {
    title: "2. Create parties + an asset",
    code: `// Parties represent real counterparties (borrower/buyer/seller/SPV/custodian)
await fetch('https://api.escrowgrid.com/parties', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ displayName: 'Buyer Co', role: 'buyer' })
});

// Create an asset with a canonical schema
const response = await fetch('https://api.escrowgrid.com/assets', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    assetClass: 'trade_finance',
    assetKind: 'invoice',
    schemaVersion: 'v1',
    data: { invoiceNumber: 'INV-1001', amount: 250000, currency: 'USD' }
  })
});

const asset = await response.json();`,
  },
  {
    title: "3. Create a token series + mint",
    code: `// Create a token series for the asset
const seriesRes = await fetch('https://api.escrowgrid.com/token-series', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx',
    'Idempotency-Key': 'series-create-001',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    assetId: 'ast_...',
    symbol: 'INV1001',
    decimals: 0,
    execution: { mode: 'offchain' }
  })
});

const series = await seriesRes.json();

// Mint off-chain tokens (policy gated)
await fetch(\`https://api.escrowgrid.com/token-series/\${series.id}/offchain/mint\`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx',
    'Idempotency-Key': 'mint-001',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ toPartyId: 'pty_...', amount: '250000' })
});`,
  },
];

const endpoints = [
  { method: "POST", path: "/tenants", description: "Create tenant" },
  { method: "POST", path: "/tenants/:tenantId/api-keys", description: "Create API key" },
  { method: "POST", path: "/parties", description: "Create party" },
  { method: "POST", path: "/assets", description: "Create asset" },
  { method: "POST", path: "/assets/:assetId/evidence", description: "Attach evidence" },
  { method: "POST", path: "/attestations", description: "Create attestation (approval/KYC/AML/etc)" },
  { method: "POST", path: "/lifecycle/:assetId/transitions", description: "Request lifecycle transition" },
  { method: "POST", path: "/token-series", description: "Create token series" },
  { method: "POST", path: "/token-series/:seriesId/activate", description: "Activate token series" },
  { method: "POST", path: "/token-series/:seriesId/offchain/transfer", description: "Transfer off-chain tokens (gated)" },
  { method: "GET", path: "/audit/events", description: "Query audit events" },
];

const features = [
  {
    icon: Terminal,
    title: "RESTful API",
    description: "Clean, predictable REST API with JSON requests/responses and least-privilege scoped API keys (admin, writer, read_only).",
  },
  {
    icon: TestTube,
    title: "Sandbox Environment",
    description: "Full-featured demo environment with test data. Sandbox tenants available on request.",
  },
  {
    icon: Repeat,
    title: "Idempotency",
    description: "Safe retries on all write endpoints via Idempotency-Key.",
  },
  {
    icon: Database,
    title: "Audit Events",
    description: "Queryable audit stream with actor attribution for reporting and investigations.",
  },
];

export default function Developers() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <BadgePill variant="primary" className="mb-6">
              Developers
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get started in 10 minutes
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Clean REST APIs, comprehensive documentation, and sandbox testing.
              Build regulated tokenization workflows into your product quickly.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  Get API access
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="/architecture"
                >
                  Try the demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quick start
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Three steps to your first token series.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {codeExamples.map((example) => (
              <div
                key={example.title}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <div className="px-4 py-3 bg-muted border-b border-border">
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    {example.title}
                  </h3>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-muted-foreground">{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                RESTful API
              </h2>
              <p className="text-muted-foreground mb-6">
                Predictable, resource-oriented URLs. Standard HTTP methods. 
                JSON request and response bodies.
              </p>
              <div className="space-y-3">
                {endpoints.map((endpoint) => (
                  <div
                    key={endpoint.path}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span
                      className={`px-2 py-1 rounded font-mono text-xs font-medium ${
                        endpoint.method === "POST"
                          ? "bg-success/10 text-success"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-muted-foreground font-mono">
                      {endpoint.path}
                    </code>
                    <span className="text-muted-foreground">—</span>
                    <span className="text-foreground">{endpoint.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Sample Response
              </h3>
              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`{
  "id": "ser_abc123xyz",
  "assetId": "ast_456",
  "symbol": "INV1001",
  "decimals": 0,
  "status": "active",
  "execution": { "mode": "offchain" },
  "createdAt": "2025-01-15T10:30:00Z"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Features */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Developer experience
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
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

      {/* Authentication Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Authentication
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">API Key Authentication</h3>
                <p className="text-muted-foreground mb-4">
                  All API requests must be authenticated using a Bearer token. Include your API key in the Authorization header:
                </p>
                <pre className="bg-background border border-border rounded-lg p-4 text-sm overflow-x-auto mb-6">
                  <code className="text-muted-foreground">
                    {`Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx
Authorization: Bearer eg_test_xxxxxxxxxxxxxxxx`}
                  </code>
                </pre>

                <h4 className="font-semibold text-foreground mb-3">API Key Types</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-sm"><strong>Live keys (eg_live_)</strong> - Production environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span className="text-sm"><strong>Test keys (eg_test_)</strong> - Sandbox environment</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Environment Endpoints</h3>
                <div className="space-y-4">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Production</h4>
                    <code className="text-sm text-muted-foreground">https://api.escrowgrid.com</code>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Sandbox</h4>
                    <code className="text-sm text-muted-foreground">https://api.sandbox.escrowgrid.com</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations + Audit Events Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Integrations & audit events
            </h2>
            <p className="text-muted-foreground mb-8 text-center max-w-xl mx-auto">
              EscrowGrid treats approvals, KYC/AML, credit checks, trustees, and document automation as
              attestations. Issue them internally or request them from an integration adapter, then
              query the audit stream for reporting and downstream systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Audit stream</h3>
                <pre className="bg-background border border-border rounded-lg p-4 text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
{`# Query audit events (actor-attributed, immutable)
curl -X GET "https://api.escrowgrid.com/audit/events?limit=50" \\
  -H "Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx"`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Request attestations</h3>
                <pre className="bg-background border border-border rounded-lg p-4 text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
{`# Ask an integration adapter to issue an attestation
curl -X POST "https://api.escrowgrid.com/integrations/int_.../attestations/issue" \\
  -H "Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{ "kind": "kyc_pass", "subjectId": "pty_..." }'`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Error Handling
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">HTTP Status Codes</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span><code className="text-primary">200</code></span>
                    <span className="text-muted-foreground">Success</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">201</code></span>
                    <span className="text-muted-foreground">Resource created</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">400</code></span>
                    <span className="text-muted-foreground">Bad request</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">401</code></span>
                    <span className="text-muted-foreground">Unauthorized</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">403</code></span>
                    <span className="text-muted-foreground">Forbidden</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">404</code></span>
                    <span className="text-muted-foreground">Not found</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">429</code></span>
                    <span className="text-muted-foreground">Rate limit exceeded</span>
                  </div>
                  <div className="flex justify-between">
                    <span><code className="text-primary">500</code></span>
                    <span className="text-muted-foreground">Server error</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Error Response Format</h3>
                <pre className="bg-background border border-border rounded-lg p-4 text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
{`{
  "error": {
    "type": "invalid_request",
    "message": "Invalid tenant ID",
    "code": "INVALID_TENANT",
    "requestId": "req_abc123"
  }
}`}
                </code>
              </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limiting Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Rate Limiting
            </h2>
            <p className="text-muted-foreground mb-8">
              Rate limits are configurable by plan and deployment (SaaS vs on‑prem).
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Burst</div>
                <div className="text-sm text-muted-foreground">Short spikes supported</div>
                <div className="text-xs text-muted-foreground mt-2">Idempotent retries encouraged</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Sustained</div>
                <div className="text-sm text-muted-foreground">Stable throughput</div>
                <div className="text-xs text-muted-foreground mt-2">Per-tenant quotas</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">On‑prem</div>
                <div className="text-sm text-muted-foreground">You set the limits</div>
                <div className="text-xs text-muted-foreground mt-2">Scale via your infra</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to integrate?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get sandbox access and start building today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get API access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="/architecture"
              >
                Try the demo
                <Code2 className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
