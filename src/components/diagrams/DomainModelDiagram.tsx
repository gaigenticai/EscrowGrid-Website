import { ArrowDown, ArrowRight } from "lucide-react";

const levels = [
  { label: "Tenant", description: "Bank, lender, platform" },
  { label: "Parties", description: "Borrower, buyer/seller, SPV, custodian" },
  { label: "Asset", description: "Invoice, pay app, loan note, collateral" },
  { label: "Token Series", description: "Issuance + transfers via adapters" },
];

export function DomainModelDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      {levels.map((level, index) => (
        <div key={level.label} className="flex flex-col items-center">
          <div className="bg-card border border-border rounded-lg p-4 min-w-[200px] text-center hover:border-primary transition-colors">
            <span className="font-display font-semibold text-foreground">
              {level.label}
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              {level.description}
            </p>
          </div>
          {index < levels.length - 1 && (
            <ArrowDown className="h-6 w-6 text-muted-foreground my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
