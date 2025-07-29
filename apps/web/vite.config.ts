import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: "**/*.svg",
    }),
  ],
});
