<script setup>
//imports
import { useMediaQuery } from '@vueuse/core'
import { useRoute } from 'vue-router'

// ============ Side bar ======++===============

const isMobile = useMediaQuery('(max-width: 490px)')

const sidenavOpen = ref(false)
// ============ Bottom nav =====================

// active per route root (modules)
const route = useRoute()
const currentTab = computed(() => {
  const path = route.path

  if (path.startsWith('/player')) return 'home'
  if (path.startsWith('/feed')) return 'feed'
  if (path.startsWith('/store')) return 'store'
  if (path.startsWith('/event')) return 'event'
  if (path.startsWith('/profile')) return 'profile'

  return 'home'
})

</script>

<template>
  <div class="relative min-h-dvh">

    <layout-header v-model:sidenavOpen="sidenavOpen" :class="sidenavOpen ? 'ml-15' : ''" />

    <div class="flex">
      <layout-side-bar v-if="!isMobile" v-model:sidenavOpen="sidenavOpen" v-model:active="currentTab"
        @update:active="navigate" />

      <main :class="[
        'flex-1 min-h-dvh flex-nowrap mt-10 transition-all duration-400',
        !isMobile && sidenavOpen ? 'ml-60 w-full' : 'ml-0 w-full lg:ml-12',
        isMobile ? 'pb-16 w-dvh' : ''
      ]">
        <slot />
      </main>
    </div>

    <layout-bottom-nav v-if="isMobile" />

  </div>
</template>
