import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vue3SvgPlugin from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vue3SvgPlugin()],
  define: {
    'process.env': { ...process.env }
  }
})
