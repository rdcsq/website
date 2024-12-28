import typography from '@tailwindcss/typography';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: {
          DEFAULT: 'hsl(var(--color-foreground))',
          highlight: 'hsl(var(--color-foreground-highlight))',
        },
        overlay: {
          DEFAULT: 'hsl(var(--color-overlay))',
          inverted: 'hsl(var(--color-overlay-inverted))',
        }
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
