import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/himanshu-portfolio/" : "/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 1573,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 1573,
    strictPort: true,
  },
});
