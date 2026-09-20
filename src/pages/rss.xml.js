import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: 'Seasoned Steel',
    description: 'Seasoning, restoring, and cooking with cast iron and carbon steel.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/articles/${p.id.replace(/^\d+-/, '')}/`,
    })),
  });
}
