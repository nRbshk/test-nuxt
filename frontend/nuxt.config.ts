import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath, URL } from "url";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/styles/styles.css"],
    modules: ['@nuxtjs/tailwindcss'],
    resolve: {
        alias: {
          "@": fileURLToPath(new URL("./", import.meta.url)),
        },
      },
  });