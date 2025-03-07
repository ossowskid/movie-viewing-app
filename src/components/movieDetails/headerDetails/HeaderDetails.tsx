import useFormattedDate from '../../../hooks/useFormatDate';
import { formatRuntime } from '../utils/formatRuntime';
import { MovieInfo, H1, ReleaseDate, Wrapper } from './HeaderDetails.styles';
import { HeaderDetailsProps } from './HeaderDetails.types';

export const HeaderDetails = ({
  title,
  releaseDate,
  genres,
  runtime,
}: HeaderDetailsProps) => {
  return (
    <Wrapper>
      <H1>
        {title}{' '}
        <ReleaseDate>({useFormattedDate(releaseDate, 'yyyy')})</ReleaseDate>
      </H1>
      <MovieInfo>
        <span>{useFormattedDate(releaseDate, 'dd.MM.yyyy')} (PL)</span> |{' '}
        <span>{genres.map(({ name }) => name).join(', ')}</span>
        {!!runtime && <span> | {formatRuntime(runtime)}</span>}
      </MovieInfo>
    </Wrapper>
  );
};
