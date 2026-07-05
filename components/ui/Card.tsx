import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "secondary" | "glass";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "surface", children, ...props }, ref) => {
    const variants = {
      surface: "bg-primary-surface border border-divider",
      secondary: "bg-secondary-surface border border-divider",
      glass: "glass",
    };

    return (
      <div
        ref={ref}
        className={`rounded-large p-lg ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-sm mb-md ${className}`} {...props}>
    {children}
  </div>
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-subheading font-semibold text-primary-text ${className}`} {...props}>
    {children}
  </h3>
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-small text-muted-text ${className}`} {...props}>
    {children}
  </p>
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-body text-secondary-text ${className}`} {...props}>
    {children}
  </div>
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center pt-md mt-md border-t border-divider ${className}`} {...props}>
    {children}
  </div>
);
CardFooter.displayName = "CardFooter";
