import { CheckCircle2, Circle, Clock } from "lucide-react";

const milestones = [
  { phase: "Foundation", status: "complete", amount: "$250K" },
  { phase: "Structural", status: "complete", amount: "$400K" },
  { phase: "MEP Rough-in", status: "current", amount: "$350K" },
  { phase: "Interior Finishes", status: "pending", amount: "$300K" },
  { phase: "Final Completion", status: "pending", amount: "$200K + Retainage" },
];

export function ConstructionTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.phase}
            className="relative flex items-start gap-4 pl-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative z-10 flex-shrink-0">
              {milestone.status === "complete" ? (
                <CheckCircle2 className="h-12 w-12 text-success bg-background p-1" />
              ) : milestone.status === "current" ? (
                <Clock className="h-12 w-12 text-primary bg-background p-1" />
              ) : (
                <Circle className="h-12 w-12 text-muted-foreground bg-background p-1" />
              )}
            </div>
            <div
              className={`flex-1 bg-card rounded-lg border p-4 ${
                milestone.status === "current"
                  ? "border-primary shadow-md"
                  : "border-border"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {milestone.phase}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.status === "complete"
                      ? "Funds released"
                      : milestone.status === "current"
                      ? "Awaiting inspection"
                      : "Scheduled"}
                  </p>
                </div>
                <span className="font-display font-semibold text-primary">
                  {milestone.amount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
