import useFormattedDate from '../../../../hooks/useFormatDate';
import { formatRuntime } from '../../utils/formatRuntime';

export const formatMovieInfo = (
  releaseDate: string | null,
  genres: { name: string }[],
  runtime?: number,
  isMaxMdScreen?: boolean
) => {
  const formattedDate = useFormattedDate(releaseDate, 'dd.MM.yyyy');
  const genreNames = genres.map(({ name }) => name).join(', ');
  const formattedRuntime = runtime ? formatRuntime(runtime) : null;

  const items = [
    formattedDate ? <span key='date'>{formattedDate} (PL)</span> : null,
    genreNames ? <span key='genres'>{genreNames}</span> : null,
    formattedRuntime ? <span key='runtime'>{formattedRuntime}</span> : null,
  ].filter(Boolean);

  return isMaxMdScreen
    ? items
    : items.map((item, index) => (
        <span key={index}>
          {item}
          {index !== items.length - 1 && ' | '}{' '}
        </span>
      ));
};
