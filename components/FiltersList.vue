<template>
  <div>
    <SingleFilter
      v-for="appliedFilter in appliedFilters"
      :key="appliedFilter"
      :filter="appliedFilter"
    />
  </div>
</template>

<script lang="ts" setup>
const { appliedFilters } = useFilters();

console.log("appliedFilters: ");
</script>
