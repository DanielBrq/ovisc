<script setup lang="ts">

interface Props {
    uuid: string;
}
const props = defineProps<Props>()

const achievements = ref(5); //hardcoded

</script>
<template>
    <div class="flex flex-col items-center w-full pointer-events-none">
        <p class="text-md font-semibold text-gray-300 mb-2">Logros</p>
        <icon name="bx:trophy" size="30" class="text-rose-500" />
        <p class="text-xl font-bold ovis-gradient-h">{{ achievements }}</p>
    </div>
</template>