import { Skeleton } from '@mui/material';

export const MovieCardSkeleton = () => {
  return (
    <Skeleton
      sx={{ bgcolor: '#637074' }}
      variant={'rectangular'}
      width={200}
      height={378}
    />
  );
};
