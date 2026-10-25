import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/himanshu-portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 1573,
    strictPort: true,
    open: "/himanshu-portfolio/",
  },
  preview: {
    port: 1573,
    strictPort: true,
  },
});
