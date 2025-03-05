import { useGetMovies } from '../../api/useGetMovies/useGetMovies';
import { CardsWrapper, LoadMoreButton, Wrapper } from './MoviesList.styles';
import { SingleMovieCard } from './singleMovieCard/SingleMovieCard';

const MoviesList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetMovies();

  return (
    <Wrapper>
      <CardsWrapper>
        {data?.pages.flatMap((page) =>
          page.results.map(
            ({ id, poster_path, vote_average, vote_count, release_date }) => (
              <SingleMovieCard
                key={id}
                posterPath={poster_path}
                voteAverage={vote_average}
                voteCount={vote_count}
                releaseDate={release_date}
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
              />
            )
          )
        )}
        {hasNextPage && (
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Ładowanie...' : 'Załaduj więcej'}
          </LoadMoreButton>
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default MoviesList;
