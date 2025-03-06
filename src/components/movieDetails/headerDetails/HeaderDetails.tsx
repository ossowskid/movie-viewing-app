import useFormattedDate from '../../../hooks/useFormatDate';
import { formatRuntime } from '../utils/formatRuntime';
// import { formatRuntime } from '../utils/formatRuntime';
import {
  AdditionalHeader,
  ReleaseDateTitle,
  StyledH2,
  Wrapper,
} from './HeaderDetails.styles';
import { HeaderDetailsProps } from './HeaderDetails.types';

export const HeaderDetails = ({
  title,
  releaseDate,
  genres,
  runtime,
}: HeaderDetailsProps) => {
  return (
    <Wrapper>
      <StyledH2>
        {title}{' '}
        <ReleaseDateTitle>
          ({useFormattedDate(releaseDate, 'yyyy')})
        </ReleaseDateTitle>
      </StyledH2>
      <AdditionalHeader>
        <span>{useFormattedDate(releaseDate, 'dd.MM.yyyy')} (PL)</span> |{' '}
        <span>{genres.map(({ name }) => name).join(', ')}</span>
        {!!runtime && <span> | {formatRuntime(runtime)}</span>}
      </AdditionalHeader>
    </Wrapper>
  );
};
