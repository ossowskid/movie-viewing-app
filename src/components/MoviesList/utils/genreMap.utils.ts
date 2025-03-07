import { Genre } from '../../../api/useGetGenres/useGetGenres.types';

export const genreMap = (genres?: Genre[]): { [key: string]: string } => {
  return {
    '': '',
    ...Object.fromEntries(
      (genres || []).map((genre) => [genre.name, genre.id.toString()])
    ),
  };
};
