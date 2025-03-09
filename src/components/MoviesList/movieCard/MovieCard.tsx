import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { MovieCardProps } from './MovieCard.types';
import { IMAGE_API_URL } from '../../../../api';
import useFormattedDate from '../../../hooks/useFormatDate';
import { SkeletonMovieCard } from '../skeletonMovieCard/SkeletonMovieCard';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../routes/AppRoute';
import { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

export const MovieCard = ({
  posterPath,
  voteAverage,
  voteCount,
  releaseDate,
  isLoading,
  isFetchingNextPage,
  id,
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const formattedDate = useFormattedDate(releaseDate);

  if (isLoading || isFetchingNextPage) {
    return <SkeletonMovieCard />;
  }

  return (
    <Card
      component={'a'}
      onClick={() =>
        navigate(AppRoute.MovieDetails.replace(':id', id.toString()))
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        width: 200,
        height: 370,
        backgroundColor: '#8693ab',
        transition: '0.4s',
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.05)',
          opacity: 0.7,
        },
      }}
    >
      <CardMedia
        sx={{ height: 300, width: 200 }}
        image={`${IMAGE_API_URL}/w200/${posterPath}`}
      />
      {!!isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <Box
            sx={{
              color: '#fff',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              opacity: 1,
            }}
          >
            Zobacz szczegóły
          </Box>
        </Box>
      )}
      <CardContent
        sx={{
          display: 'flex',
          flexFlow: 'column',
          padding: '8px',
          paddingBottom: 0,
          color: '#212227',
          '&:last-child': {
            paddingBottom: '8px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <StarRateIcon sx={{ color: '#D4AF37' }} />
          {Number(voteAverage).toFixed(2)}
        </Box>
        <span>Ilość głosów: {voteCount}</span>
        <span>Premiera: {formattedDate}</span>
      </CardContent>
    </Card>
  );
};
