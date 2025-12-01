<script setup lang="ts">
import { isMobile, isDesktop } from '~/utils/responsive'

interface Props {
    label: string;
    to: string;
    class?: string;
    img?: string;
}

const props = defineProps<Props>();

</script>

<template>
    <!-- TO DO -->
    <div>
        <NuxtLink :to="props.to">
            <div class="border-2 border-rose-300/10 bg-gray-800/60 rounded-xl backdrop-blur-xl p-4
        hover:bg-gray-800/60 hover:border-t-indigo-500 hover:border-l-indigo-500 hover:border-b-rose-500 hover:border-r-rose-500
        active:border-t-indigo-500 active:border-l-indigo-500 active:border-b-rose-500 active:border-r-rose-500
        hover:shadow-lg hover:shadow-rose-500/50 active:shadow-lg active:shadow-rose-500/50
        transition-all duration-200 ease-in-out   
        flex items-center justify-center" :class="props.class">
                {{
                    props.label }}</div>
        </NuxtLink>
    </div>

</template>
