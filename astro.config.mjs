// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx()],
    adapter: node({
        mode: 'standalone',
    }),
    env: {
        schema: {
            LASTFM_API_KEY: envField.string({
                context: 'server',
                access: 'secret'
            }),
            LASTFM_USER: envField.string({
                context: 'server',
                access: 'secret'
            }),
        },
    },
});
