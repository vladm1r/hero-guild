<script setup>
import { storeToRefs } from "pinia";
import { useResourceStore } from "../stores/resourceStore";
import { useBuildingsStore } from "../stores/buildingsStore";
import { buildingsService } from "../services/buildingsService";
import { computed } from "@vue/reactivity";

import ResourceItem from "../components/ResourceItem.vue";

const resources = useResourceStore();
const buildings = useBuildingsStore();

const { gold } = storeToRefs(resources);
const { guild } = storeToRefs(buildings);

const guildPrice = computed(() => {
  return buildingsService.getGuildPrice(guild.value + 1);
});

const isMax = computed(() => {
  return buildingsService.getGuildMax() === guild.value ? true : false;
});

function onClickMoney() {
  if (gold.value < guildPrice.value) {
    return;
  }
  resources.$patch({
    gold: gold.value - guildPrice.value,
  });
  buildings.$patch({
    guild: guild.value + 1,
  });
}
</script>

<template>
  <div
    v-if="!isMax"
    class="pt-64 flex flex-wrap flex-col items-center justify-center"
  >
    <h2 class="font-semibold text-4xl">Повысить уровень гильдии:</h2>
    <button
      class="block mt-8 px-4 py-2 bg-red-400 hover:bg-red-700 rounded-lg transition-all text-white"
      @click="onClickMoney"
    >
      <ResourceItem name="gold" :value="guildPrice" />
    </button>
  </div>
  <div v-else class="pt-64">
    <h2 class="font-semibold text-4xl text-center">
      Максимальный уровень гильдии
    </h2>
  </div>
</template>
