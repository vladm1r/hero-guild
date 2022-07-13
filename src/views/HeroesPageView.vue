<script setup>
import { storeToRefs } from "pinia";
import HeroItem from "../components/HeroItem.vue";
import { useBuildingsStore } from "../stores/buildingsStore";
import { heroService } from "../services/heroService";
import { ref } from "@vue/reactivity";

const buildings = useBuildingsStore();

const { guild } = storeToRefs(buildings);

let heroStats = ref([]);

function onClickRoll() {
  heroStats.value = heroService.generateNewStats(guild.value);
}
</script>

<template>
  <div class="pt-32 flex items-center justify-center flex-col">
    <h2 class="font-semibold text-4xl mb-8">Нанять героя</h2>
    <HeroItem class="mb-6" :stats="heroStats" />
    <button
      class="block mt-8 px-4 py-2 bg-green-400 hover:bg-green-700 rounded-lg transition-all text-white"
      @click="onClickRoll"
    >
      ролл
    </button>
  </div>
</template>
