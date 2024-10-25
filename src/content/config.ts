import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    image: image(),
  }),
});

export const collections = {
  blog: blogCollection,
};
