import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.cacheDir",
  plugins: [
    react(),
      federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:3111/assets/remoteEntry.js",
        },
      shared: [
        "react",
        "react-dom",
        "react-redux",
        "antd",
        "@reduxjs/toolkit",
        ],
      }),
  ],
    build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3112,
  },
})
