import { ChangeEvent, useCallback, useState } from 'react';
import {
  Box,
  FormControl,
  Button,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from '@mui/material';
import { sortOptions } from './sortOptions';
import { useGetGenresContext } from '../../context/useGetGenresContext/useGetGenresContext';
import AnimateHeight from 'react-animate-height';
import { FiltersSkeleton } from './filtersSkeleton/FiltersSkeleton';

export const Filters = () => {
  const [isOpened, setIsOpened] = useState(false);

  const {
    genresData,
    selectedGenres,
    sortBy,
    setSelectedGenres,
    setSortBy,
    isLoading,
  } = useGetGenresContext();

  const handleSortChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newSortBy = event.target.value;
      setSortBy(newSortBy);
    },
    [setSortBy]
  );

  const handleGenreChange = useCallback(
    (genreId: string, isChecked: boolean) => {
      const currentGenres = Array.isArray(selectedGenres) ? selectedGenres : [];
      const updatedGenres = isChecked
        ? [...currentGenres, genreId]
        : currentGenres.filter((id) => id !== genreId);
      setSelectedGenres(updatedGenres);
    },
    [selectedGenres, setSelectedGenres]
  );

  const handleResetFilters = useCallback(() => {
    setSelectedGenres([]);
    setSortBy('');
  }, [setSelectedGenres, setSortBy]);

  if (isLoading) {
    return <FiltersSkeleton />;
  }

  if (!genresData) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px',
        background: 'background.paper',
        alignItems: 'center',
      }}
    >
      <AnimateHeight duration={500} height={isOpened ? 'auto' : 0}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            }}
          >
            <FormControl fullWidth>
              <Typography
                variant='subtitle2'
                gutterBottom
                sx={{ color: 'text.primary', fontWeight: 600 }}
              >
                Kategorie
              </Typography>
              <FormGroup row>
                {genresData.map(({ id, name }) => (
                  <FormControlLabel
                    sx={{
                      width: 146,
                      color: 'text.secondary',
                    }}
                    key={id}
                    control={
                      <Checkbox
                        sx={{
                          color: 'text.secondary',
                          '&.Mui-checked': { color: 'secondary.main' },
                        }}
                        checked={
                          Array.isArray(selectedGenres) &&
                          selectedGenres.includes(String(id))
                        }
                        onChange={(e) =>
                          handleGenreChange(String(id), e.target.checked)
                        }
                        name={String(id)}
                      />
                    }
                    label={name}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <FormControl fullWidth>
              <Typography
                variant={'subtitle2'}
                gutterBottom
                sx={{ fontWeight: 600, color: 'text.primary' }}
              >
                Sortuj według
              </Typography>
              <RadioGroup row value={sortBy} onChange={handleSortChange}>
                <FormControlLabel
                  sx={{ width: 213, color: 'text.secondary' }}
                  value={''}
                  control={
                    <Radio
                      sx={{
                        color: 'text.secondary',
                        '&.Mui-checked': { color: 'secondary.main' },
                      }}
                    />
                  }
                  label={'Domyślne'}
                />
                {sortOptions.map(({ value, label }) => (
                  <FormControlLabel
                    sx={{ width: 213, color: 'text.secondary' }}
                    key={value}
                    value={value}
                    control={
                      <Radio
                        sx={{
                          color: 'text.secondary',
                          '&.Mui-checked': { color: 'secondary.main' },
                        }}
                      />
                    }
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Button
            onClick={handleResetFilters}
            sx={{
              mt: 2,
              borderRadius: '4px',
              padding: '8px 16px;',
              backgroundColor: 'primary.main',
              color: 'text.primary',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Resetuj filtry
          </Button>
        </Box>
      </AnimateHeight>
      <Button
        sx={{
          borderRadius: '4px',
          padding: '8px 32px;',
          backgroundColor: 'primary.main',
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {!isOpened ? 'Pokaż filtry' : 'Ukryj filtry'}
      </Button>
    </Box>
  );
};
