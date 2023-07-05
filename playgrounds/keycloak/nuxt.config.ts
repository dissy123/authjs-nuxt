// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "../packages/authjs-nuxt/src/module.ts"
    // "@hebilicious/authjs-nuxt"
  ],
  authJs: {
    guestRedirectTo: "/redirected"
  },
  nitro: {
    routeRules: {
      "/": { ssr: true, prerender: true },
      "/private": { ssr: true, prerender: true }
    }
  },
  devtools: {
    enabled: true
  },
  experimental: {
    renderJsonPayloads: true
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    keycloak: {
      clientId: process.env.NUXT_KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.NUXT_KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.NUXT_KEYCLOAK_ISSUER
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  }
})
