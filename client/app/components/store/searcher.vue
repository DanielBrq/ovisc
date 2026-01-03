<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const toggle = () => {
    isOpen.value = !isOpen.value;
};

</script>
<template>

    <section>

        <div class="w-full h-14 bg-gray-800 flex items-center justify-between px-4"
            :class="isOpen ? 'rounded-t-2xl' : 'rounded-2xl'">
            <ui-search placeholder="Buscar..." class="mr-2" />
            <ui-button @click="toggle" icon-name="material-symbols:view-module"
                class="text-white bg-indigo-500 max-w-10 rounded-2xl" />
        </div>
        <div v-if="isOpen"
            class="w-full h-14 bg-gray-800 rounded-b-2xl border-t-2 border-gray-700 flex items-center justify-between px-4">
            <store-filters />
        </div>

    </section>

</template>