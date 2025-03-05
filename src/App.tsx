import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';

const MoviesList = lazy(() => import('./components/MoviesList/MoviesList'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path='/' element={<MoviesList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
