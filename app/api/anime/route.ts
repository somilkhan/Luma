import { NextRequest, NextResponse } from "next/server";

// Fallback high-quality curated AniList dataset
const CURATED_ANIME_DATA = {
  trending: [
    {
      id: 154587,
      title: "Frieren: Beyond Journey's End",
      type: "Anime",
      releaseYear: 2023,
      rating: 9.3,
      episodes: 28,
      status: "Finished",
      genres: ["Adventure", "Drama", "Fantasy"],
      overview: "During their 10-year quest, the elven mage Frieren and her courageous companions defeated the Demon King, bringing peace to the land. As an elf, Frieren will outlive the rest of her former party. She must now learn what companionship means to her.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n6b6Y62vO7zo.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-9V5Zp566XbK3.jpg"
    },
    {
      id: 101922,
      title: "Demon Slayer: Kimetsu no Yaiba",
      type: "Anime",
      releaseYear: 2019,
      rating: 8.5,
      episodes: 26,
      status: "Finished",
      genres: ["Action", "Adventure", "Fantasy", "Drama"],
      overview: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CT6GdA7C.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-Y9uo7z6cl3ip.jpg"
    },
    {
      id: 113415,
      title: "Jujutsu Kaisen",
      type: "Anime",
      releaseYear: 2020,
      rating: 8.6,
      episodes: 24,
      status: "Finished",
      genres: ["Action", "Drama", "Supernatural"],
      overview: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-g676V868X9z7.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-pMc5W868X9z7.jpg"
    }
  ],
  popular: [
    {
      id: 16498,
      title: "Attack on Titan",
      type: "Anime",
      releaseYear: 2013,
      rating: 9.0,
      episodes: 25,
      status: "Finished",
      genres: ["Action", "Drama", "Fantasy", "Mystery"],
      overview: "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6pe6Jy1z6up.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-84O6V868X9z7.jpg"
    },
    {
      id: 127230,
      title: "Chainsaw Man",
      type: "Anime",
      releaseYear: 2022,
      rating: 8.4,
      episodes: 12,
      status: "Finished",
      genres: ["Action", "Comedy", "Drama", "Supernatural"],
      overview: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-9V5Zp566XbK3.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-84O6V868X9z7.jpg"
    },
    {
      id: 126693,
      title: "Cyberpunk: Edgerunners",
      type: "Anime",
      releaseYear: 2022,
      rating: 8.6,
      episodes: 10,
      status: "Finished",
      genres: ["Action", "Sci-Fi"],
      overview: "A street kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126693-PEn1CT6GdA7C.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/126693-84O6V868X9z7.jpg"
    }
  ],
  topRated: [
    {
      id: 5114,
      title: "Fullmetal Alchemist: Brotherhood",
      type: "Anime",
      releaseYear: 2009,
      rating: 9.1,
      episodes: 64,
      status: "Finished",
      genres: ["Action", "Adventure", "Drama", "Fantasy"],
      overview: "In an alchemical ritual gone wrong, Edward Elric loses his arm and his leg, and his brother Alphonse becomes nothing but a soul in a suit of armor. Equipped with mechanical 'automail' limbs, Edward becomes a state alchemist, seeking the Philosopher's Stone.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-KJT6GdA7C.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-84O6V868X9z7.jpg"
    },
    {
      id: 11061,
      title: "Hunter x Hunter (2011)",
      type: "Anime",
      releaseYear: 2011,
      rating: 9.0,
      episodes: 148,
      status: "Finished",
      genres: ["Action", "Adventure", "Fantasy"],
      overview: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends Kurapika, Leorio, and Killua, Gon embarks on a quest to pass the rigorous Hunter Examination and find his legendary father.",
      posterPath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-n6b6Y62vO7zo.jpg",
      backdropPath: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-84O6V868X9z7.jpg"
    }
  ]
};

