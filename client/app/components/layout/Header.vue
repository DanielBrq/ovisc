<script setup lang="ts">
import { isMobile, isTablet, isDesktop } from '~/utils/responsive'

const props = defineProps<{
    sidenavOpen: boolean
}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
])

</script>
<template>
    <nav class="fixed top-0 right-0 h-12 z-40 transition-all duration-400" :class="[
        isDesktop && props.sidenavOpen ? 'left-60' :
            isDesktop && !props.sidenavOpen ? 'left-12' :
                'left-0'
    ]">

        <div class="flex items-center justify-between w-full h-full bg-gray-800 shadow-sm px-4 transition-all duration-400"
            :class="!props.sidenavOpen ? 'sm:mx-0' : ''">

            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center justify-start gap-2 text-white hover:text-gray-300">
                <span
                    class="bg-linear-to-r from-indigo-500 to-rose-500 bg-clip-text font-bold tracking-tight text-transparent 
                    text-2xl saturate-115 hover:saturate-200 active:saturate-200 transition-all duration-400">OVIS</span>
            </NuxtLink>

            <!-- Icons -->
            <div class="flex items-center gap-4">
                <layout-notification-inbox :isMobile="isMobile || isTablet" />
                <icon name="material-symbols:account-circle-outline" size="24"
                    class="text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>

    </nav>
</template>