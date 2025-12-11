import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { BadgePill } from "@/components/ui/badge-pill";
import { Building2, Ship, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Construction Escrow",
    description:
      "Progress-based draws, milestone releases, and retainage management for infrastructure and real estate projects.",
    href: "/solutions/construction-escrow",
    templates: ["CONSTR_ESCROW", "CONSTR_RETAINAGE"],
  },
  {
    icon: Ship,
    title: "Trade Finance Escrow",
    description:
      "Invoice-backed and LC-style flows with counterparty risk mitigation for import/export transactions.",
    href: "/solutions/trade-finance-escrow",
    templates: ["TF_INVOICE", "TF_LC"],
  },
];

export default function Solutions() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <BadgePill variant="primary" className="mb-6">
              Solutions
            </BadgePill>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Purpose-built escrow solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Pre-configured templates and workflows designed for specific industries. 
              Start with our solutions, customize to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.href}
                  className="group bg-background rounded-xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.templates.map((template) => (
                      <BadgePill key={template} variant="muted">
                        {template}
                      </BadgePill>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need a custom solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our platform is highly configurable. Let's discuss how we can tailor 
            EscrowGrid to your specific requirements.
          </p>
          <a
            href="https://calendly.com/krishnagai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Talk to us
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
