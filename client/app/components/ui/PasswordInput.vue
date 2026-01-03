<script setup lang="ts">
type KeyType = KeyboardEvent

interface Props {
    valid?: boolean;
    invalid?: boolean;
    invalidLabel?: string;
    extraClasses?: string;
    required?: boolean,
    showPassword?: boolean,
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    valid: false,
    invalid: false,
    invalidLabel: '',
    extraClasses: '',
    required: false,
    showPassword: false,
    type: "password",
});

const emit = defineEmits<{
    (e: 'KeyType', event: KeyType): void;
}>();

const handleType = (event: KeyType) => {
    emit('KeyType', event);
};

const isPasswordVisible = ref(false);

const inputType = computed(() => {
    if (props.type !== 'password') {
        // Si no es password, respeta el type externo
        return props.type;
    }
    return isPasswordVisible.value ? 'text' : 'password';
});

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

</script>
<template>
    <div class="flex flex-col">
        <div class="flex flex-row group w-full">
            <input v-bind="$attrs" @keypress="handleType" :type="inputType" :required class="w-full border-2 rounded-md py-2 px-3 m-1 text-white border-gray-700 border-b-4 focus:border-b-2 rounded-r-none
            disabled:border-blue-200 disabled:bg-blue-50 disabled:text-blue-500 disabled:shadow-none
            focus:border-indigo-500 focus:outline focus:outline-indigo-600 border-r-transparent" :class="[
                extraClasses,
                {
                    'text-field-valid': valid,
                    'text-field-invalid': invalid || required,
                }
            ]" />
            <button v-if="props.type === 'password'" @click="togglePasswordVisibility" class="bg-indigo-100/10 rounded-l-none border-2 rounded-md border-gray-700 w-[50px] border-b-4 focus:border-b-2
                flex items-center justify-center
                hover:bg-indigo-100/15 active:scale-[0.99]
                transition-all ease-out" type="button">
                <span v-if="isPasswordVisible">
                    <icon name="mdi:eye" class="icon-base text-blue-100/70" />
                </span>
                <span v-else>
                    <icon name="mdi:eye-off" class="icon-base text-blue-100/70" />
                </span>
            </button>
        </div>
        <span v-if="props.required" class="text-sm text-pink-500 w-full">
            Este campo es obligatorio
        </span>
        <span v-if="props.invalidLabel && props.invalid" class="text-sm text-pink-500 w-full">
            {{ invalidLabel }}
        </span>
    </div>
</template>