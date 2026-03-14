import { dehydrate, hydrate } from '@tanstack/query-core'
import type { DehydratedState } from '@tanstack/query-core'
import { QueryClient, VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { useState } from '#app'

export default defineNuxtPlugin((nuxt) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60,          // 1 min
                gcTime: 1000 * 60 * 10,        // 10 min
                retry: 1,
                retryDelay: 1000 * 30,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: true,
            },
        },
    })

    const options: VueQueryPluginOptions = { queryClient }
    nuxt.vueApp.use(VueQueryPlugin, options)

    const vueQueryState = useState<DehydratedState | undefined>('vue-query-state')

    if (import.meta.server) {
        nuxt.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient)
        })
    }

    if (import.meta.client) {
        nuxt.hooks.hook('app:created', () => {
            if (vueQueryState.value) {
                try {
                    hydrate(queryClient, vueQueryState.value)
                } catch (err) { }
            }
            vueQueryState.value = undefined
        })
    }
})