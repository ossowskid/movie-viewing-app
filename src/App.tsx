import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { AppRoute } from './routes/AppRoute';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';
import { GenresProvider } from './context/useGetGenresContext/GenresProvider';

const MoviesPage = lazy(() => import('./components/moviesPage/MoviesPage'));
const MovieDetails = lazy(
  () => import('./components/movieDetails/MovieDetails')
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <QueryClientProvider client={queryClient}>
          <GenresProvider>
            <Routes>
              <Route path={AppRoute.Home} element={<MoviesPage />} />
              <Route path={AppRoute.MovieDetails} element={<MovieDetails />} />
            </Routes>
          </GenresProvider>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
