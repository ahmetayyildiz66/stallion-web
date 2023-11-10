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
const { filters } = useFilters();
</script>
