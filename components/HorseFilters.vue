<template>
  <div>
    <h3 class="text-2xl text-white mb-12">Filter</h3>
    <div
      v-for="filter in filters"
      :key="filter.id"
      class="border-b border-gray-50 text-white"
    >
      <DropdownFilter :filter="filter" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Filter {
  id: string;
  isOpen: boolean;
  label: string;
  // icon: any;
  options: { id: string; label: string }[];
}
const filters: Filter[] = [
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
];
</script>
