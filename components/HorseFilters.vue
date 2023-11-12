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
const router = useRouter();
const { filters, applyFilter } = useFilters();
const { initQueryProps } = useRouteQuery();

onMounted(() => {
  const query = router.currentRoute.value.query;

  initQueryProps(query);

  for (const key of Object.keys(router.currentRoute.value.query)) {
    filters.forEach((filter) => {
      if (filter.id === key) {
        const values = query[key];
        const arrValues = Array.isArray(values) ? values : values?.split(" ");
        if (arrValues?.length) {
          arrValues.forEach((val) => {
            filter.options.forEach((opt) => {
              if (opt.id === val) {
                opt.isChecked = true;
                applyFilter({
                  filterId: filter.id,
                  optId: opt.id,
                  optChecked: opt.isChecked,
                  optLabel: opt.label,
                });
              }
            });
          });
        }
      }
    });
  }
});
</script>
