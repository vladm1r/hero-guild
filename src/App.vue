<script setup>
import { ref, computed } from "vue";

import Header from "./components/TheHeader.vue";
import QuestsPageView from "./views/QuestsPageView.vue";
import HeroesPageView from "./views/HeroesPageView.vue";
import GuildPageView from "./views/GuildPageView.vue";

const routes = {
  "/": QuestsPageView,
  "/heroes": HeroesPageView,
  "/guild": GuildPageView,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || null;
});
</script>

<template>
  <div class="h-screen bg-sky-50">
    <div class="max-w-screen-xl mx-auto h-full">
      <Header />
      <component :is="currentView" />
    </div>
  </div>
</template>
