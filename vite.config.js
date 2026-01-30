import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api/translate": {
                target: "https://translate.astian.org",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/translate/, "/translate"),
            },
        },
    },
    optimizeDeps: {
        include: ["react-pdf"],
    },
    build: {
        chunkSizeWarningLimit: 5000, // Increase the limit to 1000 kB
    },
});
