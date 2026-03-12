<script setup lang="ts">
interface Props {
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: ""
});

const model = defineModel<boolean>({ default: false });
</script>

<template>
    <div class="flex items-center gap-3 cursor-pointer group py-1 select-none" @click="model = !model">
        <div class="relative flex items-center justify-center shrink-0">
            <div class="w-5 h-5 border-2 rounded-md transition-all duration-200 flex items-center justify-center"
                :class="[
                    model
                        ? 'bg-indigo-600 border-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]'
                        : 'bg-gray-800/80 border-gray-600 group-hover:border-gray-500'
                ]">
                <Icon v-if="model" name="material-symbols:check-small-rounded" class="text-white text-xl scale-125" />
            </div>
        </div>
        <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
            {{ props.label }}
        </span>
    </div>
</template>
