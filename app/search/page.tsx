"use client";

import * as React from "react";
import { SearchInput } from "../../components/ui/SearchInput";

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-md max-w-2xl mx-auto">
      <h1 className="text-display text-primary-text mb-lg">Search</h1>
      <SearchInput placeholder="Search movies, TV shows, anime, or books..." className="max-w-md mx-auto mb-md" />
      <p className="text-small text-muted-text">
        Type to search across the entire Luma catalog.
      </p>
    </div>
  );
}
