import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./MainContent": "./src/component/MainContent/component",
      },
      shared: [
        "react",
        "react-dom",
        "react-redux",
        "@reduxjs/toolkit",
        "antd",
      ],
    }),
  ],
  server: {
    port: 3111,
  },
  preview: {
    port: 3111,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
