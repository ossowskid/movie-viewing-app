export type Movies = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
};

export type MoviesResponse = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
