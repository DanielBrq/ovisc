<script setup lang="ts">
interface Props {
    to?: string
    sidenavOpen?: boolean
}

const props = defineProps<Props>()
</script>

<template>
    <nuxt-link :to="props.to">
        <button type="button"
            class="ml-6 w-full mt-1 text-left group hover:text-indigo-100 hover:underline hover:underline-offset-4">
            <span v-if="props.sidenavOpen" class="truncate flex items-center">
                <icon name="mdi:circle-outline" size="14" class="me-2" />
                <span class="group-hover:ml-1 transition-all duration-400">
                    <slot />
                </span>
            </span>
        </button>
    </nuxt-link>
</template>
