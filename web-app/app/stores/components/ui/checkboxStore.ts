import { defineStore } from "pinia";

export const useCheckboxStore = (id: string) =>
  defineStore(`ui-checkbox-${id}`, () => {
    return {};
  })();
