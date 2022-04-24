import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//for deploy on github pages
const publicPath = process.env.NODE_ENV === "production" ? "/hero-guild/" : "/";

export default defineConfig({
  base: publicPath,
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"],
  },
});
