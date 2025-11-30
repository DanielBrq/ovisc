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

        <Popover ref="op" class="fixed right-10 border! border-indigo-400!">
            <div class="w-85 h-100 flex items-center justify-center">
                <span class="text-gray-500">Inbox</span>
                <div id="accordion-collapse" data-accordion="collapse"
                    class="rounded-base border border-default overflow-hidden shadow-xs">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
                            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                            aria-controls="accordion-collapse-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m5 15 7-7 7 7" />
                            </svg>
                        </button>
                    </h2>

                </div>
            </div>
        </Popover>
    </div>

</template>
