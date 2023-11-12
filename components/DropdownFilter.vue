<template>
  <button
    class="flex justify-between items-center w-full h-20"
    @click="toggleDropdown(filter.id)"
  >
    <div class="flex items-center text-yellow-50">
      <FilterIcons :icon="filter.icon" />
      <span class="text-white">{{ filter.label }}</span>
      <span
        class="ml-3 bg-gray-900 text-yellow-50 w-5 h-5 p-3 text-center flex items-center justify-center rounded-full"
        v-if="appliedFilterCount > 0"
        >{{ appliedFilterCount }}</span
      >
    </div>
    <IconCaretDown />
  </button>

  <div v-if="filter.isOpen">
    <CustomCheckbox
      v-for="option in filter.options"
      :option="option"
      :is-checked="option.isChecked"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { toggleDropdown, applyFilter } = useFilters();
const { addQuery, removeQuery, queryProps } = useRouteQuery();
const { filter } = defineProps(["filter"]);

const onChange = (event: Event) => {
  const query = router.currentRoute.value.query;
  const { value } = event.target as HTMLInputElement;

  let filteredItem;
  filter.options.forEach((opt: any) => {
    if (opt.id === value) {
      opt.isChecked = !opt.isChecked;
      filteredItem = opt;

      if (opt.isChecked) {
        addQuery(filter.id, value);
      } else {
        removeQuery(filter.id, value);
      }

      router.push({ query: { ...query, ...queryProps.value } });
    }
  });

  if (filteredItem) {
    const { id, isChecked, label } = filteredItem;
    applyFilter({
      filterId: filter.id,
      optId: id,
      optChecked: isChecked,
      optLabel: label,
    });
  }
};

const appliedFilterCount = computed(() => {
  return filter.options.filter((opt: any) => opt.isChecked).length;
});
</script>
