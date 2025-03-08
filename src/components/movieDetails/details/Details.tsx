import { DetailsProps } from './Details.types';
import { HeaderDetails } from '../headerDetails/HeaderDetails';
import { Overview } from '../overview/Overview';
import { AdditionalInformations } from '../additionalInformations/AdditionalInformations';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export const Details = ({
  title,
  genres,
  overview,
  releaseDate,
  tagline,
  voteAverage,
  voteCount,
  homepage,
  runtime,
}: DetailsProps) => {
  const theme = useTheme();
  const isMaxSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMinMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        width: '100%',
        gap: { xs: '20px', sm: '0' },
        minHeight: { md: '450px' },
      }}
    >
      <HeaderDetails
        title={title}
        genres={genres}
        releaseDate={releaseDate}
        runtime={runtime}
      />
      <Overview tagline={tagline} overview={overview} />
      {(!!isMaxSmScreen || !!isMinMdScreen) && (
        <AdditionalInformations
          voteAverage={voteAverage}
          voteCount={voteCount}
          homepage={homepage}
        />
      )}
    </Box>
  );
};
