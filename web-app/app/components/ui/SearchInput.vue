<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    class: String,
    default: "Buscar...",
  },
});
</script>
<template>
  <div
    class="flex items-stretch w-full h-[42px]! gap-0 group-focus-within:outline-none group group-focus"
  >
    <ui-text-input
      :placeholder="placeholder"
      class="flex-1 h-full! m-0! rounded-l-2xl! rounded-r-none! border-r-0! focus:outline-none! focus:ring-0! group-focus-within:border-ovis-neutral-600! group-focus-within:border-r-0!"
    />

    <ui-button
      button-type="outline"
      icon-name="material-symbols:search"
      icon-color="text-ovis-neutral-500"
      class="w-12! h-full! min-h-0! py-0! px-0! rounded-xl! rounded-l-none! border-2! border-l-0! duration-0! group-focus-within:border-ovis-neutral-600! group-focus-within:border-l-0! border-ovis-neutral-700! active:scale-100!"
    />
  </div>
</template>
<style scoped>
:deep(.flex-col) {
  margin: 0 !important;
  height: 100% !important;
}
</style>
