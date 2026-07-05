import * as React from "react";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  align?: "left" | "right";
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  align = "right",
  className = "",
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left" ref={containerRef} {...props}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-xs w-56 rounded-medium bg-primary-surface border border-divider shadow-soft-lg z-dropdown py-xs focus:outline-none ${className}`}
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className = "",
  active = false,
  ...props
}) => {
  return (
    <button
      className={`w-full text-left px-md py-sm text-small transition-colors duration-150 flex items-center justify-between ${
        active 
          ? "bg-secondary-surface text-primary-text" 
          : "text-secondary-text hover:text-primary-text hover:bg-secondary-surface"
      } ${className}`}
      role="menuitem"
      {...props}
    >
      {children}
    </button>
  );
};

DropdownItem.displayName = "DropdownItem";

export const DropdownSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  ...props
}) => {
  return <div className={`h-[1px] bg-divider my-xs ${className}`} {...props} />;
};

DropdownSeparator.displayName = "DropdownSeparator";
