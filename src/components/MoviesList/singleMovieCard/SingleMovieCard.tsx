import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { SingleMovieCardProps } from './SingleMovieCard.types';
import { IMAGE_API_URL } from '../../../../api';
import { CheckMoreButton } from './SingleMovieCard.styles';
import useFormattedDate from '../../../hooks/useFormatDate';
import { SingleMovieCardSkeleton } from '../SingleMovieCardSkeleton/SingeMovieCardSkeleton';

export const SingleMovieCard = ({
  posterPath,
  voteAverage,
  voteCount,
  releaseDate,
  isLoading,
  isFetchingNextPage,
}: SingleMovieCardProps) => {
  if (isLoading || isFetchingNextPage) {
    return <SingleMovieCardSkeleton />;
  }

  return (
    <Card
      sx={{
        width: 200,
        height: 420,
        backgroundColor: '#aab9cf',
      }}
    >
      <CardMedia
        sx={{ height: 300, width: 200 }}
        image={`${IMAGE_API_URL}/w200/${posterPath}`}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexFlow: 'column',
          padding: 1,
          color: '#212227',
        }}
      >
        <span>Premiera: {useFormattedDate(releaseDate)}</span>
        <span>Ocena: {voteAverage}</span>
        <span>Ilość głosów: {voteCount}</span>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CheckMoreButton>Dowiedz się więcej!</CheckMoreButton>
      </CardActions>
    </Card>
  );
};
