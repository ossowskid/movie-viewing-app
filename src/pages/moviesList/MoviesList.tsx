import { Box, Button, Container } from '@mui/material';
import { useGetMovies } from '../../api/useGetMovies/useGetMovies';
import { useGetGenresContext } from '../../context/useGetGenresContext/useGetGenresContext';
import { MovieCard } from './movieCard/MovieCard';

export const MoviesList = () => {
  const { selectedGenres, sortBy } = useGetGenresContext();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetMovies({
      genre: selectedGenres,
      sortBy: sortBy ?? 'popularity.desc',
    });

  if (!data) {
    return null;
  }

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        background: 'background.section',
        padding: '32px 0 32px;',
        gap: '22px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '22px',
          justifyContent: 'center',
        }}
      >
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
      </Box>
      {hasNextPage && (
        <Button
          sx={{
            width: 200,
            borderRadius: '4px',
            height: 50,
            padding: 0,
            backgroundColor: 'primary.main',
            color: 'text.primary',
            '&:hover': { backgroundColor: 'primary.dark' },
          }}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Ładowanie...' : 'Załaduj więcej'}
        </Button>
      )}
    </Container>
  );
};
