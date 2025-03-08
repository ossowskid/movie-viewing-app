import { Box, useMediaQuery, useTheme } from '@mui/material';
import useFormattedDate from '../../../hooks/useFormatDate';
import { H1, ReleaseDate } from './HeaderDetails.styles';
import { HeaderDetailsProps } from './HeaderDetails.types';
import { formatMovieInfo } from './utils/formatMovie.utils';

export const HeaderDetails = ({
  title,
  releaseDate,
  genres,
  runtime,
}: HeaderDetailsProps) => {
  const theme = useTheme();
  const isMinMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isMaxMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const formattedDate = useFormattedDate(releaseDate, 'yyyy');

  return (
    <Box sx={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>
      <H1>
        {title} {isMinMdScreen && <ReleaseDate>({formattedDate})</ReleaseDate>}
      </H1>
      <Box
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column', md: 'row' },
          gap: '4px',
        }}
      >
        {formatMovieInfo(releaseDate, genres, runtime, isMaxMdScreen)}
      </Box>
    </Box>
  );
};
