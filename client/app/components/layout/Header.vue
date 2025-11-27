<script setup lang="ts">

const props = defineProps<{
    sidenavOpen: boolean
    isMobile: boolean
}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
])

</script>
<template>
    <nav class="fixed top-0 w-full h-12 z-50 transition-all duration-400">

        <div :class="props.sidenavOpen ? 'lg:pl-60' : 'sm:px-12 sm:mx-4'"
            class="flex items-center justify-between w-full h-full bg-gray-800 shadow-sm px-4 transition-all duration-400">

            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center justify-start gap-2 text-white hover:text-gray-300">
                <span
                    class="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-bold tracking-tight text-transparent text-2xl">OVIS</span>
            </NuxtLink>

            <!-- Icons -->
            <div class="flex items-center gap-4">
                <layout-notification-inbox :isMobile="props.isMobile" />
                <icon name="material-symbols:account-circle-full" size="26"
                    class="text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>

    </nav>
</template>