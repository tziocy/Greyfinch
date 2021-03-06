import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    open: 'http://localhost:3000'
  },
  test: {
    coverage: {
      all: true,
      exclude: [
        '.eslintrc.js',
        '.prettierrc.js',
        'build/*',
        'vite.config.js',
      ],
    },
    environment: 'jsdom',
    globals: true,
  },
})
