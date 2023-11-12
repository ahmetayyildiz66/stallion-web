<template>
  <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
    <div
      v-for="horse in horses"
      :key="horse.id"
      class="border border-yellow-50 space-y-4 rounded-lg px-2 py-3 shadow-md shadow-gray-500 hover:cursor-pointer"
    >
      <figure
        class="text-white flex space-x-2 md:space-x-0 md:grid md:grid-cols-2 md:gap-2 gap-0"
      >
        <NuxtImg :src="horse.image" class="border-none" />

        <figcaption class="space-y-1">
          <button type="button" class="w-full flex justify-end">
            <StarIcon
              v-if="!horse.isFavorite"
              class="w-5 h-5 text-yellow-50"
              @click="toggleStar(horse.id)"
            />
            <StarIconSolid
              v-else
              class="w-5 h-5 text-yellow-50"
              @click="toggleStar(horse.id)"
            />
          </button>
          <h2 class="text-yellow-50 lg:text-lg 2xl:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{{ horse.name }}</span>
          </h2>
          <span class="text-xs tracking-tight inline-block">{{
            horse.gen
          }}</span>
          <span class="text-xs tracking-tight block" v-if="horse.semen[0].price"
            >€ {{ horse.semen[0].price }}</span
          >
        </figcaption>
      </figure>
      <div class="flex space-x-2">
        <label
          :key="horse.id"
          :for="horse.name"
          class="ms-2 text-sm font-medium text-white hover:cursor-pointer flex items-center"
        >
          <input
            :id="horse.name"
            :value="horse.id"
            :checked="checkInCompareList(horse.name)"
            @change="updateCompareList(horse.name)"
            type="checkbox"
            class="w-6 h-6 accent-yellow-50 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
          />

          <span class="ml-2">Compare the stallion</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StarIcon } from "@heroicons/vue/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/vue/24/solid";
const { horses, toggleStar } = useFilters();
const { compareList, toggleCompareList } = useCompare()

const emit = defineEmits(["stallionCount"]);

onMounted(() => {
  emit("stallionCount", horses.length);
});

const updateCompareList = (name: string) => {
  toggleCompareList(name)
}

const checkInCompareList = (name: string) => {
  return compareList.value.findIndex(item => item === name) !== -1
}
</script>
