import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow",
        className
      )}
    >
      {Icon && (
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      )}
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
