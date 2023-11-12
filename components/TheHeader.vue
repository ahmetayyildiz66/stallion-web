<template>
  <header class="h-14 py-3 px-4 border-b border-gray-50 flex">
    <div class="flex items-center container mx-auto justify-between">
      <NuxtLink to="/">
        <NuxtImg src="/equisem.png" height="40" />
      </NuxtLink>
      <NuxtLink to="/compare" class="text-white">
        <p class="relative">
          <span>Comparison</span>
          <span
            v-if="compareList.length"
            class="bg-yellow-50 w-5 h-5 text-center rounded-full absolute text-sm -right-4 -top-2"
            >{{ compareList.length }}</span
          >
        </p>
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { compareList } = useCompare();
</script>
