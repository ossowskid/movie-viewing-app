import { Container } from '@mui/material';
import { Filters } from '../filters/Filters';
import { MoviesList } from '../moviesList/MoviesList';

export const MoviesPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}
    >
      <Filters />
      <MoviesList />
    </Container>
  );
};

export default MoviesPage;
