<script setup>
//imports
import { isMobile } from '~/utils/responsive'
import { useRoute } from 'vue-router'

// ============ Side bar ======++===============

const sidenavOpen = ref(false)
// ============ Bottom nav =====================

// active per route root (modules)
const route = useRoute()
const currentTab = computed(() => {
  const path = route.path

  if (path.startsWith('/user/player')) return 'home'
  if (path.startsWith('/feed')) return 'feed'
  if (path.startsWith('/store')) return 'store'
  if (path.startsWith('/event')) return 'event'
  if (path.startsWith('/profile')) return 'profile'

  return 'home'
})

</script>

<template>
  <div class="relative min-h-dvh">

    <layout-header :isMobile="isMobile" v-model:sidenavOpen="sidenavOpen" :class="sidenavOpen ? 'ml-15' : ''" />

    <div class="flex">
      <layout-side-bar v-if="!isMobile" v-model:sidenavOpen="sidenavOpen" v-model:active="currentTab"
        @update:active="navigate" />

      <main :class="[
        'flex-1 min-h-dvh mt-15 flex-nowrap px-4 transition-all duration-400',
        !isMobile && sidenavOpen ? 'ml-60 w-full' : 'ml-0 w-full lg:ml-12',
        isMobile ? 'pb-16 w-dvh' : ''
      ]">
        <slot />
      </main>
    </div>

    <layout-bottom-nav v-if="isMobile" />

  </div>
</template>
