<template>
  <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
    <div
      v-for="horse in getStallions()"
      :key="horse.id"
      class="border border-yellow-50 rounded-lg p-2 shadow-md shadow-gray-500 hover:cursor-pointer"
    >
      <figure class="text-white flex space-x-2 md:space-x-0 md:grid md:grid-cols-2 md:gap-2 gap-0">
        <NuxtImg :src="horse.image" class="border-none" />

        <figcaption class="space-y-1">
          <h2 class="text-yellow-50 lg:text-lg 2xl:text-xl">{{ horse.name }}</h2>
          <span class="text-xs tracking-tight inline-block">{{
            horse.gen
          }}</span>
          <span class="text-xs tracking-tight block" v-if="horse.semen[0].price"
            >€ {{ horse.semen[0].price }}</span
          >
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { getStallions } = useFilters();

const emit = defineEmits(["stallionCount"]);

onMounted(() => {
  emit("stallionCount", getStallions().length);
});
</script>
