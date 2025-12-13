import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Construction Finance", href: "/solutions/construction" },
      { label: "Trade Finance", href: "/solutions/trade-finance" },
      { label: "Lending", href: "/solutions/lending" },
    ],
  },
  // { label: "Pricing", href: "/pricing" }, // Hidden from navigation
  { label: "Architecture", href: "/architecture" },
  { label: "Developers", href: "/developers" },
  { label: "Security", href: "/security-compliance" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm">
            eg
          </div>
          <span className="font-display font-semibold text-lg text-foreground">
            EscrowGrid
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`gap-1 ${
                      location.pathname.startsWith("/solutions")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link
                        to={child.href}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                <Link
                  to={item.href}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.label}
                </Link>
              </Button>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild>
            <a
              href="https://calendly.com/krishnagai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="px-3 py-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="px-6 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                      onClick={() => {
                        setMobileOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 text-sm rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border mt-2">
              <Button asChild className="w-full">
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
