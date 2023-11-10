<template>
  <button class="flex justify-between items-center w-full h-20">
    <div class="flex items-center">
      <IconBirthday class="ml-2 mr-4" />
      <span>{{ filter.label }}</span>
    </div>
    <IconCaretDown />
  </button>

  <div v-if="filter.isOpen" v-for="option in filter.options" :key="option.id">
    <input :id="option.label" type="checkbox" v-model="option.label" />
    <label :for="option.label">{{ option.label }}</label>
  </div>
</template>

<script setup>
const { filter } = defineProps(['filter'])

</script>
