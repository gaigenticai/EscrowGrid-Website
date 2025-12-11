import { FileText, Package, CreditCard, CheckCircle2 } from "lucide-react";

const stages = [
  {
    icon: FileText,
    label: "Invoice Created",
    description: "Seller submits invoice with terms",
    status: "complete",
  },
  {
    icon: CreditCard,
    label: "Funds Escrowed",
    description: "Buyer deposits 100% to escrow",
    status: "complete",
  },
  {
    icon: Package,
    label: "Goods Shipped",
    description: "Seller ships with tracking",
    status: "current",
  },
  {
    icon: CheckCircle2,
    label: "Funds Released",
    description: "Auto-release on delivery confirmation",
    status: "pending",
  },
];

export function TradeTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        return (
          <div
            key={stage.label}
            className={`relative bg-card rounded-lg border p-5 ${
              stage.status === "current"
                ? "border-primary shadow-md"
                : "border-border"
            }`}
          >
            {index < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
            )}
            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${
                stage.status === "complete"
                  ? "bg-success/10 text-success"
                  : stage.status === "current"
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm">
              {stage.label}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {stage.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
