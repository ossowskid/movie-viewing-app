import axios from 'axios';
import { MoviesResponse, FetchMoviesParams } from './useGetMovies.types';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { BASE_URL, API_KEY } from '../../../api';

const fetchMovies = async ({
  pageParam = 1,
  genre = '',
  sortBy = 'popularity.desc',
}: FetchMoviesParams) => {
  const genresString = Array.isArray(genre) ? genre.join(',') : genre;
  const { data } = await axios.get<MoviesResponse>(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&language=pl-PL&sort_by=${sortBy}&page=${pageParam}&with_genres=${genresString}`
  );
  return {
    results: data.results,
    nextPage: pageParam < data.total_pages ? pageParam + 1 : null,
  };
};

export const useGetMovies = ({
  genre = '',
  sortBy = 'popularity.desc',
}: { genre?: string | string[]; sortBy?: string } = {}) => {
  return useInfiniteQuery({
    queryKey: ['movies', genre, sortBy],
    queryFn: ({ pageParam }) => fetchMovies({ pageParam, genre, sortBy }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    placeholderData: keepPreviousData,
  });
};
