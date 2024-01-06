import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@common": fileURLToPath(new URL("./src/common", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/features/redux", import.meta.url)),
      "@schemas": fileURLToPath(new URL("./src/schemas", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@libs": fileURLToPath(new URL("./src/libs", import.meta.url)),
      "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
      "@container": fileURLToPath(new URL("./src/container", import.meta.url)),
    },
  },
});
