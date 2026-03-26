import { defineStore } from "pinia";

export const useSearchInputStore = (id: string) =>
  defineStore(`ui-search-input-${id}`, () => {
    // Placeholder store for SearchInput state
    return {};
  })();
