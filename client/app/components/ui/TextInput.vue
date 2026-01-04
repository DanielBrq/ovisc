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
        <input v-bind="$attrs" @keypress="handleType" :type="props.type" :required class="w-full border-2 rounded-2xl py-2 px-3 text-white border-gray-700 border-b-4 focus:border-b-2
        disabled:border-blue-200 disabled:bg-blue-50 disabled:text-blue-500 disabled:shadow-none
        focus:border-indigo-500 focus:outline focus:outline-indigo-600" :class="[
            extraClasses,
            {
                'text-field-valid': valid,
                'text-field-invalid': invalid || required,
            }
        ]" />
        <span v-if="props.required" class="text-sm text-pink-500 w-full">
            Este campo es obligatorio
        </span>
        <span v-if="props.invalidLabel && props.invalid" class="text-sm text-pink-500 w-full">
            {{ invalidLabel }}
        </span>
    </div>
</template>