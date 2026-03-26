<script setup lang="ts">
type KeyType = KeyboardEvent;

interface Props {
  valid?: boolean;
  invalid?: boolean;
  invalidLabel?: string;
  extraClasses?: string;
  required?: boolean;
  showPassword?: boolean;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  valid: false,
  invalid: false,
  invalidLabel: "",
  extraClasses: "",
  required: false,
  showPassword: false,
  type: "password",
});

const emit = defineEmits<{ (e: "KeyType", event: KeyType): void }>();
const handleType = (event: KeyType) => {
  emit("KeyType", event);
};
const isPasswordVisible = ref(false);
const inputType = computed(() => {
  if (props.type !== "password") {
    return props.type;
  }
  return isPasswordVisible.value ? "text" : "password";
});
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>
<template>
  <div class="flex flex-col">
    <div class="flex flex-row group w-full h-[42px]! group group-focus">
      <input
        v-bind="$attrs"
        @keypress="handleType"
        :type="inputType"
        :required
        class="w-full py-2 px-3 border-2 border-r-2 text-ovis-neutral-50 disabled:border-ovis-info-200 border-ovis-neutral-700 disabled:bg-ovis-info-50 disabled:text-ovis-info-500 disabled:shadow-none group-focus-within:outline-none! group-focus-within:border-ovis-neutral-600 group-focus-within:outline group-focus-within:border-2"
        :class="[
          extraClasses,
          props.type === 'password'
            ? 'rounded-l-2xl border-r-0'
            : 'rounded-2xl',
          {
            'text-field-valid': valid,
            'text-field-invalid': invalid || required,
          },
        ]"
      />
      <button
        v-if="props.type === 'password'"
        @click="togglePasswordVisibility"
        class="border-l-0 border-2 rounded-r-2xl border-ovis-neutral-700 w-[50px] flex items-center justify-center hover:bg-ovis-secondary-100/15 active:scale-[0.99] group-focus-within:border-ovis-neutral-600 group-focus-within:outline-none group-focus-within:border-2 group-focus-within:border-l-0 active:scale-100!"
        type="button"
      >
        <icon
          :name="isPasswordVisible ? 'mdi:eye' : 'mdi:eye-off'"
          size="22"
          class="icon-base text-ovis-neutral-500"
        />
      </button>
    </div>
    <span v-if="props.required" class="text-sm text-ovis-danger-500 w-full">
      Este campo es obligatorio
    </span>
    <span
      v-if="props.invalidLabel && props.invalid"
      class="text-sm text-ovis-danger-500 w-full"
    >
      {{ invalidLabel }}
    </span>
  </div>
</template>
