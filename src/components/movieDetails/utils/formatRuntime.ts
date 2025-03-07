import { intervalToDuration } from 'date-fns/intervalToDuration';

export const formatRuntime = (minutes: number) => {
  const duration = intervalToDuration({
    start: 0,
    end: minutes * 60 * 1000,
  });

  const hours = duration.hours || 0;
  const mins = duration.minutes || 0;

  if (hours > 0 && mins > 0) {
    return `${hours}h ${mins}m`;
  }

  if (hours > 0) {
    return `${hours}h`;
  }

  return `${mins}m`;
};