const ANILIST_QUERY = `
  query ($search: String, $sort: [MediaSort], $type: MediaType) {
    Page(page: 1, perPage: 12) {
      media(search: $search, sort: $sort, type: $type) {
        id
        title {
          romaji
          english
          userPreferred
        }
        coverImage {
          large
          extraLarge
        }
        bannerImage
        description
        seasonYear
        episodes
        averageScore
        genres
        status
      }
    }
  }
`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  try {
    const variables: any = { type: "ANIME" };
    if (query) {
      variables.search = query;
    } else {
      variables.sort = ["TRENDING_DESC"];
    }

    // Call live AniList GraphQL API
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: ANILIST_QUERY,
        variables,
      }),
      next: { revalidate: 3600 }, // Cache response for 1 hour
    });

    if (response.ok) {
      const payload = await response.json();
      const mediaList = payload?.data?.Page?.media || [];

      const mappedMedia = mediaList.map((m: any) => ({
        id: m.id,
        title: m.title.english || m.title.romaji || m.title.userPreferred,
        type: "Anime",
        releaseYear: m.seasonYear,
        rating: m.averageScore ? Math.round((m.averageScore / 10) * 10) / 10 : null,
        episodes: m.episodes,
        status: m.status ? m.status.charAt(0) + m.status.slice(1).toLowerCase() : null,
        genres: m.genres || [],
        overview: m.description ? m.description.replace(/<[^>]*>/g, "") : "", // strip HTML tags
        posterPath: m.coverImage?.extraLarge || m.coverImage?.large,
        backdropPath: m.bannerImage || m.coverImage?.extraLarge || m.coverImage?.large,
      }));

      if (query) {
        return NextResponse.json({ results: mappedMedia });
      }

      // If no query, we can split them or fetch separately. For simplicity, we can fetch lists by running separate variables.
      // But to be fast, we can fetch other rows too, or just return them as trending. Let's do a multi-list query if no query.
      if (!query) {
        // Run popular and topRated in parallel for a fully active rich experience!
        const [popularRes, topRatedRes] = await Promise.all([
          fetch("https://graphql.anilist.co", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: ANILIST_QUERY, variables: { type: "ANIME", sort: ["POPULARITY_DESC"] } }),
          }),
          fetch("https://graphql.anilist.co", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: ANILIST_QUERY, variables: { type: "ANIME", sort: ["SCORE_DESC"] } }),
          })
        ]);

        const popularData = popularRes.ok ? await popularRes.json() : null;
        const topRatedData = topRatedRes.ok ? await topRatedRes.json() : null;

        const mapAniListMedia = (list: any[]) =>
          list.map((m: any) => ({
            id: m.id,
            title: m.title.english || m.title.romaji || m.title.userPreferred,
            type: "Anime",
            releaseYear: m.seasonYear,
            rating: m.averageScore ? Math.round((m.averageScore / 10) * 10) / 10 : null,
            episodes: m.episodes,
            status: m.status ? m.status.charAt(0) + m.status.slice(1).toLowerCase() : null,
            genres: m.genres || [],
            overview: m.description ? m.description.replace(/<[^>]*>/g, "") : "",
            posterPath: m.coverImage?.extraLarge || m.coverImage?.large,
            backdropPath: m.bannerImage || m.coverImage?.extraLarge || m.coverImage?.large,
          }));

        return NextResponse.json({
          trending: mappedMedia.slice(0, 8),
          popular: popularData ? mapAniListMedia(popularData.data.Page.media).slice(0, 8) : CURATED_ANIME_DATA.popular,
          topRated: topRatedData ? mapAniListMedia(topRatedData.data.Page.media).slice(0, 8) : CURATED_ANIME_DATA.topRated,
        });
      }
    }
  } catch (error) {
    console.error("AniList GraphQL Fetch Error, falling back to curated cache:", error);
  }

  // Fallback to our stunning static dataset
  if (query) {
    const searchString = query.toLowerCase();
    const allItems = [
      ...CURATED_ANIME_DATA.trending,
      ...CURATED_ANIME_DATA.popular,
      ...CURATED_ANIME_DATA.topRated
    ];
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    const results = uniqueItems.filter(
      item =>
        item.title.toLowerCase().includes(searchString) ||
        item.overview.toLowerCase().includes(searchString) ||
        item.genres.some(g => g.toLowerCase().includes(searchString))
    );
    return NextResponse.json({ results });
  }

  return NextResponse.json(CURATED_ANIME_DATA);
}
