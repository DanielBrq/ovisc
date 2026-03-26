<script setup lang="ts">
interface Props {
  disabled?: boolean;
  loading?: boolean;
  iconName?: string | null;
  iconColor?: string | null;
  label?: string | null;
  buttonType?: buttonVariant;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  iconName: null,
  iconColor: "text-ovis-neutral-50",
  label: null,
  buttonType: "outline",
  type: "button",
});

const emit = defineEmits<{ (e: "click", event: MouseEvent): void }>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};

type buttonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "outline";

const buttonTypeClass = computed(() => {
  return {
    "btn-primary": props.buttonType === "primary",
    "btn-secondary": props.buttonType === "secondary",
    "btn-danger": props.buttonType === "danger",
    "btn-success": props.buttonType === "success",
    "btn-warning": props.buttonType === "warning",
    "btn-outline": props.buttonType === "outline",
  };
});
</script>
<template>
  <button :type="type" :disabled="disabled || loading" @click="handleClick" :class="buttonTypeClass"
    class="group relative flex items-center justify-center text-white w-full h-[42px]! text-nowrap py-0! px-5 rounded-2xl font-semibold overflow-hidden hover:font-semibold active:font-semibold duration-300 transition-all ease-out active:scale-[1.01]">
    <div v-if="!loading" class="flex items-center justify-center h-full w-full px-4">
      <div v-if="iconName" class="flex items-center justify-center" :class="{ 'me-2': label }">
        <slot name="icon-name">
          <icon :name="iconName" size="22" :class="iconColor" />
        </slot>
      </div>
      <span v-if="label"
        class="truncate leading-none relative transition-colors duration-300 group-hover:text-white h-full flex items-center">
        {{ label }}
      </span>
    </div>

    <div v-if="loading"
      class="relative inset-0 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
      <slot name="spinner">
        <icon name="svg-spinners:ring-resize" animation="2.5" size="24" :class="iconColor" />
      </slot>
    </div>
  </button>
</template>
