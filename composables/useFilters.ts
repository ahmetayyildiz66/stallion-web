import { filters } from "~/utils/filterData";
import { horses } from "~/utils/horsesData";

interface OptionFilter {
  filterId: string,
  optId: string,
  optChecked: boolean,
  optLabel: string,
}


const appliedFilters = ref<OptionFilter[]>([])

const toggleDropdown = (id: string) => {
  filters.forEach(filter =>
    filter.isOpen = filter.id === id ? !filter.isOpen : false
  )
}

const getStallions = () => {
  return horses
}

const stallionCount = () => {
  return horses.length
}

const applyFilter = (filteredItem: OptionFilter) => {
  const { optChecked } = filteredItem

  if (optChecked) {
    appliedFilters.value.push(filteredItem)
  } else {
    removeFilter(filteredItem)
  }
}

const removeOption = (filterId: string, optionId: string) => {
  filters.forEach(filter => {
    if (filter.id === filterId) {
      filter.options.forEach(opt => {
        if (opt.id === optionId) {
          opt.isChecked = false
        }
      })
    }
  })
}

const resetFilters = () => {
  appliedFilters.value = []
  filters.map(filter => filter.options.map((opt) => opt.isChecked = false))
}

const removeFilter = (filteredItem: OptionFilter) => {
  appliedFilters.value = appliedFilters.value.filter(filter => filter.optId !== filteredItem.optId)
}

const toggleStar = (id: string) => {
  horses.forEach(horse => {
    if (horse.id === id) {
      horse.isFavorite = !horse.isFavorite
    }
  })
}

export const useFilters = () => {
  return {
    filters,
    appliedFilters,
    horses,
    toggleDropdown,
    applyFilter,
    removeFilter,
    removeOption,
    getStallions,
    stallionCount,
    toggleStar,
    resetFilters
  };
};
