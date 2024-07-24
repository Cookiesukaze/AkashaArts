import { defineConfig } from 'astro/config';
// import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";
// import remarkToc from "remark-toc";
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import sitemap from '@astrojs/sitemap';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // markdown: {
  //   remarkPlugins: [[remarkToc, {
  //     heading: "Contents",
  //     maxDepth: 5
  //   }]],
  //   rehypePlugins: [rehypeHeadingIds, rehypeSlug, [rehypeAutolinkHeadings, {
  //     behavior: 'append'
  //   }]]
  // },
  site: 'https://example.com',
  build: {
    format: "file"
  },
  integrations: [ sitemap(), pagefind(),
    starlight({
     title: 'AkashaArts',
  }),mdx()
  ]
});
