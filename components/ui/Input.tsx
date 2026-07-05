import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`flex w-full bg-secondary-surface text-primary-text border ${
          error ? "border-error focus:ring-error" : "border-divider focus:ring-focus-ring"
        } rounded-medium px-md py-sm text-body placeholder:text-muted-text transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
