<script setup lang="ts">

import Popover from 'primevue/popover';


const op = ref();

const toggle = (event: any) => {
    op.value.toggle(event);
}

//props
const props = defineProps({
    isMobile: Boolean
});

</script>
<template>

    <!-- If mobile, button link to notifications page -->
    <div v-if="isMobile" class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
            <icon name="material-symbols:notifications-outline-rounded" size="24"
                class="text-gray-300 hover:text-white cursor-pointer transition-colors"
                :class="{ 'text-indigo-500': op === true }" />
        </NuxtLink>
    </div>

    <!-- If desktop, button show modal notifications-->
    <div v-else class="flex items-center">
        <button @click="toggle" type="button" class="flex items-center">
            <icon name="material-symbols:notifications-outline-rounded" size="24"
                class="text-gray-300 hover:text-white" />
        </button>

        <Popover ref="op"
            class="fixed right-10 border-2! border-t-indigo-400! border-l-indigo-400! border-b-rose-400! border-r-rose-400!">
            <div class="w-85 h-100 flex items-center justify-center">



            </div>
        </Popover>
    </div>

</template>
