import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false, //dev env
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@primevue/nuxt-module',
    '@vite-pwa/nuxt'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
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
      start_url: '/',
      icons: [
        {
          src: '/pwa/logo.svg',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa/logo.svg',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/pwa/logo.svg',
          sizes: '180x180',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
            },
          },
        },
      ]
    },
    
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: true
    }
  }
});