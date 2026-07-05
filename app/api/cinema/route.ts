import { NextRequest, NextResponse } from "next/server";

// Fallback high-quality curated TMDb dataset
const CURATED_CINEMA_DATA = {
  trending: [
    {
      id: 693134,
      title: "Dune: Part Two",
      type: "Movie",
      releaseYear: 2024,
      rating: 8.3,
      genres: ["Sci-Fi", "Adventure", "Action"],
      overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
      posterPath: "https://image.tmdb.org/t/p/w500/1pdfarO7fb17zrtgDMg65Bubv2n.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/xOMoCO81J7mH4SvJg7u7X68Z0HG.jpg"
    },
    {
      id: 115337,
      title: "Severance",
      type: "TV Show",
      releaseYear: 2022,
      rating: 8.4,
      genres: ["Sci-Fi", "Drama", "Mystery"],
      overview: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
      posterPath: "https://image.tmdb.org/t/p/w500/l97mI89OAn96fUfWn15vctYcl9H.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/6mK8u9TySwwY8p8699tUv7vAn6G.jpg"
    },
    {
      id: 872585,
      title: "Oppenheimer",
      type: "Movie",
      releaseYear: 2023,
      rating: 8.1,
      genres: ["History", "Drama", "Biography"],
      overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      posterPath: "https://image.tmdb.org/t/p/w500/8Gxv8gS0U0689p2Y77OwbA6A6gZ.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/fm6f9vTy6U60622gZ87v76S0v9Z.jpg"
    }
  ],
  popular: [
    {
      id: 157336,
      title: "Interstellar",
      type: "Movie",
      releaseYear: 2014,
      rating: 8.4,
      genres: ["Sci-Fi", "Drama", "Adventure"],
      overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      posterPath: "https://image.tmdb.org/t/p/w500/gEU2Qv61fd9u0gZonebSBg44Cg8.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/xJHb59ICgUChX98z7p2mTEg6m9b.jpg"
    },
    {
      id: 27205,
      title: "Inception",
      type: "Movie",
      releaseYear: 2010,
      rating: 8.3,
      genres: ["Action", "Sci-Fi", "Adventure"],
      overview: "Cobb, a skilled thief who steals valuable secrets from deep within the subconscious during the dream state, is given a chance at redemption: complete an impossible task called inception.",
      posterPath: "https://image.tmdb.org/t/p/w500/o06SgZf90Sg6oM6v30Xg3X6vX7n.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/s3TBr7PQC0G70Z0FykkMK66vX7n.jpg"
    },
    {
      id: 502356,
      title: "The Super Mario Bros. Movie",
      type: "Movie",
      releaseYear: 2023,
      rating: 7.7,
      genres: ["Animation", "Family", "Adventure"],
      overview: "While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported down a mysterious pipe and wander into a spin-tingling new world.",
      posterPath: "https://image.tmdb.org/t/p/w500/qNBAX6X5t9YvS9W9N3X6vX7n.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/9n2tJBmG4G70Z0FykkMK66vX7n.jpg"
    }
  ],
  topRated: [
    {
      id: 1396,
      title: "Breaking Bad",
      type: "TV Show",
      releaseYear: 2008,
      rating: 8.9,
      genres: ["Crime", "Drama"],
      overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student.",
      posterPath: "https://image.tmdb.org/t/p/w500/ztkUQv61fd9u0gZonebSBg44Cg8.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/uDgy6hy0Y60vY77gZ87v76S0v9Z.jpg"
    },
    {
      id: 76331,
      title: "Succession",
      type: "TV Show",
      releaseYear: 2018,
      rating: 8.3,
      genres: ["Drama"],
      overview: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down.",
      posterPath: "https://image.tmdb.org/t/p/w500/776S0v9Z7n93S69v86b7g6pX98z.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/uDgy6hy0Y60vY77gZ87v76S0v9Z.jpg"
    },
    {
      id: 1399,
      title: "Game of Thrones",
      type: "TV Show",
      releaseYear: 2011,
      rating: 8.4,
      genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure"],
      overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens.",
      posterPath: "https://image.tmdb.org/t/p/w500/u3bZ6gI8vX7n93S69v86b7g6pX98z.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/rI6SgZf90Sg6oM6v30Xg3X6vX7n.jpg"
    }
  ],
  upcoming: [
    {
      id: 1022789,
      title: "Inside Out 2",
      type: "Movie",
      releaseYear: 2024,
      rating: 7.6,
      genres: ["Animation", "Family", "Comedy", "Drama"],
      overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust aren't sure how to feel when Anxiety shows up.",
      posterPath: "https://image.tmdb.org/t/p/w500/vpnVM9W9N3X6vX7n93S69v86b7g.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/stZ6gI8vX7n93S69v86b7g6pX98z.jpg"
    },
    {
      id: 533535,
      title: "Deadpool & Wolverine",
      type: "Movie",
      releaseYear: 2024,
      rating: 7.8,
      genres: ["Action", "Comedy", "Sci-Fi"],
      overview: "A listless Wade Wilson toils in civilian life. His days as the morally flexible mercenary, Deadpool, behind him. When his homeworld faces an existential threat, he must reluctantly suit-up again with an even more reluctant Wolverine.",
      posterPath: "https://image.tmdb.org/t/p/w500/8cdWv6S0U0689p2Y77OwbA6A6gZ.jpg",
      backdropPath: "https://image.tmdb.org/t/p/original/h8cdWv6S0U0689p2Y77OwbA6A6gZ.jpg"
    }
  ]
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const apiKey = process.env.TMDB_API_KEY;

  try {
    if (apiKey) {
      // If there is a search query, query the TMDb search endpoint
      if (query) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`
        );
        if (!response.ok) throw new Error("TMDb API Error");
        const data = await response.json();
        
        const results = data.results
          .filter((item: any) => item.media_type === "movie" || item.media_type === "tv")
          .map((item: any) => ({
            id: item.id,
            title: item.title || item.name,
            type: item.media_type === "movie" ? "Movie" : "TV Show",
            releaseYear: item.release_date ? new Date(item.release_date).getFullYear() : item.first_air_date ? new Date(item.first_air_date).getFullYear() : null,
            rating: Math.round((item.vote_average || 0) * 10) / 10,
            genres: [], // Genres require additional API calls, we can mock or omit
            overview: item.overview,
            posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
            backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : null
          }));

        return NextResponse.json({ results });
      }

      // Fetch lists in parallel
      const [trendingRes, popularRes, topRatedRes, upcomingRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      ]);

      const [trendingData, popularData, topRatedData, upcomingData] = await Promise.all([
        trendingRes.ok ? trendingRes.json() : { results: [] },
        popularRes.ok ? popularRes.json() : { results: [] },
        topRatedRes.ok ? topRatedRes.json() : { results: [] },
        upcomingRes.ok ? upcomingRes.json() : { results: [] }
      ]);

      const mapTMDbItem = (item: any, typeOverride?: string) => ({
        id: item.id,
        title: item.title || item.name,
        type: typeOverride || (item.media_type === "tv" ? "TV Show" : "Movie"),
        releaseYear: item.release_date ? new Date(item.release_date).getFullYear() : item.first_air_date ? new Date(item.first_air_date).getFullYear() : null,
        rating: Math.round((item.vote_average || 0) * 10) / 10,
        genres: item.genre_ids ? [] : [], // omit or simplify
        overview: item.overview,
        posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
        backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : null
      });

      return NextResponse.json({
        trending: trendingData.results.slice(0, 10).map((item: any) => mapTMDbItem(item)),
        popular: popularData.results.slice(0, 10).map((item: any) => mapTMDbItem(item, "Movie")),
        topRated: topRatedData.results.slice(0, 10).map((item: any) => mapTMDbItem(item, "TV Show")),
        upcoming: upcomingData.results.slice(0, 10).map((item: any) => mapTMDbItem(item, "Movie"))
      });
    }
  } catch (error) {
    console.error("TMDb API Fetch Error, falling back to curated cache:", error);
  }

  // Fallback to beautiful curated static database
  if (query) {
    const searchString = query.toLowerCase();
    const allItems = [
      ...CURATED_CINEMA_DATA.trending,
      ...CURATED_CINEMA_DATA.popular,
      ...CURATED_CINEMA_DATA.topRated,
      ...CURATED_CINEMA_DATA.upcoming
    ];
    // Remove duplicates
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    const results = uniqueItems.filter(
      item =>
        item.title.toLowerCase().includes(searchString) ||
        item.overview.toLowerCase().includes(searchString) ||
        item.genres.some(g => g.toLowerCase().includes(searchString))
    );
    return NextResponse.json({ results });
  }

  return NextResponse.json(CURATED_CINEMA_DATA);
}
