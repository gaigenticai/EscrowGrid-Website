import { ArrowRight } from "lucide-react";

const states = [
  { label: "draft", color: "bg-muted text-muted-foreground" },
  { label: "submitted", color: "bg-primary/10 text-primary" },
  { label: "verified", color: "bg-primary/20 text-primary" },
  { label: "tokenized", color: "bg-primary text-primary-foreground" },
  { label: "financed", color: "bg-success/90 text-success-foreground" },
  { label: "servicing", color: "bg-success text-success-foreground" },
  { label: "closed", color: "bg-muted text-muted-foreground" },
];

export function EscrowFlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-center gap-2 md:gap-4 min-w-max p-4">
        {states.map((state, index) => (
          <div key={state.label} className="flex items-center gap-2 md:gap-4">
            <div
              className={`px-4 py-3 rounded-lg font-display font-semibold text-sm md:text-base ${state.color} animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {state.label}
            </div>
            {index < states.length - 1 && (
              <ArrowRight className="h-5 w-5 text-muted-foreground animate-flow-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
