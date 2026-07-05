import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-white text-background hover:bg-neutral-200",
      secondary: "bg-secondary-surface text-primary-text border border-divider hover:bg-neutral-800",
      glass: "glass text-primary-text hover:bg-[rgba(255,255,255,0.08)]",
      outline: "bg-transparent text-primary-text border border-divider hover:border-muted-text hover:bg-primary-surface",
      ghost: "bg-transparent text-secondary-text hover:text-primary-text hover:bg-primary-surface",
    };

    const sizes = {
      sm: "px-sm py-xs text-small",
      md: "px-md py-sm text-body",
      lg: "px-lg py-md text-subheading",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
