<script setup>
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 490px)')

const isOpen = ref(true)

</script>

<template>
  <div class="relative min-h-dvh">

    <div class="flex">
      <ui-side-bar v-if="!isMobile" :open="isOpen" />

      <main
        :class="[
          'flex-1 min-h-dvh flex-nowrap',
          !isMobile && isOpen ? 'ml-60 w-full' : 'ml-0 w-full',
          isMobile ? 'pb-16 w-dvh' : ''
        ]"
      >
        <slot />
      </main>
    </div>

    <ui-bottom-nav v-if="isMobile" />
  </div>
</template>
