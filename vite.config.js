import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' makes every asset path relative, so the same build works at
// https://<username>.github.io/<repo-name>/ AND on a custom domain later,
// with no config change. The site is a single page with #anchor navigation,
// so no router or 404 redirect is needed on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
