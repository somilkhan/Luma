"use client";

import * as React from "react";
import { Sparkles, Star, Play, Plus, Info, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Skeleton } from "@/components/ui/Skeleton";
import { Modal } from "@/components/ui/Modal";
import { SearchInput } from "@/components/ui/SearchInput";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

interface AnimeItem {
  id: number;
  title: string;
  type: string;
  releaseYear: number | null;
  rating: number | null;
  episodes: number | null;
  status: string | null;
  genres: string[];
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
}

export default function AnimePage() {
  const [data, setData] = React.useState<{
    trending: AnimeItem[];
    popular: AnimeItem[];
    topRated: AnimeItem[];
  } | null>(null);

  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<AnimeItem[] | null>(null);
  const [searching, setSearching] = React.useState(false);
  const [activeGenre, setActiveGenre] = React.useState("All");
  
  // Modal State
  const [selectedItem, setSelectedItem] = React.useState<AnimeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Load initial data
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/anime");
        if (res.ok) {
          const payload = await res.json();
          setData(payload);
        }
      } catch (err) {
        console.error("Failed to fetch anime data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Handle Search input
  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(`/api/anime?query=${encodeURIComponent(searchQuery)}`);
        if (res.ok) {
          const payload = await res.json();
          setSearchResults(payload.results || []);
        }
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setSearching(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleOpenModal = (item: AnimeItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const genresList = ["All", "Action", "Adventure", "Fantasy", "Drama", "Sci-Fi", "Supernatural", "Mystery"];

  // Helper to filter items based on genre
  const filterByGenre = (items: AnimeItem[]) => {
    if (activeGenre === "All") return items;
    return items.filter(item => 
      item.genres && item.genres.some(g => g.toLowerCase().includes(activeGenre.toLowerCase()))
    );
  };

  // Hero feature item
  const heroItem: AnimeItem | null = data?.trending?.[0] || null;

  return (
    <div className="space-y-xl pb-xxl">
      {/* 1. HERO SECTION */}
      {loading ? (
        <div className="w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden relative">
          <Skeleton className="w-full h-full" />
        </div>
      ) : heroItem ? (
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden group select-none border border-glass-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
          {/* Backdrop Image with heavy overlay */}
          <div className="absolute inset-0 z-0">
            {heroItem.backdropPath ? (
              <Image
                src={heroItem.backdropPath}
                alt={heroItem.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top transition-transform duration-[10000ms] ease-out scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-secondary-surface" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Hero Meta & CTA Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-lg md:p-xl z-10 flex flex-col items-start space-y-1.5 sm:space-y-sm md:space-y-md max-w-2xl w-full">
            <div className="flex items-center gap-xs">
              <span className="text-[9px] sm:text-[11px] font-bold tracking-wider uppercase bg-white/10 text-primary-text px-1.5 py-[2px] sm:px-sm sm:py-xs rounded-small backdrop-blur-md border border-glass-border">
                {heroItem.type}
              </span>
              {heroItem.rating && (
                <span className="flex items-center gap-[2px] text-[9px] sm:text-[11px] font-bold bg-white/10 text-warning px-1.5 py-[2px] sm:px-sm sm:py-xs rounded-small backdrop-blur-md border border-glass-border">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /> {heroItem.rating}
                </span>
              )}
              {heroItem.releaseYear && (
                <span className="text-[9px] sm:text-[11px] text-secondary-text px-1.5 py-[2px] sm:px-sm sm:py-xs rounded-small">
                  {heroItem.releaseYear}
                </span>
              )}
              {heroItem.episodes && (
                <span className="text-[9px] sm:text-[11px] text-secondary-text px-1.5 py-[2px] sm:px-sm sm:py-xs rounded-small">
                  {heroItem.episodes} Episodes
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-heading md:text-display font-bold text-primary-text tracking-tight leading-tight drop-shadow-lg line-clamp-2">
              {heroItem.title}
            </h1>

            <p className="hidden sm:line-clamp-2 md:line-clamp-3 text-small md:text-body text-secondary-text leading-relaxed drop-shadow-md">
              {heroItem.overview}
            </p>

            <div className="flex items-center gap-xs sm:gap-sm pt-xs sm:pt-sm">
              <Button variant="primary" size="sm" className="sm:size-md md:size-lg gap-xs sm:gap-sm font-semibold text-xs sm:text-sm px-2.5 py-1.5 sm:px-md sm:py-sm" onClick={() => handleOpenModal(heroItem)}>
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current" /> Watch Episode 1
              </Button>
              <Button variant="glass" size="sm" className="sm:size-md md:size-lg gap-xs sm:gap-sm text-xs sm:text-sm px-2.5 py-1.5 sm:px-md sm:py-sm" onClick={() => handleOpenModal(heroItem)}>
                <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> Details
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {/* 2. SEARCH & GENRE FILTERS PANEL */}
      <div className="space-y-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div>
            <h2 className="text-heading font-bold text-primary-text">Anime Library</h2>
            <p className="text-small text-muted-text">Explore high-fidelity animated masterpieces and weekly simulcasts</p>
          </div>
          
          <div className="w-full md:w-80">
            <SearchInput
              placeholder="Search anime series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Media Content Area */}
      <div className="space-y-xl">
        {loading ? (
          <div className="space-y-xl">
            {/* Loading skeletons for rows */}
            {Array.from({ length: 3 }).map((_, r) => (
              <div key={r} className="space-y-sm">
                <Skeleton className="h-6 w-48" />
                <div className="flex gap-md overflow-x-auto pb-sm scrollbar-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-32 xs:w-36 sm:w-44 md:w-48 flex-shrink-0 space-y-2">
                      <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden relative">
                        <Skeleton className="w-full h-full" />
                      </div>
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          // Search Results Grid
          <div className="space-y-md">
            <div className="flex items-center justify-between">
              <h3 className="text-subheading font-semibold text-primary-text flex items-center gap-xs">
                Search Results for <span className="text-secondary-text">"{searchQuery}"</span>
              </h3>
              <button
                onClick={() => setSearchQuery("")}
                className="text-small text-muted-text hover:text-primary-text flex items-center gap-xs transition-colors"
              >
                <X className="w-4 h-4" /> Clear
              </button>
            </div>

            {searching ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-md">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden relative">
                      <Skeleton className="w-full h-full" />
                    </div>
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                ))}
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-md">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenModal(item)}
                    className="group cursor-pointer space-y-2"
                  >
                    <div className="aspect-[2/3] w-full relative rounded-2xl overflow-hidden border border-glass-border shadow-soft-lg bg-secondary-surface">
                      {item.posterPath ? (
                        <Image
                          src={item.posterPath}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 20vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-text">
                          <Sparkles className="w-10 h-10 stroke-1 animate-pulse" />
                        </div>
                      )}
                      {item.rating && (
                        <div className="absolute top-2 right-2">
                          <span className="flex items-center gap-[2px] text-[9px] sm:text-[10px] font-bold bg-black/85 text-warning px-1.5 py-[2px] rounded-small border border-white/10 shadow-md">
                            ★ {item.rating}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-semibold text-primary-text truncate group-hover:text-white transition-colors">{item.title}</p>
                      <p className="text-[10px] sm:text-xs text-muted-text mt-[2px] font-medium">
                        {item.releaseYear} • {item.episodes ? `${item.episodes} eps` : "TV"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-xxl text-center">
                <Sparkles className="w-12 h-12 text-muted-text stroke-1 mb-md" />
                <p className="text-body text-secondary-text font-medium">No anime found</p>
                <p className="text-small text-muted-text mt-xs">Try searching for other top-tier series.</p>
              </div>
            )}
          </div>
        ) : (
          // Standard Vertical stack of Horizontal scroll Rows
          <div className="space-y-xl">
            {/* Section 1: Trending Seasonals (Landscape Cards as top featured row) */}
            {data?.trending && data.trending.length > 0 && (
              <div className="space-y-sm text-left">
                <div className="border-l-[3.5px] border-red-600 pl-3">
                  <h3 className="text-subheading font-bold text-primary-text leading-none">Trending Seasonals</h3>
                </div>
                <div className="flex gap-md overflow-x-auto pb-md scrollbar-none snap-x snap-mandatory px-xs -mx-xs pt-1">
                  {data.trending.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(item)}
                      className="w-56 xs:w-64 sm:w-72 md:w-80 flex-shrink-0 snap-start group cursor-pointer space-y-2"
                    >
                      <div className="aspect-[16/10] w-full relative rounded-2xl overflow-hidden border border-glass-border shadow-soft-lg bg-secondary-surface">
                        {item.backdropPath ? (
                          <Image
                            src={item.backdropPath}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 250px, 350px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        ) : item.posterPath ? (
                          <Image
                            src={item.posterPath}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 250px, 350px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-text">
                            <Sparkles className="w-10 h-10 stroke-1" />
                          </div>
                        )}
                        {item.rating && (
                          <div className="absolute top-2 right-2">
                            <span className="flex items-center gap-[2px] text-[9px] sm:text-[10px] font-bold bg-black/85 text-warning px-1.5 py-[2px] rounded-small border border-white/10 shadow-md">
                              ★ {item.rating}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-xs sm:text-sm font-semibold text-primary-text truncate group-hover:text-white transition-colors">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-muted-text mt-[2px] font-medium">
                          {item.releaseYear} • {item.episodes ? `${item.episodes} eps` : "TV"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: All-Time Popular (Portrait Cards) */}
            {data?.popular && data.popular.length > 0 && (
              <div className="space-y-sm text-left">
                <div className="border-l-[3.5px] border-red-600 pl-3">
                  <h3 className="text-subheading font-bold text-primary-text leading-none">All-Time Popular</h3>
                </div>
                <div className="flex gap-md overflow-x-auto pb-md scrollbar-none snap-x snap-mandatory px-xs -mx-xs pt-1">
                  {data.popular.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(item)}
                      className="w-32 xs:w-36 sm:w-44 md:w-48 flex-shrink-0 snap-start group cursor-pointer space-y-2"
                    >
                      <div className="aspect-[2/3] w-full relative rounded-2xl overflow-hidden border border-glass-border shadow-soft-lg bg-secondary-surface">
                        {item.posterPath ? (
                          <Image
                            src={item.posterPath}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 150px, 200px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-text">
                            <Sparkles className="w-10 h-10 stroke-1" />
                          </div>
                        )}
                        {item.rating && (
                          <div className="absolute top-2 right-2">
                            <span className="flex items-center gap-[2px] text-[9px] sm:text-[10px] font-bold bg-black/85 text-warning px-1.5 py-[2px] rounded-small border border-white/10 shadow-md">
                              ★ {item.rating}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-xs sm:text-sm font-semibold text-primary-text truncate group-hover:text-white transition-colors">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-muted-text mt-[2px] font-medium">
                          {item.releaseYear} • {item.episodes ? `${item.episodes} eps` : "TV"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Critically Acclaimed Masterpieces (Portrait Cards) */}
            {data?.topRated && data.topRated.length > 0 && (
              <div className="space-y-sm text-left">
                <div className="border-l-[3.5px] border-red-600 pl-3">
                  <h3 className="text-subheading font-bold text-primary-text leading-none">Critically Acclaimed Masterpieces</h3>
                </div>
                <div className="flex gap-md overflow-x-auto pb-md scrollbar-none snap-x snap-mandatory px-xs -mx-xs pt-1">
                  {data.topRated.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(item)}
                      className="w-32 xs:w-36 sm:w-44 md:w-48 flex-shrink-0 snap-start group cursor-pointer space-y-2"
                    >
                      <div className="aspect-[2/3] w-full relative rounded-2xl overflow-hidden border border-glass-border shadow-soft-lg bg-secondary-surface">
                        {item.posterPath ? (
                          <Image
                            src={item.posterPath}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 150px, 200px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-text">
                            <Sparkles className="w-10 h-10 stroke-1" />
                          </div>
                        )}
                        {item.rating && (
                          <div className="absolute top-2 right-2">
                            <span className="flex items-center gap-[2px] text-[9px] sm:text-[10px] font-bold bg-black/85 text-warning px-1.5 py-[2px] rounded-small border border-white/10 shadow-md">
                              ★ {item.rating}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-xs sm:text-sm font-semibold text-primary-text truncate group-hover:text-white transition-colors">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-muted-text mt-[2px] font-medium">
                          {item.releaseYear} • {item.episodes ? `${item.episodes} eps` : "TV"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vertical Genre Rows */}
            {["Action", "Adventure", "Fantasy", "Drama", "Sci-Fi", "Supernatural", "Mystery"].map((genreName) => {
              // Combine all items to search for items of this genre
              const allCombined = [
                ...(data?.trending || []),
                ...(data?.popular || []),
                ...(data?.topRated || [])
              ];
              // De-duplicate by ID
              const seenIds = new Set();
              const uniqueItems = allCombined.filter((item) => {
                if (seenIds.has(item.id)) return false;
                seenIds.add(item.id);
                return item.genres && item.genres.some(g => g.toLowerCase() === genreName.toLowerCase());
              });

              if (uniqueItems.length === 0) return null;

              return (
                <div key={genreName} className="space-y-sm text-left">
                  <div className="border-l-[3.5px] border-red-600 pl-3">
                    <h3 className="text-subheading font-bold text-primary-text leading-none">{genreName}</h3>
                  </div>
                  <div className="flex gap-md overflow-x-auto pb-md scrollbar-none snap-x snap-mandatory px-xs -mx-xs pt-1">
                    {uniqueItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleOpenModal(item)}
                        className="w-32 xs:w-36 sm:w-44 md:w-48 flex-shrink-0 snap-start group cursor-pointer space-y-2"
                      >
                        <div className="aspect-[2/3] w-full relative rounded-2xl overflow-hidden border border-glass-border shadow-soft-lg bg-secondary-surface">
                          {item.posterPath ? (
                            <Image
                              src={item.posterPath}
                              alt={item.title}
                              fill
                              sizes="(max-width: 640px) 150px, 200px"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-text">
                              <Sparkles className="w-10 h-10 stroke-1" />
                            </div>
                          )}
                          {item.rating && (
                            <div className="absolute top-2 right-2">
                              <span className="flex items-center gap-[2px] text-[9px] sm:text-[10px] font-bold bg-black/85 text-warning px-1.5 py-[2px] rounded-small border border-white/10 shadow-md">
                                ★ {item.rating}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-left">
                          <p className="text-xs sm:text-sm font-semibold text-primary-text truncate group-hover:text-white transition-colors">{item.title}</p>
                          <p className="text-[10px] sm:text-xs text-muted-text mt-[2px] font-medium">
                            {item.releaseYear} • {item.episodes ? `${item.episodes} eps` : "TV"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. DETAILS MODAL */}
      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} className="max-w-2xl select-none">
          <div className="space-y-lg text-left">
            {/* Modal Hero Backdrop */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden border border-glass-border bg-secondary-surface">
              {selectedItem.backdropPath ? (
                <Image
                  src={selectedItem.backdropPath}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : selectedItem.posterPath ? (
                <Image
                  src={selectedItem.posterPath}
                  alt={selectedItem.title}
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-surface via-transparent to-black/40" />
              <div className="absolute bottom-md left-md">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 text-primary-text px-sm py-[2px] rounded-small backdrop-blur-md">
                  {selectedItem.type}
                </span>
                <h2 className="text-heading font-bold text-primary-text drop-shadow-md mt-sm">{selectedItem.title}</h2>
              </div>
            </div>

            {/* Meta details */}
            <div className="flex flex-wrap items-center gap-md text-small text-secondary-text font-medium">
              {selectedItem.releaseYear && (
                <span className="bg-secondary-surface border border-glass-border px-sm py-[2px] rounded-small">
                  {selectedItem.releaseYear}
                </span>
              )}
              {selectedItem.rating && (
                <span className="flex items-center gap-[2px] text-warning bg-secondary-surface border border-glass-border px-sm py-[2px] rounded-small">
                  <Star className="w-3.5 h-3.5 fill-current" /> {selectedItem.rating} / 10
                </span>
              )}
              {selectedItem.episodes && (
                <span className="bg-secondary-surface border border-glass-border px-sm py-[2px] rounded-small">
                  {selectedItem.episodes} Episodes
                </span>
              )}
              {selectedItem.status && (
                <span className="bg-secondary-surface border border-glass-border px-sm py-[2px] rounded-small text-success">
                  {selectedItem.status}
                </span>
              )}
              {selectedItem.genres && selectedItem.genres.length > 0 && (
                <span className="text-muted-text">{selectedItem.genres.join(" • ")}</span>
              )}
            </div>

            {/* Synopsis Overview */}
            <div className="space-y-sm">
              <h4 className="text-body font-bold text-primary-text uppercase tracking-wider text-[11px] opacity-70">
                Synopsis
              </h4>
              <p className="text-small text-secondary-text leading-relaxed">
                {selectedItem.overview || "No synopsis available for this title."}
              </p>
            </div>

            {/* Interactive Actions */}
            <div className="flex items-center gap-sm pt-md border-t border-glass-border">
              <Button variant="primary" className="gap-sm font-semibold" onClick={handleCloseModal}>
                <Play className="w-4 h-4 fill-current" /> Watch Episode 1
              </Button>
              <Button variant="glass" className="gap-sm" onClick={handleCloseModal}>
                <Plus className="w-4 h-4" /> Add to Watchlist
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
