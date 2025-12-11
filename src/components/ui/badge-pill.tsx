import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgePillProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "muted";
  className?: string;
}

export function BadgePill({ children, variant = "default", className }: BadgePillProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    muted: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
