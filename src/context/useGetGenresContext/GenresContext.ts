import { createContext } from 'react';
import { GenresContextProps } from './types';

const defaultContextValue: GenresContextProps = {
  genres: undefined,
  isLoading: false,
  error: null,
  category: '',
  sortBy: '',
  setCategory: () => {},
  setSortBy: () => {},
};

export const GenresContext =
  createContext<GenresContextProps>(defaultContextValue);
