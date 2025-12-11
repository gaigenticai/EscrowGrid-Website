import { PageLayout } from "@/components/layout/PageLayout";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <BadgePill variant="primary" className="mb-6">
              Contact
            </BadgePill>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's talk
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to modernize your escrow operations? Schedule a demo or reach out directly.
            </p>

            <div className="max-w-md mx-auto">
              {/* Book a Demo */}
              <a
                href="https://calendly.com/krishnagai"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all text-left block"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Book a demo
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  30-minute call to explore how EscrowGrid fits your needs.
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Schedule on Calendly
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
