import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box, CircularProgress, ThemeProvider } from '@mui/material';
import { AppRoute } from './routes/AppRoute';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';
import { GenresProvider } from './context/useGetGenresContext/GenresProvider';
import theme from './theme';

const MoviesPage = lazy(() => import('./components/moviesPage/MoviesPage'));
const MovieDetails = lazy(
  () => import('./components/movieDetails/MovieDetails')
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense
          fallback={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'background.default',
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <QueryClientProvider client={queryClient}>
            <GenresProvider>
              <Routes>
                <Route path={AppRoute.Home} element={<MoviesPage />} />
                <Route
                  path={AppRoute.MovieDetails}
                  element={<MovieDetails />}
                />
              </Routes>
            </GenresProvider>
          </QueryClientProvider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
