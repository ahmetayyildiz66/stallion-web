<template>
  <button
    class="flex justify-between items-center w-full h-20"
    @click="toggleDropdown(filter.id)"
  >
    <div class="flex items-center text-yellow-50">
      <FilterIcons :icon="filter.icon" />
      <span class="text-white">{{ filter.label }}</span>
    </div>
    <IconCaretDown />
  </button>

  <div v-if="filter.isOpen">
    <CustomCheckbox
      v-for="option in filter.options"
      :option="option"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
const { toggleDropdown, applyFilter } = useFilters();
const { filter } = defineProps(["filter"]);

const onChange = (event: Event) => {
  const { value } = event.target as HTMLInputElement;

  let filteredItem
  filter.options.forEach((opt: any) => {
    if (opt.id === value) {
      opt.isChecked = !opt.isChecked
      filteredItem = opt
    }
  });

  applyFilter(filteredItem!);
};
</script>
