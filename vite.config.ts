import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [vue(), VitePWA({
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "logo.svg"],
    manifest: {
      name: "Pass-Vault",
      short_name: "Pass-Vault",
      description: "Secure Passwords for a Secure Life✨",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  }),],
})
