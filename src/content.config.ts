import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    river: z.enum(['Someșul Cald', 'Doda Pilii', 'Bucovina', 'Courses', 'Veterans', 'Other']),
    photos: z.array(z.string()).default([]),
    facebook: z.string().url().optional(),
    caught: z.string().optional(),
    flies: z.string().optional(),
  }),
});

export const collections = { trips };
