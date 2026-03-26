import { defineStore } from "pinia";
import { ref } from "vue";

export const usePasswordInputStore = (id: string) =>
  defineStore(`ui-password-input-${id}`, () => {
    const isPasswordVisible = ref(false);

    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value;
    };

    return {
      isPasswordVisible,
      togglePasswordVisibility,
    };
  })();
