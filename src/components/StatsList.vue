<script setup>
import StatsItem from "./StatsItem.vue";

const props = defineProps({
  stats: Array,
});
</script>

<template>
  <div>
    <StatsItem
      v-for="(stat, index) in stats"
      :key="index"
      :name="stat.name"
      :value="stat.value"
      class="mb-2"
    />
  </div>
</template>
