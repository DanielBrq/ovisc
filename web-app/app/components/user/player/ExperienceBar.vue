<script setup lang="ts">
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
            <p class="text-sm font-medium pointer-events-none text-ovis-primary-400">EXP</p>
            <span class="flex font-medium pointer-events-none text-nowrap w-full items-end">
                <p class="text-ovis-primary-300 text-sm text-nowrap ">{{ currentExperience }}</p>
                <p class="text-ovis-primary-300 text-sm text-nowrap mx-1"> / </p>

                <p class="text-ovis-primary-400 text-sm! text-nowrap font-semibold self-end">{{ experienceToNextLevel }}
                </p>
            </span>
        </div>
        <div class="w-full h-3 border-2 border-ovis-primary-400 transition-all duration-400 bg-ovis-neutral-900 overflow-hidden">
            <div class="h-full transition-all duration-400"
                :style="{ width: `${value}%`, background: 'linear-gradient(to right, var(--color-ovis-primary-500), var(--color-ovis-accent-500), var(--color-ovis-danger-500))' }">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
