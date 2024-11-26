import typography from '@tailwindcss/typography';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: {
          DEFAULT: 'var(--color-foreground)',
          highlight: 'var(--color-foreground-highlight)',
        },
        overlay: 'var(--color-overlay)',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
    iconsPlugin({
      collections: getIconCollections(['simple-icons']),
    }),
  ],
};
