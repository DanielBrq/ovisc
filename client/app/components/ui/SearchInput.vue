<script setup lang="ts">
const props = defineProps({
    placeholder: {
        type: String,
        class: String,
        default: 'Buscar...'
    }
})
</script>

<template>
    <div class="flex items-stretch w-full h-10 gap-0">
        <ui-text-input :placeholder="placeholder" class="flex-1 h-full m-0! rounded-l-2xl! rounded-r-none! border-r-0! focus:outline-none! focus:ring-0!
            focus:border-b-4! focus:border-gray-700!" />

        <ui-button button-type="outline" icon-name="material-symbols:search"
            class="w-12! h-full min-h-0! px-0! rounded-r-2xl! rounded-l-none! border-l-0! py-0!" />
    </div>
</template>

<style scoped>
:deep(.flex-col) {
    margin: 0 !important;
    height: 100% !important;
}
</style>