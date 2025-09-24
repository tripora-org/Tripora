import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    watch: {
      usePolling: true   // kann HMR-Probleme bei manchen OS/IDE Konfigurationen lösen
    }
  }
});