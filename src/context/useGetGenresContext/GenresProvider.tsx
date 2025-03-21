import { useState } from 'react';
import { useGetGenres } from '../../api/useGetGenres/useGetGenres';
import { GenresContext } from './GenresContext';
import { GenresContextProps, GenresProviderProps } from './types';

export const GenresProvider = ({ children }: GenresProviderProps) => {
  const { data: genresData, isLoading, error } = useGetGenres();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  const value: GenresContextProps = {
    genresData: genresData?.genres,
    isLoading,
    error,
    selectedGenres,
    sortBy,
    setSelectedGenres,
    setSortBy,
  };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};
