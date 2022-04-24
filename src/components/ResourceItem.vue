<script setup>
import { resourceIcons } from "../constants/resourceConstants";

const props = defineProps({
  name: String,
  value: [Number, String],
});
</script>

<template>
  <div class="flex items-center">
    <v-icon :name="resourceIcons[name]" class="mr-2" />
    <span>{{ value }}</span>
  </div>
</template>
