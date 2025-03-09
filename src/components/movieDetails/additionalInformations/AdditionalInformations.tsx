import { Box, Button, Rating } from '@mui/material';
import { AdditionalInformationsProps } from './AdditionalInformations.types';

export const AdditionalInformations = ({
  voteAverage,
  voteCount,
  homepage,
}: AdditionalInformationsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: '20px', md: '0' },
      }}
    >
      <Box sx={{ display: 'flex', flexFlow: 'column', gap: '4px' }}>
        <strong>Ocena użytkowników</strong>
        <Rating
          name='customized-10'
          precision={0.01}
          value={voteAverage}
          max={10}
          readOnly
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        />
        <span>Ilość głosów: {voteCount}</span>
      </Box>
      {!!homepage && (
        <Button
          component='a'
          href={homepage}
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            borderRadius: '4px',
            padding: '8px 16px',
            transition: '0.3s',
            backgroundColor: 'info.main',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'info.dark',
              transform: 'scale(1.05)',
            },
          }}
        >
          Obejrzyj teraz!
        </Button>
      )}
    </Box>
  );
};
