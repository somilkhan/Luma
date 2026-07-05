import * as React from "react";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (value: string) => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className = "", onSearchChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onSearchChange) {
        onSearchChange(e.target.value);
      }
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <div className="relative flex items-center w-full">
        {/* Search Icon */}
        <div className="absolute left-md text-muted-text pointer-events-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Input */}
        <input
          ref={ref}
          type="text"
          className={`flex w-full bg-secondary-surface text-primary-text border border-divider rounded-pill pl-xl pr-md py-sm text-body placeholder:text-muted-text transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
