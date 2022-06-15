import { defineStore } from "pinia";

export const useBuildingsStore = defineStore("buildings", {
  state: () => ({ guild: 1 }),
  actions: {
    increase() {},
  },
});
