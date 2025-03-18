import {
  Box,
  Container,
  Skeleton,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export const SkeletonMovieDetails = () => {
  const theme = useTheme();
  const isMaxSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMinMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmToMdScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container sx={{ display: 'flex', flexFlow: 'column', gap: '20px' }}>
      <Skeleton variant={'rounded'} width={162} height={40} />
      <Box
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column', sm: 'row' },
          gap: '20px',
          backgroundColor: 'background.paper',
          borderRadius: '4px',
          p: { xs: 2, md: '32px 16px' },
        }}
      >
        {isSmToMdScreen ? (
          <Box sx={{ display: 'flex', flexFlow: 'column', gap: '20px' }}>
            <Skeleton
              variant={'rectangular'}
              sx={{
                width: { xs: 200, sm: 250 },
                height: { xs: 300, sm: 350 },
                flexShrink: 0,
              }}
            />
            <Box sx={{ display: 'flex', flexFlow: 'column', gap: '4px' }}>
              <Skeleton variant={'rounded'} height={18} width={147} />
              <Skeleton variant={'rounded'} height={24} width={240} />
              <Skeleton variant={'rounded'} height={18} width={122} />
            </Box>
          </Box>
        ) : (
          <Skeleton
            variant={'rectangular'}
            sx={{
              width: { xs: 200, sm: 250, md: 300 },
              height: { xs: 300, sm: 350, md: 450 },
              flexShrink: 0,
            }}
          />
        )}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column',
            gap: { xs: '20px', sm: 0 },
            flex: 1,
            justifyContent: {
              xs: 'space-between',
              sm: 'unset',
              md: 'space-between',
            },
            minHeight: 450,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              gap: '8px',
            }}
          >
            <Skeleton
              variant={'rounded'}
              sx={{ width: { xs: '90%', md: 450 }, height: 37 }}
            />
            <Skeleton
              variant={'rounded'}
              sx={{ width: { xs: '70%', md: 400 }, height: 18 }}
            />
            {!isMinMdScreen && (
              <>
                <Skeleton variant={'rounded'} height={18} width={200} />
                <Skeleton variant={'rounded'} height={18} width={100} />
              </>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              minHeight: '250px',
            }}
          >
            <Skeleton
              variant={'rounded'}
              sx={{
                width: { xs: '100%', md: 300 },
                height: 22,
                margin: '19px 0',
              }}
            />
            <Skeleton
              variant={'rounded'}
              width={32}
              height={22}
              sx={{ width: 32, height: 22, marginBottom: '8px' }}
            />
            <Skeleton
              variant={'rounded'}
              sx={{ width: { xs: '100%', md: 450 }, height: 90 }}
            />
          </Box>
          {isMaxSmScreen || isMinMdScreen ? (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                gap: '4px',
              }}
            >
              <Skeleton variant={'rounded'} height={18} width={147} />
              <Skeleton variant={'rounded'} height={24} width={240} />
              <Skeleton variant={'rounded'} height={19} width={240} />
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: '4px',
          p: '32px 16px',
        }}
      >
        {Array.from(new Array(3)).map((_, index) => (
          <Skeleton
            key={index}
            variant={'rectangular'}
            width={100}
            height={100}
          />
        ))}
      </Box>
    </Container>
  );
};
