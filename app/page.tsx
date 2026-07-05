import * as React from "react";
import Link from "next/link";
import { Film, Sparkles, BookOpen } from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Cinema",
      description: "Discover a curated collection of movies and television series.",
      href: "/cinema",
      icon: <Film className="w-6 h-6 text-primary-text" />,
    },
    {
      title: "Anime",
      description: "Explore immersive anime worlds, movies, and animated series.",
      href: "/anime",
      icon: <Sparkles className="w-6 h-6 text-primary-text" />,
    },
    {
      title: "Read",
      description: "Dive into handpicked manga, manhwa, and literary works.",
      href: "/read",
      icon: <BookOpen className="w-6 h-6 text-primary-text" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto py-12 md:py-20 select-none">
      {/* Hero Header */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-display tracking-tight text-primary-text">
          Welcome to Luma
        </h1>
        <p className="text-subheading text-secondary-text max-w-xl mx-auto font-light">
          Premium media platform for Movies, TV Shows, Anime and Reading.
        </p>
      </div>

      {/* Grid of 3 Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="glass group rounded-large p-8 flex flex-col justify-between hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 cursor-pointer text-left h-56 relative overflow-hidden"
          >
            {/* Soft subtle glow behind on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-white/5 border border-white/10 rounded-medium w-fit flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-200">
                {category.icon}
              </div>
              <h2 className="text-subheading font-semibold text-primary-text">
                {category.title}
              </h2>
              <p className="text-small text-secondary-text leading-relaxed">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
