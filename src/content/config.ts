import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    episode: z.number().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
})

export const collections = { articles }
