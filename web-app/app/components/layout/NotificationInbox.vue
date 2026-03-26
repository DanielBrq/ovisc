<script setup lang="ts">
import { AppRoutes } from "~/shared";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

//props
const props = defineProps({
  isMobile: Boolean,
});
</script>
<template>
  <!-- If mobile, button link to notifications page -->
  <div v-if="isMobile" class="flex items-center">
    <NuxtLink :to="AppRoutes.home" class="flex items-center">
      <icon
        name="material-symbols:notifications-outline-rounded"
        size="24"
        class="text-ovis-neutral-300 hover:text-ovis-neutral-50 cursor-pointer transition-colors"
        :class="{ 'text-ovis-secondary-500': isOpen === true }"
      />
    </NuxtLink>
  </div>

  <!-- If desktop, button show modal notifications-->
  <div v-else class="flex items-center relative">
    <button @click="toggle" type="button" class="flex items-center">
      <icon
        name="material-symbols:notifications-outline-rounded"
        size="24"
        class="text-ovis-neutral-300 hover:text-ovis-neutral-50"
        :class="{ 'text-ovis-secondary-500': isOpen }"
      />
    </button>

    <div
      v-if="isOpen"
      class="fixed right-10 top-12 border-2 border-t-ovis-secondary-400 border-l-ovis-secondary-400 border-b-ovis-danger-400 border-r-ovis-danger-400 bg-ovis-neutral-900 z-50 shadow-xl transition-all duration-300"
    >
      <div class="w-85 h-100 flex items-center justify-center">
        <!-- Content -->
      </div>
    </div>
  </div>
</template>
