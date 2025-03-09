import { ReactNode } from 'react';
import { Genre } from '../../api/useGetGenres/useGetGenres.types';

export type GenresContextProps = {
  genresData: Genre[] | undefined;
  isLoading: boolean;
  error: unknown;
  selectedGenres: string[];
  sortBy: string;
  setSelectedGenres: (value: string[]) => void;
  setSortBy: (value: string) => void;
};

export type GenresProviderProps = {
  children: ReactNode;
};
