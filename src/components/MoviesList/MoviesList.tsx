import { useGetMovies } from '../../api/useGetMovies/useGetMovies';
import { CardsWrapper, LoadMoreButton, Wrapper } from './MoviesList.styles';
import { MovieCard } from './movieCard/MovieCard';
import { useGetGenres } from '../../api/useGetGenres/useGetGenres';
import { MoviesListProps } from './MoviesList.types';
import { genreMap } from './utils/genreMap.utils';

export const MoviesList = ({ category, sortBy }: MoviesListProps) => {
  const { data: genres } = useGetGenres();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetMovies({
      genre: genreMap(genres)[category] ?? '',
      sortBy: sortBy ?? 'popularity.desc',
    });

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
