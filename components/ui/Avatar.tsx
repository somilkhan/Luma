import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Profile",
  fallback,
  size = "md",
  className = "",
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);

  const sizes = {
    sm: "w-8 h-8 text-caption",
    md: "w-10 h-10 text-small",
    lg: "w-16 h-16 text-subheading",
  };

  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-pill bg-secondary-surface border border-divider justify-center items-center font-bold text-primary-text select-none ${sizes[size]} ${className}`}
      {...props}
    >
      {src && !hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="uppercase">{fallback.slice(0, 2)}</span>
      )}
    </div>
  );
};

Avatar.displayName = "Avatar";
