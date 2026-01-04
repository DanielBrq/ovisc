<script setup lang="ts">
interface Props {
    to?: string
    sidenavOpen?: boolean
}

const props = defineProps<Props>()
</script>

<template>
    <nuxt-link :to="props.to" class="block no-underline">
        <button type="button"
            class="w-full h-9 flex items-center px-4 mt-0.5 rounded-lg group transition-all duration-300 hover:bg-gray-800/30 text-gray-400 hover:text-indigo-300">
            <span v-if="props.sidenavOpen" class="flex items-center text-sm font-medium">
                <Icon name="material-symbols:fiber-manual-record-outline-rounded" size="10"
                    class="mr-3 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                <span class="truncate group-hover:translate-x-1 transition-transform duration-300">
                    <slot />
                </span>
            </span>
        </button>
    </nuxt-link>
</template>

<style scoped>
button {
    -webkit-tap-highlight-color: transparent;
}
</style>
