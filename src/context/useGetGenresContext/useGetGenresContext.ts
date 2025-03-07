import { useContext } from 'react';
import { GenresContext } from './GenresContext';

export const useGetGenresContext = () => {
  const context = useContext(GenresContext);
  if (!context) {
    throw new Error('useGenresContext must be used within a GenresProvider');
  }
  return context;
};
