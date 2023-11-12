<template>
  <div>
    <SingleFilter
      v-for="(appliedFilter, index) in appliedFilters"
      :key="appliedFilter.optId"
      :filter="appliedFilter"
    />
    <button
      v-if="appliedFilters.length"
      class="background-none outline-none border-yellow-50 text-yellow-50 inline-flex rounded-full px-2 pt-1"
      @click="clearFilters"
    >
      <span class="text-sm border-b border-yellow-50 flex">
        <XMarkIcon class="w-5 h-5" />
        <span>Clear Filters</span>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
const router = useRouter();
const { appliedFilters, resetFilters } = useFilters();
const { resetQuery } = useRouteQuery()

const clearFilters = () => {
  resetFilters()
  resetQuery()
  router.push({ query: undefined });
};
</script>
