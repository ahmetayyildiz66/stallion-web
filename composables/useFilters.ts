interface Filter {
  id: string;
  isOpen: boolean;
  label: string;
  icon: string;
  options: { id: string; label: string }[];
}
const filters: Filter[] = reactive([
  {
    id: "approved",
    isOpen: false,
    label: "Approved",
    icon: 'check',
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
    icon: 'cake',
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
  {
    id: "size",
    isOpen: false,
    label: "Size",
    icon: 'scale',
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
    id: "color",
    isOpen: false,
    label: "Color",
    icon: 'square-3-stack-3d',
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
    id: "semen",
    isOpen: false,
    label: "Semen",
    icon: 'beaker',
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
    id: "sportLevel",
    isOpen: false,
    label: "Sport Level",
    icon: 'star',
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
    id: "price",
    isOpen: false,
    label: "Price",
    icon: 'banknotes',
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
    id: "country",
    isOpen: false,
    label: "Country",
    icon: 'globe-alt',
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
