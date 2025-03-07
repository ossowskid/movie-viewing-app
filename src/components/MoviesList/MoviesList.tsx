import { QueryClientProvider } from '@tanstack/react-query';
import { useGetMovies } from '../../api/useGetMovies/useGetMovies';
import { CardsWrapper, LoadMoreButton, Wrapper } from './MoviesList.styles';
import { MovieCard } from './movieCard/MovieCard';
import { queryClient } from '../../utils/queryClient';

const MoviesListRaw = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetMovies();

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      <CardsWrapper>
        {data.pages.flatMap((page) =>
          page.results.map(
            ({ id, poster_path, vote_average, vote_count, release_date }) => (
              <MovieCard
                key={id}
                posterPath={poster_path}
                voteAverage={vote_average}
                voteCount={vote_count}
                releaseDate={release_date}
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
                id={id}
              />
            )
          )
        )}
      </CardsWrapper>
      {hasNextPage && (
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Ładowanie...' : 'Załaduj więcej'}
        </LoadMoreButton>
      )}
    </Wrapper>
  );
};

const MoviesList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesListRaw />
    </QueryClientProvider>
  );
};

export default MoviesList;
