import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This ensures SPA fallback for routes like /product
    fs: {
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      input: "/index.html",
    },
  },
});
