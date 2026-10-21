import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'test' ? [] : [tailwindcss()])],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    testTimeout: 60000,
    // Layout is checked in the browser; jsdom cannot parse Tailwind's modern CSS.
    css: false,
  },
}))
