import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://A6721jpn.github.io',
  base: '/portfolio',
  integrations: [
    tailwind({
      // Example: Disable default base styles if we want total control, but usually keeping them is fine.
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
