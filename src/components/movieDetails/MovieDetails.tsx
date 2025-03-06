import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovieDetails } from '../../api/useGetMovieDetails/useGetMovieDetails';
import { Wrapper, Box } from './MovieDetails.styles';
import { IMAGE_API_URL } from '../../../api';
import { Details } from './details/Details';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppRoute } from '../../routes/routes';
import { ProductionCompanies } from './productionCompanies/ProductionCompanies';
import { MovieDetailsSkeleton } from './movieDetailsSkeleton/MovieDetailsSkeleton';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../utils/queryClient';

const MovieDetailsRaw = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetMovieDetails(id ?? '0');

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }

  if (!data) {
    return null;
  }

  const {
    title,
    poster_path,
    genres,
    overview,
    release_date,
    tagline,
    vote_average,
    vote_count,
    production_companies,
    homepage,
    runtime,
  } = data;

  return (
    <Wrapper>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(AppRoute.Home)}
        sx={{
          borderRadius: '4px',
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '8px 16px',
          width: 'fit-content',
          color: '#212227',
          backgroundColor: '#8693ab',
          border: 'none',
          '&:hover': {
            backgroundColor: '#637074',
          },
        }}
      >
        Powrót do listy
      </Button>
      <Box>
        <img src={`${IMAGE_API_URL}/w300/${poster_path}`} />
        <Details
          title={title}
          genres={genres}
          overview={overview}
          releaseDate={release_date}
          tagline={tagline}
          voteAverage={vote_average}
          voteCount={vote_count}
          homepage={homepage}
          runtime={runtime}
        />
      </Box>
      <ProductionCompanies productionCompanies={production_companies} />
    </Wrapper>
  );
};

const MovieDetails = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieDetailsRaw />
    </QueryClientProvider>
  );
};

export default MovieDetails;
