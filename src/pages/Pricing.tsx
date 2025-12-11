import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  Shield,
  Users,
  HeadphonesIcon,
  Crown,
  Rocket,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Perfect for startups and pilots",
    price: "Custom",
    icon: Rocket,
    features: [
      "Up to $10M in monthly escrow volume",
      "Basic templates (General Escrow)",
      "US region only",
      "Email support",
      "Basic audit logs",
      "Standard API access",
    ],
    limitations: [
      "No custom templates",
      "No webhook support",
      "No dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing financial institutions",
    price: "Custom",
    icon: TrendingUp,
    features: [
      "Up to $100M in monthly escrow volume",
      "All starter features +",
      "Custom templates & workflows",
      "Multi-region support (US, EU, UK, SG, UAE)",
      "Webhook integrations",
      "Advanced policy engine",
      "Priority support (24h response)",
      "Team collaboration tools",
      "Advanced reporting & analytics",
    ],
    limitations: [],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large institutions with complex needs",
    price: "Custom",
    icon: Crown,
    features: [
      "Unlimited escrow volume",
      "All Growth features +",
      "Dedicated infrastructure options",
      "Custom compliance rules",
      "Blockchain integration",
      "White-label solutions",
      "Dedicated account manager",
      "SLA guarantees (99.9% uptime)",
      "On-premises deployment option",
      "Custom integrations & APIs",
    ],
    limitations: [],
    cta: "Contact Enterprise Team",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does pricing work?",
    answer: "EscrowGrid pricing is based on your monthly escrow volume and feature requirements. We offer custom quotes for each institution to ensure you get the best value for your specific use case."
  },
  {
    question: "What's included in the setup fee?",
    answer: "The setup fee includes onboarding assistance, template configuration, team training, and integration support. We typically get you up and running within 2-3 weeks."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure a smooth transition as your needs evolve."
  },
  {
    question: "Do you offer non-profit or educational discounts?",
    answer: "Yes, we offer special pricing for qualified educational institutions and non-profits. Contact our sales team to learn more."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept wire transfers, ACH payments, and cryptocurrency payments for institutional customers. All payments are processed securely through our escrow system."
  }
];

export default function Pricing() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BadgePill variant="primary" className="mb-6">
              Pricing
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent pricing for institutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Simple, predictable pricing with no hidden fees. Scale as you grow with
              enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/architecture">
                  Try Free Demo
                  <Rocket className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular
                  ? 'ring-2 ring-primary shadow-xl scale-105'
                  : 'border-border hover:shadow-lg transition-shadow'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <BadgePill variant="primary" className="px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </BadgePill>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">Custom pricing based on volume</div>
                  </div>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a
                      href="https://calendly.com/krishnagai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground mb-2">Limitations:</div>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation) => (
                          <div key={limitation} className="text-xs text-muted-foreground">
                            • {limitation}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why choose EscrowGrid?
              </h2>
              <p className="text-muted-foreground">
                Enterprise-grade infrastructure that pays for itself in efficiency and compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Reduce Operational Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Cut manual processing time by 80% with automated workflows and smart templates.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Eliminate Compliance Risk</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in policy enforcement reduces regulatory violations and audit findings.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Scale Faster</h3>
                <p className="text-sm text-muted-foreground">
                  Launch new escrow products in weeks, not months, with our proven infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Got questions? We're here to help.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Talk to our team about your escrow needs and get a custom pricing proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Schedule a Consultation
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/contact">
                  Contact Sales Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}