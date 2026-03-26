<script setup lang="ts">
import { ref } from "vue";

// Usamos defineModel para una vinculaciÃ³n de dos vÃ­as limpia con el padre
const visible = defineModel<boolean>("visible", { default: false });

const openFilters = ref<Record<string, boolean>>({
  OrderBy: true,
  categories: false,
  price: false,
  rating: false,
});

function toggleFilter(key: string) {
  if (openFilters.value.hasOwnProperty(key)) {
    openFilters.value[key] = !openFilters.value[key];
  } else {
    openFilters.value[key] = true;
  }
}
</script>

<template>
  <!-- Overlay -->
  <div
    v-if="visible"
    @click="visible = false"
    class="fixed inset-0 bg-ovis-neutral-950/60 z-50 backdrop-blur-sm transition-opacity"
  ></div>

  <!-- Drawer Panel -->
  <div
    class="fixed top-0 right-0 h-screen w-80 bg-ovis-neutral-900 shadow-2xl z-50 transform transition-transform duration-300 border-l border-ovis-neutral-800 flex flex-col"
    :class="visible ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between p-4 border-b border-ovis-neutral-800"
    >
      <span class="text-xl font-bold text-ovis-neutral-50">Filtros</span>
      <button
        @click="visible = false"
        class="p-2 text-ovis-neutral-400 hover:text-ovis-neutral-50 hover:bg-ovis-neutral-800 rounded-lg transition-all"
      >
        <Icon name="material-symbols:close-rounded" size="24" />
      </button>
    </div>

    <!-- Content -->
    <div
      class="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-2"
    >
      <!-- Ordenar por -->
      <div class="border-b border-ovis-neutral-800/50 pb-2">
        <button
          @click="toggleFilter('OrderBy')"
          class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-ovis-neutral-800/50 transition-all duration-300 group text-left"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:sort-by-alpha"
              size="22"
              class="text-ovis-primary-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="font-medium text-ovis-neutral-200 group-hover:text-ovis-neutral-50 transition-colors"
            >
              Ordenar por
            </span>
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-ovis-neutral-500 transition-transform duration-300"
            :class="{ 'rotate-180': openFilters.OrderBy }"
          />
        </button>
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="
            openFilters.OrderBy
              ? 'max-h-96 opacity-100 py-2'
              : 'max-h-0 opacity-0'
          "
        >
          <div class="px-3">
            <div class="flex flex-col gap-2">
              <UiCheckbox label="Precio: Menor a Mayor" />
              <UiCheckbox label="Precio: Mayor a Menor" />
              <UiCheckbox label="CalificaciÃ³n: Mayor a Menor" />
              <UiCheckbox label="CalificaciÃ³n: Menor a Mayor" />
            </div>
          </div>
        </div>
      </div>

      <!-- CategorÃ­as -->
      <div class="border-b border-ovis-neutral-800/50 pb-2">
        <button
          @click="toggleFilter('categories')"
          class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-ovis-neutral-800/50 transition-all duration-300 group text-left"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:category-outline-rounded"
              size="22"
              class="text-ovis-primary-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="font-medium text-ovis-neutral-200 group-hover:text-ovis-neutral-50 transition-colors"
            >
              CategorÃ­as
            </span>
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-ovis-neutral-500 transition-transform duration-300"
            :class="{ 'rotate-180': openFilters.categories }"
          />
        </button>
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="
            openFilters.categories
              ? 'max-h-96 opacity-100 py-2'
              : 'max-h-0 opacity-0'
          "
        >
          <div class="px-3">
            <UiCheckbox label="CategorÃ­a 1" />
            <UiCheckbox label="CategorÃ­a 2" />
            <UiCheckbox label="CategorÃ­a 3" />
            <UiCheckbox label="CategorÃ­a 4" />
            <UiCheckbox label="CategorÃ­a 5" />
          </div>
        </div>
      </div>

      <!-- Precio -->
      <div class="border-b border-ovis-neutral-800/50 pb-2">
        <button
          @click="toggleFilter('price')"
          class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-ovis-neutral-800/50 transition-all duration-300 group text-left"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:payments-outline-rounded"
              size="22"
              class="text-ovis-primary-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="font-medium text-ovis-neutral-200 group-hover:text-ovis-neutral-50 transition-colors"
            >
              Precio
            </span>
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-ovis-neutral-500 transition-transform duration-300"
            :class="{ 'rotate-180': openFilters.price }"
          />
        </button>
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="
            openFilters.price
              ? 'max-h-96 opacity-100 py-2'
              : 'max-h-0 opacity-0'
          "
        >
          <div class="px-3">
            <p class="text-ovis-neutral-400 text-sm italic">
              Selector de precio...
            </p>
          </div>
        </div>
      </div>

      <!-- CalificaciÃ³n -->
      <div class="pb-2">
        <button
          @click="toggleFilter('rating')"
          class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-ovis-neutral-800/50 transition-all duration-300 group text-left"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:star-outline-rounded"
              size="22"
              class="text-ovis-primary-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="font-medium text-ovis-neutral-200 group-hover:text-ovis-neutral-50 transition-colors"
            >
              CalificaciÃ³n
            </span>
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-ovis-neutral-500 transition-transform duration-300"
            :class="{ 'rotate-180': openFilters.rating }"
          />
        </button>
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="
            openFilters.rating
              ? 'max-h-96 opacity-100 py-2'
              : 'max-h-0 opacity-0'
          "
        >
          <div class="px-3">
            <p class="text-ovis-neutral-400 text-sm italic">
              Estrellas de calificaciÃ³n...
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div
      class="p-4 border-t border-ovis-neutral-800 bg-ovis-neutral-900/50 backdrop-blur-sm"
    >
      <ui-button
        label="Aplicar Filtros"
        buttonType="primary"
        class="w-full bg-ovis-primary-600 hover:bg-ovis-primary-500 text-ovis-neutral-50 font-semibold py-2 rounded-lg transition-colors mb-2 cursor-pointer active:scale-95 duration-200"
      >
      </ui-button>
      <ui-button
        label="Limpiar Filtros"
        class="w-full bg-transparent hover:bg-ovis-neutral-800 text-ovis-neutral-400 font-medium py-2 rounded-lg transition-colors text-sm cursor-pointer"
      >
      </ui-button>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-ovis-neutral-700);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--color-ovis-neutral-600);
}
</style>
