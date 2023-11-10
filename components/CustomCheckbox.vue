<template>
  <label
    :key="option.id"
    :for="option.label"
    class="ms-2 text-sm font-medium text-white hover:cursor-pointer flex items-center mb-6"
  >
    <input
      :checked="option.isChecked"
      :id="option.label"
      :value="option.id"
      type="checkbox"
      class="w-6 h-6 accent-yellow-50 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
    />

    <span class="ml-2">{{ option.label }}</span>
  </label>
</template>

<script lang="ts" setup>
const { option } = defineProps(["option"]);
</script>
