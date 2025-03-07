import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../api';
import { CategoriesResponse } from './useGetCategories.types';
import { useQuery } from '@tanstack/react-query';

const fetchCategories = async () => {
  const { data } = await axios.get<CategoriesResponse>(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=pl-PL`
  );

  return data;
};

export const useGetCategories = () =>
  useQuery({
    queryKey: ['categories', 'pl'],
    queryFn: fetchCategories,
  });
