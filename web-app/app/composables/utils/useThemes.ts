export const useTheme = () => {
  const colorMode = useColorMode();

  const isDark = computed({
    get: () => colorMode.value === "dark",
    set: (value) => {
      colorMode.preference = value ? "dark" : "light";
    },
  });

  const toggleTheme = () => {
    colorMode.preference = colorMode.value === "light" ? "dark" : "light";
  };

  return {
    isDark,
    toggleTheme,
    theme: colorMode,
  };
};
