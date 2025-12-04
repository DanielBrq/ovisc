<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';

interface Props {
    uuid: string;
}
const props = defineProps<Props>()

// hardcoded values
const currentExperience = ref(12500);
const experienceToNextLevel = ref(20000);
const value = computed(() => (currentExperience.value / experienceToNextLevel.value) * 100);

</script>
<template>
    <div class="min-w-25 flex flex-col items-start justify-center gap-1">
        <div class="flex flex-row justify-center gap-2 items-end">
            <p class="text-sm font-medium pointer-events-none text-indigo-400">EXP</p>
            <span class="flex font-medium pointer-events-none text-nowrap w-full items-end">
                <p class="text-indigo-300 text-sm text-nowrap ">{{ currentExperience }}</p>
                <p class="text-indigo-300 text-sm text-nowrap mx-1"> / </p>

                <p class="text-indigo-400 text-sm! text-nowrap font-semibold self-end">{{ experienceToNextLevel }}
                </p>
            </span>
        </div>
        <ProgressBar :value="value" class="w-full h-3! border-2 border-indigo-400 transition-all duration-400"
            :showValue="false" />
    </div>
</template>

<style scoped>
:deep(.p-progressbar-value) {
    background: linear-gradient(to right, #6a6cff, #c963f1, #ef4444);
}
</style>
