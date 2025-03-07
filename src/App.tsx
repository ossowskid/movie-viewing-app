import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { AppRoute } from './routes/AppRoute';

const MoviesList = lazy(() => import('./components/MoviesList/MoviesList'));
const MovieDetails = lazy(
  () => import('./components/movieDetails/MovieDetails')
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path={AppRoute.Home} element={<MoviesList />} />
          <Route path={AppRoute.MovieDetails} element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
