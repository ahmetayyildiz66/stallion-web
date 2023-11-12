<template>
  <div class="flex items-center justify-between">
    <h3 class="text-xl text-white">{{ stallionCount() }} results</h3>
    <button>Sort</button>
  </div>
</template>

<script lang="ts" setup>
const { stallionCount } = useFilters();
</script>
