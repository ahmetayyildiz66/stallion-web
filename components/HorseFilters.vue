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
const { filters } = useFilters();

onMounted(() => {
  const query = router.currentRoute.value.query;

  for (const key of Object.keys(router.currentRoute.value.query)) {
    filters.forEach((filter) => {
      if (filter.id === key) {
        const values = query[key];
        if (Array.isArray(values)) {
          values.forEach((val) => {
            filter.options.forEach((opt) => {
              if (opt.id === val) {
                opt.isChecked = true;
              }
            });
          });
        } else {
          filter.options.forEach((opt) => {
            if (opt.id === values) {
              opt.isChecked = true;
            }
          });
        }
      }
    });
  }
});
</script>
