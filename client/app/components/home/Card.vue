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
            <div class="border-2 border-fuchsia-300/10 bg-gray-800/60 rounded-xl backdrop-blur-xl p-4
        hover:bg-gray-800/60 hover:border-fuchsia-300/30 transition-all duration-300 ease-in-out   
        h-20 flex items-center justify-center" :class="props.class">
                {{
                    props.label }}</div>
        </NuxtLink>
    </div>

</template>
