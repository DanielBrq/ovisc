import { useMediaQuery } from '@vueuse/core'

export const isMobile = useMediaQuery('(max-width: 640px)')

export const isTablet = useMediaQuery('(max-width: 768px)')

export const isDesktop = useMediaQuery('(min-width: 1024px)')
