import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    cssCodeSplit: false,
    outDir: path.resolve(__dirname, 'lib'),
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true
      }
    },
    lib: {
      formats: ['es', 'umd'],
      entry: path.resolve(__dirname, 'src/entry.ts'),
      name: 'gao-scroll-animate',
      fileName: (format) => `gao-scroll-animate.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
