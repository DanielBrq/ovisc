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
  isActive?: boolean
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
  <nuxt-link :to="props.to" class="block no-underline">
    <button type="button"
      class="relative w-full h-11 px-3 flex items-center group text-left overflow-hidden transition-all duration-300 border-0 cursor-pointer rounded-lg"
      :class="[
        props.isActive ? 'bg-indigo-500/20 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      ]" @click="handleClick">

      <!-- Contenido  -->
      <div class="relative z-10 flex items-center w-full">

        <div v-if="props.iconName" class="shrink-0 flex items-center justify-center w-8">
          <Icon :name="props.iconName" size="24" class="transition-transform duration-300 group-hover:scale-110"
            :class="props.isActive ? 'text-indigo-400' : 'text-inherit'" />
        </div>

        <span v-if="props.sidenavOpen" class="ml-3 truncate flex-1 font-medium transition-all duration-300">
          <slot />
        </span>

        <span v-if="props.arrow && props.sidenavOpen" class="ml-2 flex items-center">
          <Icon name="material-symbols:keyboard-arrow-down-rounded" size="22" class="transition-transform duration-300"
            :class="{ 'rotate-180': props.submenuIsOpen, 'text-gray-500 group-hover:text-white': !props.isActive }" />
        </span>
      </div>

      <!-- Indicador activo lateral -->
      <div v-if="props.isActive && !props.sidenavOpen"
        class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full">
      </div>

    </button>
  </nuxt-link>
</template>

<style scoped>
/* Transiciones suaves para los botones */
button {
  -webkit-tap-highlight-color: transparent;
}
</style>
