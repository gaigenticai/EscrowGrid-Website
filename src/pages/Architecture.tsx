import { PageLayout } from "@/components/layout/PageLayout";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DomainModelDiagram } from "@/components/diagrams/DomainModelDiagram";
import { EscrowFlowDiagram } from "@/components/diagrams/EscrowFlowDiagram";
import {
  ArrowRight,
  Blocks,
  Shield,
  Database,
  Repeat,
  Coins,
  Settings,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";

const executionRails = [
  {
    icon: Coins,
    title: "Off-chain ledger",
    description:
      "Event-sourced balances and transfers inside EscrowGrid (no blockchain required).",
  },
  {
    icon: Repeat,
    title: "Permissioned networks",
    description:
      "Settle issuance/transfers on private networks (Corda/Hyperledger/Quorum-style) via adapters.",
  },
  {
    icon: Settings,
    title: "Custodian / transfer-agent rails",
    description:
      "Keep positions in an existing loan/securities ledger; token ops become signed instructions.",
  },
  {
    icon: Blocks,
    title: "EVM smart contracts",
    description:
      "Settle on-chain through an execution adapter and your preferred custody/settlement model.",
  },
];

export default function Architecture() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <BadgePill variant="primary" className="mb-6">
              Architecture
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              A clean control plane for real‑world asset tokenization
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              EscrowGrid is infrastructure — not a marketplace. We standardize the hard parts
              (schemas, evidence, lifecycle gates, audit logs, token issuance/transfer), and you
              plug in your preferred execution rails and compliance stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/developers">
                  Explore the API
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/security-compliance">
                  Security posture
                  <Shield className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core model */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Core domain model
              </h2>
              <p className="text-muted-foreground mb-6">
                Everything is tenant-scoped. Parties represent real counterparties. Assets carry
                canonical schemas and evidence. Token series provide issuance and transfer with a
                pluggable execution layer.
              </p>
              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Lifecycle (canonical default)
                </h3>
                <EscrowFlowDiagram />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-background rounded-xl border border-border p-6 w-full max-w-md">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Tenant → Token Series
                </h3>
                <DomainModelDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control plane vs execution */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Control plane + execution adapters
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The same APIs drive all settlement models. EscrowGrid enforces gates and records a
              complete audit trail; execution adapters settle issuance/transfers on your chosen
              rail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionRails.map((rail) => {
              const Icon = rail.icon;
              return (
                <Card key={rail.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {rail.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{rail.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event-sourced backbone */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Event‑sourced by design
              </h2>
              <p className="text-muted-foreground mb-6">
                Mutations emit immutable events with actor attribution. That makes audit exports,
                reconstructions, and invariant enforcement first-class.
              </p>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Queryable audit events</div>
                  <div className="text-sm text-muted-foreground">
                    Use `/audit/events` as an integration point for reporting and investigations.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`# Example flow
POST /assets
POST /assets/{assetId}/evidence
POST /attestations
POST /lifecycle/{assetId}/transitions
POST /token-series
POST /token-series/{seriesId}/activate
POST /token-series/{seriesId}/.../mint`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Deploy SaaS or on‑prem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with a trial license and upgrade to paid without reinstall or data loss.
              Package and run via Docker Compose or Helm.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">On‑prem</h3>
                    <p className="text-sm text-muted-foreground">
                      Run in your VPC or datacenter with your own Postgres and key management. Same
                      data, same tenant, trial → paid by applying a license token.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">SaaS</h3>
                    <p className="text-sm text-muted-foreground">
                      Use a hosted control plane with scoped API keys, audit exports, and optional
                      adapters for execution and attestations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

