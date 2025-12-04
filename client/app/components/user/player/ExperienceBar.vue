<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';

interface Props {
    uuid: string;
}
const props = defineProps<Props>()

// hardcoded values
const currentExperience = ref(125);
const experienceToNextLevel = ref(200);
const value = computed(() => (currentExperience.value / experienceToNextLevel.value) * 100);

</script>
<template>
    <div class="min-w-25 flex flex-col items-start justify-center gap-1">
        <div class="flex flex-row items-center justify-center gap-2">
            <span class="text-sm font-medium pointer-events-none">EXP</span>
            <span class="text-sm font-medium pointer-events-none">{{ currentExperience }} / {{ experienceToNextLevel
                }}</span>
        </div>
        <ProgressBar :value="value" class="w-full h-3! border-2 border-indigo-500 transition-all duration-400"
            :showValue="false" />
    </div>
</template>

<style scoped>
:deep(.p-progressbar-value) {
    /* background-color: #6366f1; */
    /* from indigo-500 to  to rose-500 */
    background: linear-gradient(to right, #6366f1, #c963f1, #ef4444);
}
</style>
