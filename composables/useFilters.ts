import { filters } from "~/utils/filterData";

const toggleDropdown = (id: string) => {
  filters.forEach(filter =>
    filter.isOpen = filter.id === id ? !filter.isOpen : false
  )
}

export const useFilters = () => {
  return {
    filters,
    toggleDropdown
  };
};
