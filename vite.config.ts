import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
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
