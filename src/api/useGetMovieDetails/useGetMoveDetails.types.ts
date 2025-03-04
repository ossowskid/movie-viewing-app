export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
  vote_average: number;
  production_companies: { id: number; name: string }[];
  poster_path: string | null;
};
