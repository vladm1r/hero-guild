<script setup>
import { storeToRefs } from "pinia";
import { useResourceStore } from "../stores/resourceStore";
const resources = useResourceStore();

const { gold } = storeToRefs(resources);

function onClickMoney() {
  if (gold.value < 50) {
    return;
  }
  resources.$patch({
    gold: gold.value - 50,
  });
}
</script>

<template>
  <div class="pt-64 flex flex-wrap flex-col items-center justify-center">
    <h2 class="font-semibold text-4xl">Тут будет гильдия</h2>
    <button
      class="block mt-8 px-4 py-2 bg-red-400 hover:bg-red-700 rounded-lg transition-all text-white"
      @click="onClickMoney"
    >
      - деньги
    </button>
  </div>
</template>
