import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'npm:vite@^4.3.9'
import vue from 'npm:@vitejs/plugin-vue@^4.2.3'
import vueJsx from 'npm:@vitejs/plugin-vue-jsx'
import { nodePolyfills } from 'npm:vite-plugin-node-polyfills'

import 'npm:vue@^3.3.4'
// https://vitejs.dev/config/
export default defineConfig(()=> {


  return {
    plugins: [vue(), vueJsx(), nodePolyfills()],
    define: {
      __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3111,
        host: "127.0.0.1",
        open: true
    },
  }
})
