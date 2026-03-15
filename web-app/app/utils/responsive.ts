import { useMediaQuery } from '@vueuse/core'

export const isMobile = useMediaQuery('(max-width: 425px)')

export const isTablet = useMediaQuery('(max-width: 768px)')

export const isDesktop = useMediaQuery('(min-width: 1280px)')

export const isDesktopLarge = useMediaQuery('(min-width: 1920px)')

