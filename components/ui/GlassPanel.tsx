import * as React from "react";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "sm" | "md" | "lg";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className = "", intensity = "md", children, ...props }, ref) => {
    const glassStyles = {
      sm: "glass-sm",
      md: "glass",
      lg: "glass-lg",
    };

    return (
      <div
        ref={ref}
        className={`${glassStyles[intensity]} rounded-large p-lg ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
