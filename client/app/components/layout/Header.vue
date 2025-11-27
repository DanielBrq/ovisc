<script setup lang="ts">

const props = defineProps<{
    sidenavOpen: boolean

}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
])

</script>
<template>
    <nav class="fixed top-0 w-full h-12 z-50 transition-all duration-400">

        <div :class="props.sidenavOpen ? 'lg:ps-60' : 'ps-4 lg:ps-15'"
            class="flex items-center w-full h-full rounded-t-lg bg-gray-800 shadow-sm relative">
            HEADER
        </div>

    </nav>
</template>