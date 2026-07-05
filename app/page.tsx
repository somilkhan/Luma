import * as React from "react";
import { Film, Sparkles, BookOpen } from "lucide-react";

export default function Home() {
  const cards = [
    {
      title: "Cinema",
      description: "Discover a curated collection of movies and television series.",
      icon: <Film className="w-6 h-6 text-primary-text" />,
    },
    {
      title: "Anime",
      description: "Explore immersive anime worlds, movies, and animated series.",
      icon: <Sparkles className="w-6 h-6 text-primary-text" />,
    },
    {
      title: "Read",
      description: "Dive into handpicked manga, manhwa, and literary works.",
      icon: <BookOpen className="w-6 h-6 text-primary-text" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto py-12 md:py-20 select-none text-center">
      {/* Hero Header */}
      <div className="space-y-6 mb-16">
        <h1 className="text-display font-bold tracking-tight text-primary-text">
          Welcome to Luma
        </h1>
        <div className="space-y-2">
          <p className="text-subheading font-medium tracking-wide text-primary-text uppercase text-[13px] opacity-80">
            Premium Media Platform
          </p>
          <p className="text-body text-secondary-text font-light tracking-wide text-sm md:text-base">
            Movies • TV Shows • Anime • Reading
          </p>
        </div>
      </div>

      {/* Grid of 3 Glass Cards (Static, no links, no underlines) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="glass group rounded-[20px] p-8 flex flex-col justify-between hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 text-left h-56 relative overflow-hidden"
          >
            {/* Soft subtle glow behind on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-white/5 border border-white/10 rounded-medium w-fit flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-200">
                {card.icon}
              </div>
              <h2 className="text-subheading font-semibold text-primary-text">
                {card.title}
              </h2>
              <p className="text-small text-secondary-text leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
