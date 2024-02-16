import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      extensions: [".vue", ".js", ".scss"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "./dist",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          404: resolve(__dirname, "404.html"),
        },
      },
    },
    base: mode === "development" ? "./" : "/takeyo-projects/",
  };
});
