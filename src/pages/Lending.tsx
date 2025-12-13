import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent } from "@/components/ui/card";
import {
  Landmark,
  FileText,
  Shield,
  ArrowRight,
  Coins,
  Repeat,
  Settings,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const lendingAssetKinds = [
  {
    title: "Loan Notes",
    kind: "loan_note",
    description: "Whole loans or participation notes with gated origination and servicing states.",
  },
  {
    title: "Loan Pools",
    kind: "loan_pool",
    description: "Pools for warehousing, syndication, or structured finance workflows.",
  },
  {
    title: "Collateral Records",
    kind: "collateral",
    description: "Tokenize collateral metadata with attestations for appraisal and lien confirmation.",
  },
];

const executionOptions = [
  {
    icon: Coins,
    title: "Off-chain ledger",
    description:
      "Balances and transfers live in EscrowGrid’s event-sourced ledger with policy + gate enforcement.",
  },
  {
    icon: Repeat,
    title: "EVM smart contracts",
    description:
      "Settle issuance/transfers on-chain (EVM) through an execution adapter and your preferred custody model.",
  },
  {
    icon: Repeat,
    title: "Permissioned networks",
    description:
      "Settle issuance/transfers on Corda/Hyperledger/Quorum-style rails via an execution adapter.",
  },
  {
    icon: Settings,
    title: "Custodian / transfer agent rails",
    description:
      "Positions remain in a client’s existing loan/securities ledger; token ops become signed instructions.",
  },
];

const typicalGates = [
  "legal_docs_signed",
  "credit_score_attested",
  "loan_approved",
  "anti_double_finance_check",
  "kyc_pass",
  "aml_pass",
  "payment_confirmed",
];

export default function Lending() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-8 sm:py-12 md:py-20 bg-card border-y-2 border-dashed-monochrome">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <BadgePill className="mb-4 sm:mb-6 border-2 border-dotted-monochrome">
                <Landmark className="w-3 h-3 mr-1" />
                Lending
              </BadgePill>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-shadow-retro">
                Tokenize loans without
                <span className="block border-b-2 sm:border-b-4 border-current pb-1 sm:pb-2">
                  building your own rails
                </span>
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                EscrowGrid is an API-first control plane for loan and collateral tokenization:
                evidence, lifecycle gates, and auditability — with pluggable execution (off-chain,
                permissioned, EVM, or custodian/transfer-agent instructions). We are infrastructure,
                not a marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome text-shadow-retro"
                  asChild
                >
                  <Link to="/developers" className="text-background">
                    Explore the API
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-dotted-monochrome hover:bg-accent"
                  asChild
                >
                  <a
                    href="https://calendly.com/krishnagai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk lending workflows
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-secondary rounded-xl border-2 border-dotted-monochrome p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                What you tokenize
              </h3>
              <div className="grid gap-3">
                {lendingAssetKinds.map((item) => (
                  <div
                    key={item.kind}
                    className="bg-card rounded-lg border border-dotted-monochrome p-4"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="font-medium text-foreground text-sm">{item.title}</div>
                      <BadgePill variant="muted" className="text-xs">
                        {item.kind}
                      </BadgePill>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle + gates */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lifecycle enforcement, not spreadsheets
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every token operation can be gated by evidence and attestations (internal approvals or
              external integrations). Canonical gates ship by default; tenants can safely tighten or
              loosen requirements via overrides.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-pattern border-2 border-dashed-monochrome">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Common lending gates
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {typicalGates.map((gate) => (
                    <div
                      key={gate}
                      className="bg-card rounded-lg border border-dotted-monochrome p-3 flex items-start gap-3"
                    >
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground">{gate}</div>
                        <div className="text-xs text-muted-foreground">
                          Attestation required for one or more lifecycle steps.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p>
                    Anti-double-finance checks can be internal (within your tenant data) and/or
                    external (registry/partner data). EscrowGrid records the proof as attestations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-pattern border-2 border-dashed-monochrome">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Execution options
                </h3>
                <div className="space-y-3">
                  {executionOptions.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.title}
                        className="bg-card rounded-lg border border-dotted-monochrome p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center border border-dotted-monochrome">
                            <Icon className="h-5 w-5 text-foreground" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{opt.title}</div>
                            <p className="text-sm text-muted-foreground">{opt.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
