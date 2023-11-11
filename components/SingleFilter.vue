<template>
  <span
    type="button"
    class="px-3 py-1 bg-yellow-50 rounded-2xl inline-flex items-center flex-wrap mb-3 mr-2"
  >
    <button class="h-5 w-5">
      <XMarkIcon class="w-4 h-4 text-gray-950" />
    </button>
    <span class="text-gray-300 text-sm">{{ filter }}</span>
  </span>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
const { filter } = defineProps(["filter"]);
</script>
