import { ReactNode } from 'react';
import { Genre } from '../../api/useGetGenres/useGetGenres.types';

export type GenresContextProps = {
  genres: Genre[] | undefined;
  isLoading: boolean;
  error: unknown;
  category: string;
  sortBy: string;
  setCategory: (value: string) => void;
  setSortBy: (value: string) => void;
};

export type GenresProviderProps = {
  children: ReactNode;
};
