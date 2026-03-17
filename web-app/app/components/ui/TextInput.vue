<script setup lang="ts">
type KeyType = KeyboardEvent

interface Props {
    valid?: boolean;
    invalid?: boolean;
    invalidLabel?: string;
    extraClasses?: string;
    required?: boolean,
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    valid: false,
    invalid: false,
    invalidLabel: '',
    extraClasses: '',
    required: false,
    type: "text",

});

const emit = defineEmits<{
    (e: 'KeyType', event: KeyType): void;
}>();

const handleType = (event: KeyType) => {
    emit('KeyType', event);
};

</script>
<template>
    <div class="flex flex-col">
        <input v-bind="$attrs" @keypress="handleType" :type="props.type" :required class="w-full h-[42px]! border-2 rounded-2xl py-2 px-3 text-ovis-neutral-50 border-ovis-neutral-700
        disabled:border-ovis-info-200 disabled:bg-ovis-info-50 disabled:text-ovis-info-500 disabled:shadow-none
        focus:border-ovis-neutral-600 focus:outline focus:border-2" :class="[
            extraClasses,
            {
                'text-field-valid': valid,
                'text-field-invalid': invalid || required,
            }
        ]" />
        <span v-if="props.required" class="text-sm text-ovis-danger-500 w-full">
            Este campo es obligatorio
        </span>
        <span v-if="props.invalidLabel && props.invalid" class="text-sm text-ovis-danger-500 w-full">
            {{ invalidLabel }}
        </span>
    </div>
</template>