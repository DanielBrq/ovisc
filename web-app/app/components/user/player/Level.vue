<script setup lang="ts">

interface Props {
    uuid: string;
    showLabel: boolean;
    showLevel: boolean;
}
const props = defineProps<Props>()

// hardcoded values
const level = ref(100);

</script>
<template>
    <div class="flex items-center justify-center">

        <span>
            <div v-if="props.showLabel" class="relative">
                <p class="text-md font-semibold text-gray-300 absolute top-0 left-0 pointer-events-none">
                    Nivel
                </p>
            </div>

            <div v-if="props.showLevel" class="relative">
                <icon name="material-symbols:star" size="100" class="text-gray-100/10 pointer-events-none" />
                <p
                    class="font-semibold ovis-gradient-h text-5xl! absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {{ level }}
                </p>
            </div>
        </span>

    </div>
</template>
