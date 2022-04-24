<script setup>
import { storeToRefs } from "pinia";
import { useResourceStore } from "../stores/resourceStore";
const resources = useResourceStore();

const { gold } = storeToRefs(resources);

function onClickMoney() {
  resources.$patch({
    gold: gold.value + 50,
  });
}
</script>

<template>
  <div class="pt-64 flex flex-wrap flex-col items-center justify-center">
    <h2 class="font-semibold text-4xl">Тут будут квесты</h2>
    <button
      class="block mt-8 px-4 py-2 bg-green-400 hover:bg-green-700 rounded-lg transition-all text-white"
      @click="onClickMoney"
    >
      + деньги
    </button>
  </div>
</template>
