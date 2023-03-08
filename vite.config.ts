import { resolve, parse } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  root: resolve(__dirname, "src"),

  build: {
    outDir: "../dist",
    emptyOutDir: true,

    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (parse(asset.name).name === "externalImage") {
            return "images/src/[name][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      }
    }
  }
});
