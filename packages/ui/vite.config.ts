import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig as vitestDefineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default vitestDefineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      include: ["src/**/*.{ts,tsx}"],
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    css: true,
  },
  server: {
    port: 5172,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    copyPublicDir: false,
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: [
              "src/**/*.test.*",
              "src/**/*.spec.*",
              "src/**/*.stories.*",
            ],
          })
          .filter((file) => !/\.stories\.d\.ts$/.test(file))
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
  },
});
