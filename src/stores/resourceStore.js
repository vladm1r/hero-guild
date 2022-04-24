import { defineStore } from "pinia";

export const useResourceStore = defineStore("resource", {
  state: () => ({ gold: 10 }),
  actions: {
    increase() {},
  },
});
