import { defineStore } from "pinia";

export const useBuildingsStore = defineStore("buildings", {
  state: () => ({ guild: 0 }),
  actions: {
    increase() {},
  },
});
