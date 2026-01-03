<script setup lang="ts">
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Buscar...'
    }
})
</script>

<template>
    <div class="flex items-start w-full gap-0 h-10"> <!-- Forzamos altura al contenedor -->
        <!-- Input con altura fija y sin bordes derechos -->
        <ui-text-input :placeholder="placeholder" extra-classes="m-0! rounded-r-none! border-r-0! bg-gray-900/50! py-[5px]! focus:border-gray-700! 
                focus:border-b-4! 
                focus:outline-none! 
                focus:ring-0!" class="flex-1" />

        <!-- Botón con altura fija y sin bordes izquierdos -->
        <ui-button button-type="outline" icon-name="material-symbols:search"
            class="w-12! px-0! rounded-l-none! py-2!" />
    </div>
</template>

<style scoped>
/* Quitamos cualquier margen extra que el componente ui-text-input meta por su wrapper div */
:deep(.flex-col) {
    margin: 0 !important;
}
</style>