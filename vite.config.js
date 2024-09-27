import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import utwm from "unplugin-tailwindcss-mangle/vite";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  plugins: [react(), utwm()],
  server: {
    port: 3000,
  },
});
