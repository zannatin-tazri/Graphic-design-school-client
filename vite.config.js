import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // ← allow access from outside the container
    port: 5173        // ← optional, but explicit
  }
})
