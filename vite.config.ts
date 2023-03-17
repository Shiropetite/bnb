import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "vite-plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bnb/",
  plugins: [vue(), vueJsx(), legacy()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/css/variables.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  
});
