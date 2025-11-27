<script setup lang="ts">
interface Props {
  submenuOpen?: {
    isOpen?: boolean
    navOption?: string
  }
  sidenavOpen?: boolean
  iconName?: string
  to?: string
  active: string
  arrow?: boolean
  submenuIsOpen?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits([
  'update:active',
  'toggle-submenu'
])

function handleClick() {
  emit('toggle-submenu', props.submenuOpen)
  emit('update:active', props.active)
}
</script>

<template>
  <nuxt-link :to="props.to">
    <button type="button"
      class="relative w-full h-10 pl-4 flex items-center group text-left group overflow-hidden transition-all duration-400 border-0 active:border-0 focus:border-0"
      @click="handleClick">

      <!-- Fondo Degradado con Animación -->
      <div v-if="sidenavOpen"
        class="absolute inset-0 bg-linear-to-r from-indigo-500 via-indigo-500/20 to-transparent transition-opacity duration-400"
        :class="props.submenuIsOpen ? 'opacity-100 animate-game-pulse' : 'opacity-0 group-hover:opacity-100'">
      </div>

      <!-- Contenido  -->
      <div class="relative z-10 flex items-center w-full" :class="{ 'text-white': props.submenuIsOpen }">

        <span v-if="props.sidenavOpen && props.iconName">
          <icon :name="props.iconName" size="22" class="me-2 -mb-1" />
        </span>

        <!-- Si está cerrado, solo icono centrado -->
        <span v-if="!props.sidenavOpen && props.iconName">
          <icon :name="props.iconName" size="26" class="mr-2" />
        </span>

        <span v-if="props.sidenavOpen" class="truncate flex-1 group-hover:ml-1 transition-all duration-400">
          <slot />
        </span>

        <span v-if="props.arrow && props.sidenavOpen" class="mr-4 flex items-center">
          <icon v-if="props.submenuIsOpen" class="transition-all duration-500" name="ic:sharp-keyboard-arrow-right"
            size="26" />
          <icon v-else name="ic:sharp-keyboard-arrow-down" size="26" />
        </span>
      </div>

    </button>
  </nuxt-link>
</template>

<style scoped>
/* Animación de pulso */
.animate-game-pulse {
  animation: game-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes game-pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}
</style>
