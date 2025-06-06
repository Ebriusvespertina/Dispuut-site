export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-06-06',

  // Modules for optimization
  modules: ['@nuxt/image', '@nuxt/fonts'],

  // Static Site Generation configuration
  nitro: {
    prerender: {
      routes: ['/', '/over-ons'],
    },
  },

  // Enable static generation
  ssr: true,
  // CSS configuration
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      title: 'Dispuut Ebrius Vespertina',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Dispuut Ebrius Vespertina (D.E.V.) - Een gemengd dispuut gelieerd aan Indicium',
        },
        // Performance hints
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        // Favicon configuration
        { rel: 'icon', type: 'image/png', href: '/logo-bw-200w.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-dev.svg' },
        { rel: 'apple-touch-icon', href: '/logo-bw-200w.png' },
        // DNS prefetch for external resources
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//svindicium.nl' },
        // Preload critical resources
        { rel: 'preload', href: '/dispuut-bier.webp', as: 'image', type: 'image/webp' },
      ],
    },
  },

  image: {
    format: ['webp', 'avif'],
    quality: 90,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    domains: ['svindicium.nl', 'indicium.nl'],
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
  },

  typescript: {
    typeCheck: true,
  },
});
