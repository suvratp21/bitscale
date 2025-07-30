import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      '/api/data': {
        target: 'https://bitscale_backend.suvratp21.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/data/, ''),
        secure: true,
      },
    },
  },
}) 