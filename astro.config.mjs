import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/script.js': 'https://cloud.umami.is/script.js',
  },

  output: 'server',
  adapter: vercel()
});