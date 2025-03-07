export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
  homepage: string;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
  production_companies: { id: number; name: string; logo_path: string }[];
  poster_path: string | null;
  release_date: string;
};
