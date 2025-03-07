import { OverviewWrapper, Wrapper } from './Overview.styles';
import { OverviewProps } from './Overview.types';

export const Overview = ({ tagline, overview }: OverviewProps) => {
  if (!tagline && !overview) {
    return null;
  }

  return (
    <Wrapper>
      {!!tagline && <h3>{tagline}</h3>}
      {!!overview && (
        <OverviewWrapper>
          <strong>Opis</strong>
          <span>{overview}</span>
        </OverviewWrapper>
      )}
    </Wrapper>
  );
};
