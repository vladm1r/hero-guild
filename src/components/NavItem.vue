<script setup>
const props = defineProps({
  link: String,
});
</script>

<template>
  <a
    :href="props.link"
    class="w-20 h-20 rounded-full bg-yellow-600 hover:bg-amber-700 flex items-center justify-center border-4 hover:scale-105 border-amber-700 transition-all"
  >
    <slot />
  </a>
</template>
