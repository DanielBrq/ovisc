<script setup lang="ts">

interface Props {
    disabled?: boolean;
    loading?: boolean;
    iconName?: string | null;
    label?: string | null;
    buttonType?: buttonVariant;
    type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    iconName: null,
    label: null,
    buttonType: 'outline',
    type: 'button',
});

const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>();

const handleClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
};

type buttonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'outline';

const buttonClass = computed(() => {
    return {
        'btn-primary': props.buttonType === 'primary',
        'btn-secondary': props.buttonType === 'secondary',
        'btn-danger': props.buttonType === 'danger',
        'btn-success': props.buttonType === 'success',
        'btn-warning': props.buttonType === 'warning',
        'btn-outline': props.buttonType === 'outline',
    };
});
const buttonClassHover = computed(() => {
    return {
        'btn-primary-liquid-hover': props.buttonType === 'primary',
        'btn-secondary-liquid-hover': props.buttonType === 'secondary',
        'btn-danger-liquid-hover': props.buttonType === 'danger',
        'btn-success-liquid-hover': props.buttonType === 'success',
        'btn-warning-liquid-hover': props.buttonType === 'warning',
        'btn-outline-liquid-hover': props.buttonType === 'outline',
    };
});

</script>
<template>
    <button :type="type" :disabled="disabled || loading" @click="handleClick" :class="buttonClass" class="group relative flex items-center justify-center w-full max-h-10 min-h-10 text-nowrap py-0! border-b-4 px-5 rounded-2xl font-semibold overflow-hidden
        hover:font-semibold active:font-semibold transition-all ease-out active:scale-[0.97]">
        <span :class="buttonClassHover"></span>

        <div v-if="!loading" class="flex items-center justify-center h-full w-full px-4">
            <div v-if="iconName" class="flex items-center justify-center" :class="{ 'me-2': label }">
                <slot name="icon-name">
                    <icon :name="iconName" size="22" />
                </slot>
            </div>
            <span v-if="label"
                class="truncate leading-none relative transition-colors duration-300 group-hover:text-white h-full flex items-center">
                {{ label }}
            </span>
        </div>

        <div v-if="loading"
            class="absolute inset-0 flex items-center justify-center relative transition-colors duration-300 group-hover:text-white">
            <slot name="spinner">
                <icon name="svg-spinners:ring-resize" animation="2.5" size="24" class="text-ovis-primary-100/70" />
            </slot>
        </div>

    </button>


</template>
