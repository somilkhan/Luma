import * as React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rect" | "circle";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "rect",
  ...props
}) => {
  const baseClass = "animate-pulse bg-secondary-surface";
  
  const variants = {
    text: "h-4 w-full rounded-small",
    rect: "w-full h-full rounded-medium",
    circle: "rounded-pill",
  };

  return (
    <div
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

Skeleton.displayName = "Skeleton";
