"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Sparkles, BookOpen, Home } from "lucide-react";

export interface FloatingDockProps {}

export const FloatingDock: React.FC<FloatingDockProps> = () => {
  const pathname = usePathname();

  const dockItems = [
    { name: "Cinema", href: "/", icon: <Film className="w-5.5 h-5.5" /> },
    { name: "Anime", href: "/anime", icon: <Sparkles className="w-5.5 h-5.5" /> },
    { name: "Read", href: "/read", icon: <BookOpen className="w-5.5 h-5.5" /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 select-none pointer-events-auto touch-manipulation">
      <div className="flex items-center gap-2 px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 touch-manipulation">
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              id={`dock-item-${item.name.toLowerCase()}`}
              className={`relative p-3 rounded-full transition-colors duration-200 flex items-center justify-center group touch-manipulation focus:outline-none select-none outline-none ${
                isActive
                  ? "bg-white/15 text-white border border-white/10 shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
              title={item.name}
            >
              {item.icon}
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-medium text-white bg-zinc-900 border border-white/10 rounded-md opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-top-12 shadow-xl whitespace-nowrap">
                {item.name}
              </span>

              {/* Active Indicator dot */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
