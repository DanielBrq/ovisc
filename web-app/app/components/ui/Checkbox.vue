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
            <div class="w-5 h-5 border-2 rounded-md flex items-center justify-center" :class="[
                model
                    ? 'bg-ovis-primary-600 border-ovis-primary-600 shadow-[0_0_10px_rgba(124,58,237,0.4)]'
                    : 'bg-ovis-neutral-800/80 border-ovis-neutral-600 group-hover:border-ovis-neutral-500'
            ]">
                <Icon v-if="model" name="material-symbols:check-small-rounded"
                    class="text-ovis-neutral-50 text-xl scale-140" />
            </div>
        </div>
        <span class="text-sm font-medium text-ovis-neutral-300 group-hover:text-ovis-neutral-50">
            {{ props.label }}
        </span>
    </div>
</template>
