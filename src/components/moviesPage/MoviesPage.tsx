import { Box } from '@mui/material';
import { Filters } from '../filters/Filters';
import { MoviesList } from '../moviesList/MoviesList';

export const MoviesPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}
    >
      <Filters />
      <MoviesList />
    </Box>
  );
};

export default MoviesPage;
