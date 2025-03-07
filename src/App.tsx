import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { AppRoute } from './routes/AppRoute';

const MoviesPage = lazy(() => import('./components/moviesPage/MoviesPage'));
const MovieDetails = lazy(
  () => import('./components/movieDetails/MovieDetails')
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path={AppRoute.Home} element={<MoviesPage />} />
          <Route path={AppRoute.MovieDetails} element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
