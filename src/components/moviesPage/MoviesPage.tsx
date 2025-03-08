import { Filters } from '../filters/Filters';
import { MoviesList } from '../moviesList/MoviesList';

export const MoviesPage = () => {
  return (
    <div>
      <Filters />
      <MoviesList />
    </div>
  );
};

export default MoviesPage;
