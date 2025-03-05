import axios from 'axios';
import { MoviesResponse } from './useGetMovies.types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BASE_URL, API_KEY } from '../../../api';

const fetchMovies = async ({ pageParam = 1 }) => {
  const { data } = await axios.get<MoviesResponse>(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&language=pl-PL&sort_by=popularity.desc&page=${pageParam}`
  );
  return {
    results: data.results,
    nextPage: pageParam < data.total_pages ? pageParam + 1 : null,
  };
};

export const useGetMovies = () => {
  return useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
