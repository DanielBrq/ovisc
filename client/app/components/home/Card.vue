<script setup lang="ts">

interface Props {
    title: string;
    to: string;
    img?: string;
}

const props = defineProps<Props>();

</script>

<template>
    <NuxtLink :to="props.to">
        <div class="border border-rose-500 h-20 flex items-center justify-center">{{ props.title }}</div>
    </NuxtLink>
</template>