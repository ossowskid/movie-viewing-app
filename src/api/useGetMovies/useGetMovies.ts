import axios from 'axios';
import { Movie } from './useGetMovies.types';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../../api';

const fetchMovies = async () => {
  const { data } = await axios.get<{ results: Movie[] }>(API_URL);
  return data.results;
};

export const useGetMovies = () => {
  const {
    data: movies = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    staleTime: 1000 * 60 * 5,
  });

  return { movies, isLoading, isError };
};
