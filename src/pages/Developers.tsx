import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { FeatureCard } from "@/components/ui/feature-card";
import { Code2, Terminal, Webhook, TestTube, ArrowRight } from "lucide-react";

const codeExamples = [
  {
    title: "1. Authentication",
    code: `// Every API request must include your API key
curl -X POST "https://api.escrowgrid.com/v1/positions" \\
  -H "Authorization: Bearer eg_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "institutionId": "inst_acme123",
    "templateId": "CONSTR_ESCROW",
    "amount": 1500000
  }'`,
  },
  {
    title: "2. Create a position",
    code: `const response = await fetch('https://api.escrowgrid.com/v1/positions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    institutionId: 'inst_acme123',
    templateId: 'CONSTR_ESCROW',
    assetId: 'project_456',
    amount: 1500000,
    currency: 'USD',
    metadata: {
      projectName: 'Tower Heights'
    }
  })
});

const position = await response.json();
// position.state === "PENDING"`,
  },
  {
    title: "3. Get position status",
    code: `const response = await fetch('https://api.escrowgrid.com/v1/positions/pos_abc123', {
  headers: {
    'Authorization': 'Bearer eg_live_xxxxxxxxxxxxxxxx'
  }
});

const position = await response.json();
console.log(position.state); // "FUNDED", "COMPLETED", etc.`,
  },
];

const endpoints = [
  { method: "POST", path: "/institutions", description: "Create institution" },
  { method: "GET", path: "/institutions/:id", description: "Get institution" },
  { method: "POST", path: "/templates", description: "Create template" },
  { method: "POST", path: "/positions", description: "Open position" },
  { method: "GET", path: "/positions/:id", description: "Get position" },
  { method: "POST", path: "/positions/:id/events", description: "Post event" },
  { method: "GET", path: "/positions/:id/history", description: "Get history" },
];

const features = [
  {
    icon: Terminal,
    title: "RESTful API",
    description: "Clean, predictable REST API with JSON requests/responses. Standard HTTP methods.",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time notifications for state changes, events, and system alerts.",
  },
  {
    icon: TestTube,
    title: "Sandbox Environment",
    description: "Full-featured test environment. No real money, full API access.",
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
              Build escrow functionality into your product quickly.
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
              Three steps to your first escrow position.
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
  "id": "pos_abc123xyz",
  "institutionId": "inst_acme",
  "templateId": "CONSTR_ESCROW",
  "assetId": "project_456",
  "state": "FUNDED",
  "amount": 1500000,
  "currency": "USD",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T14:22:00Z",
  "metadata": {
    "projectName": "Tower Heights"
  }
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
                    <code className="text-sm text-muted-foreground">https://api.escrowgrid.com/v1</code>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Sandbox</h4>
                    <code className="text-sm text-muted-foreground">https://api.sandbox.escrowgrid.com/v1</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Webhooks
            </h2>
            <p className="text-muted-foreground mb-8 text-center max-w-xl mx-auto">
              Receive real-time notifications when important events happen in your escrow positions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Event Types</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <code className="text-primary">position.created</code>
                    <span className="text-muted-foreground ml-2">New position opened</span>
                  </div>
                  <div className="text-sm">
                    <code className="text-primary">position.funded</code>
                    <span className="text-muted-foreground ml-2">Funds received</span>
                  </div>
                  <div className="text-sm">
                    <code className="text-primary">position.completed</code>
                    <span className="text-muted-foreground ml-2">Position completed</span>
                  </div>
                  <div className="text-sm">
                    <code className="text-primary">position.cancelled</code>
                    <span className="text-muted-foreground ml-2">Position cancelled</span>
                  </div>
                  <div className="text-sm">
                    <code className="text-primary">event.created</code>
                    <span className="text-muted-foreground ml-2">Custom event created</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Webhook Signature</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  All webhook requests include a signature header for verification:
                </p>
                <pre className="bg-background border border-border rounded-lg p-3 text-xs overflow-x-auto mb-4">
                  <code className="text-muted-foreground">
                    {`X-EscrowGrid-Signature: sha256=xxxxx
X-EscrowGrid-Timestamp: 1640995200`}
                  </code>
                </pre>
                <p className="text-muted-foreground text-sm">
                  Verify signatures using your webhook secret key.
                </p>
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
    "message": "Invalid institution ID",
    "code": "INVALID_INSTITUTION",
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
              API requests are rate limited to ensure fair usage and system stability.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">1,000</div>
                <div className="text-sm text-muted-foreground">Requests per hour</div>
                <div className="text-xs text-muted-foreground mt-2">Standard plan</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">5,000</div>
                <div className="text-sm text-muted-foreground">Requests per hour</div>
                <div className="text-xs text-muted-foreground mt-2">Pro plan</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Unlimited</div>
                <div className="text-sm text-muted-foreground">Requests per hour</div>
                <div className="text-xs text-muted-foreground mt-2">Enterprise plan</div>
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
