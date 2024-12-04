import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './blog' }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        date: z.date(),
        image: image(),
      }),
  }),
};
