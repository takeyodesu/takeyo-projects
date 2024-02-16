import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    plugins: [vue()],
    resolve: {
        extensions: [".vue", ".js", ".scss"],
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: "./dist",
    },
    base: mode === "development" ? "./" : "/takeyo-projects/",
});
