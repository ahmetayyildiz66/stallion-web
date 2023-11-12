<template>
  <section class="pt-6">
    <div class="grid grid-cols-1 md:grid-cols-filter gap-10">
      <HorseFilters />

      <div class="space-y-12">
        <SortFilter />
        <FiltersList />

        <Stallions />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
