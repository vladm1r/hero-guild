<script setup>
import { storeToRefs } from "pinia";
import { useBuildingsStore } from "../stores/buildingsStore";
import { buildingsService } from "../services/buildingsService";
import { computed } from "@vue/reactivity";

const buildings = useBuildingsStore();

const { guild } = storeToRefs(buildings);

const guildRank = computed(() => {
  return buildingsService.getGuildRank(guild.value);
});
</script>

<template>
  <div>
    <p class="text-base">Ранг гильдии:</p>
    <p class="text-4xl font-bold">{{ guildRank }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
