import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  },
  nitro: {
    preset: 'bun',
  },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'preaload', as: 'script', href: '/_nuxt/entry.js' }
      ]
    }
  },
  modules: [
    '@nuxt/ui',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  alias: {
    '~/shared': fileURLToPath(new URL('./app/shared', import.meta.url)),
    '~/utils': fileURLToPath(new URL('./app/utils', import.meta.url)),
    '~/services': fileURLToPath(new URL('./app/services', import.meta.url)),
    '~/stores': fileURLToPath(new URL('./app/stores', import.meta.url)),
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  devServer: {
    host: process.env.NUXT_HOST || '0.0.0.0',
    port: parseInt(process.env.NUXT_PORT || '3000')
  },
  pinia: {
    storesDirs: ['stores']
  },
  vite: {
    build: {
      reportCompressedSize: true,
      sourcemap: false,
      rollupOptions: { output: { manualChunks: {} } }
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ovis',
      short_name: 'Ovis',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/logo.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  }
});