<template>
  <div>
    <SingleFilter
      v-for="appliedFilter in filters"
      :key="appliedFilter"
      :filter="appliedFilter"
    />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const { appliedFilters } = useFilters();
// const filters: string[] = [];
// const filters = {
//   size: ["pony", "165-170"],
//   color: ["buckskin", "chestnut"],
// };

// const filters = router.currentRoute.value.query
// Object.values(router.currentRoute.value.query).forEach((e) => {
//   e.forEach()
// });
// console.log('routerrrrrr: ', )
// for (const [key, value] of Object.entries(router.currentRoute.value.query)) {
//   console.log('key: ', key)
//   console.log('value: ', value)
// }
const allValues = Object.values(router.currentRoute.value.query).flatMap(value => value);

console.log("appliedFilters router: ", allValues);
</script>
