import { GenresResponse } from '../../../api/useGetGenres/useGetGenres.types';

export const genreMap = (
  genres?: GenresResponse
): { [key: string]: string } => {
  return {
    '': '',
    ...Object.fromEntries(
      (genres?.genres || []).map((genre) => [genre.name, genre.id.toString()])
    ),
  };
};
