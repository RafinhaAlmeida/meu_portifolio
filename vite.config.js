import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acesso externo
    strictPort: true, // Garante que a porta não mude
    allowedHosts: [
      "5173-rafinhaalme-meuportifol-jb994avhsy2.ws-us117.gitpod.io" // Permite o host do Gitpod
    ]
  }
})
