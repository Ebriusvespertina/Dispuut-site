export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-06-06',

  // Static Site Generation configuration
  nitro: {
    prerender: {
      routes: ['/', '/over-ons'],
    },
  },

  // Enable static generation
  ssr: true,

  // CSS configuration
  css: ['~/assets/css/main.css'], // App configuration
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
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  typescript: {
    typeCheck: false,
  },
});
