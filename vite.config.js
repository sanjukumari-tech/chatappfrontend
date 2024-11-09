import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "https://chatappbackend-1-iqp4.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
