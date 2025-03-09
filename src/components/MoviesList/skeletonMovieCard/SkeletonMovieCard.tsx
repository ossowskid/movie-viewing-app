import { Skeleton } from '@mui/material';

export const SkeletonMovieCard = () => {
  return (
    <Skeleton
      sx={{ bgcolor: '#637074' }}
      variant={'rectangular'}
      width={200}
      height={370}
    />
  );
};
