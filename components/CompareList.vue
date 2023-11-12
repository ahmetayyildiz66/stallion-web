<template>
  <div class="pt-6">
    <h3 class="text-2xl text-white mb-12">Compare Stallions</h3>

    <div class="flex" v-if="compareList.length">
      <div
        class="flex-none p-2 text-gray-300 text-sm flex-grow border-r border-gray-300"
      >
        <div class="p-2 border-b">Name</div>
        <div class="p-2 border-b">Birth year</div>
        <div class="p-2 border-b">Color</div>
        <div class="p-2 border-b">Height</div>
        <div class="p-2 border-b">Price(semen)</div>
        <div class="p-2">Approved</div>
      </div>

      <div
        v-for="(row, index) in comparedHorses"
        :key="index"
        class="flex flex-grow border-r text-gray-300 text-sm p-2 items-center"
      >
        <div class="flex flex-col flex-grow">
          <div class="text-white p-2 border-b">
            {{ row.name }}
          </div>
          <div class="flex-auto p-2 border-b">
            {{ row.birthYear }}
          </div>
          <div class="flex-auto p-2 border-b">
            {{ row.color }}
          </div>
          <div class="flex-auto p-2 border-b">
            {{ row.height }}
          </div>
          <div class="flex-auto p-2 border-b">
            {{ row.price }}
          </div>
          <div class="flex-auto p-2">
            {{ row.approved }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
const router = useRouter();
const { compareList } = useCompare();
const { horses } = useFilters();

interface CompareHorse {
  name: string;
  birthYear: number;
  color: string;
  height: number;
  price: string;
  approved: string;
}
const comparedHorses = ref<CompareHorse[]>([]);

onMounted(() => {
  const queryParams = ref<Record<string, string[]>>({});

  compareList.value.forEach((value: string) => {
    if (!queryParams.value["stallion"]) {
      queryParams.value["stallion"] = [value];
    } else {
      queryParams.value["stallion"].push(value);
    }
    horses.forEach((horse) => {
      if (horse.name === value) {
        comparedHorses.value.push({
          name: horse.name,
          birthYear: horse.birthYear,
          color: horse.color,
          height: horse.height,
          price: `${horse.semen[0].price} (${horse.semen[0].type})`,
          approved: horse.approved.join("|"),
        });
      }
    });
  });

  router.push({ query: queryParams.value });
});
</script>
