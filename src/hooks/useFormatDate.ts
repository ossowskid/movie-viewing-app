import { useMemo } from 'react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

const useFormattedDate = (dateString: string | null) => {
  return useMemo(() => {
    if (!dateString) return 'Brak daty';
    try {
      return format(new Date(dateString), 'd MMM yyyy', { locale: pl });
    } catch {
      return 'Nieprawidłowa data';
    }
  }, [dateString]);
};

export default useFormattedDate;
