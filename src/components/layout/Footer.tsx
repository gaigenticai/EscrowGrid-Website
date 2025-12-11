import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/platform" },
    { label: "Security & Compliance", href: "/security-compliance" },
    { label: "Developers", href: "/developers" },
  ],
  Solutions: [
    { label: "Construction Escrow", href: "/solutions/construction-escrow" },
    { label: "Trade Finance Escrow", href: "/solutions/trade-finance-escrow" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm">
                eg
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                EscrowGrid
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Institutional escrow infrastructure for construction and trade finance.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EscrowGrid. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://calendly.com/krishnagai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
