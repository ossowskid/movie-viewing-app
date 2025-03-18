import { useCallback, useState } from 'react';
import { ProductionCompaniesProps } from './ProductionCompanies.types';
import { IMAGE_API_URL } from '../../../../api';
import { Image } from './ProductionCompanies.styles';
import { Box } from '@mui/material';

export const ProductionCompanies = ({
  productionCompanies,
}: ProductionCompaniesProps) => {
  const [brokenImages, setBrokenImages] = useState(new Set());

  const handleImageError = useCallback((logoPath: string) => {
    setBrokenImages((prev) => new Set(prev).add(logoPath));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: 'background.paper',
        borderRadius: '4px',
        alignItems: 'center',
        padding: '32px 16px',
      }}
    >
      {productionCompanies
        .filter(({ logo_path }) => logo_path && !brokenImages.has(logo_path))
        .map(({ logo_path }) => (
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              maxWidth: 160,
            }}
            key={logo_path}
          >
            <Image
              src={`${IMAGE_API_URL}/w200/${logo_path}`}
              onError={() => handleImageError(logo_path)}
            />
          </Box>
        ))}
    </Box>
  );
};
