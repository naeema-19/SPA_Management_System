import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{server: {
    host: '0.0.0.0',  // Allow external access
    port: 5173        // Use a fixed port
}}
})
