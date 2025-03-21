import { Box, Skeleton } from '@mui/material';

export const FiltersSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        padding: '32px 8px',
        background: 'background.paper',
        alignItems: 'center',
        height: 'fit-content',
      }}
    >
      <Skeleton variant={'rounded'} width={160} height={40} />
    </Box>
  );
};
