import axios from 'axios';
import { MovieDetails } from './useGetMoveDetails.types';
import { useQuery } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from '../../../api';

const fetchMovieDetails = async (id: string) => {
  const { data } = await axios.get<MovieDetails>(
    `${BASE_URL}${id}?api_key=${API_KEY}&language=pl-PL`
  );
  return data;
};

export const useGetMovieDetails = (id: string) =>
  useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });
