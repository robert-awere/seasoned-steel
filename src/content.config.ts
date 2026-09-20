import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, 'Meta description must be <= 160 chars'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cluster: z.enum([
      'seasoning', 'cleaning', 'troubleshooting', 'restoration',
      'cooking', 'compare', 'best', 'reviews', 'misc',
    ]),
    keywords: z.array(z.string()).min(1),
    type: z.enum(['article', 'howto', 'faq']).default('article'),
    draft: z.boolean().default(false),
    howToSteps: z.array(z.string()).optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

export const collections = { articles };
