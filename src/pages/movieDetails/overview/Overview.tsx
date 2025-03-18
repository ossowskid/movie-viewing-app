import { Box } from '@mui/material';
import { OverviewProps } from './Overview.types';

export const Overview = ({ tagline, overview }: OverviewProps) => {
  if (!tagline && !overview) {
    return null;
  }

  return (
    <Box sx={{ minHeight: '250px', maxWidth: 650 }}>
      {!!tagline && <h3>{tagline}</h3>}
      {!!overview && (
        <Box sx={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>
          <strong>Opis</strong>
          <span>{overview}</span>
        </Box>
      )}
    </Box>
  );
};
