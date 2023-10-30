import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/dutch-city-finder-v1/",
  server: {
    proxy: {
      '/static': {
        target: 'https://simplemaps.com',
        changeOrigin: true,
      }
    },
  },
  plugins: [react()],
})
