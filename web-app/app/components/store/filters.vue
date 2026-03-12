<script setup lang="ts">
import Drawer from 'primevue/drawer';
import { ref } from "vue";

// Usamos defineModel para una vinculación de dos vías limpia con el padre
const visible = defineModel<boolean>('visible', { default: false });

const openFilters = ref<Record<string, boolean>>({
    OrderBy: true,
    categories: false,
    price: false,
    rating: false
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
    <Drawer v-model:visible="visible" position="right" header="Filtros"
        class="w-80! bg-gray-900! text-white! border-gray-800!">
        <!-- Header Personalizado -->
        <template #header>
            <div class="flex items-center justify-between w-full px-1">
                <span class="text-xl font-bold text-white">Filtros</span>
            </div>
        </template>

        <div class="flex flex-col h-full overflow-y-auto custom-scrollbar">
            <div class="p-4 flex flex-col gap-2">

                <!-- Ordenar por -->
                <div class="border-b border-gray-800/50 pb-2">
                    <button @click="toggleFilter('OrderBy')"
                        class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group text-left">
                        <div class="flex items-center gap-3">
                            <Icon name="material-symbols:sort-by-alpha" size="22"
                                class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                            <span class="font-medium text-gray-200 group-hover:text-white transition-colors">
                                Ordenar por
                            </span>
                        </div>
                        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24"
                            class="text-gray-500 transition-transform duration-300"
                            :class="{ 'rotate-180': openFilters.OrderBy }" />
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="openFilters.OrderBy ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'">
                        <div class="px-3">
                            <!-- TODO: Componente de Ordenamiento -->
                            <div class="flex flex-col gap-2">
                                <UiCheckbox label="Precio: Menor a Mayor" />
                                <UiCheckbox label="Precio: Mayor a Menor" />
                                <UiCheckbox label="Calificación: Mayor a Menor" />
                                <UiCheckbox label="Calificación: Menor a Mayor" />
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Categorías -->
                <div class="border-b border-gray-800/50 pb-2">
                    <button @click="toggleFilter('categories')"
                        class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group text-left">
                        <div class="flex items-center gap-3">
                            <Icon name="material-symbols:category-outline-rounded" size="22"
                                class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                            <span class="font-medium text-gray-200 group-hover:text-white transition-colors">
                                Categorías
                            </span>
                        </div>
                        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24"
                            class="text-gray-500 transition-transform duration-300"
                            :class="{ 'rotate-180': openFilters.categories }" />
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="openFilters.categories ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'">
                        <div class="px-3">
                            <!-- TODO: Componente de Categorías -->
                            <UiCheckbox label="Categoría 1" />
                            <UiCheckbox label="Categoría 2" />
                            <UiCheckbox label="Categoría 3" />
                            <UiCheckbox label="Categoría 4" />
                            <UiCheckbox label="Categoría 5" />
                        </div>
                    </div>
                </div>

                <!-- Precio -->
                <div class="border-b border-gray-800/50 pb-2">
                    <button @click="toggleFilter('price')"
                        class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group text-left">
                        <div class="flex items-center gap-3">
                            <Icon name="material-symbols:payments-outline-rounded" size="22"
                                class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                            <span class="font-medium text-gray-200 group-hover:text-white transition-colors">
                                Precio
                            </span>
                        </div>
                        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24"
                            class="text-gray-500 transition-transform duration-300"
                            :class="{ 'rotate-180': openFilters.price }" />
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="openFilters.price ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'">
                        <div class="px-3">
                            <!-- TODO: Componente de Rango de Precio -->
                            <p class="text-gray-400 text-sm italic">Selector de precio...</p>
                        </div>
                    </div>
                </div>

                <!-- Calificación -->
                <div class="pb-2">
                    <button @click="toggleFilter('rating')"
                        class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group text-left">
                        <div class="flex items-center gap-3">
                            <Icon name="material-symbols:star-outline-rounded" size="22"
                                class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                            <span class="font-medium text-gray-200 group-hover:text-white transition-colors">
                                Calificación
                            </span>
                        </div>
                        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24"
                            class="text-gray-500 transition-transform duration-300"
                            :class="{ 'rotate-180': openFilters.rating }" />
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="openFilters.rating ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'">
                        <div class="px-3">
                            <!-- TODO: Componente de Rating -->
                            <p class="text-gray-400 text-sm italic">Estrellas de calificación...</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Action Buttons at bottom -->
            <div class="mt-auto p-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky bottom-0">
                <ui-button label="Aplicar Filtros" buttonType="primary"
                    class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition-colors mb-2 cursor-pointer active:scale-95 duration-200">
                </ui-button>
                <ui-button label="Limpiar Filtros"
                    class="w-full bg-transparent hover:bg-gray-800 text-gray-400 font-medium py-2 rounded-lg transition-colors text-sm cursor-pointer">
                </ui-button>
            </div>
        </div>
    </Drawer>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4b5563;
}

/* Usamos estilos planos en lugar de @apply para evitar advertencias del linter y asegurar compatibilidad */
:deep(.p-drawer-header) {
    border-bottom: 1px solid #1f2937;
    background-color: #111827;
    color: white;
    padding: 1rem;
}

:deep(.p-drawer-close-button) {
    color: #9ca3af;
    transition: all 0.2s;
}

:deep(.p-drawer-close-button:hover) {
    color: white;
    background-color: #1f2937;
}

:deep(.p-drawer-content) {
    background-color: #111827;
    color: white;
    padding: 0;
}
</style>
