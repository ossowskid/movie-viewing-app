import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../utils/queryClient';
import { Filters } from '../filters/Filters';
import { useState } from 'react';
import { FilterType } from './MoviesPage.types';
import { MoviesList } from '../moviesList/MoviesList';
import { GenresProvider } from '../../context/useGetGenresContext/GenresProvider';
import { useGetGenresContext } from '../../context/useGetGenresContext/useGetGenresContext';

const MoviesPageRaw = () => {
  const [category, setCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  const { genres } = useGetGenresContext();
  const categories = genres?.map((genre) => genre.name) ?? [];

  const handleFilterChange = (filters: FilterType) => {
    setCategory(filters.category);
    setSortBy(filters.sortBy);
  };

  return (
    <div>
      <Filters
        category={category}
        sortBy={sortBy}
        setCategory={setCategory}
        setSortBy={setSortBy}
        onFilterChange={handleFilterChange}
        categories={categories}
      />
      <MoviesList category={category} sortBy={sortBy} />
    </div>
  );
};

const MoviesPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GenresProvider>
        <MoviesPageRaw />
      </GenresProvider>
    </QueryClientProvider>
  );
};

export default MoviesPage;
