import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        apply: resolve(__dirname, 'pages/apply.html'),
        careerJob: resolve(__dirname, 'pages/career-job.html'),
        explore: resolve(__dirname, 'pages/explore.html'),
        internship: resolve(__dirname, 'pages/internship.html'),
        resource: resolve(__dirname, 'pages/resource.html'),
      },
    },
  },
})
