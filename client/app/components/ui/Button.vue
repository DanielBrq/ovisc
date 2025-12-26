<script setup lang="ts">

interface Props {
    disabled?: boolean;
    loading?: boolean;
    iconName?: string | null;
    label?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    iconName: null,
    label: null,
});

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
};

</script>
<template>
    <button :disabled="disabled || loading" @click="handleClick"
        class="relative flex items-center justify-center w-full max-h-10 min-h-10 text-nowrap py-0! text-nowrap">

        <div v-if="!loading" class="flex items-center justify-center h-full w-full px-4">
            <div v-if="iconName" class="flex items-center justify-center" :class="{ 'me-2': label }">
                <slot name="icon-name">
                    <icon :name="iconName" size="22" />
                </slot>
            </div>
            <span v-if="label" class="truncate leading-none">
                {{ label }}
            </span>
        </div>

        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <slot name="spinner">
                <icon name="svg-spinners:ring-resize" animation="2.5" size="24" class="text-blue-100/70" />
            </slot>
        </div>

    </button>


</template>