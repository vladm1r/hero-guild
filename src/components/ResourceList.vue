<script setup>
import ResourceItem from "./ResourceItem.vue";
import { useResourceStore } from "../stores/resourceStore";

const resources = useResourceStore();
</script>

<template>
  <div class="grid grid-cols-3 gap-x-4 items-start">
    <resource-item
      v-for="(value, name, index) in resources.$state"
      :name="name"
      :value="value"
      :key="index"
    />
  </div>
</template>
