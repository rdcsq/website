// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
  adapter: node({
    mode: 'standalone'
  })
});