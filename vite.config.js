import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/f8-zoom-day-35/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
