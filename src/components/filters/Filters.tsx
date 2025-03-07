import { useCallback } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { FiltersProps } from './Filters.types';
import { sortOptions } from './sortOptions';

export const Filters = ({
  category,
  sortBy,
  setCategory,
  setSortBy,
  onFilterChange,
  categories = [],
}: FiltersProps) => {
  const handleCategoryChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      const newCategory = e.target.value as string;
      setCategory(newCategory);
      onFilterChange({ category: newCategory, sortBy });
    },
    [sortBy, onFilterChange]
  );

  const handleSortChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      const newSortBy = e.target.value as string;
      setSortBy(newSortBy);
      onFilterChange({ category, sortBy: newSortBy });
    },
    [category, onFilterChange]
  );

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
    </Box>
  );
};
