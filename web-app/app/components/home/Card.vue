<script setup lang="ts">
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
            <div class="border-2 border-ovis-danger-300/10 bg-ovis-neutral-800/60 rounded-xl backdrop-blur-xl p-4
        hover:bg-ovis-neutral-800/60 hover:border-t-ovis-primary-500 hover:border-l-ovis-primary-500 hover:border-b-ovis-danger-500 hover:border-r-ovis-danger-500
        active:border-t-ovis-primary-500 active:border-l-ovis-primary-500 active:border-b-ovis-danger-500 active:border-r-ovis-danger-500
        hover:shadow-lg hover:shadow-ovis-danger-500/50 active:shadow-lg active:shadow-ovis-danger-500/50
        transition-all duration-200 ease-in-out   
        flex items-center justify-center" :class="props.class">
                {{
                    props.label }}</div>
        </NuxtLink>
    </div>

</template>
