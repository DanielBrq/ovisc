<script setup lang="ts">

interface Props {
    disabled?: boolean;
    loading?: boolean;
    iconName?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    iconName: null,
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
        class="relative flex items-center w-full max-h-10 min-h-10 text-nowrap">

        <span v-if="!loading" class="flex w-full justify-center items-center">
            <span class="flex items-center">
                <span v-if="iconName">
                    <slot name="icon-name" class="">
                        <icon :name="iconName" size="22" class="me-2 -mb-1" />
                    </slot>
                </span>
                <span class="truncate">
                    <slot />
                </span>
            </span>
        </span>

        <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <slot name="spinner">
                <icon name="svg-spinners:ring-resize" animation="2.5" size="24" class="text-blue-100/70" />
            </slot>
        </span>

    </button>


</template>
