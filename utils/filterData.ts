export interface Filter {
  id: string;
  isOpen: boolean;
  label: string;
  icon: string;
  options: { id: string; label: string, isChecked: boolean }[];
}
export const filters: Filter[] = reactive([
  {
    id: "approved",
    isOpen: false,
    label: "Approved",
    icon: 'check',
    options: [
      {
        id: "yes",
        label: "Yes",
        isChecked: false,
      },
      {
        id: "no",
        label: "No",
        isChecked: false,
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
        isChecked: false,
      },
      {
        id: "four-eight",
        label: "4 - 8 years",
        isChecked: false,
      },
      {
        id: "eight-twelve",
        label: "8 - 12 years",
        isChecked: false,
      },
      {
        id: "twelve-fifteen",
        label: "12 - 15 years",
        isChecked: false,
      },
      {
        id: "fifteen-twenty",
        label: "15 - 20 years",
        isChecked: false,
      },
      {
        id: "twenty-older",
        label: "20 - ... years",
        isChecked: false,
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
        id: "pony",
        label: "Pony",
        isChecked: false,
      },
      {
        id: "less-160",
        label: "... - 1.60m",
        isChecked: false,
      },
      {
        id: "160-165",
        label: "1.60m - 1.65m",
        isChecked: false,
      },
      {
        id: "165-170",
        label: "1.65m - 1.70m",
        isChecked: false,
      },
      {
        id: "170-175",
        label: "1.70m - 1.75m",
        isChecked: false,
      },
      {
        id: "175-greater",
        label: "1.75m - ...",
        isChecked: false,
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
        id: "black",
        label: "Black",
        isChecked: false,
      },
      {
        id: "brown",
        label: "Brown",
        isChecked: false,
      },
      {
        id: "buckskin",
        label: "Buckskin",
        isChecked: false,
      },
      {
        id: "chestnut",
        label: "Chestnut",
        isChecked: false,
      },
      {
        id: "darkBrown",
        label: "Dark Brown",
        isChecked: false,
      },
      {
        id: "darkChestnut",
        label: "Dark Chestnut",
        isChecked: false,
      },
      {
        id: "grey",
        label: "Grey",
        isChecked: false,
      },
      {
        id: "skewbald",
        label: "Skewbald",
        isChecked: false,
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
        id: "fresh",
        label: "Fresh",
        isChecked: false,
      },
      {
        id: "frozen",
        label: "Frozen",
        isChecked: false,
      },
      {
        id: "straw",
        label: "Straw",
        isChecked: false,
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
        id: "100-105",
        label: "1.00m - 1.05m",
        isChecked: false,
      },
      {
        id: "110-115",
        label: "1.10m - 1.15m",
        isChecked: false,
      },
      {
        id: "120-125",
        label: "1.20m - 1.25m",
        isChecked: false,
      },
      {
        id: "130-135",
        label: "1.30m - 1.35m",
        isChecked: false,
      },
      {
        id: "140-145",
        label: "1.40m - 1.45m",
        isChecked: false,
      },
      {
        id: "150-155",
        label: "1.50m - 1.55m",
        isChecked: false,
      },
      {
        id: "160",
        label: "1.60m",
        isChecked: false,
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
        id: "0 - 500",
        label: "0 - 500",
        isChecked: false,
      },
      {
        id: "500 - 1000",
        label: "500 - 1000",
        isChecked: false,
      },
      {
        id: "1000 - 1500",
        label: "1000 - 1500",
        isChecked: false,
      },
      {
        id: "2000 - more",
        label: "2000 - ...",
        isChecked: false,
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
        id: "belgium",
        label: "Belgium",
        isChecked: false,
      },
      {
        id: "france",
        label: "France",
        isChecked: false,
      },
      {
        id: "germany",
        label: "Germany",
        isChecked: false,
      },
      {
        id: "italy",
        label: "Italy",
        isChecked: false,
      },
      {
        id: "poland",
        label: "Poland",
        isChecked: false,
      },
      {
        id: "sweden",
        label: "Sweden",
        isChecked: false,
      },
      {
        id: "netherlands",
        label: "The Netherlands",
        isChecked: false,
      },
      {
        id: "uk",
        label: "United Kingdom",
        isChecked: false,
      },
      {
        id: "usa",
        label: "USA",
        isChecked: false,
      },
    ],
  },
]);