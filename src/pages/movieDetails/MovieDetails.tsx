import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovieDetails } from '../../api/useGetMovieDetails/useGetMovieDetails';
import { Image } from './MovieDetails.styles';
import { IMAGE_API_URL } from '../../../api';
import { Details } from './details/Details';
import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppRoute } from '../../routes/AppRoute';
import { ProductionCompanies } from './productionCompanies/ProductionCompanies';
import { MovieDetailsSkeleton } from './movieDetailsSkeleton/MovieDetailsSkeleton';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../utils/queryClient';
import { AdditionalInformations } from './additionalInformations/AdditionalInformations';

const MovieDetailsRaw = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetMovieDetails(id ?? '0');
  const theme = useTheme();
  const isSmToMdScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
    <Container sx={{ display: 'flex', flexFlow: 'column', gap: '20px' }}>
      <Button
        variant={'outlined'}
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(AppRoute.Home)}
        sx={{
          borderRadius: '4px',
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '8px 16px',
          width: 'fit-content',
          backgroundColor: 'primary.main',
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        Powrót do listy
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          gap: '20px',
          backgroundColor: 'background.paper',
          padding: '32px 16px',
          borderRadius: '4px',
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {isSmToMdScreen ? (
          <Box sx={{ display: 'flex', flexFlow: 'column', gap: '20px' }}>
            <Image src={`${IMAGE_API_URL}/w200/${poster_path}`} />
            <AdditionalInformations
              voteAverage={vote_average}
              voteCount={vote_count}
              homepage={homepage}
            />
          </Box>
        ) : (
          <Image src={`${IMAGE_API_URL}/w300/${poster_path}`} />
        )}
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
    </Container>
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
