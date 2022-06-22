<script setup>
import { heroStatsIcons } from "../constants/heroConstants";

const props = defineProps({
  name: String,
  value: [Number, String],
});
</script>

<template>
  <div class="flex items-center">
    <div
      class="w-8 h-8 rounded-full bg-gray-500 flex items-center content-center"
    >
      <v-icon :name="heroStatsIcons[name]" fill="white" class="m-auto" />
    </div>
    <div
      class="text-sm font-bold text-white bg-gray-500 px-2 -ml-2 rounded-tr-md rounded-br-md"
    >
      {{ value }}
    </div>
  </div>
</template>
