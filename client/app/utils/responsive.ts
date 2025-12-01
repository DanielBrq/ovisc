import { useMediaQuery } from '@vueuse/core'

export const isMobile = useMediaQuery('(max-width: 490px)')

export const isTablet = useMediaQuery('(max-width: 744px)')

export const isDesktop = useMediaQuery('(min-width: 745px)')
