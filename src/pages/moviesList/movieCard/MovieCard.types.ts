export type MovieCardProps = {
  posterPath: string | null;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  id: number;
};
