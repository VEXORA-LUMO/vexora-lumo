import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets base path to match your GitHub repository name
  base: '/vexora-lumo/',
})
