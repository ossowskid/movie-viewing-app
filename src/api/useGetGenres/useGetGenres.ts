import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../api';
import { GenresResponse } from './useGetGenres.types';
import { useQuery } from '@tanstack/react-query';

const fetchGenres = async () => {
  const { data } = await axios.get<GenresResponse>(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=pl-PL`
  );

  return data;
};

export const useGetGenres = () =>
  useQuery({
    queryKey: ['categories', 'pl'],
    queryFn: fetchGenres,
  });
