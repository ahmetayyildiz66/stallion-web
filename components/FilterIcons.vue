<template>
  <CakeIcon v-if="icon === 'cake'" class="h-8 w-8 ml-2 mr-4" />
  <CheckCircleIcon v-else-if="icon === 'check'" class="h-8 w-8 ml-2 mr-4" />
  <ScaleIcon v-else-if="icon === 'scale'" class="h-8 w-8 ml-2 mr-4" />
  <Square3Stack3DIcon
    v-else-if="icon === 'square-3-stack-3d'"
    class="h-8 w-8 ml-2 mr-4"
  />
  <BeakerIcon v-else-if="icon === 'beaker'" class="h-8 w-8 ml-2 mr-4" />
  <StarIcon v-else-if="icon === 'star'" class="h-8 w-8 ml-2 mr-4" />
  <BanknotesIcon v-else-if="icon === 'banknotes'" class="h-8 w-8 ml-2 mr-4" />
  <GlobeAltIcon v-else-if="icon === 'globe-alt'" class="h-8 w-8 ml-2 mr-4" />
</template>

<script setup lang="ts">
import {
  CakeIcon,
  CheckCircleIcon,
  ScaleIcon,
  Square3Stack3DIcon,
  BeakerIcon,
  StarIcon,
  BanknotesIcon,
  GlobeAltIcon
} from "@heroicons/vue/24/solid";

const { icon } = defineProps(["icon"]);
</script>
