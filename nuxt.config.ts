// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "D.E.V. - Dispuut Ebrius Vespertina",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Een hechte vriendengroep voor het leven",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo-dev.svg" }],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/content", "reka-ui/nuxt"],
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2026-03-09",
});
