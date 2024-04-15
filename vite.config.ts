import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import process from 'process'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    plugins: [svgr(), react(), nodePolyfills()],
  }
})


