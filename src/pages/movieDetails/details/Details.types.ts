export type DetailsProps = {
  title: string;
  genres: { id: number; name: string }[];
  overview: string;
  releaseDate: string;
  tagline: string;
  voteAverage: number;
  voteCount: number;
  homepage: string;
  runtime: number;
};
