<script setup>
import ResourceList from "./ResourceList.vue";
import Nav from "./TheNav.vue";
</script>

<template>
  <div
    class="px-2 py-2 bg-amber-300 rounded-b-lg border-x-2 border-b-2 border-amber-700 shadow-md grid grid-cols-3 gap-4"
  >
    <div></div>
    <Nav />
    <resource-list />
  </div>
</template>
