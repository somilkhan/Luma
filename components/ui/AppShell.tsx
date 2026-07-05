"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Sparkles, BookOpen, Search, Settings, Menu, X } from "lucide-react";

export interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Cinema", href: "/cinema", icon: <Film className="w-5 h-5" /> },
    { name: "Anime", href: "/anime", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Read", href: "/read", icon: <BookOpen className="w-5 h-5" /> },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-transparent">
      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-medium transition-all duration-200 ${
                isActive
                  ? "glass text-primary-text font-medium"
                  : "text-secondary-text hover:text-primary-text hover:bg-glass-surface"
              }`}
            >
              {item.icon}
              <span className="text-body">{item.name}</span>
            </Link>
          );
        })}

        {/* Divider */}
        <div className="h-[1px] bg-divider my-4" />

        {/* Settings Item */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-medium text-muted-text hover:text-secondary-text hover:bg-glass-surface/50 cursor-not-allowed select-none transition-all duration-200">
          <span className="flex items-center gap-3">
            <Settings className="w-5 h-5" />
            <span className="text-body">Settings</span>
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-text/75 bg-secondary-surface border border-glass-border px-1.5 py-0.5 rounded-small">
            Soon
          </span>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-primary-text flex flex-col font-sans selection:bg-white/10 selection:text-white">
      {/* Fixed Header/Navbar (64px) */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md border-b border-glass-border z-sticky flex items-center px-6 justify-between">
        {/* Left: LUMA */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-secondary-text hover:text-primary-text transition-colors p-1.5 rounded-medium hover:bg-glass-surface focus:outline-none focus:ring-2 focus:ring-focus-ring"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <Link href="/" className="text-subheading font-bold tracking-[0.2em] text-primary-text hover:opacity-90 transition-opacity">
            LUMA
          </Link>
        </div>

        {/* Center: Search input (disabled placeholder) */}
        <div className="hidden md:flex flex-1 justify-center max-w-md mx-auto">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-text" />
            </div>
            <input
              type="text"
              disabled
              placeholder="Search movies, TV shows, anime, or books..."
              className="block w-full pl-10 pr-4 py-2 text-small bg-secondary-surface border border-glass-border rounded-pill text-muted-text placeholder-muted-text cursor-not-allowed opacity-60 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Guest Mode badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-glass-surface border border-glass-border rounded-pill">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-caption font-semibold text-secondary-text tracking-wider text-[11px] normal-case">
              Guest Mode
            </span>
          </div>
        </div>
      </header>

      {/* Under Navbar Layout */}
      <div className="flex flex-1 pt-16">
        {/* Desktop Sidebar (280px) */}
        <aside className="hidden md:block w-[280px] bg-black/40 backdrop-blur-md border-r border-glass-border h-[calc(100vh-64px)] fixed top-16 left-0 shrink-0 select-none z-fixed overflow-y-auto">
          {sidebarContent}
        </aside>

        {/* Mobile Sidebar Slide-out Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-modal md:hidden flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer content */}
            <aside className="relative flex flex-col w-[280px] bg-black/80 backdrop-blur-md border-r border-glass-border h-full shadow-soft-lg animate-fast z-10">
              <div className="h-16 flex items-center justify-between px-6 border-b border-glass-border">
                <span className="text-subheading font-bold tracking-[0.2em] text-primary-text">LUMA</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-text hover:text-primary-text p-1.5 rounded-medium hover:bg-glass-surface transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {sidebarContent}
              </div>
            </aside>
          </div>
        )}

        {/* Main Content Area - padded to the right to clear Sidebar */}
        <div className="flex-1 flex flex-col min-h-[calc(100vh-64px)] md:pl-[280px]">
          <main className="flex-1 px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto w-full flex flex-col justify-center">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-divider bg-primary-surface py-6 text-center text-small text-muted-text select-none">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs">© {new Date().getFullYear()} Luma. All rights reserved.</p>
              <div className="flex space-x-6 text-caption text-xs tracking-normal normal-case">
                <span className="hover:text-secondary-text cursor-not-allowed transition-colors">Terms</span>
                <span className="hover:text-secondary-text cursor-not-allowed transition-colors">Privacy</span>
                <span className="hover:text-secondary-text cursor-not-allowed transition-colors">Support</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
