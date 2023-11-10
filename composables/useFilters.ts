interface Filter {
  id: string;
  isOpen: boolean;
  label: string;
  // icon: any;
  options: { id: string; label: string }[];
}
const filters: Filter[] = reactive([
  {
    id: "approved",
    isOpen: true,
    label: "Approved",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "age",
    isOpen: false,
    label: "Age",
    options: [
      {
        id: "zero-four",
        label: "0 - 4 years",
      },
      {
        id: "four-eight",
        label: "4 - 8 years",
      },
      {
        id: "eight-twelve",
        label: "8 - 12 years",
      },
      {
        id: "twelve-fifteen",
        label: "12 - 15 years",
      },
      {
        id: "fifteen-twenty",
        label: "15 - 20 years",
      },
      {
        id: "twenty-older",
        label: "20 - ... years",
      },
    ],
  },
]);

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
