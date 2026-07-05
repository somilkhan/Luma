import * as React from "react";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  className = "",
  children,
  ...props
}) => {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-md">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg bg-primary-surface border border-divider rounded-extra-large p-lg shadow-soft-lg z-10 overflow-hidden animate-fast"
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-md right-md text-muted-text hover:text-primary-text rounded-medium p-xs transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        {(title || description) && (
          <div className="mb-lg pr-lg">
            {title && <h2 className="text-subheading font-bold text-primary-text">{title}</h2>}
            {description && <p className="text-small text-muted-text mt-xs">{description}</p>}
          </div>
        )}

        {/* Content */}
        <div className={`text-body text-secondary-text ${className}`}>{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = "Modal";
