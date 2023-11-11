import { filters } from "~/utils/filterData";

const appliedFilters = ref<string[]>([])

const toggleDropdown = (id: string) => {
  filters.forEach(filter =>
    filter.isOpen = filter.id === id ? !filter.isOpen : false
  )
}

const applyFilter = (filteredItem: { id: string, isChecked: boolean, label: string }) => {
  const { isChecked, label } = filteredItem

  if (isChecked) {
    appliedFilters.value.push(filteredItem.label)
  } else {
    appliedFilters.value = appliedFilters.value.filter(filter => filter !== label)
  }
}

export const useFilters = () => {
  return {
    filters,
    appliedFilters,
    toggleDropdown,
    applyFilter,
  };
};
