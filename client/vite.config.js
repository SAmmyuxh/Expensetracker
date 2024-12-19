import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    react()],
      proxy:{
        '/api':{
          target:'http://localhost:3000/api',
          changeOrigin:true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
})
