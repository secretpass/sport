import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    compression({
      algorithms: ["brotliCompress"],
      deleteOriginalAssets: true,
    }),
    tailwindcss(),
    react(),
  ],
  build: {
    rolldownOptions: {
      input: {
        run: "run.html",
        init: "init.html",
        manager: "manager.html",
      },
    },
  },
});
