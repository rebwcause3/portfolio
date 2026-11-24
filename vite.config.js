import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// base: './' makes every asset path relative, so the same build works at
// https://<username>.github.io/<repo-name>/ AND on a custom domain later,
// with no config change.
//
// Each entry below is a real static HTML page with its own shareable URL
// (no client-side router), so direct links always work on static hosting.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // never publish source maps
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        talkAiOrAutomation: resolve(__dirname, 'speaking/ai-or-automation/index.html'),
        projectWorkflowDecisionAssistant: resolve(__dirname, 'projects/workflow-decision-assistant/index.html'),
      },
    },
  },
})
