"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "./Avatar";

export interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", href: "/", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { name: "Cinema", href: "/cinema", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    )},
    { name: "Anime", href: "/anime", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )},
    { name: "Read", href: "/read", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { name: "Search", href: "/search", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )},
  ];

  return (
    <div className="min-h-screen bg-background text-primary-text flex flex-col md:flex-row font-sans">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-primary-surface border-r border-divider h-screen sticky top-0 shrink-0 select-none z-sticky">
        {/* Logo */}
        <div className="h-20 flex items-center px-lg border-b border-divider">
          <Link href="/" className="text-heading font-extrabold tracking-[0.15em] text-primary-text hover:opacity-90 transition-opacity">
            LUMA
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-md py-lg space-y-xs">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-md px-md py-sm rounded-medium text-body transition-all duration-150 ${
                  isActive
                    ? "bg-secondary-surface text-primary-text border-l-2 border-primary-text"
                    : "text-secondary-text hover:text-primary-text hover:bg-secondary-surface"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Guest and Settings Footer */}
        <div className="p-lg border-t border-divider space-y-md">
          {/* Guest Badge Placeholder */}
          <div className="flex items-center space-x-md bg-secondary-surface/55 px-md py-sm rounded-medium border border-divider">
            <Avatar fallback="G" size="sm" />
            <div className="min-w-0">
              <p className="text-small font-semibold text-primary-text truncate">Guest Mode</p>
              <p className="text-caption text-muted-text truncate">Luma Preview</p>
            </div>
          </div>

          {/* Settings Placeholder */}
          <div className="flex items-center justify-between text-muted-text text-small hover:text-primary-text cursor-not-allowed transition-colors py-xs">
            <span className="flex items-center space-x-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </span>
            <span className="text-caption bg-secondary-surface px-xs py-[2px] rounded-small border border-divider text-[10px]">Soon</span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Navbar */}
      <header className="md:hidden flex items-center justify-between px-lg h-16 bg-primary-surface border-b border-divider sticky top-0 z-sticky select-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary-text focus:outline-none p-xs hover:bg-secondary-surface rounded-medium transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <Link href="/" className="text-subheading font-extrabold tracking-[0.15em] text-primary-text" onClick={() => setIsMobileMenuOpen(false)}>
          LUMA
        </Link>

        {/* Profile Placeholder for Mobile */}
        <Avatar fallback="G" size="sm" />
      </header>

      {/* Mobile Sidebar (Drawer Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-modal md:hidden flex">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer content */}
          <aside className="relative flex flex-col w-64 bg-primary-surface h-full border-r border-divider p-md shadow-soft-lg animate-fast">
            <div className="flex items-center justify-between mb-xl pb-md border-b border-divider">
              <span className="text-subheading font-extrabold tracking-[0.15em] text-primary-text">LUMA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-muted-text hover:text-primary-text">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-xs">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-md px-md py-sm rounded-medium text-body transition-all duration-150 ${
                      isActive
                        ? "bg-secondary-surface text-primary-text border-l-2 border-primary-text"
                        : "text-secondary-text hover:text-primary-text hover:bg-secondary-surface"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Sidebar Footer */}
            <div className="pt-md border-t border-divider space-y-md">
              <div className="flex items-center space-x-md bg-secondary-surface/55 px-md py-sm rounded-medium border border-divider">
                <Avatar fallback="G" size="sm" />
                <div>
                  <p className="text-small font-semibold text-primary-text">Guest Mode</p>
                  <p className="text-caption text-muted-text">Luma Preview</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 px-lg py-xl max-w-7xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-divider bg-primary-surface py-lg text-center text-small text-muted-text select-none">
          <div className="max-w-7xl mx-auto px-lg flex flex-col md:flex-row items-center justify-between gap-md">
            <p>© {new Date().getFullYear()} Luma. All rights reserved.</p>
            <div className="flex space-x-lg text-caption">
              <span className="hover:text-secondary-text cursor-not-allowed">Terms</span>
              <span className="hover:text-secondary-text cursor-not-allowed">Privacy</span>
              <span className="hover:text-secondary-text cursor-not-allowed">Support</span>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};
