import solid from 'solid-start/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['@kobalte/core'],
  },
  plugins: [solid({ ssr: true })],
})
