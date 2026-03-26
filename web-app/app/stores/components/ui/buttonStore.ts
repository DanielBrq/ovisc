import { defineStore } from "pinia";

export const useButtonStore = (id: string) =>
  defineStore(`ui-button-${id}`, () => {
    return {};
  })();
