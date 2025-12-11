import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { ArrowRight, Layers, Settings, Users } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Infrastructure first, not marketplace",
    description:
      "We build the rails. You own the relationships. EscrowGrid never competes with our customers for end clients.",
  },
  {
    icon: Settings,
    title: "Configurable, not bespoke",
    description:
      "Our platform adapts to your workflows through configuration, not custom code. Launch faster, iterate continuously.",
  },
  {
    icon: Users,
    title: "Institution-native design",
    description:
      "Built from day one for banks, NBFCs, and regulated platforms. Not a consumer product retrofitted for enterprise.",
  },
];

export default function Company() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <BadgePill variant="primary" className="mb-6">
              Company
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why we're building EscrowGrid
            </h1>
            <p className="text-lg text-muted-foreground">
              Escrow is critical infrastructure for complex transactions. Yet most institutions 
              still run on spreadsheets, emails, and manual processes. We're changing that.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              The problem we saw
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Construction lenders tracking $100M+ projects in Excel. Trade finance desks 
                manually reconciling release conditions across email threads. Fintech platforms 
                building escrow logic from scratch every time.
              </p>
              <p>
                The escrow industry moves trillions of dollars annually, but the infrastructure 
                behind it hasn't kept pace. Every institution reinvents the wheel — or worse, 
                relies on fragile manual processes that introduce risk.
              </p>
              <p>
                <strong className="text-foreground">
                  EscrowGrid exists to provide the modern infrastructure layer that institutions need.
                </strong>{" "}
                Purpose-built APIs, configurable templates, and policy engines that scale 
                from your first position to your millionth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our principles
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="text-center">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What's next
            </h2>
            <p className="text-muted-foreground mb-8">
              We're continuously expanding EscrowGrid's capabilities. Upcoming features include 
              enhanced multi-currency support, additional regional policy modules, and deeper 
              integrations with banking and payment systems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <BadgePill variant="muted">Multi-currency ledger</BadgePill>
              <BadgePill variant="muted">Payment rail integrations</BadgePill>
              <BadgePill variant="muted">Mobile admin app</BadgePill>
              <BadgePill variant="muted">Advanced analytics</BadgePill>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let's build the future of escrow together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're exploring a new escrow product or modernizing existing operations, 
            we'd love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            </div>
        </div>
      </section>
    </PageLayout>
  );
}
