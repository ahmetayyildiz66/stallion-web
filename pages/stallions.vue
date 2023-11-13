<template>
  <main class="pt-6 container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-filter gap-10">
      <HorseFilters />

      <div class="space-y-12">
        <SortFilter />
        <FiltersList />

        <Stallions />
      </div>
    </div>
  </main>
</template>

