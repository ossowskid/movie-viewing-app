import { useCallback } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import { sortOptions } from './sortOptions';
import { useGetGenresContext } from '../../context/useGetGenresContext/useGetGenresContext';

export const Filters = () => {
  const { genres, category, sortBy, setCategory, setSortBy } =
    useGetGenresContext();

  const handleCategoryChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      const newCategory = e.target.value as string;
      setCategory(newCategory);
    },
    [sortBy]
  );

  const handleSortChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      const newSortBy = e.target.value as string;
      setSortBy(newSortBy);
    },
    [category]
  );

  const handleResetFilters = useCallback(() => {
    setCategory('');
    setSortBy('');
  }, [setCategory, setSortBy]);

  if (!genres) {
    return null;
  }

  const categories = genres.map((genre) => genre.name);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Kategoria</InputLabel>
        <Select
          sx={{ width: '400px' }}
          value={category}
          label='Kategoria'
          onChange={handleCategoryChange}
        >
          <MenuItem value=''>
            <em>Wszystkie</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Sortuj według</InputLabel>
        <Select
          sx={{ width: '400px' }}
          value={sortBy}
          label='Sortuj według'
          onChange={handleSortChange}
        >
          <MenuItem value=''>
            <em>Domyślne</em>
          </MenuItem>
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleResetFilters}
        sx={{ mt: 2, width: 'fit-content' }}
      >
        Resetuj filtry
      </Button>
    </Box>
  );
};
