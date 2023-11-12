<template>
  <div>
    <SingleFilter
      v-for="(appliedFilter, index) in appliedFilters"
      :key="appliedFilter.optId"
      :filter="appliedFilter"
    />
  </div>
</template>

<script lang="ts" setup>
const { appliedFilters } = useFilters();
</script>
