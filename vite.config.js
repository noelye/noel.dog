import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


export default defineConfig({
  root,
  resolve: {
      extensions: ['.js','.mjs']
    },
  build: {
    outDir, 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        send: resolve(root, 'send', 'index.html'),
        resume: resolve(root, 'resume', 'index.html')
      }
    }
  }
})