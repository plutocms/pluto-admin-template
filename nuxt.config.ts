export default defineNuxtConfig({
  extends: ["@plutocms/core"],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      websiteName: "My Pluto",
    },
  },

  // This app has no public pages. The home page opens the admin.
  routeRules: {
    "/": { redirect: "/admin" },
  },
});
