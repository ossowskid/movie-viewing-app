export type FiltersType = {
  category: string;
  sortBy: string;
};

export type FiltersProps = {
  category: string;
  sortBy: string;
  setCategory: (value: string) => void;
  setSortBy: (value: string) => void;
  onFilterChange: (filters: FiltersType) => void;
  categories?: string[];
};
