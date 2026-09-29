import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom', 

    setupFiles: './src/setupTests.js',

    globals: true,

    coverage: {
      provider: 'v8',

      reporter: [
        'text',
        'html'
      ],

      include: [
        'src/Components/Banner/Banner.jsx',
        'src/Components/Collapse/Collapse.jsx'
      ],

      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  }
})