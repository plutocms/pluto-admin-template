import { plutoLayer } from "@plutocms/core/layers";

export default defineNuxtConfig({
  extends: [plutoLayer("@plutocms/core")],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      websiteName: "My Pluto",
    },
  },

  // This app has no public pages. The home page opens the admin.
  routeRules: {
    "/": { redirect: "/admin" },
  },

  eslint: false,
});
