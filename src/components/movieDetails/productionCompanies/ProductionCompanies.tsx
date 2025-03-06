import { useCallback, useState } from 'react';
import { ProductionCompaniesProps } from './ProductionCompanies.types';
import { IMAGE_API_URL } from '../../../../api';
import { StyledImg, Wrapper, Container } from './ProductionCompanies.styles';

export const ProductionCompanies = ({
  productionCompanies,
}: ProductionCompaniesProps) => {
  const [brokenImages, setBrokenImages] = useState(new Set());

  const handleImageError = useCallback((logoPath: string) => {
    setBrokenImages((prev) => new Set(prev).add(logoPath));
  }, []);

  return (
    <Wrapper>
      {productionCompanies
        .filter(({ logo_path }) => logo_path && !brokenImages.has(logo_path))
        .map(({ logo_path }) => (
          <Container key={logo_path}>
            <StyledImg
              src={`${IMAGE_API_URL}/w200/${logo_path}`}
              onError={() => handleImageError(logo_path)}
            />
          </Container>
        ))}
    </Wrapper>
  );
};
