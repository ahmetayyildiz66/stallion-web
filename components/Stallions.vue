<template>
  <section class="grid grid-cols-3 gap-5">
    <div
      v-for="horse in getStallions()"
      :key="horse.id"
      class="border border-yellow-50 rounded-lg p-2 shadow-md shadow-gray-500 hover:cursor-pointer"
    >
      <figure class="text-white grid grid-cols-2">
        <NuxtImg :src="horse.image" class="border-none" />

        <figcaption>
          <h2 class="text-xl text-yellow-50">{{ horse.name }}</h2>
          <span class="text-xs tracking-tight inline-block">{{
            horse.gen
          }}</span>
          <span class="text-xs tracking-tight" v-if="horse.semen[0].price"
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
