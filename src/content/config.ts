import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.string().or(z.date()),
        trigger: z.string(),
        approach: z.string(),
        goal: z.string(),
        tags: z.array(z.string()).optional(),
        status: z.enum(['Planning', 'On-going', 'Completed']).default('Completed'),
        heroImage: z.string().optional(),
    }),
});
