<script setup lang="ts">

import { ref } from 'vue';
const visible = ref(false)

</script>
<template>

    <section>

        <div class="w-full h-14 bg-gray-800 flex items-center justify-between px-4 rounded-2xl
        sm:bg-transparent">
            <ui-search-input placeholder="Buscar..." class="mr-2" />
            <ui-button @click="visible = true" icon-name="material-symbols:view-module"
                class="text-white bg-indigo-500 max-w-10 rounded-2xl" />
        </div>

        <store-filters :visible="visible" @update:visible="visible = $event" />

    </section>

</template>